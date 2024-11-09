<template>
    <div class="flex items-center p-4 border-b-[0.5px] border-gray-100">
      <div class="flex items-center">
        <img
          v-if="selectedUser?.participant?.profilePicture"
          :src="selectedUser?.participant?.profilePicture"
          alt="User profile"
          class="w-10 h-10 rounded-full"
        />
        <!-- <img
        v-else
        src="@/assets/icons/user-avatar.svg"
        alt="User profile"
        class="w-10 h-10 border-gray-700 shadow-sm border rounded-full"
      /> -->
      <svg  v-else class="h-12 w-12" viewBox="0 0 111 106" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M86.162 83.0406C90.5989 78.8716 94.1335 73.8369 96.5473 68.2476C98.9612 62.6584 100.203 56.6334 100.196 50.5452C100.196 25.8886 80.2096 5.90234 55.553 5.90234C30.8964 5.90234 10.9102 25.8886 10.9102 50.5452C10.9031 56.6334 12.1449 62.6584 14.5588 68.2476C16.9726 73.8369 20.5072 78.8716 24.9441 83.0406C33.2176 90.8561 44.1718 95.2034 55.553 95.1881C66.9343 95.2034 77.8885 90.8561 86.162 83.0406ZM28.7444 77.1569C31.9591 73.1351 36.0384 69.8892 40.6796 67.6602C45.3207 65.4312 50.4044 64.2763 55.553 64.2815C60.7017 64.2763 65.7854 65.4312 70.4265 67.6602C75.0676 69.8892 79.147 73.1351 82.3616 77.1569C78.8544 80.6995 74.6787 83.5104 70.0767 85.4267C65.4747 87.343 60.5381 88.3264 55.553 88.3199C50.568 88.3264 45.6313 87.343 41.0294 85.4267C36.4274 83.5104 32.2516 80.6995 28.7444 77.1569ZM72.7234 36.8089C72.7234 41.3628 70.9144 45.7301 67.6943 48.9502C64.4742 52.1703 60.1069 53.9793 55.553 53.9793C50.9992 53.9793 46.6318 52.1703 43.4118 48.9502C40.1917 45.7301 38.3827 41.3628 38.3827 36.8089C38.3827 32.2551 40.1917 27.8877 43.4118 24.6677C46.6318 21.4476 50.9992 19.6386 55.553 19.6386C60.1069 19.6386 64.4742 21.4476 67.6943 24.6677C70.9144 27.8877 72.7234 32.2551 72.7234 36.8089Z" fill="#D6D0CC"/>
      <path d="M105.5 50C105.5 77.6142 83.1142 100 55.5 100C27.8858 100 5.5 77.6142 5.5 50C5.5 22.3858 27.8858 0 55.5 0C83.1142 0 105.5 22.3858 105.5 50ZM11.3186 50C11.3186 74.4007 31.0993 94.1814 55.5 94.1814C79.9007 94.1814 99.6814 74.4007 99.6814 50C99.6814 25.5993 79.9007 5.81863 55.5 5.81863C31.0993 5.81863 11.3186 25.5993 11.3186 50Z" fill="#F0F2F5"/>
      </svg>

        <h2 class="ml-3 font-semibold text-lg">{{selectedUser?.participant?.firstName}} {{selectedUser?.participant?.lastName}}</h2>
      </div>
      <div class="ml-auto flex items-center space-x-4">
        <button
          class="p-2 rounded-full transition-colors"
        >
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="36" height="36" rx="18" fill="#5B8469"/>
            <path d="M11.1479 17.9513C10.3578 16.5738 9.97638 15.4489 9.74637 14.3087C9.40619 12.6223 10.1847 10.975 11.4743 9.92391C12.0194 9.47967 12.6442 9.63145 12.9665 10.2097L13.6942 11.5151C14.2709 12.5498 14.5593 13.0672 14.5021 13.6157C14.4449 14.1642 14.056 14.6109 13.2781 15.5044L11.1479 17.9513ZM11.1479 17.9513C12.7469 20.7396 15.2564 23.2504 18.0478 24.8513M18.0478 24.8513C19.4254 25.6413 20.5503 26.0228 21.6905 26.2528C23.3768 26.593 25.0242 25.8145 26.0753 24.5248C26.5195 23.9798 26.3678 23.355 25.7895 23.0327L24.4841 22.305C23.4493 21.7283 22.932 21.4399 22.3835 21.4971C21.835 21.5543 21.3883 21.9432 20.4948 22.721L18.0478 24.8513Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
            <path d="M22.1668 10.5V17.1667M25.5002 13.8333H18.8335" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            
        </button>
        <!-- <button
          class="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 10h18M3 6h18m-9 8h9"
            />
          </svg>
        </button> -->
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const props = defineProps({
    selectedUser: {
      type: Object
    }
  })

  </script>
  
  <style scoped></style>
  