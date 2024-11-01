<!-- ToggleSwitch.vue -->
<template>
    <div class="flex items-center justify-between">
      <label :for="id" class="text-sm text-[#1D2739]">{{ label }}</label>
      <input
        :id="id"
        type="checkbox"
        v-model="modelValue"
        class="toggle"
      />
    </div>
  </template>
  
  <script lang="ts" setup>
  import { defineProps, defineEmits, computed } from 'vue';
  
  const props = defineProps({
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    modelValue: {
      type: Boolean,
      required: true,
    }
  });
  
  const emit = defineEmits(['update:modelValue']);
  
  const modelValue = computed({
    get: () => props.modelValue,
    set: (value: boolean) => emit('update:modelValue', value),
  });
  </script>
  
  <style scoped>
  /* Custom styles */
  .toggle {
    --tw-translate-x: -100%;
    appearance: none;
    background-color: #ccc;
    width: 3rem;
    height: 1.5rem;
    border-radius: 9999px;
    position: relative;
    cursor: pointer;
    outline: none;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }
  
  .toggle::before {
    content: '';
    position: absolute;
    top: 0.125rem;
    left: 0.125rem;
    width: 1.25rem;
    height: 1.25rem;
    background-color: white;
    border-radius: 9999px;
    transition: transform 0.3s ease;
  }
  
  .toggle:checked {
    background-color: #48bb78;
  }
  
  .toggle:checked::before {
    transform: translateX(1.5rem);
  }
  </style>
  