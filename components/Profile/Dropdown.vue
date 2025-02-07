<template>
    <div class="relative">
      <button
        type="button"
        @click="toggleDropdown"
        class="flex cursor-pointer items-center space-x-1"
      >
        <img
          v-if="profileObj.profilePicture"
          :src="profileObj.profilePicture"
          class="h-10 w-10 rounded-full"
        />
        <svg
          v-else
          width="40"
          height="40"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M38.9271 39.7854C40.9459 37.8885 42.5541 35.5977 43.6524 33.0546C44.7507 30.5115 45.3157 27.7701 45.3125 25C45.3125 13.7812 36.2188 4.6875 25 4.6875C13.7813 4.6875 4.68751 13.7812 4.68751 25C4.68431 27.7701 5.24932 30.5115 6.34762 33.0546C7.44592 35.5977 9.05416 37.8885 11.0729 39.7854C14.8374 43.3414 19.8216 45.3195 25 45.3125C30.1785 45.3195 35.1626 43.3414 38.9271 39.7854ZM12.8021 37.1083C14.2648 35.2784 16.1209 33.8015 18.2326 32.7873C20.3443 31.7731 22.6574 31.2477 25 31.25C27.3427 31.2477 29.6557 31.7731 31.7674 32.7873C33.8792 33.8015 35.7353 35.2784 37.1979 37.1083C35.6021 38.7202 33.7022 39.9992 31.6083 40.8711C29.5144 41.743 27.2682 42.1904 25 42.1875C22.7318 42.1904 20.4856 41.743 18.3917 40.8711C16.2978 39.9992 14.3979 38.7202 12.8021 37.1083ZM32.8125 18.75C32.8125 20.822 31.9894 22.8091 30.5243 24.2743C29.0592 25.7394 27.072 26.5625 25 26.5625C22.928 26.5625 20.9409 25.7394 19.4757 24.2743C18.0106 22.8091 17.1875 20.822 17.1875 18.75C17.1875 16.678 18.0106 14.6909 19.4757 13.2257C20.9409 11.7606 22.928 10.9375 25 10.9375C27.072 10.9375 29.0592 11.7606 30.5243 13.2257C31.9894 14.6909 32.8125 16.678 32.8125 18.75Z"
            fill="#D6D0CC"
          />
        </svg>
        <span class="font-semibold"
          >{{ user?.firstName }} {{ user?.lastName }}</span
        >
        <button @click="clickme">
          <svg
            class="transform transition-transform duration-200"
            :class="{ 'rotate-180': openDropdown }"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 7.50004C15 7.50004 11.3176 12.5 10 12.5C8.68233 12.5 5 7.5 5 7.5"
              stroke="#EBE5E0"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg> 
        </button>
      </button>
  
      <!-- Overlay -->
      <div
        v-if="openDropdown"
        class="fixed inset-0 bg-black bg-opacity-50 z-40"
        @click="closeDropdown"
      ></div>
  
      <!-- Dropdown Menu -->
      <div ref="target" v-if="openDropdown" class="absolute right-0 mt-2 w-56 bg-white divide-y-[0.5px] divide-gray-300 rounded-lg shadow-lg py-2 z-50">
      <NuxtLink
        to="/dashboard/profile"
        class="flex items-center px-4 py-3 text-[#1D2739] space-x-3"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.1666 2.5H5.83329C3.53211 2.5 1.66663 4.36548 1.66663 6.66667V13.3333C1.66663 15.6345 3.53211 17.5 5.83329 17.5H14.1666C16.4678 17.5 18.3333 15.6345 18.3333 13.3333V6.66667C18.3333 4.36548 16.4678 2.5 14.1666 2.5Z"
            stroke="#326543"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
          <path
            d="M4.16663 13.3337C5.17355 11.1827 8.92679 11.0412 9.99996 13.3337"
            stroke="#326543"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.74996 7.49967C8.74996 8.42017 8.00377 9.16634 7.08329 9.16634C6.16282 9.16634 5.41663 8.42017 5.41663 7.49967C5.41663 6.5792 6.16282 5.83301 7.08329 5.83301C8.00377 5.83301 8.74996 6.5792 8.74996 7.49967Z"
            stroke="#326543"
            stroke-width="1.5"
          />
          <path
            d="M11.6666 7.5H15"
            stroke="#326543"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M11.6666 10.417H14.1666"
            stroke="#326543"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
        <span>Profile</span>
      </NuxtLink>

      <NuxtLink
        to="/dashboard/profile/contact-us"
        class="flex items-center px-4 py-3 text-[#1D2739]  space-x-3"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.75 8.33366C3.75 5.19096 3.75 3.61962 4.72631 2.6433C5.70262 1.66699 7.27397 1.66699 10.4167 1.66699H11.6667C14.8093 1.66699 16.3808 1.66699 17.357 2.6433C18.3333 3.61962 18.3333 5.19096 18.3333 8.33366V11.667C18.3333 14.8097 18.3333 16.3811 17.357 17.3573C16.3808 18.3337 14.8093 18.3337 11.6667 18.3337H10.4167C7.27397 18.3337 5.70262 18.3337 4.72631 17.3573C3.75 16.3811 3.75 14.8097 3.75 11.667V8.33366Z"
            stroke="#326543"
            stroke-width="1.5"
          />
          <path
            d="M3.74996 5H1.66663M3.74996 10H1.66663M3.74996 15H1.66663"
            stroke="#326543"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.7289 7.07774C12.7289 7.99819 11.9828 8.7444 11.0623 8.7444C10.1419 8.7444 9.39575 7.99819 9.39575 7.07774C9.39575 6.1573 10.1419 5.41113 11.0623 5.41113C11.9828 5.41113 12.7289 6.1573 12.7289 7.07774Z"
            stroke="#326543"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.76647 13.097C8.64846 11.7393 10.049 11.2304 11.0624 11.2314C12.0758 11.2325 13.4353 11.7393 14.3172 13.097C14.3743 13.1849 14.39 13.2929 14.3385 13.3842C14.1323 13.7499 13.4919 14.4757 13.0293 14.5249C12.4979 14.5814 11.1075 14.5894 11.0635 14.5896C11.0193 14.5894 9.58612 14.5814 9.05437 14.5249C8.59187 14.4757 7.95146 13.7499 7.7452 13.3842C7.69374 13.2929 7.70945 13.1849 7.76647 13.097Z"
            stroke="#326543"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span>Contact us</span>
      </NuxtLink>

      <NuxtLink
        to="/dashboard/profile/emergency-contact"
        class="flex items-center px-4 py-3 text-[#1D2739]  space-x-3"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.75 8.33366C3.75 5.19096 3.75 3.61962 4.72631 2.6433C5.70262 1.66699 7.27397 1.66699 10.4167 1.66699H11.6667C14.8093 1.66699 16.3808 1.66699 17.357 2.6433C18.3333 3.61962 18.3333 5.19096 18.3333 8.33366V11.667C18.3333 14.8097 18.3333 16.3811 17.357 17.3573C16.3808 18.3337 14.8093 18.3337 11.6667 18.3337H10.4167C7.27397 18.3337 5.70262 18.3337 4.72631 17.3573C3.75 16.3811 3.75 14.8097 3.75 11.667V8.33366Z"
            stroke="#326543"
            stroke-width="1.5"
          />
          <path
            d="M3.74996 5H1.66663M3.74996 10H1.66663M3.74996 15H1.66663"
            stroke="#326543"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.7289 7.07774C12.7289 7.99819 11.9828 8.7444 11.0623 8.7444C10.1419 8.7444 9.39575 7.99819 9.39575 7.07774C9.39575 6.1573 10.1419 5.41113 11.0623 5.41113C11.9828 5.41113 12.7289 6.1573 12.7289 7.07774Z"
            stroke="#326543"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.76647 13.097C8.64846 11.7393 10.049 11.2304 11.0624 11.2314C12.0758 11.2325 13.4353 11.7393 14.3172 13.097C14.3743 13.1849 14.39 13.2929 14.3385 13.3842C14.1323 13.7499 13.4919 14.4757 13.0293 14.5249C12.4979 14.5814 11.1075 14.5894 11.0635 14.5896C11.0193 14.5894 9.58612 14.5814 9.05437 14.5249C8.59187 14.4757 7.95146 13.7499 7.7452 13.3842C7.69374 13.2929 7.70945 13.1849 7.76647 13.097Z"
            stroke="#326543"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span>Emergency contacts</span>
      </NuxtLink>
      <button
        @click="showBLogoutModal = true"
        class="flex items-center px-4 py-3 text-[#1D2739]  space-x-3"
      >
      <img :src="dynamicIcons('logout-icon')" alt="" />
        <span>Logout</span>
      </button>
    </div>
    </div>

    <CoreModalWithoutCloseBtn
    :isOpen="showBLogoutModal"
    @close="showBLogoutModal = false"
    >
    <div class="bg-white rounded-xl max-w-sm w-full text-center p-4">
      <!-- Icon -->
      <div class="flex justify-center items-center bg-yellow-500 rounded-full w-16 h-16 mx-auto mb-4">
        <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.921875" width="63.1513" height="64" rx="31.5756" fill="#F3A218"/>
          <path d="M42.2031 32.375C42.2031 26.8521 37.7259 22.375 32.2031 22.375C26.6803 22.375 22.2031 26.8521 22.2031 32.375C22.2031 37.8978 26.6803 42.375 32.2031 42.375C37.7259 42.375 42.2031 37.8978 42.2031 32.375Z" stroke="white" stroke-width="1.5"/>
          <path d="M32.4453 37.375V32.375C32.4453 31.9036 32.4453 31.6679 32.2988 31.5214C32.1524 31.375 31.9167 31.375 31.4453 31.375" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M32.1953 28.377H32.2043" stroke="white" stroke-width="3.25" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          
      </div>
      
      <!-- Title -->
      <h2 class="text-lg font-semibold text-gray-700 mb-2">Logout</h2>

      <!-- Message -->
      <p class="text-gray-500 mb-6">Are you sure you want to logout?</p>

      <!-- Buttons -->
      <div class="space-y-3">
        <button
          type="button"
          class="w-full disabled:cursor-not-allowed text-sm disabled:opacity-25 bg-[#292929] text-white py-3.5 rounded-md font-semibold"
          @click="onConfirm"
          :disabled="loading"
        >
          Yes, log out
        </button>
        <button
        type="button"
          class="w-full bg-[#EBE5E0] text-gray-700 text-sm py-3.5 rounded-md font-semibold"
          @click="onCancel"
        >
          Cancel
        </button>
      </div>
    </div>
    </CoreModalWithoutCloseBtn>
  </template>
  

<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core'
import { ref } from "vue";
const loading = ref(false)
const router = useRouter()

const showBLogoutModal = ref(false);

interface User {
  firstName?: string;
  lastName?: string;
}

const target = ref(null)


interface ProfileObject {
  profilePicture?: string;
}

interface Props {
  user?: User;
  profileObj: ProfileObject;
}
const openDropdown = ref(false);

const clickme = () => {
  openDropdown.value = !openDropdown.value;
  console.log("click mer");
};

const props = defineProps<Props>();
const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const closeDropdown = () => {
  isOpen.value = false;
};


const onConfirm = () => {
  // Logic for logout
  loading.value = true
  localStorage.clear()
  showBLogoutModal.value = false
  router.push('/login')
  window.location.href="/login"
  console.log("Logging out...");
};



const onCancel = () => {
  showBLogoutModal.value = false
  // Logic to close the modal
  console.log("Cancelled");
};


onClickOutside(target, event => openDropdown.value = false)
</script>
