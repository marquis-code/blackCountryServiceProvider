<template>
<main>
  
  <div v-if="cards.length" class="p-8 bg-gray-25 min-h-screen">
    <div class="max-w-xl mx-auto ">
      <svg @click="router.back()" class="cursor-pointer mb-5" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="36" height="36" rx="18" fill="#EAEAEA"/>
            <path d="M20.5 13C20.5 13 15.5 16.6824 15.5 18C15.5 19.3177 20.5 23 20.5 23" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
      <!-- Breadcrumbs -->
      <div class="text-sm text-gray-500 mb-4">
        <span>Profile</span>
        <span class="mx-2">|</span>
        <span>Payment Information</span>
        <span class="mx-2">|</span>
        <span class="font-semibold text-[#1D2939]">Linked Card</span>
      </div>

      <!-- Header -->
      <h2 class="text-xl font-semibold text-[#1D2939] mb-6">Linked Card</h2>

   <div>
       <!-- First Linked Card (MasterCard) -->
       <div class="flex justify-between items-center py-5 p-4 bg-white rounded-lg border-[0.5px] border-gray-50 mb-2">
        <div class="flex items-center space-x-4">
          <svg width="46" height="32" viewBox="0 0 46 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="45" height="31" rx="5.5" fill="white"/>
            <rect x="0.5" y="0.5" width="45" height="31" rx="5.5" stroke="#F2F4F7"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.9053 22.4396C21.3266 23.7704 19.2787 24.5737 17.0409 24.5737C12.0478 24.5737 8 20.5741 8 15.6404C8 10.7066 12.0478 6.70703 17.0409 6.70703C19.2787 6.70703 21.3266 7.51036 22.9053 8.84109C24.484 7.51036 26.5319 6.70703 28.7697 6.70703C33.7628 6.70703 37.8106 10.7066 37.8106 15.6404C37.8106 20.5741 33.7628 24.5737 28.7697 24.5737C26.5319 24.5737 24.484 23.7704 22.9053 22.4396Z" fill="#ED0006"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.9062 22.4396C24.8502 20.8011 26.0828 18.363 26.0828 15.6404C26.0828 12.9178 24.8502 10.4796 22.9062 8.84108C24.485 7.51036 26.5329 6.70703 28.7706 6.70703C33.7638 6.70703 37.8115 10.7066 37.8115 15.6404C37.8115 20.5741 33.7638 24.5737 28.7706 24.5737C26.5329 24.5737 24.485 23.7704 22.9062 22.4396Z" fill="#F9A000"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.905 22.4403C24.8489 20.8018 26.0815 18.3636 26.0815 15.641C26.0815 12.9185 24.8489 10.4803 22.905 8.8418C20.9611 10.4803 19.7285 12.9185 19.7285 15.641C19.7285 18.3636 20.9611 20.8018 22.905 22.4403Z" fill="#FF5E00"/>
            </svg>
            
          <div>
            <p class="text-[#1D2939] font-medium">**** **** **** 1234</p>
            <p class="text-gray-500 text-sm">05/24</p>
            <span class="bg-[#F0F2F5] text-[#1D2739] text-xs px-2 py-1 rounded-full">Default</span>
          </div>
        </div>
        <button class="text-[#1D2739]">Delete</button>
      </div>

      <!-- Second Linked Card (Visa) -->
      <div class="flex justify-between items-center px-4 py-5 bg-white rounded-lg border-[0.5px] border-gray-50 mb-2">
        <div class="flex items-center space-x-4">
          <svg width="46" height="32" viewBox="0 0 46 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="45" height="31" rx="5.5" fill="white"/>
            <rect x="0.5" y="0.5" width="45" height="31" rx="5.5" stroke="#F2F4F7"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3341 21.1451H11.5877L9.52833 13.0573C9.43058 12.6852 9.22304 12.3563 8.91774 12.2013C8.15584 11.8118 7.31628 11.5017 6.40039 11.3454V11.034H10.8245C11.4351 11.034 11.893 11.5017 11.9694 12.045L13.0379 17.879L15.7829 11.034H18.4529L14.3341 21.1451ZM19.9794 21.1451H17.3857L19.5214 11.034H22.1151L19.9794 21.1451ZM25.4707 13.8351C25.547 13.2905 26.0049 12.9791 26.5392 12.9791C27.3788 12.9009 28.2933 13.0573 29.0565 13.4455L29.5145 11.2685C28.7512 10.9571 27.9117 10.8008 27.1498 10.8008C24.6324 10.8008 22.8007 12.2013 22.8007 14.1451C22.8007 15.6238 24.0982 16.4003 25.0141 16.868C26.0049 17.3344 26.3865 17.6458 26.3102 18.1122C26.3102 18.8118 25.547 19.1232 24.7851 19.1232C23.8692 19.1232 22.9533 18.89 22.1151 18.5004L21.6571 20.6787C22.573 21.0669 23.5639 21.2233 24.4798 21.2233C27.3024 21.3001 29.0565 19.9009 29.0565 17.8008C29.0565 15.1561 25.4707 15.0011 25.4707 13.8351ZM38.1337 21.1451L36.0743 11.034H33.8623C33.4043 11.034 32.9464 11.3454 32.7937 11.8118L28.9802 21.1451H31.6502L32.1831 19.6677H35.4637L35.769 21.1451H38.1337ZM34.2439 13.7569L35.0058 17.5676H32.8701L34.2439 13.7569Z" fill="#172B85"/>
            </svg>
            
          <div>
            <p class="text-gray-700 font-medium">**** **** **** 1234</p>
            <p class="text-gray-500 text-sm">05/24</p>
            <button class="text-[#667185] font-medium">Set as default</button>
          </div>
        </div>
        <button class="text-gray-430 cursor-not-allowed text-gray-100" disabled>Delete</button>
      </div>

      <!-- Link New Card -->
      <div @click="router.push('/dashboard/profile/new-card')" class="flex justify-between items-center p-4 bg-white rounded-lg border-[0.5px] border-gray-50 cursor-pointer hover:bg-gray-50">
        <p class="text-[#171717] font-medium">Link new Card</p>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.50004 5C7.50004 5 12.5 8.68242 12.5 10C12.5 11.3177 7.5 15 7.5 15" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          
      </div>
   </div>
    </div>
  </div>
  <div v-if="!cards.length" class="p-8 bg-gray-25 min-h-screen">
    <div class="max-w-lg mx-auto">
      <!-- Breadcrumbs -->
      <div class="text-sm text-gray-500 mb-4">
        <span>Profile</span>
        <span class="mx-2">|</span>
        <span>Payment Information</span>
        <span class="mx-2">|</span>
        <span class="font-semibold text-gray-700">Linked Card</span>
      </div>

      <!-- Header -->
      <h2 class="text-xl font-medium text-[#1D2739] mb-6">Linked Card</h2>

      <!-- No Card Added Section -->
      <div class="flex flex-col items-center justify-center ">
        <!-- Icon -->
        <div class="flex justify-center items-center h-20 w-20 bg-gray-100 rounded-full">
          <svg width="152" height="124" viewBox="0 0 152 124" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="76" cy="58" r="52" fill="#EAEAEA"/>
            <circle cx="21" cy="25" r="5" fill="#BDBDBD"/>
            <circle cx="18" cy="109" r="7" fill="#BDBDBD"/>
            <circle cx="145" cy="41" r="7" fill="#BDBDBD"/>
            <circle cx="134" cy="14" r="4" fill="#BDBDBD"/>
            <g filter="url(#filter0_b_6053_207299)">
            <rect x="52" y="34" width="48" height="48" rx="24" fill="#9D9D9D"/>
            <path d="M67.3457 62.1981L80.1747 49.3691M82.6316 57.0561L80.4321 59.2556M78.5549 61.1104L77.5762 62.0891" stroke="white" stroke-width="2" stroke-linecap="round"/>
            <path d="M67.1747 62.1411C65.6084 60.5749 65.6084 58.0355 67.1747 56.4693L74.4693 49.1747C76.0355 47.6084 78.5749 47.6084 80.1411 49.1747L84.8253 53.8589C86.3916 55.4251 86.3916 57.9645 84.8253 59.5307L77.5307 66.8253C75.9645 68.3916 73.4251 68.3916 71.8589 66.8253L67.1747 62.1411Z" stroke="white" stroke-width="1.5"/>
            <path d="M68 68H84" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
            </g>
            <defs>
            <filter id="filter0_b_6053_207299" x="44" y="26" width="64" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="4"/>
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_6053_207299"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_6053_207299" result="shape"/>
            </filter>
            </defs>
            </svg>
            
        </div>

        <!-- No card added text -->
        <p class="mt-4 text-[#1D2739]">No card added</p>
      </div>

      <!-- Link Credit/Debit Card Button -->
      <button @click="router.push('/profile/new-card')" class="w-full mt-6 py-3.5 text-sm bg-[#292929] text-white text-center rounded-md hover:bg-gray-900">
        Link Credit/Debit Card
      </button>
    </div>
  </div>
</main>
</template>

<script setup lang="ts">
const router = useRouter()
const cards = ref(['credit', 'debit'])

definePageMeta({
  layout: "dashboard"
})

</script>

<style scoped></style>
