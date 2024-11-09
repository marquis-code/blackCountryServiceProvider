<template>
  <main class="flex">
   <!-- <div v-if="!isMine">
    <img 
      v-if="message?.participant?.profilePicture"
      :src="message?.participant?.profilePicture"
      alt="User profile"
      class="w-10 h-10 border-gray-900 mr-1 shadow-sm border-2 rounded-full"
    />
    <svg v-else class="h-10 w-10" viewBox="0 0 111 106" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M86.162 83.0406C90.5989 78.8716 94.1335 73.8369 96.5473 68.2476C98.9612 62.6584 100.203 56.6334 100.196 50.5452C100.196 25.8886 80.2096 5.90234 55.553 5.90234C30.8964 5.90234 10.9102 25.8886 10.9102 50.5452C10.9031 56.6334 12.1449 62.6584 14.5588 68.2476C16.9726 73.8369 20.5072 78.8716 24.9441 83.0406C33.2176 90.8561 44.1718 95.2034 55.553 95.1881C66.9343 95.2034 77.8885 90.8561 86.162 83.0406ZM28.7444 77.1569C31.9591 73.1351 36.0384 69.8892 40.6796 67.6602C45.3207 65.4312 50.4044 64.2763 55.553 64.2815C60.7017 64.2763 65.7854 65.4312 70.4265 67.6602C75.0676 69.8892 79.147 73.1351 82.3616 77.1569C78.8544 80.6995 74.6787 83.5104 70.0767 85.4267C65.4747 87.343 60.5381 88.3264 55.553 88.3199C50.568 88.3264 45.6313 87.343 41.0294 85.4267C36.4274 83.5104 32.2516 80.6995 28.7444 77.1569ZM72.7234 36.8089C72.7234 41.3628 70.9144 45.7301 67.6943 48.9502C64.4742 52.1703 60.1069 53.9793 55.553 53.9793C50.9992 53.9793 46.6318 52.1703 43.4118 48.9502C40.1917 45.7301 38.3827 41.3628 38.3827 36.8089C38.3827 32.2551 40.1917 27.8877 43.4118 24.6677C46.6318 21.4476 50.9992 19.6386 55.553 19.6386C60.1069 19.6386 64.4742 21.4476 67.6943 24.6677C70.9144 27.8877 72.7234 32.2551 72.7234 36.8089Z" fill="#D6D0CC"/>
      <path d="M105.5 50C105.5 77.6142 83.1142 100 55.5 100C27.8858 100 5.5 77.6142 5.5 50C5.5 22.3858 27.8858 0 55.5 0C83.1142 0 105.5 22.3858 105.5 50ZM11.3186 50C11.3186 74.4007 31.0993 94.1814 55.5 94.1814C79.9007 94.1814 99.6814 74.4007 99.6814 50C99.6814 25.5993 79.9007 5.81863 55.5 5.81863C31.0993 5.81863 11.3186 25.5993 11.3186 50Z" fill="#F0F2F5"/>
      </svg>
   </div> -->
    <div
      :class="isMine ? 'ml-auto bg-[#91D6A8]' : 'mr-auto bg-[#EBE5E0]'"
      class="p-3 rounded-lg z-10 max-w-xs mb-2 w-full"
    >
      <p class="text-[#1D2739]">{{ message.content }}</p>
      <small class="block text-gray-500 text-right">
        <p class="flex items-center gap-x-2 justify-end">
          {{ formatDate(message.createdAt) }}
          <svg v-if="isMine" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 9.38887C2 9.38887 3 9.83333 4.33333 11.8333C4.33333 11.8333 4.52323 11.5128 4.88089 11.0017" stroke="#099137" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.3333 4.5C9.80567 5.26385 8.20793 6.86787 6.92527 8.38153" stroke="#099137" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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
  message: {
    type: Object,
    required: true
  },
  messages: {
    type: Array,
    required: true
  },
  isMine: {
    type: Boolean,
    required: true
  },
});

// Format the `createdAt` property
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};
</script>
