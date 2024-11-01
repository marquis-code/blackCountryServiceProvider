<template>
    <section class="max-w-2xl mx-auto p-6 bg-white rounded-lg">
      <!-- Header with Navigation and Title -->
      <div class="flex items-center space-x-2 text-gray-600 text-sm mb-6">
        <button @click="goBack" class="text-gray-600 hover:text-gray-800">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="36" height="36" rx="18" fill="#EAEAEA"/>
<path d="M20.5 13C20.5 13 15.5 16.6824 15.5 18C15.5 19.3177 20.5 23 20.5 23" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </button>
        <p>Maintenance |</p>
        <p class="text-[#1D2739] font-medium">Plumbing service</p>
      </div>
  
      <!-- Maintenance Request Details -->
      <div class="flex justify-between items-center mb-6 border-[0.5px] border-gray-100 rounded-lg bg-white p-4">
      <div class="space-y-3">
        <h2 class="text-lg font-medium text-gray-800 mb-2">Plumbing service</h2>
        <span class="px-3 py-2 bg-gray-200 text-gray-700 text-xs font-semibold bg-[#F9FAFB] text-[#1D2739] rounded-full">New request</span>
      </div>
        <div class="flex items-center space-x-3">
          <button @click="openModal('accept')" class="px-4 py-3 text-white text-sm bg-[#292929] font-medium rounded-lg">Accept</button>
          <button @click="openModal('decline')" class="px-4 py-3 text-[#1D192B] text-sm bg-[#EBE5E0] font-medium rounded-lg">Decline</button>
          <button @click="openModal('updateStatus')" class="px-4 py-3 text-white text-sm bg-[#292929] font-medium rounded-lg">Update Status</button>
        </div>
      </div>
  
<div class="border-[0.5px] border-gray-100 rounded-lg bg-white p-4">
        <!-- User Profile and Details -->
        <div class="flex items-center rounded-lg mb-6">
        <img src="@/assets/img/female-avatar.png" alt="User profile" class="w-12 h-12 rounded-full mr-4" />
        <div class="flex-1 flex justify-between items-center">
          <h3 class="font-medium text-[#1D2739]">Ada Dennis</h3>
        <div>
          <div class="flex items-center">
                  <img src="@/assets/icons/phone-call.svg" alt="call" class="w-10 disabled bg-gray-50 h-10 rounded-full mr-4" />
                  <img src="@/assets/icons/phone-chat.svg" alt="chat" class="w-10 disabled bg-gray-50 h-10 rounded-full mr-4" />
                </div>
        </div>
        </div>
      </div>

     <div  class="flex items-center justify-between">
      <p class="text- text-[#667185]">Urgency level</p>

      <div class="flex justify-end items-end">
        <span class="text-xs px-6 text-xs py-2 bg-[#FBEAE9] text-[#BA110B] font-semibold rounded-full">High</span>
      </div>
     </div>

           <!-- Description Section -->
           <div class="my-6">
        <h4 class="text-sm font-medium text-[#667185] mb-1">Description</h4>
        <p class="text-sm text-[#1D2739]">Lorem ipsum dolor sit amet consectetur. Pellentesque aliquam volutpat suspendisse neque...</p>
      </div>
</div>
  
  
      <!-- Images Section -->
      <div class=" border-[0.5px] border-gray-100 rounded-lg bg-white p-4 mt-6">
        <h4 class="text-sm font-medium text-gray-700 mb-3">Images</h4>
        <div class="grid grid-cols-2 gap-3">
          <img v-for="(image, index) in images" :key="index" :src="image" alt="Maintenance issue" class="rounded-lg object-cover h-60 w-full" />
        </div>
      </div>
  
      <!-- Modal for Accept/Decline Confirmation -->
      <MaintenanceModal v-if="isModalOpen" :type="modalType" @close="closeModal" />
    </section>
  </template>
  
  <script lang="ts" setup>
  import detail1 from '@/assets/img/detail1.png'
  import detail2 from '@/assets/img/detail2.png'
  import detail3 from '@/assets/img/detail3.png'
  
  import { ref } from 'vue';
  
  const images = [detail1, detail2, detail3];
  
  const isModalOpen = ref(false);
  const modalType = ref<string | null>(null);
  
  const openModal = (type: string) => {
    modalType.value = type;
    isModalOpen.value = true;
  };
  
  const closeModal = () => {
    isModalOpen.value = false;
  };
  
  const goBack = () => {
    window.history.back();
  };
  </script>
  