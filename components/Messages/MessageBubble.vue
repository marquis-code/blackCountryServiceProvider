<template>
<main class="flex">
  <img v-if="!isMine"
  src="@/assets/icons/user-avatar.svg"
  alt="User profile"
  class="w-6 h-6 border-gray-900 shadow-sm border-2 rounded-full"
/>
    <div
      :class="isMine ? 'ml-auto bg-[#91D6A8]' : 'mr-auto bg-[#EBE5E0]'"
      class="p-3 rounded-lg z-10 max-w-xs mb-2 w-full"
    >
      <p class="text-[#1D2739]">{{ message.content }}</p>
      <small class="block text-gray-500 text-right">
        <p class="flex items-center gap-x-2 justify-end">
          {{ formatDate(message.createdAt) }}
          <svg v-if="isMine" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 9.38887C2 9.38887 3 9.83333 4.33333 11.8333C4.33333 11.8333 4.52323 11.5128 4.88089 11.0017M11.3333 4.5C9.80567 5.26385 8.20793 6.86787 6.92527 8.38153" stroke="#099137" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.3335 9.38887C5.3335 9.38887 6.3335 9.83333 7.66683 11.8333C7.66683 11.8333 11.3335 6.16667 14.6668 4.5" stroke="#099137" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
               <!-- Handle error or sending status visually -->
        <span v-if="message.status === 'sending'" class="text-gray-400">Sending...</span>
        <span v-if="message.status === 'error'" class="text-red-500">Failed to send</span>
        </p>
      </small>
    </div>
</main>
  </template>

  <script setup lang="ts">
const props = defineProps({
  message: Object,
  messages: Array,
  isMine: Boolean,
});

// Format the `createdAt` property
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};
</script>
