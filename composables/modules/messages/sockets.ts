import { ref, onMounted, onUnmounted } from "vue";
import { io, Socket } from "socket.io-client";
import { useUser } from "@/composables/auth/user";
import { useGetRoomChats } from '@/composables/modules/messages/fetchRoomMessages';
import { useCustomToast } from '@/composables/core/useCustomToast'
const { showToast } = useCustomToast();

export const useWebSocket = () => {
  const { token } = useUser();
  const messages = ref<any[]>([]);
  const { getRoomChats } = useGetRoomChats();
  const newMessage = ref("");
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const isConnected = ref(false);
  const socket = ref<Socket | null>(null);

  const initializeSocket = () => {
    socket.value = io(baseUrl, {
      auth: {
        token: token.value,
      },
      transports: ["websocket"],
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
    });

    // Connection events
    socket.value.on("connect", () => {
      // console.log("Connected to WebSocket server");
      showToast({
        title: "Success",
        message: "Connection was successful",
        toastType: "success",
        duration: 3000
      });
      console.log('connected')
      isConnected.value = true;
      fetchInitialMessages();
    });

    socket.value.on("disconnect", () => {
      console.log("Disconnected from server");
      showToast({
        title: "Error",
        message: "Disconnected from websocket.",
        toastType: "error",
        duration: 3000
      });
      isConnected.value = false;
    });

    socket.value.on("error", (error) => {
      showToast({
        title: "Error",
        message: "Connection error:",
        toastType: "error",
        duration: 3000
      });
      isConnected.value = false;
    });

 
    socket.value.on("message.new", (message: any) => {
      // console.log("New message receivedssssssss:", message.message);
      if (message && !messages.value.some(msg => msg.id === message?.message?.id)) {
        const newMessage = {
          ...message.message, // Use only the message object
          status: 'received' // Set the status here
        };
        messages.value = [...messages.value, newMessage];
      }
    });

    socket.value.on("messages.update", (updatedMessages: any[]) => {
      console.log("Messages updated:", updatedMessages);
      messages.value = updatedMessages.map(msg => ({
        ...msg,
        status: 'received'
      }));
    });
  };

  const fetchInitialMessages = () => {
    if (!socket.value?.connected) return;

    socket.value.emit("messages.fetch", {}, (response: any) => {
      if (response.status === "success") {
        messages.value = response.data.map((msg: any) => ({
          ...msg,
          status: 'received'
        }));
      } else {
        console.error("Failed to fetch messages:", response);
      }
    });
  };

  const sendMessage = async (payload: {
    recipientId: string;
    recipientType: string;
    content: string;
    room?: string;
    messageType: string;
  }) => {
    if (!socket.value?.connected) {
      console.error("Socket not connected");
      return;
    }

    // Create temporary message
    const tempId = `temp-${Date.now()}-${Math.random().toString(36).substring(7)}`;
    const tempMessage = {
      id: tempId,
      ...payload,
      status: 'sending',
      timestamp: new Date().toISOString(),
    };

    // Add to messages immediately
    messages.value = [...messages.value, tempMessage];

    // Send message
    return new Promise((resolve, reject) => {
      socket.value?.emit("message.new", payload, (response: any) => {
        if (response.status === "success") {
          // Update temp message with actual message data
          messages.value = messages.value.map(msg => 
            msg.id === tempId 
              ? { ...response.data, status: 'sent' }
              : msg
          );

          // Update room chats if needed
          if (payload.room) {
            getRoomChats(response?.data?.room?.id);
          }

          // Emit custom event if needed
          const { $emitter } = useNuxtApp();
          $emitter.emit('messageSent', {
            roomId: response?.data?.room?.id,
            message: response?.data
          });

          resolve(response.data);
        } else {
          // Update temp message to show error
          messages.value = messages.value.map(msg => 
            msg.id === tempId 
              ? { ...msg, status: 'error' }
              : msg
          );
          
          console.error("Failed to send message:", response);
          reject(new Error(response.message || 'Failed to send message'));
        }
      });
    });
  };

  onMounted(() => {
    initializeSocket();
  });

  onUnmounted(() => {
    if (socket.value) {
      socket.value.off("message.new");
      socket.value.off("messages.update");
      socket.value.disconnect();
      socket.value = null;
    }
  });

  return {
    messages,
    newMessage,
    isConnected,
    sendMessage,
    socket: socket.value,
  };
};