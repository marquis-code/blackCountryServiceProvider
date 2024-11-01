<template>
 <main>
  
  <div class="p-8 bg-gray-25 min-h-screen">
    <div class="max-w-xl mx-auto">
      <!-- Breadcrumbs -->
      <div class="text-sm text-gray-500 mb-4">
        <span>Profile</span>
        <span class="mx-2">|</span>
        <span class="font-semibold text-gray-700">Login and security</span>
      </div>

      <!-- Create Password Header -->
      <h2 class="text-xl font-semibold text-gray-700 mb-6">Create password</h2>

      <!-- Form Fields -->
      <form class="space-y-6">
        <!-- Password -->
        <div class="relative">
          <label class="text-[#1D2739] text-sm" >Password</label>
          <div class="relative">
            <input  :type="showPassword ? 'text' : 'password'"  placeholder="Enter current password"  class="w-full p-2 mt-1 outline-none focus-within:border-2 focus-within:border-[#5B8469] border-[0.5px] text-sm rounded-md bg-[#E4E7EC] py-4" />
            <div @click="toggleShowPassword" class="absolute inset-y-0 right-4 top-3 flex items-center cursor-pointer">
              <svg  v-if="!showPassword" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.3332 6.66669C18.3332 6.66669 14.9998 11.6667 9.99984 11.6667C4.99984 11.6667 1.6665 6.66669 1.6665 6.66669" stroke="#1D2739" stroke-width="2" stroke-linecap="round"/>
                  <path d="M12.5 11.25L13.75 13.3333" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16.6665 9.16669L18.3332 10.8334" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M1.6665 10.8334L3.33317 9.16669" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M7.5 11.25L6.25 13.3333" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
  
                  <svg  v-if="showPassword" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.9532 9.20419C18.2065 9.55944 18.3332 9.7371 18.3332 10C18.3332 10.2629 18.2065 10.4406 17.9532 10.7959C16.8148 12.3922 13.9075 15.8334 9.99984 15.8334C6.09215 15.8334 3.18492 12.3922 2.04654 10.7959C1.79318 10.4406 1.6665 10.2629 1.6665 10C1.6665 9.7371 1.79318 9.55944 2.04654 9.20419C3.18492 7.60789 6.09215 4.16669 9.99984 4.16669C13.9075 4.16669 16.8148 7.60789 17.9532 9.20419Z" stroke="#1D2739" stroke-width="2"/>
                      <path d="M12.5 10C12.5 8.61925 11.3807 7.5 10 7.5C8.61925 7.5 7.5 8.61925 7.5 10C7.5 11.3807 8.61925 12.5 10 12.5C11.3807 12.5 12.5 11.3807 12.5 10Z" stroke="#1D2739" stroke-width="1.5"/>
                      </svg>
            </div>
          </div>
        </div>

        <!-- Confirm Password -->
        <div class="relative">
          <label class="text-[#1D2739] text-sm" >Confirm password</label>
          <div class="relative">
            <input  :type="showConfirmPassword ? 'text' : 'password'" placeholder="Confirm password"  class="w-full p-2 mt-1 outline-none focus-within:border-2 focus-within:border-[#5B8469] border-[0.5px] text-sm rounded-md bg-[#E4E7EC] py-4" />
            <div @click="toggleConfirmShowPassword" class="absolute inset-y-0 right-4 top-3 flex items-center cursor-pointer">
              <svg  v-if="!showConfirmPassword" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.3332 6.66669C18.3332 6.66669 14.9998 11.6667 9.99984 11.6667C4.99984 11.6667 1.6665 6.66669 1.6665 6.66669" stroke="#1D2739" stroke-width="2" stroke-linecap="round"/>
                  <path d="M12.5 11.25L13.75 13.3333" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16.6665 9.16669L18.3332 10.8334" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M1.6665 10.8334L3.33317 9.16669" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M7.5 11.25L6.25 13.3333" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
  
                  <svg  v-if="showConfirmPassword" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.9532 9.20419C18.2065 9.55944 18.3332 9.7371 18.3332 10C18.3332 10.2629 18.2065 10.4406 17.9532 10.7959C16.8148 12.3922 13.9075 15.8334 9.99984 15.8334C6.09215 15.8334 3.18492 12.3922 2.04654 10.7959C1.79318 10.4406 1.6665 10.2629 1.6665 10C1.6665 9.7371 1.79318 9.55944 2.04654 9.20419C3.18492 7.60789 6.09215 4.16669 9.99984 4.16669C13.9075 4.16669 16.8148 7.60789 17.9532 9.20419Z" stroke="#1D2739" stroke-width="2"/>
                      <path d="M12.5 10C12.5 8.61925 11.3807 7.5 10 7.5C8.61925 7.5 7.5 8.61925 7.5 10C7.5 11.3807 8.61925 12.5 10 12.5C11.3807 12.5 12.5 11.3807 12.5 10Z" stroke="#1D2739" stroke-width="1.5"/>
                      </svg>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
 </main>
  </template>
  
  <script setup lang="ts">
const showPassword = ref(false);
const showConfirmPassword = ref(false);

const toggleShowPassword = () => {
  showPassword.value = !showPassword.value;
};

const toggleConfirmShowPassword = () => {
  showConfirmPassword.value = !showConfirmPassword.value;
};


definePageMeta({
  layout: "dashboard"
})

  </script>