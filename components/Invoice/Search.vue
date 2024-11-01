<!-- InvoiceSearch.vue -->
<template>
    <div class="flex items-center space-x-4 mt-4">
      <div class="flex-grow">
        <div class="relative">
          <input
            type="text"
            placeholder="Search"
            class="w-full p-3 pl-10 text-[#667185] rounded-lg py-3.5 bg-[#EAEAEA] outline-none border-none"
          />
          <img src="@/assets/icons/search.svg" class="absolute left-4 top-4" />
        </div>
      </div>
      <button
        @click="router.push('/dashboard/invoice/generate')"
        class="px-4 py-3 rounded-lg bg-[#292929] text-white text-sm font-medium hover:bg-gray-700 transition"
      >
        Generate invoice
      </button>
    </div>
  </template>
  
  <script lang="ts" setup>
  const router = useRouter()
  // No additional logic needed for this component
  </script>
  