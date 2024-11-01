import { ref, onMounted, onBeforeUnmount } from "vue";
import { io } from "socket.io-client";
import { useUser } from "@/composables/auth/user";
import { useGetRoomChats } from '@/composables/modules/messages/fetchRoomMessages'

export const useWebSocket = () => {
  const { token } = useUser();
  const messages = ref([]) as any;
  const { getRoomChats, roomChatsList } = useGetRoomChats()
  const newMessage = ref("");
  const baseUrl = "https://tracman-8jhi.onrender.com";
  const socketUrl = `${baseUrl}`;
  const isConnected = ref(false);

  let socket: any;

  const connectWebSocket = () => {
    onMounted(() => {
      socket = io(socketUrl, {
        query: {
          token: token.value,
        },
        transports: ["websocket"],
      });

      socket.on("message.new", (message: any) => {
        messages.value.push(message);
      });

      // Listen for updated message list after sending a new message or receiving one
      socket.on("messages.update", (updatedMessages: any) => {
        messages.value = updatedMessages;
      });

      socket.on("disconnect", () => {
        isConnected.value = false;
        console.log("Disconnected from server");
      });

      socket.on("error", (error: any) => {
        console.log(error, "error occured");
        console.log("Something went wrong");
      });

      socket.on("connect", () => {
        isConnected.value = true;
        console.log("Connected to WebSocket server");
      });

      // Fetch all messages on initial connection
      socket.emit("messages.fetch", {}, (response: any) => {
        if (response.status === "success") {
          messages.value = response.data;
        } else {
          console.log("Failed to fetch messages:", response);
        }
      });
    });

    onBeforeUnmount(() => {
      if (socket) {
        socket.off("message.new");
        socket.off("messages.update"); // Clean up the listener
        socket.close();
      }
    });
  };

  function sendMessage(payload: any) {
    const message = {
      recipientId: payload.recipientId,
      recipientType: payload.recipientType,
      content: payload.content,
      room: payload.room,
      messageType: payload.messageType,
    };

     // Optimistically add the message to the messages array with status 'sending'
  const temporaryMessageId = Math.random().toString(36).substring(7); // Create a temporary ID for the message
  const tempMessage = {
    ...message,
    id: temporaryMessageId,
    status: "sending", // Status to show it’s being sent
  };

  messages.value.push(tempMessage); // Add the message optimistically

    // Emit the message to the server
    socket.emit("message.new", message, (response: any) => {
      // If the response from the WebSocket server indicates success, push the message to the messages array
      if (response.status === "success") {
        const index = messages.value.findIndex((msg: any) => msg.id === temporaryMessageId);
        if (index !== -1) {
          // Replace the temporary message with the confirmed message data
          messages.value[index] = {
            ...response.data,
            status: "sent", // Update the status to 'sent'
          };
        }

        messages.value.push({
          ...response.data,
          status: "sent",
        });

        getRoomChats(response?.data?.room?.id)

        const { $emitter } = useNuxtApp();
        $emitter.emit('customEvent', { data: response?.data?.room?.id, response: response?.data });

        // const nuxtApp = useNuxtApp(); // Access the nuxtApp to use the global event emitter
        // nuxtApp.$emitter.emit('messageSent', response.data);

        socket.emit("messages.fetch", {}, (fetchResponse: any) => {
          if (fetchResponse.status === "success") {
            messages.value = fetchResponse.data; // Update the messages list
          } else {
            console.log("Failed to update messages:", fetchResponse);
          }
        });
      } else {
        console.log("Message failed to send:", response);

        const index = messages.value.findIndex((msg: any) => msg.id === temporaryMessageId);
        if (index !== -1) {
          messages.value[index].status = "error"; // Update the status to 'error'
        }
        console.log("Message failed to send:", response);

        // Handle failure case, if necessary (e.g., notify user, retry, etc.)
        messages.value.push({
          ...message,
          status: "error", // Set status as 'error' if message failed to send
        });
      }
    });

    // Clear the input after attempting to send the message
    newMessage.value = "";
  }

  return {
    messages,
    newMessage,
    connectWebSocket,
    isConnected,
    sendMessage,
  };
};
