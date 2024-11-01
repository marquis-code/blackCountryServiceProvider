<template>
    <div class="sticky top-0  p-4 bg-white">

        <div class="flex items-center space-x-4 p-2 ">
     
            <div class="relative flex items-center bg-[#EAEAEA] rounded-lg px-3 py-2 w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.386a1 1 0 11-1.414 1.415l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                type="text"
                class="bg-[#EAEAEA] text-gray-600 text-sm ml-2 py-1.5 focus:outline-none w-full"
                placeholder="Search"
              />
            </div>
        

            <button
              class="bg-[#EAEAEA] p-2 rounded-lg hover:bg-gray-300 transition-colors"
            >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 3.33398V16.6673" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3.33325 10H16.6666" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                
            </button>
        

            <button
            @click="toggleDropdown"
              class="bg-[#EAEAEA] p-2 rounded-lg  transition-colors"
            >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.8333 3.33398H2.5" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.16667 15.834H2.5" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17.5001 15.834H14.1667" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17.5001 9.58398H9.16675" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17.4999 3.33398H15.8333" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.16667 9.58398H2.5" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.0833 1.66602C12.4715 1.66602 12.6657 1.66602 12.8188 1.72945C13.023 1.81402 13.1853 1.97626 13.2698 2.18045C13.3333 2.33359 13.3333 2.52773 13.3333 2.91602V3.74935C13.3333 4.13763 13.3333 4.33177 13.2698 4.48492C13.1853 4.68911 13.023 4.85134 12.8188 4.93592C12.6657 4.99935 12.4715 4.99935 12.0833 4.99935C11.695 4.99935 11.5008 4.99935 11.3477 4.93592C11.1435 4.85134 10.9813 4.68911 10.8967 4.48492C10.8333 4.33177 10.8333 4.13763 10.8333 3.74935V2.91602C10.8333 2.52773 10.8333 2.33359 10.8967 2.18045C10.9813 1.97626 11.1435 1.81402 11.3477 1.72945C11.5008 1.66602 11.695 1.66602 12.0833 1.66602Z" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.4167 14.166C10.805 14.166 10.9992 14.166 11.1523 14.2294C11.3565 14.314 11.5187 14.4763 11.6033 14.6804C11.6667 14.8336 11.6667 15.0278 11.6667 15.416V16.2493C11.6667 16.6376 11.6667 16.8318 11.6033 16.9849C11.5187 17.1891 11.3565 17.3513 11.1523 17.4359C10.9992 17.4993 10.805 17.4993 10.4167 17.4993C10.0285 17.4993 9.83433 17.4993 9.68116 17.4359C9.477 17.3513 9.31475 17.1891 9.23017 16.9849C9.16675 16.8318 9.16675 16.6376 9.16675 16.2493V15.416C9.16675 15.0278 9.16675 14.8336 9.23017 14.6804C9.31475 14.4763 9.477 14.314 9.68116 14.2294C9.83433 14.166 10.0285 14.166 10.4167 14.166Z" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.91675 7.91602C8.30503 7.91602 8.49917 7.91602 8.65233 7.97945C8.8565 8.06402 9.01875 8.22626 9.10333 8.43043C9.16675 8.5836 9.16675 8.77777 9.16675 9.16602V9.99935C9.16675 10.3876 9.16675 10.5818 9.10333 10.7349C9.01875 10.9391 8.8565 11.1013 8.65233 11.1859C8.49917 11.2493 8.30503 11.2493 7.91675 11.2493C7.52846 11.2493 7.33432 11.2493 7.18118 11.1859C6.97699 11.1013 6.81476 10.9391 6.73018 10.7349C6.66675 10.5818 6.66675 10.3876 6.66675 9.99935V9.16602C6.66675 8.77777 6.66675 8.5836 6.73018 8.43043C6.81476 8.22626 6.97699 8.06402 7.18118 7.97945C7.33432 7.91602 7.52846 7.91602 7.91675 7.91602Z" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                
            </button>

            <div v-if="showDropdown" class="fixed inset-0 z-50" @click="toggleDropdown">
              <!-- Dark overlay -->
              <!-- <div class="absolute inset-0 bg-black opacity-50" @click="toggleDropdown"></div> -->
        
              <!-- Dropdown -->
              <div class="absolute left-32 top-20 w-60 bg-white rounded-lg border p-4 z-20">
                <!-- User List -->
                <ul>
                  <li
                    v-for="user in users"
                    :key="user.participant.id"
                    class="flex items-center justify-between mb-2 border-b last:border-b-0 border-gray-100 cursor-pointer "
                  >
                    <div class="flex items-center">
                      <img
                        v-if="user.profilePicture"
                        :src="user.profilePicture"
                        class="w-10 h-10 rounded-full mr-3"
                        alt=""
                      />
                      <img
                        v-else
                        src="@/assets/icons/user-avatar.svg"
                        class="w-6 h-6 border shadow border-gray-500 rounded-full mr-3"
                        alt=""
                      />
                      <div>
                        <p class="font-semibold">{{ user.participant.firstName }} {{ user.participant.lastName }}</p>
                        <p class="text-sm text-gray-500">{{ user.role }}</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
  
      <ul v-if="users.length && !loading">
        <li
          v-for="user in users"
          :key="user.participant.id"
          @click="selectUser(user)"
          class="flex items-center justify-between p-3 mb-2 border-b last:border-b-0 border-gray-100 cursor-pointer hover:bg-gray-100"
        >
   
          <div class="flex items-center w-full">
            <img v-if="user.profilePicture" :src="user.profilePicture" class="w-10 h-10 rounded-full mr-3" alt="" />
            <img v-else src="@/assets/icons/user-avatar.svg" class="w-10 h-10 border shadow border-gray-500 rounded-full mr-3" alt="" />
            <div class="w-full space-y-1">
             <div class='flex justify-between items-center w-full'>
              <p class="font-">{{ user?.participant?.firstName }} {{ user?.participant?.lastName }}</p>
              <p class="text-sm text-gray-400">{{ getDate(user?.lastMessage?.createdAt) }}</p>
             </div>
             <div class='flex justify-between items-center w-full'>
              <p class="text-sm text-[#667185]">{{ user?.lastMessage?.content }}</p>
              <svg v-if="user?.lastMessage?.recievedAt === null || user?.lastMessage?.readAt === null" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="5" r="4" fill="#099137"/>
                </svg>
             </div>
            </div>
          </div>
        </li>
      </ul>
      <section v-else-if="loading && !users.length">
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
  
  function selectUser(user) {
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
  








  