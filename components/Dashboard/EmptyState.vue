<!-- components/EmptyState.vue -->
<template>
    <div class="text-center flex justify-center items-center flex-col text-gray-500">
       <slot name="icon"></slot>
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps({
    icon: String,
    message: String,
  });
  </script>
  