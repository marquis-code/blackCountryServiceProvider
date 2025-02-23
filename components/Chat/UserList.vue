<template>
    <div class="p-4 bg-white">  
      <ul class="w-full" v-if="users?.length && !loading">
        
        <!-- <li
          v-for="user in users"
          :key="user?.participant?.id"
          :class="{'bg-gray-200' : user.id === selectedUserChat.id}"
          @click="selectUser(user)"
          class="flex items-center cursor-pointer rounded justify-between p-3 border-b hover:bg-gray-100 last:border-b-0 border-gray-100 cursor-pointer"
        > -->
        <li
          v-for="user in users"
          :class="[!selectedUserChat?.id ? (user?.participant.id === route?.query?.userId ? 'bg-gray-200' : '') : (user.id === selectedUserChat.id ? 'bg-gray-200' : '') ]"
          :key="user?.participant?.id"
          @click="selectUser(user)"
          class="flex items-center cursor-pointer rounded justify-between p-3 border-b hover:bg-gray-100 last:border-b-0 border-gray-100 cursor-pointer"
        >
        <!-- {{ user.id }} -->
   
          <div class="flex items-center w-full">
            <img v-if="user?.participant?.profilePicture" :src="user?.participant?.profilePicture" class="w-10 h-10 rounded-full mr-3" alt="" />
            <!-- <img v-else src="@/assets/icons/user-avatar.svg" class="w-10 h-10 border shadow border-gray-500 rounded-full mr-3" alt="" /> -->
            <svg v-else class="h-16 w-16" viewBox="0 0 111 106" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M86.162 83.0406C90.5989 78.8716 94.1335 73.8369 96.5473 68.2476C98.9612 62.6584 100.203 56.6334 100.196 50.5452C100.196 25.8886 80.2096 5.90234 55.553 5.90234C30.8964 5.90234 10.9102 25.8886 10.9102 50.5452C10.9031 56.6334 12.1449 62.6584 14.5588 68.2476C16.9726 73.8369 20.5072 78.8716 24.9441 83.0406C33.2176 90.8561 44.1718 95.2034 55.553 95.1881C66.9343 95.2034 77.8885 90.8561 86.162 83.0406ZM28.7444 77.1569C31.9591 73.1351 36.0384 69.8892 40.6796 67.6602C45.3207 65.4312 50.4044 64.2763 55.553 64.2815C60.7017 64.2763 65.7854 65.4312 70.4265 67.6602C75.0676 69.8892 79.147 73.1351 82.3616 77.1569C78.8544 80.6995 74.6787 83.5104 70.0767 85.4267C65.4747 87.343 60.5381 88.3264 55.553 88.3199C50.568 88.3264 45.6313 87.343 41.0294 85.4267C36.4274 83.5104 32.2516 80.6995 28.7444 77.1569ZM72.7234 36.8089C72.7234 41.3628 70.9144 45.7301 67.6943 48.9502C64.4742 52.1703 60.1069 53.9793 55.553 53.9793C50.9992 53.9793 46.6318 52.1703 43.4118 48.9502C40.1917 45.7301 38.3827 41.3628 38.3827 36.8089C38.3827 32.2551 40.1917 27.8877 43.4118 24.6677C46.6318 21.4476 50.9992 19.6386 55.553 19.6386C60.1069 19.6386 64.4742 21.4476 67.6943 24.6677C70.9144 27.8877 72.7234 32.2551 72.7234 36.8089Z" fill="#D6D0CC"/>
            <path d="M105.5 50C105.5 77.6142 83.1142 100 55.5 100C27.8858 100 5.5 77.6142 5.5 50C5.5 22.3858 27.8858 0 55.5 0C83.1142 0 105.5 22.3858 105.5 50ZM11.3186 50C11.3186 74.4007 31.0993 94.1814 55.5 94.1814C79.9007 94.1814 99.6814 74.4007 99.6814 50C99.6814 25.5993 79.9007 5.81863 55.5 5.81863C31.0993 5.81863 11.3186 25.5993 11.3186 50Z" fill="#F0F2F5"/>
            </svg>

            <div class="w-full space-y-1 pl-3">
             <div class='flex justify-between items-center w-full'>
              <p class="font-">{{ user?.participant?.firstName }} {{ user?.participant?.lastName }}</p>
              <p class="text-sm text-gray-400">{{ getDate(user?.lastMessage?.createdAt) }}</p>
             </div>
             <div class='flex justify-between items-center w-full'>
              <p class="text-sm text-[#667185]">{{ user?.lastMessage?.content }}</p>
              <!-- <svg v-if="user?.lastMessage?.recievedAt === null || user?.lastMessage?.readAt === null" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="5" r="4" fill="#099137"/>
                </svg> -->
                <svg v-if="user?.lastMessage?.readAt === null" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="5" r="4" fill="#099137"/>
                </svg>
             </div>
            </div>
          </div>
        </li>
      </ul>
      <section v-else-if="loading && !users?.length">
        <div class="rounded-md p-4 w-full mx-auto">
          <div class="animate-pulse flex space-x-4">
            <div class="flex-1 space-y-6 py-1">
              <div class="h-44 bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
       </section>
      <section v-else class="flex flex-col justify-between items-center space-y-2 mt-10">
             <svg width="152" height="124" viewBox="0 0 152 124" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="76" cy="58" r="52" fill="#EAEAEA"/>
            <circle cx="21" cy="25" r="5" fill="#BDBDBD"/>
            <circle cx="18" cy="109" r="7" fill="#BDBDBD"/>
            <circle cx="145" cy="41" r="7" fill="#BDBDBD"/>
            <circle cx="134" cy="14" r="4" fill="#BDBDBD"/>
            <g filter="url(#filter0_b_6853_118795)">
            <rect x="52" y="34" width="48" height="48" rx="24" fill="#9D9D9D"/>
            <path d="M85.9598 56.9707C86.0134 57.8009 86.0134 58.6607 85.9598 59.4909C85.6856 63.7332 82.3536 67.1125 78.1706 67.3905C76.7435 67.4854 75.2536 67.4852 73.8294 67.3905C73.339 67.3579 72.8044 67.2409 72.344 67.0513C71.8318 66.8403 71.5756 66.7348 71.4454 66.7508C71.3153 66.7668 71.1264 66.9061 70.7487 67.1846C70.0827 67.6757 69.2437 68.0285 67.9994 67.9982C67.3703 67.9829 67.0557 67.9752 66.9148 67.7351C66.774 67.495 66.9494 67.1626 67.3002 66.4978C67.7867 65.5758 68.095 64.5203 67.6279 63.6746C66.8234 62.4666 66.1401 61.036 66.0402 59.4909C65.9866 58.6607 65.9866 57.8009 66.0402 56.9707C66.3144 52.7284 69.6464 49.3491 73.8294 49.0711C75.0318 48.9911 75.2812 48.9786 76.5 49.0337" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M72.5 61H79.5M72.5 56H76" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M86 51.5C86 53.433 84.433 55 82.5 55C80.567 55 79 53.433 79 51.5C79 49.567 80.567 48 82.5 48C84.433 48 86 49.567 86 51.5Z" stroke="white" stroke-width="1.5"/>
            </g>
            <defs>
            <filter id="filter0_b_6853_118795" x="44" y="26" width="64" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="4"/>
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_6853_118795"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_6853_118795" result="shape"/>
            </filter>
            </defs>
            </svg>
            <h2 class="text-[#1D2739]">No conversations found</h2>
            <p class="text-[#667185]">You have not contacted anyone</p>
      </section>
    </div>
  </template>
  
  <script setup lang="ts">
  import moment from "moment";
  const props = defineProps({
    users: Array,
    loading: Boolean
  });
  
  const emit = defineEmits(['selectUser']);

  const selectedUserChat = ref({})
  
  function selectUser(user: any) {
    selectedUserChat.value = user
    emit('selectUser', user);
  }

//   // Mock users
// const users = [
//   { participant: { id: 1, firstName: 'Jeffery', lastName: 'McKenzie' }, role: 'Super admin', profilePicture: null },
//   { participant: { id: 2, firstName: 'Susie', lastName: 'Roob' }, role: 'Property manager', profilePicture: null },
//   // Add other users here...
// ];
  
  function getDate(date: any) {
    // Mock date for simplicity
    return moment(date).format('DD MMM');
  }

  // State for dropdown visibility
const showDropdown = ref(false);

function toggleDropdown() {
  showDropdown.value = !showDropdown.value;
}
  </script>
  
  <style scoped>
  /* Add custom styles here */
  </style>
  








  