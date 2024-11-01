<template>
 <main>
  
  <div class="p-6 bg-gray-25 min-h-screen">
    <div class="max-w-xl mx-auto">
      <!-- Breadcrumbs -->
      <div class="text-sm text-gray-500 mb-4">
        <span>Profile</span>
        <span class="mx-2">|</span>
        <span class="font-semibold text-gray-700">FAQs</span>
      </div>

      <!-- Title -->
      <h2 class="text-center text-xl font-medium text-[#1D2739] mb-6">
        How can we help you?
      </h2>

      <!-- Search Bar -->
      <div class="relative w-full mb-8">
        <input
          type="text"
          placeholder="Search for how tos and more"
          class="w-full p-3 py-4 outline-none border text-sm rounded-md bg-[#EAEAEA] pl-10"
        />
        <!-- Search Icon -->
        <svg class="absolute top-5 left-3" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.668 12.166L14.668 15.166" stroke="#667185" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M13.332 7.83398C13.332 4.52028 10.6458 1.83398 7.33203 1.83398C4.01832 1.83398 1.33203 4.52028 1.33203 7.83398C1.33203 11.1477 4.01832 13.834 7.33203 13.834C10.6458 13.834 13.332 11.1477 13.332 7.83398Z" stroke="#667185" stroke-width="1.5" stroke-linejoin="round"/>
          </svg>
          
      </div>

      <!-- FAQ Items -->
      <div class="space-y-4">
        <!-- FAQ Item 1 (Expanded) -->
        <div class="bg-white border-[0.5px] border-gray-25 rounded-md">
          <div
            class="flex justify-between items-center p-4 cursor-pointer"
            @click="toggleFAQ(1)"
          >
            <p class="text-[#1D2739] bg-white font-medium">Question</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400"
              :class="{ 'rotate-180': isOpen(1) }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <div v-if="isOpen(1)" class="p-4 border-t text-gray-600 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Ultrices enim aliquet
            phasellus amet tincidunt ac mollis metus consequat. Pulvinar
            sollicitudin egestas tortor gravida. Volutpat turpis amet vestibulum
            pretium purus elementum dictum. Ut at augue id orci at nunc in sociis
            molestie.
          </div>
        </div>

        <!-- FAQ Item 2 -->
        <div class="bg-white border-[0.5px]  border-gray-25 rounded-md">
          <div
            class="flex justify-between items-center p-4 cursor-pointer"
            @click="toggleFAQ(2)"
          >
            <p class="text-[#1D2739] bg-white font-medium">Question</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400"
              :class="{ 'rotate-180': isOpen(2) }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

    <!-- FAQ Item 2 -->
    <div class="bg-white border-[0.5px]  border-gray-25 rounded-md">
      <div
        class="flex justify-between items-center p-4 cursor-pointer"
        @click="toggleFAQ(3)"
      >
        <p class="text-[#1D2739] bg-white font-medium">Question</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 text-gray-400"
          :class="{ 'rotate-180': isOpen(3) }"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>

          <!-- FAQ Item 2 -->
          <div class="bg-white border-[0.5px]  border-gray-25 rounded-md">
              <div
                class="flex justify-between items-center p-4 cursor-pointer"
                @click="toggleFAQ(4)"
              >
                <p class="text-[#1D2739] bg-white font-medium">Question</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-400"
                  :class="{ 'rotate-180': isOpen(4) }"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

                  <!-- FAQ Item 2 -->
        <div class="bg-white border-[0.5px]  border-gray-25 rounded-md">
          <div
            class="flex justify-between items-center p-4 cursor-pointer"
            @click="toggleFAQ(5)"
          >
            <p class="text-[#1D2739] bg-white font-medium">Question</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400"
              :class="{ 'rotate-180': isOpen(5) }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
 </main>
  </template>
  
  <script setup lang="ts">
  const openFAQ = ref<number | null>(null);
  
  const toggleFAQ = (index: number) => {
    if (openFAQ.value === index) {
      openFAQ.value = null;
    } else {
      openFAQ.value = index;
    }
  };

  const isOpen = (index: number) => {
    return openFAQ.value === index;
  };


  definePageMeta({
  layout: "dashboard"
})

  </script>
  
  <style scoped></style>
  