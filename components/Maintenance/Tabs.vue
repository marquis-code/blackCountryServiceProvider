<template>
    <div class="flex space-x-4 mb-6 overflow-x-auto">
      <button
        v-for="tab in tabs"
        :key="tab"
        @click="$emit('update:modelValue', tab)"
        :class="[
          'px-6 py-3 rounded-lg text-sm',
          modelValue === tab ? 'bg-[#5B8469] text-white' : 'bg-[#F0F2F5] text-[#1A1A1A]'
        ]"
      >
        {{ tab }}
      </button>
    </div>
  </template>
  
  <script lang="ts" setup>
  const props = defineProps({
    tabs: {
      type: Array as () => string[],
      required: true
    },
    modelValue: {
      type: String,
      required: true
    }
  });
  
  defineEmits(['update:modelValue']);
  </script>
  