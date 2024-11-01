<template>
  <main>
    
    <div class="min-h-screen bg-gray-25 pb-10">
      <div class="max-w-xl mx-auto space-y-4 pt-10">
          <h3 class="text-[#1D2739] text-lg font-semibold pl-10 lg:pl-0">Profile</h3>
        <div class="max-w-sm mx-auto px-6 pb-6 text-center space-y-4 relative">
          <!-- Profile Picture with Border-Based Circular Progress -->
          <div class="relative inline-block">
            <!-- Circular Progress Container -->
            <div
              class="w-24 h-24 rounded-full flex items-center justify-center"
              :style="{
                background: progressBackground,
              }"
            >
              <!-- User Profile Picture -->
              <div class="w-20 h-20 bg-gray-300 rounded-full"></div>
            </div>
      
            <!-- Percentage Text -->
            <div class="absolute inset-0 flex items-center justify-center">
              <svg width="" height="" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M38.9271 39.7854C40.9459 37.8885 42.5541 35.5977 43.6524 33.0546C44.7507 30.5115 45.3157 27.7701 45.3125 25C45.3125 13.7812 36.2188 4.6875 25 4.6875C13.7813 4.6875 4.68751 13.7812 4.68751 25C4.68431 27.7701 5.24932 30.5115 6.34762 33.0546C7.44592 35.5977 9.05416 37.8885 11.0729 39.7854C14.8374 43.3414 19.8216 45.3195 25 45.3125C30.1785 45.3195 35.1626 43.3414 38.9271 39.7854ZM12.8021 37.1083C14.2648 35.2784 16.1209 33.8015 18.2326 32.7873C20.3443 31.7731 22.6574 31.2477 25 31.25C27.3427 31.2477 29.6557 31.7731 31.7674 32.7873C33.8792 33.8015 35.7353 35.2784 37.1979 37.1083C35.6021 38.7202 33.7022 39.9992 31.6083 40.8711C29.5144 41.743 27.2682 42.1904 25 42.1875C22.7318 42.1904 20.4856 41.743 18.3917 40.8711C16.2978 39.9992 14.3979 38.7202 12.8021 37.1083ZM32.8125 18.75C32.8125 20.822 31.9894 22.8091 30.5243 24.2743C29.0592 25.7394 27.072 26.5625 25 26.5625C22.928 26.5625 20.9409 25.7394 19.4757 24.2743C18.0106 22.8091 17.1875 20.822 17.1875 18.75C17.1875 16.678 18.0106 14.6909 19.4757 13.2257C20.9409 11.7606 22.928 10.9375 25 10.9375C27.072 10.9375 29.0592 11.7606 30.5243 13.2257C31.9894 14.6909 32.8125 16.678 32.8125 18.75Z" fill="#D6D0CC"/>
                  </svg>
                  
              <!-- <span class="text-green-600 font-semibold">{{ percentage }}%</span> -->
            </div>
          </div>
      
          <!-- User Info -->
          <div>
             <div class="flex justify-center items-center">
              <span class="text-white rounded-full text-xs px-2 py-1 font-semibold bg-[#5B8469] absolute top-[81px]">{{ percentage }}%</span> 
             </div>
            <p class="text-xl font-bold text-[#1D2739]">{{user.firstName ?? 'Nil'}} {{user.lastName ?? 'Nil'}}</p>
            <p class="text-sm text-[#667185]">{{user.email ?? 'Nil'}}</p>
          </div>
      
          <!-- Action Button -->
          <div class="flex justify-center items-center space-x-2 bg-[#F0F2F5] rounded-full py-2 px-4">
            <p class="text-sm font-medium text-[#1D2739]">Complete your Account Setup</p>
            <span class="w-3 h-3 bg-[#099137] rounded-full"></span>
          </div>
        </div>
  
  
  <section class="space-y-5">
      <div class="space-y-1">
          <h2
            class="border-[0.5px] border-gray-25 rounded-md bg-white text-sm font- text-[#1D2739] p-4"
          >
            Account settings
          </h2>
          <div class="border-[0.5px] border-gray-25 rounded-md bg-white">
            <NuxtLink
              v-for="(item, idx) in accountSettings"
              :key="idx"
              :to="item.path"
              class="flex items-center cursor-pointer justify-between p-4 cursor-pointer rounded-lg"
            >
              <div class="flex items-center justify-between w-full">
                <div class="flex items-center space-x-3">
                  <img :src="dynamicIcons(item.icon)" alt="" />
                  <span class="text-sm font- text-[#1D2739]">{{
                    item.label
                  }}</span>
                </div>
                <div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.00003 4C6.00003 4 10 6.94593 10 8C10 9.05413 6 12 6 12"
                      stroke="#667185"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
  
        <!-- <div class="space-y-1">
          <h2
            class="border-[0.5px] border-gray-25 rounded-md bg-white text-sm font- text-[#1D2739] p-4"
          >
          Documents
          </h2>
          <div class="border-[0.5px] border-gray-25 rounded-md bg-white">
            <NuxtLink
            :to="item.path"
              v-for="(item, idx) in documentsSettings"
              :key="idx"
              class="flex items-center justify-between p-4 cursor-pointer rounded-lg"
            >
              <div class="flex items-center justify-between w-full">
                <div class="flex items-center space-x-3">
                  <img :src="dynamicIcons(item.icon)" alt="" />
                  <span class="text-sm font- text-[#1D2739]">{{
                    item.label
                  }}</span>
                </div>
                <div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.00003 4C6.00003 4 10 6.94593 10 8C10 9.05413 6 12 6 12"
                      stroke="#667185"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div> -->
  
        <div class="space-y-1">
          <h2
            class="border-[0.5px] border-gray-25 rounded-md bg-white text-sm font- text-[#1D2739] p-4"
          >
          Legal
          </h2>
          <div class="border-[0.5px] border-gray-25 rounded-md bg-white">
            <NuxtLink
              v-for="(item, idx) in legalSettings"
               :to="item.path"
              :key="idx"
              class="flex items-center justify-between p-4 cursor-pointer rounded-lg"
            >
              <div class="flex items-center justify-between w-full">
                <div class="flex items-center space-x-3">
                  <img :src="dynamicIcons(item.icon)" alt="" />
                  <span class="text-sm font- text-[#1D2739]">{{
                    item.label
                  }}</span>
                </div>
                <div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.00003 4C6.00003 4 10 6.94593 10 8C10 9.05413 6 12 6 12"
                      stroke="#667185"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
  
        <div class="space-y-1">
          <h2
            class="border-[0.5px] border-gray-25 rounded-md bg-white text-sm font- text-[#1D2739] p-4"
          >
          Help & Support
          </h2>
          <div class="border-[0.5px] border-gray-25 rounded-md bg-white">
            <NuxtLink
              v-for="(item, idx) in helpSettings"
              :key="idx"
              :to="item.path"
              class="flex items-center justify-between p-4 cursor-pointer rounded-lg"
            >
              <div class="flex items-center justify-between w-full">
                <div class="flex items-center space-x-3">
                  <img :src="dynamicIcons(item.icon)" alt="" />
                  <span class="text-sm font- text-[#1D2739]">{{
                    item.label
                  }}</span>
                </div>
                <div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.00003 4C6.00003 4 10 6.94593 10 8C10 9.05413 6 12 6 12"
                      stroke="#667185"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
  
        <div
        class="border-[0.5px] border-gray-25 rounded-md bg-white text-sm font- text-[#BA110B] p-4 flex justify-between items-center"
      >
  <div @click="showBLogoutModal = true" class="flex  cursor-pointer items-center gap-x-3">
      <img :src="dynamicIcons('logout-icon')" alt="" />
      <p>Log out</p>
  </div>
  
      <div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.00003 4C6.00003 4 10 6.94593 10 8C10 9.05413 6 12 6 12"
              stroke="#667185"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
  </section>
      </div>
    </div>

    <!-- <CoreModal
    :isOpen="showBLogoutModal"
    @close="showBLogoutModal = false"
    >
    <div
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    @click.self="onCancel"
  >
    <div class="bg-white rounded-xl p-6 max-w-sm w-full text-center shadow-lg">
      <div class="flex justify-center items-center bg-yellow-500 rounded-full w-16 h-16 mx-auto mb-4">
        <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.921875" width="63.1513" height="64" rx="31.5756" fill="#F3A218"/>
          <path d="M42.2031 32.375C42.2031 26.8521 37.7259 22.375 32.2031 22.375C26.6803 22.375 22.2031 26.8521 22.2031 32.375C22.2031 37.8978 26.6803 42.375 32.2031 42.375C37.7259 42.375 42.2031 37.8978 42.2031 32.375Z" stroke="white" stroke-width="1.5"/>
          <path d="M32.4453 37.375V32.375C32.4453 31.9036 32.4453 31.6679 32.2988 31.5214C32.1524 31.375 31.9167 31.375 31.4453 31.375" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M32.1953 28.377H32.2043" stroke="white" stroke-width="3.25" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          
      </div>
      

      <h2 class="text-lg font-semibold text-gray-700 mb-2">Logout</h2>

      <p class="text-gray-500 mb-6">Are you sure you want to logout?</p>

      <div class="space-y-3">
        <button
          type="'button"
          class="w-full disabled:cursor-not-allowed text-sm disabled:opacity-25 bg-[#292929] text-white py-3.5 rounded-md font-semibold"
          @click="onConfirm"
          :disabled="loading"
        >
          Yes, log out
        </button>
        <button
        type="'button"
          class="w-full bg-[#EBE5E0] text-gray-700 text-sm py-3.5 rounded-md font-semibold"
          @click="onCancel"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
    </CoreModal> -->
  </main>
</template>

<script setup lang="ts">
import { useUser } from '@/composables/auth/user'
import { dynamicIcons } from "@/utils/assets";
const { user } = useUser()
const showBLogoutModal = ref(false);
const router = useRouter()
const loading = ref(false)
const onConfirm = () => {
  // Logic for logout
  loading.value = true
  localStorage.clear()
  showBLogoutModal.value = false
  router.push('/login')
  window.location.href="/login"
  console.log("Logging out...");
};

definePageMeta({
  layout: "dashboard"
})


const onCancel = () => {
  showBLogoutModal.value = false
  // Logic to close the modal
  console.log("Cancelled");
};

const accountSettings = ref([
  {
    label: "Profile settings",
    icon: "profile",
    path: "/dashboard/profile/personal-information",
  },
  {
    label: "Payment Information",
    icon: "payment",
    path: "/dashboard/profile/payment-information",
  },
  {
    label: "Notification Preference",
    icon: "profile-notification",
    path: "/dashboard/profile/notification-preferences",
  },
  {
    label: "Login and Security",
    icon: "login",
    path: "/dashboard/profile/login-security",
  },
]);

// const documentsSettings = ref([
//   {
//     label: "My Documents",
//     icon: "documents",
//     path: "/profile/documents",
//   },
// ]);

const legalSettings = ref([
  {
    label: "Terms of Use",
    icon: "terms",
    path: "/dashboard/profile/terms",
  },
  {
    label: "Privacy Policy",
    icon: "privacy",
    path: "/dashboard/profile/privacy",
  },
  {
    label: "Third Party Licenses",
    icon: "privacy",
    path: "/dashboard/profile/third-party",
  },
]);

const helpSettings = ref([
  {
    label: "Contact Us",
    icon: "contact-us",
    path: "/dashboard/profile/contact-us",
  },
  {
    label: "FAQs",
    icon: "faq",
    path: "/dashboard/profile/faq",
  },
  {
    label: "Rate this Application",
    icon: "rate-us",
    path: "/dashboard/profile/rate-us",
  },
]);

// Define the percentage of profile completion
// const percentage = ref(100)

// Computed classes for border based on percentage
const progressBorderClass = computed(() => {
  const baseClass = 'border-t-green-500 border-r-green-500 border-b-gray-200 border-l-gray-200'
  
  if (percentage.value >= 50) {
    return 'border-green-500'
  }
  
  return baseClass
})

const progressSize = computed(() => {
  return percentage.value < 100 ? '4px' : '6px'
})

// Define the percentage of profile completion
const percentage = ref(80) // You can dynamically update this value

// Computed style for circular progress based on percentage
const progressBackground = computed(() => {
  // Use conic-gradient to create the circular effect
  return `conic-gradient(
    green ${percentage.value * 3.6}deg, 
    lightgray 0deg
  )`
})
</script>

<style scoped>
/* Add custom styles if needed */
</style>
