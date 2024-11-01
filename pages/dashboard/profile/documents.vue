<template>
<main>
  <div class="p-8 bg-gray-25 min-h-screen">
    <div class="max-w-xl mx-auto">
      <!-- Breadcrumbs -->
      <div class="text-sm text-gray-500 mb-4">
        <span>Profile</span>
        <span class="mx-2">|</span>
        <span class="font-semibold text-gray-700">My Documents</span>
      </div>

      <!-- Search and Filter Row -->
      <div class="flex justify-between items-center mb-6">
        <!-- Search Bar -->
        <div class="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Search"
            class="w-full p-3 py-4 border text-sm border-gray-25 outline-none rounded-md bg-[#EAEAEA] pl-10"
          />
          <!-- Search Icon -->
          <svg class="absolute top-5 left-4" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.6641 11.666L14.6641 14.666" stroke="#667185" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M13.3359 7.33398C13.3359 4.02028 10.6497 1.33398 7.33594 1.33398C4.02223 1.33398 1.33594 4.02028 1.33594 7.33398C1.33594 10.6477 4.02223 13.334 7.33594 13.334C10.6497 13.334 13.3359 10.6477 13.3359 7.33398Z" stroke="#667185" stroke-width="1.5" stroke-linejoin="round"/>
              </svg>
              
        </div>

        <!-- Filter Button -->
        <button
          class="ml-4 flex items-center text-sm text-[#1D2739] space-x-2 p-2 bg-gray-100 border rounded-md text-gray-700"
        >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 4H3" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M11 19H3" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M21 19H17" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M21 11.5H11" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M21 4H19" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M5 11.5H3" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14.5 2C14.9659 2 15.1989 2 15.3827 2.07612C15.6277 2.17761 15.8224 2.37229 15.9239 2.61732C16 2.80109 16 3.03406 16 3.5V4.5C16 4.96594 16 5.19891 15.9239 5.38268C15.8224 5.62771 15.6277 5.82239 15.3827 5.92388C15.1989 6 14.9659 6 14.5 6C14.0341 6 13.8011 6 13.6173 5.92388C13.3723 5.82239 13.1776 5.62771 13.0761 5.38268C13 5.19891 13 4.96594 13 4.5V3.5C13 3.03406 13 2.80109 13.0761 2.61732C13.1776 2.37229 13.3723 2.17761 13.6173 2.07612C13.8011 2 14.0341 2 14.5 2Z" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12.5 17C12.9659 17 13.1989 17 13.3827 17.0761C13.6277 17.1776 13.8224 17.3723 13.9239 17.6173C14 17.8011 14 18.0341 14 18.5V19.5C14 19.9659 14 20.1989 13.9239 20.3827C13.8224 20.6277 13.6277 20.8224 13.3827 20.9239C13.1989 21 12.9659 21 12.5 21C12.0341 21 11.8011 21 11.6173 20.9239C11.3723 20.8224 11.1776 20.6277 11.0761 20.3827C11 20.1989 11 19.9659 11 19.5V18.5C11 18.0341 11 17.8011 11.0761 17.6173C11.1776 17.3723 11.3723 17.1776 11.6173 17.0761C11.8011 17 12.0341 17 12.5 17Z" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9.5 9.5C9.96594 9.5 10.1989 9.5 10.3827 9.57612C10.6277 9.67761 10.8224 9.87229 10.9239 10.1173C11 10.3011 11 10.5341 11 11V12C11 12.4659 11 12.6989 10.9239 12.8827C10.8224 13.1277 10.6277 13.3224 10.3827 13.4239C10.1989 13.5 9.96594 13.5 9.5 13.5C9.03406 13.5 8.80109 13.5 8.61732 13.4239C8.37229 13.3224 8.17761 13.1277 8.07612 12.8827C8 12.6989 8 12.4659 8 12V11C8 10.5341 8 10.3011 8.07612 10.1173C8.17761 9.87229 8.37229 9.67761 8.61732 9.57612C8.80109 9.5 9.03406 9.5 9.5 9.5Z" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          
          <span>Date</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 20V4" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M17 15C17 15 13.3176 20 12 20C10.6824 20 7 15 7 15" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              
        </button>
      </div>

      <!-- Documents Grid -->
      <div v-if="documentsList" class="grid grid-cols-3 gap-4">
        <div v-for="itm in 2" :key="itm" class="">
          <div class="flex justify-center mb-4 border-[0.5px] border-gray-100 py-10 rounded-lg bg-[#F0F2F5]">
            <img
            src="@/assets/img/pdf.png"
              alt="PDF Icon"
              class="h-16"
            />
          </div>
     <div class="flex justify-between items-center w-full px-2">
      <div class="text-center space-y-1">
          <p class="text-gray-700 font-medium text-[10px]">Move-in Checklist.pdf</p>
          <p class="text-gray-500 text-[10px]">12-05-2023 10:40 am</p>
        </div>
        <div class="flex justify-center mt-4">
          <button class="text-gray-500 hover:text-gray-600">
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5026 9.66667V3M8.5026 9.66667C8.0358 9.66667 7.16362 8.33713 6.83594 8M8.5026 9.66667C8.9694 9.66667 9.8416 8.33713 10.1693 8" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.8307 11C13.8307 12.6547 13.4854 13 11.8307 13H5.16406C3.5094 13 3.16406 12.6547 3.16406 11" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                
          </button>
        </div>
     </div>
        </div>
      </div>


      <section v-else class="flex justify-center items-center flex-col gap-y-2">
          <svg width="152" height="124" viewBox="0 0 152 124" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="76" cy="58" r="52" fill="#EAEAEA"/>
              <circle cx="21" cy="25" r="5" fill="#BDBDBD"/>
              <circle cx="18" cy="109" r="7" fill="#BDBDBD"/>
              <circle cx="145" cy="41" r="7" fill="#BDBDBD"/>
              <circle cx="134" cy="14" r="4" fill="#BDBDBD"/>
              <g filter="url(#filter0_b_6053_207016)">
              <rect x="52" y="34" width="48" height="48" rx="24" fill="#9D9D9D"/>
              <path d="M67 60V56C67 52.2288 67 50.3432 68.1716 49.1716C69.3431 48 71.2288 48 75 48H77C80.7712 48 82.6569 48 83.8284 49.1716C85 50.3432 85 52.2288 85 56V60C85 63.7712 85 65.6569 83.8284 66.8284C82.6569 68 80.7712 68 77 68H75C71.2288 68 69.3431 68 68.1716 66.8284C67 65.6569 67 63.7712 67 60Z" stroke="white" stroke-width="2"/>
              <path d="M72 64H80" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M71.0494 52.9766H80.9569M76.0148 52.9766V59.9827M76.0148 59.9827H75.4817M76.0148 59.9827H76.5414M72.0156 53.9646C71.2901 54.7103 70.0877 55.9963 70.6136 57.0677C71.0807 58.0191 71.745 58.0359 72.0151 58.0359C72.2853 58.0359 72.9881 58.0191 73.4551 57.0677C73.9811 55.9963 72.741 54.7103 72.0156 53.9646ZM79.9824 53.9646C79.2569 54.7103 78.0545 55.9963 78.5804 57.0677C79.0475 58.0191 79.7118 58.0359 79.9819 58.0359C80.2521 58.0359 80.9549 58.0191 81.422 57.0677C81.9479 55.9963 80.7079 54.7103 79.9824 53.9646Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <filter id="filter0_b_6053_207016" x="44" y="26" width="64" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="4"/>
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_6053_207016"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_6053_207016" result="shape"/>
              </filter>
              </defs>
              </svg>
<p class="text-[#1D2739]">No document yet</p>                
      </section>
    </div>
  </div>
</main>
  </template>
  
  <script setup lang="ts">
  const documentsList = ref([
    'Lease document', 'property document'
  ])


  definePageMeta({
  layout: "dashboard"
})

  </script>
  
  <style scoped></style>
  