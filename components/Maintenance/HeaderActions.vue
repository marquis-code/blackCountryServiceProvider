<template>
  <div class="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4">
    <!-- Contain Tab Options with Scrollable Overflow -->
    <div class="w-full overflow-x-auto whitespace-nowrap custom-scrollbar">
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
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// Define the tab options
const options = ['All requests', 'Accepted', 'Pending', 'Completed', 'Declined', 'In Progress', 'Archived'];
const selectedOption = ref(options[0]); // Set default selected option

// Emit event when an option is selected
const emit = defineEmits(['selected']);

const selectOption = (option: string) => {
  selectedOption.value = option;
  emit('selected', option); // Emit the selected option to parent component
};
</script>

<style scoped>
/* Styling for the custom scrollbar */
.custom-scrollbar {
  scrollbar-width: thin; /* For Firefox */
  scrollbar-color: #cbd5e1 #f1f5f9; /* Thumb and track colors */
}

.custom-scrollbar::-webkit-scrollbar {
  height: 8px; /* Horizontal scrollbar height */
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #cbd5e1; /* Thumb color */
  border-radius: 4px; /* Rounded corners for the thumb */
}

.custom-scrollbar::-webkit-scrollbar-track {
  background-color: #f1f5f9; /* Track color */
}
</style>
