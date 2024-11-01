<template>
    <div class="flex items-center p-4 border-b border-gray-200">
      <div class="flex items-center">
        <img
          v-if="selectedUser?.participant?.profilePicture"
          :src="selectedUser?.participant?.profilePicture"
          alt="User profile"
          class="w-10 h-10 rounded-full"
        />
        <img
        v-else
        src="@/assets/icons/user-avatar.svg"
        alt="User profile"
        class="w-10 h-10 border-gray-700 shadow-sm border rounded-full"
      />
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
  