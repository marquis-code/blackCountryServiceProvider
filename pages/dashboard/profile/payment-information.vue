<template>
<main>
  
  <div class="p-8 bg-gray-25 min-h-screen flex flex-col justify-between">
    <div class="max-w-2xl mx-auto w-full">
      <svg @click="router.back()" class="cursor-pointer mb-3" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" rx="18" fill="#EAEAEA"/>
        <path d="M20.5 13C20.5 13 15.5 16.6824 15.5 18C15.5 19.3177 20.5 23 20.5 23" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <!-- Form Header -->
      <h2 class="text font-medium text-gray-700">
        <span class="text-[#667185]">Profile </span>|
        <span class="text-[#1D2739]"> Payment Information</span>
      </h2>
      <section class="bg-white rounded-lg py-5 mt-6">
        <!-- Linked Card -->
        <div @click="router.push('/dashboard/profile/linked-cards')" class="mt-6 bg-white p-4 cursor-pointer">
          <div class="flex items-center justify-between">
            <span class="text-[#1D2739] flex items-center gap-x-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.166 2.5H5.83268C3.5315 2.5 1.66602 4.36548 1.66602 6.66667V13.3333C1.66602 15.6345 3.5315 17.5 5.83268 17.5H14.166C16.4672 17.5 18.3327 15.6345 18.3327 13.3333V6.66667C18.3327 4.36548 16.4672 2.5 14.166 2.5Z"
                  stroke="#1D2739"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.16602 13.3327C5.17294 11.1818 8.92618 11.0403 9.99935 13.3327H4.16602Z"
                  fill="white"
                />
                <path
                  d="M4.16602 13.3327C5.17294 11.1818 8.92618 11.0403 9.99935 13.3327"
                  stroke="#1D2739"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.74935 7.50065C8.74935 8.42115 8.00316 9.16732 7.08268 9.16732C6.16221 9.16732 5.41602 8.42115 5.41602 7.50065C5.41602 6.58018 6.16221 5.83398 7.08268 5.83398C8.00316 5.83398 8.74935 6.58018 8.74935 7.50065Z"
                  stroke="#1D2739"
                  stroke-width="1.5"
                />
                <path
                  d="M11.666 7.5H14.9993"
                  stroke="#1D2739"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M11.666 10.416H14.166"
                  stroke="#1D2739"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>

              Linked Card</span
            >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.00003 4C6.00003 4 10 6.94593 10 8C10 9.05413 6 12 6 12"
                stroke="#667185"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        <!-- Linked Bank Account -->
        <div @click="router.push('/dashboard/profile/linked-cards')" class="mt-6 bg-white p-4 cursor-pointer">
          <div class="flex items-center justify-between">
            <span class="text-[#1D2739] flex items-center gap-x-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.95884 11.0106C1.66466 9.09618 1.51757 8.13904 1.87949 7.2905C2.24141 6.44195 3.04437 5.86137 4.6503 4.70023L5.85017 3.83268C7.84792 2.38824 8.84677 1.66602 9.99935 1.66602C11.1519 1.66602 12.1508 2.38824 14.1485 3.83268L15.3484 4.70023C16.9543 5.86137 17.7573 6.44195 18.1192 7.2905C18.4811 8.13904 18.334 9.09618 18.0398 11.0106L17.789 12.643C17.3719 15.3568 17.1634 16.7137 16.1902 17.5232C15.2169 18.3327 13.7941 18.3327 10.9483 18.3327H9.05035C6.20462 18.3327 4.78177 18.3327 3.80852 17.5232C2.83526 16.7137 2.62674 15.3568 2.20971 12.643L1.95884 11.0106Z"
                  stroke="#1D2739"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path d="M8.33398 15H11.6673H8.33398Z" fill="white" />
                <path
                  d="M8.33398 15H11.6673"
                  stroke="#1D2739"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              Linked Bank Account</span
            >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.00003 4C6.00003 4 10 6.94593 10 8C10 9.05413 6 12 6 12"
                stroke="#667185"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </section>
    </div>
    <!-- Bottom Buttons -->
    <div
      class="flex justify-between p-4 mt-6 max-w-2xl mx-auto w-full"
    >
      <button
        class="text-[#292929] border rounded-md px-4 py-3 hover:bg-gray-100"
      >
        Cancel
      </button>
      <button class="text-white font-medium rounded-md px-6 py-3 bg-[#292929]">
        Save
      </button>
    </div>
  </div>
</main>
</template>

<script setup lang="ts">
const router = useRouter()

definePageMeta({
  layout: "dashboard"
})
</script>

<style scoped></style>
