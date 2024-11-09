<!-- <template>
    <div class="flex-1 z-10 overflow-y-auto p-4 space-y-3 bg-white">
      <div class="text-center my-3 text-sm text-gray-400">Today</div>
      {{ roomChats }}
      <ChatMessageBubble
        v-for="(msg, index) in sortedRoomChats"
        :key="index"
        :message="msg"
        :isMine="msg.senderId === user.id"
        :status="msg.status"
        :messages="messages"
      />
      <div v-for="message in messages" :key="message.id" class="chat-message flex justify-end items-end">
        <small>
          <span v-if="message.status === 'sending'">Sending...</span>
          <span v-else-if="message.status === 'sent'">Sent</span>
        </small>
      </div>
      
    </div>
  </template>
  
  <script setup lang="ts">  
  import { useUser } from "@/composables/auth/user";
  const { user } = useUser();
  const props = defineProps({
    messages: Array,
    roomChats: Array
  });
  
  // Sort messages by `createdAt` in ascending order
  const sortedRoomChats = computed(() => {
    return [...props.roomChats].sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
  });
  </script>
   -->

   <!-- <template>
    <div class="flex-1 z-10 overflow-y-auto p-4 space-y-3 bg-white">
      <div class="text-center my-3 text-sm text-gray-400">Today</div>
      <ChatMessageBubble
        v-for="(msg, index) in sortedMessages"
        :key="msg.id"
        :message="msg"
        :isMine="msg.senderId === user.id"
        :status="msg.status"
        :messages="messages"
      />
    </div>
  </template>
  
  <script setup lang="ts">  
  import { computed } from 'vue';
  import { useUser } from "@/composables/auth/user";
  
  const { user } = useUser();
  const props = defineProps({
    messages: Array,
    roomChats: Array
  });
  
  // Merge messages and roomChats and sort them by `createdAt`
  const sortedMessages = computed(() => {
    const allMessages = [...props.messages, ...props.roomChats];
    return allMessages.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
  });
  </script>
   -->


   <template>
    <div class="flex-1 z-10 overflow-y-auto p-4 space-y-3 bg-white">
      <div v-for="(msg, index) in sortedMessagesWithHeaders" :key="msg.id || msg.dateHeader">
        <!-- Display date headers -->
        <div v-if="msg.isHeader" class="text-center my-3 text-sm text-gray-400">
          {{ msg.dateHeader }}
        </div>
        
        <!-- Display chat messages -->
        <ChatMessageBubble
          v-else
          :message="msg"
          :isMine="msg.senderId === user.id"
          :status="msg.status"
          :messages="messages"
        />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import moment from 'moment';
  import { computed } from 'vue';
  import { useUser } from "@/composables/auth/user";
  
  const { user } = useUser();
  const props = defineProps({
    messages: Array,
    roomChats: Array
  });
  
  // Merge messages and roomChats, then sort and add date headers
  const sortedMessagesWithHeaders = computed(() => {
    const allMessages = [...props.messages, ...props.roomChats];
    const sorted = allMessages.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
  
    const messagesWithHeaders = [];
    let lastDateHeader = '';
  
    sorted.forEach((msg) => {
      const messageDate = formatMessageDate(msg.createdAt);
  
      // Add a date header if it differs from the last one
      if (messageDate !== lastDateHeader) {
        messagesWithHeaders.push({ isHeader: true, dateHeader: messageDate });
        lastDateHeader = messageDate;
      }
      messagesWithHeaders.push(msg);
    });
  
    return messagesWithHeaders;
  });
  
  // Helper to format dates into "Today", "Yesterday", or a full date
  const formatMessageDate = (date: string): string => {
    const today = moment().startOf('day');
    const messageDate = moment(date);
  
    if (messageDate.isSame(today, 'day')) {
      return 'Today';
    } else if (messageDate.isSame(today.clone().subtract(1, 'days'), 'day')) {
      return 'Yesterday';
    } else {
      return messageDate.format('MMMM D, YYYY');
    }
  };
  </script>
  