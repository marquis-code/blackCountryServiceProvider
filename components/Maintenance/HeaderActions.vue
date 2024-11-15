<template>
    <div class="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4">
      <!-- Tab Options -->
      <div class="flex space-x-4">
        <button
          v-for="option in options"
          :key="option"
          @click="selectOption(option)"
          :class="[
            'px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200',
            selectedOption === option ? 'bg-[#5B8469] text-white' : 'bg-[#F0F2F5] text-[#1A1A1A]'
          ]"
        >
          {{ option }}
        </button>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  
  // Define the tab options
  const options = ['All requests', 'Accepted', 'Pending', 'Completed', 'Declined'];
  const selectedOption = ref(options[0]); // Set default selected option
  
  // Emit event when an option is selected
  const emit = defineEmits(['selected']);
  
  const selectOption = (option: string) => {
    selectedOption.value = option;
    emit('selected', option); // Emit the selected option to parent component
  };
  </script>
  
  <style scoped>
  /* Additional styling can go here if needed */
  </style>
  