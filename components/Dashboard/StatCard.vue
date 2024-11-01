<template>
    <div class="bg-white p-4 rounded-lg  flex flex-col items-center">
    <div class="w-full flex justify-end items-end">        
      <img src="@/assets/icons/stat-icon.svg" class="h-8 w-8" alt="" />
    </div>

 <div class="w-full h-full flex justify-start items-start flex-col mt-6">
  <p class="text-2xl font-bold text-[#1D2739]">{{ count }}</p>
  <p class="text-[#1D2739] font-medium text-sm">{{ title }}</p>
 </div>
    </div>
  </template>
  
  <script setup lang="ts">
defineProps({
  title: String,
  count: String,
  icon: String,
});
</script>
  