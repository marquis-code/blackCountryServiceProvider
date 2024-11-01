<template>
    <main>
      <div class="h-screen flex">
        <!-- Chat User List with custom scroll -->
        <div class="w-1/4 h-full sticky top-0 border-r overflow-y-auto custom-scrollbar">
          <MessagesUserList
            :loading="loadingActiveChats"
            :users="activeChatsList"
            @selectUser="selectUser"
          />
        </div>
  
        <div class="flex-1 flex flex-col">
          <!-- Chat Header (Fixed) -->
          <div class="sticky top-0 z-40 bg-white">
            <MessagesHeader :selectedUser="selectedUser || roomChatsList" />
          </div>
          <!-- {{roomChatsList}} -->
  
          <section
            v-if="!roomChatsList.length && !loadingActiveChats"
           class="flex flex-col justify-between mt-32 items-center space-y-2"
         >
           <svg
             width="152"
             height="124"
             viewBox="0 0 152 124"
             fill="none"
             xmlns="http://www.w3.org/2000/svg"
           >
             <circle cx="76" cy="58" r="52" fill="#EAEAEA" />
             <circle cx="21" cy="25" r="5" fill="#BDBDBD" />
             <circle cx="18" cy="109" r="7" fill="#BDBDBD" />
             <circle cx="145" cy="41" r="7" fill="#BDBDBD" />
             <circle cx="134" cy="14" r="4" fill="#BDBDBD" />
             <g filter="url(#filter0_b_6853_118795)">
               <rect
                 x="52"
                 y="34"
                 width="48"
                 height="48"
                 rx="24"
                 fill="#9D9D9D"
               />
               <path
                 d="M85.9598 56.9707C86.0134 57.8009 86.0134 58.6607 85.9598 59.4909C85.6856 63.7332 82.3536 67.1125 78.1706 67.3905C76.7435 67.4854 75.2536 67.4852 73.8294 67.3905C73.339 67.3579 72.8044 67.2409 72.344 67.0513C71.8318 66.8403 71.5756 66.7348 71.4454 66.7508C71.3153 66.7668 71.1264 66.9061 70.7487 67.1846C70.0827 67.6757 69.2437 68.0285 67.9994 67.9982C67.3703 67.9829 67.0557 67.9752 66.9148 67.7351C66.774 67.495 66.9494 67.1626 67.3002 66.4978C67.7867 65.5758 68.095 64.5203 67.6279 63.6746C66.8234 62.4666 66.1401 61.036 66.0402 59.4909C65.9866 58.6607 65.9866 57.8009 66.0402 56.9707C66.3144 52.7284 69.6464 49.3491 73.8294 49.0711C75.0318 48.9911 75.2812 48.9786 76.5 49.0337"
                 stroke="white"
                 stroke-width="2"
                 stroke-linecap="round"
                 stroke-linejoin="round"
               />
               <path
                 d="M72.5 61H79.5M72.5 56H76"
                 stroke="white"
                 stroke-width="1.5"
                 stroke-linecap="round"
                 stroke-linejoin="round"
               />
               <path
                 d="M86 51.5C86 53.433 84.433 55 82.5 55C80.567 55 79 53.433 79 51.5C79 49.567 80.567 48 82.5 48C84.433 48 86 49.567 86 51.5Z"
                 stroke="white"
                 stroke-width="1.5"
               />
             </g>
             <defs>
               <filter
                 id="filter0_b_6853_118795"
                 x="44"
                 y="26"
                 width="64"
                 height="64"
                 filterUnits="userSpaceOnUse"
                 color-interpolation-filters="sRGB"
               >
                 <feFlood flood-opacity="0" result="BackgroundImageFix" />
                 <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
                 <feComposite
                   in2="SourceAlpha"
                   operator="in"
                   result="effect1_backgroundBlur_6853_118795"
                 />
                 <feBlend
                   mode="normal"
                   in="SourceGraphic"
                   in2="effect1_backgroundBlur_6853_118795"
                   result="shape"
                 />
               </filter>
             </defs>
           </svg>
           <h2 class="text-[#1D2739]">No conversations found</h2>
           <p class="text-[#667185]">You have not contacted anyone</p>
            </section>
  
          <!-- Chat Window and Message Input -->
          <div class="flex flex-col h-full">
            <!-- Chat Window with custom scroll -->
            <div class="flex-1 z-10 overflow-y-auto px-4 custom-scrollbar border">
              <MessagesWindow
                class="z-1-0"
                :roomChats="roomChatsList"
                :messages="messages"
              />
              <!-- <p v-if="loadingRoomChats" class="flex justify-end items-end">Sending...</p> -->
              <!-- <section v-else>
                <div class="rounded-md p-4 w-full mx-auto mt-10">
                  <div class="animate-pulse flex space-x-4">
                    <div class="flex-1 space-y-6 py-1">
                      <div class="h-32 bg-slate-200 rounded"></div>
                      <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                          <div class="h-32 w-full bg-slate-200 rounded col-span-2"></div>
                          <div class="h-32 w-full bg-slate-200 rounded col-span-1"></div>
                        </div>
                        <div class="h-32 w-full bg-slate-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </section> -->
            </div>
  
            <!-- Chat Message Input (Fixed at the bottom) -->
            <div class="bg-gray-100 border-t border-gray-300 sticky bottom-0 z-10">
              <MessagesMessageInput
                v-model="newMessage"
                @sendMessage="sendMessageToUser"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  </template>
  
  <script setup lang="ts">
  import { useGetActiveChats } from "@/composables/modules/messages/fetchActiveChats";
  import { useGetRoomChats } from "@/composables/modules/messages/fetchRoomMessages";
  import { useWebSocket } from "@/composables/modules/messages/sockets";
  import { ref, watch } from 'vue';
  import { useNuxtApp } from '#app';
  
  const { loadingActiveChats, activeChatsList } = useGetActiveChats();
  const { getRoomChats, loadingRoomChats, roomChatsList } = useGetRoomChats();
  const { messages, newMessage, connectWebSocket, sendMessage } = useWebSocket();
  
  // Connect to WebSocket when the component is mounted
  connectWebSocket();
  const route = useRoute();
  
  const selectedUser = ref(null);
  
  watch(selectedUser, (newVal: any) => {
    if (newVal) {
      getRoomChats(newVal.id);
    }
  });

  definePageMeta({
  layout: "dashboard"
})

  
  const { $emitter } = useNuxtApp();
  
  // // Listen for the 'customEvent' globally
  // $emitter.on('customEvent', (payload: any) => {
  //   console.log(payload.response)
  //   getRoomChats(payload.data);
  //   // console.log('Received event:', payload);
  // });
  

  if ($emitter && typeof $emitter.on === 'function') {
  // Listen for the 'customEvent' globally
  $emitter.on('customEvent', (payload: any) => {
    console.log(payload.response);
    getRoomChats(payload.data);
  });
} else {
  console.error('Emitter is undefined or does not have an "on" method');
}

  const selectUser = (user: any) => {
    selectedUser.value = user;
  };
  
  
  
  const sendMessageToUser = (message: string) => {
    const socketPayload = {
      content: message,
      recipientId: '81c0810f-d63a-44d4-bb96-eded6aca4cb4',
      recipientType: 'TENANT',
      messageType: 'private',
    };
    sendMessage(socketPayload);
  };
  </script>
  
  <style scoped>
  /* Custom Scrollbar for ChatWindow and ChatUserList */
  .custom-scrollbar::-webkit-scrollbar {
    width: 8px; /* Set width of the custom scrollbar */
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: #6b7280; /* Set custom thumb color */
    border-radius: 10px; /* Round the scrollbar edges */
  }
  
  .custom-scrollbar::-webkit-scrollbar-track {
    background-color: #f1f1f1; /* Set custom track color */
  }
  
  /* Hide the default scrollbar for Firefox */
  .custom-scrollbar {
    scrollbar-width: thin; /* Thin scrollbar for Firefox */
    scrollbar-color: #6b7280 #f1f1f1; /* Set scrollbar colors for Firefox */
  }
  
  /* Optional: Hide the scrollbar in hover state and show custom scrollbar */
  .custom-scrollbar:hover::-webkit-scrollbar-thumb {
    background-color: #4b5563; /* Darker color on hover */
  }
  
  /* Sticky elements for header and footer */
  .sticky {
    position: sticky;
  }
  </style>
  