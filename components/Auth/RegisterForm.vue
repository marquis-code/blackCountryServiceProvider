<template>
  <div class="max-w-lg w-[500px] mx-auto p-8 bg-white">
    <!-- Form Header -->
    <div
      class="text-center mb-6 flex justify-center items-center flex-col gap-y-3 pb-4"
    >
      <svg
        width="51"
        height="82"
        viewBox="0 0 51 82"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.02054 69.0562C8.02054 67.8656 10.5503 67.3108 12.26 67.3108C12.745 67.3108 13.5592 67.4083 13.5592 68.0607C13.5592 69.3371 10.9276 70.0336 9.5755 70.0336C8.85803 70.0336 8.02054 69.7774 8.02054 69.0562ZM14.4182 68.0607C14.4182 67.2828 13.8513 66.4517 12.26 66.4517C10.4964 66.4517 7.1612 66.9962 7.1612 69.0562C7.1612 70.1547 8.13163 70.8926 9.5755 70.8926C11.264 70.8926 14.4182 70.0621 14.4182 68.0607ZM2.52597 76.7559C4.72444 77.5447 8.05853 78.3629 12.4319 78.3629C19.3211 78.3629 28.4801 77.5528 28.4801 70.5484C28.4801 67.8702 26.7994 66.6865 25.4488 65.7354C24.2611 64.8987 23.5292 64.3286 23.4541 63.1936C23.4046 62.4453 23.7569 61.7667 24.1652 60.9813C24.6231 60.1004 25.142 59.102 25.142 57.8394C25.142 56.1259 23.8711 54.2814 21.0809 54.2814C18.8641 54.2814 16.819 55.1483 14.6542 56.0663C11.8701 57.2469 8.71385 58.5851 4.2539 58.5851C3.63773 58.5851 3.06357 58.5431 2.52597 58.4683V53.7482C3.54734 53.8751 4.57557 53.9388 5.6048 53.939C10.9408 53.939 14.6815 52.1397 17.982 50.5522C20.7932 49.1999 23.4483 47.9229 26.6938 47.9229C31.1799 47.9229 33.5269 50.4644 33.5269 52.9749C33.5269 54.6613 32.652 55.6885 31.7259 56.7755C30.7716 57.8956 29.7847 59.0539 29.7847 60.9327C29.7847 62.7357 30.493 63.7047 31.1779 64.6417C31.9774 65.7354 32.8042 66.8667 32.8042 69.5535C32.8042 74.6809 27.9503 77.8547 23.2201 79.7302H2.52597V76.7559ZM2.52597 72.5334C4.64449 73.2965 6.87909 73.6872 9.13086 73.6883C13.0282 73.6883 19.5663 72.8283 19.5663 67.0699C19.5663 65.3759 18.2059 62.9898 15.1812 62.9898C13.145 62.9898 11.5406 63.5251 9.98906 64.0428C8.4108 64.5692 6.92031 65.0665 4.96532 65.0665C4.11144 65.0665 3.29323 64.9195 2.52597 64.6855V60.3746C3.09948 60.442 3.67646 60.4755 4.2539 60.4751C9.09834 60.4751 12.5878 58.9955 15.3918 57.8066C17.4611 56.9291 19.248 56.1714 21.0809 56.1714C22.6814 56.1714 23.2518 57.033 23.2518 57.8394C23.2518 58.6401 22.8808 59.3538 22.488 60.1099C22.0171 61.0158 21.4836 62.0427 21.5679 63.3188C21.7069 65.4116 23.1165 66.4045 24.3601 67.2805C25.6059 68.158 26.5899 68.8507 26.5899 70.5484C26.5899 73.0917 25.1221 76.4727 12.4319 76.4727C7.86801 76.4727 4.50629 75.51 2.52597 74.7264V72.5334ZM2.52597 65.588C3.29813 65.7998 4.11431 65.9259 4.96532 65.9259C7.05989 65.9259 8.68737 65.3828 10.261 64.8579C11.816 64.339 13.2843 63.8492 15.1812 63.8492C17.8453 63.8492 18.7072 66.0191 18.7072 67.0699C18.7072 70.8377 15.3959 72.8292 9.13086 72.8292C6.4466 72.8292 4.17187 72.2312 2.52597 71.6064V65.588ZM2.52597 49.1768C3.30066 49.3491 4.0917 49.4371 4.88531 49.4393C9.90531 49.4393 13.7644 47.3367 17.8499 45.1109C21.9699 42.8661 26.2305 40.545 31.8491 40.545C34.4504 40.545 36.667 41.2973 38.2585 42.7207C39.804 44.1027 40.621 45.9861 40.621 48.167C40.621 50.4552 39.216 52.5144 37.7287 54.6941C36.1125 57.0635 34.4406 59.5133 34.4406 62.4853C34.4406 68.7817 39.543 72.4666 48.4741 72.6669V74.9304C48.4357 74.9335 48.3979 74.942 48.3618 74.9554C41.8842 77.4555 37.6976 72.9941 37.51 72.7852C37.4695 72.7287 37.416 72.6829 37.3539 72.6516C37.2919 72.6204 37.2232 72.6047 37.1537 72.6058C37.0842 72.6069 37.0161 72.6249 36.9551 72.6581C36.8941 72.6914 36.842 72.7389 36.8034 72.7967C36.7542 72.8718 36.7303 72.9608 36.7352 73.0505H36.7321C36.7321 73.0623 36.7007 74.2814 35.6321 76.0778C35.047 77.0618 34.0616 78.3497 32.4235 79.7302H25.42C26.4109 79.2617 27.4734 78.6867 28.4882 77.9948C31.9222 75.6528 33.6633 72.8128 33.6633 69.5535C33.6633 66.5861 32.7113 65.2838 31.8715 64.1347C31.2127 63.2336 30.6438 62.4551 30.6438 60.9327C30.6438 59.3702 31.487 58.3805 32.3798 57.3326C33.366 56.1751 34.386 54.9779 34.386 52.9749C34.386 50.0373 31.7437 47.0636 26.6938 47.0636C23.2524 47.0636 20.5114 48.3819 17.6096 49.7777C14.2346 51.4012 10.7448 53.0796 5.6048 53.0796C4.43865 53.0796 3.39022 52.9918 2.52597 52.8796V49.1768ZM2.52597 41.1563C3.51311 41.8346 4.97655 42.4128 7.10507 42.4128C11.894 42.4128 15.471 40.2756 19.2581 38.0127C23.1067 35.7132 27.0863 33.3355 32.536 33.3355C37.4691 33.3355 41.7325 35.0723 45.2073 38.4974C46.8397 40.1064 47.904 41.7304 48.4741 42.7253V47.8843C48.4645 47.9147 48.4565 47.9455 48.4502 47.9767C48.2473 48.9621 46.6834 50.2348 45.0277 51.5819C41.8778 54.145 37.9575 57.3346 37.9756 62.3144C37.9831 64.4089 38.8692 66.2994 40.4066 67.5013C41.8407 68.6219 43.6095 68.9969 45.334 68.9969C46.4316 68.9967 47.5103 68.8441 48.4741 68.6363V71.8081C40.0889 71.6136 35.3 68.2406 35.3 62.4853C35.3 59.7786 36.8955 57.44 38.4384 55.1785C39.9338 52.9867 41.4801 50.7203 41.4801 48.167C41.4801 43.1734 37.5195 39.6857 31.8491 39.6857C26.0114 39.6857 21.6537 42.06 17.4389 44.3566C13.4521 46.5285 9.6863 48.5799 4.88531 48.5799C4.04754 48.5799 3.25467 48.4677 2.52597 48.2944V41.1563ZM2.52597 1.89019H48.4741V41.095C47.7011 39.9493 46.8173 38.8825 45.8353 37.91C43.3289 35.4312 38.9872 32.4764 32.536 32.4764C26.8492 32.4764 22.766 34.9158 18.8174 37.2754C15.1351 39.4756 11.6568 41.5537 7.10507 41.5537C5.23786 41.5537 3.72521 41.076 2.60915 40.1338C2.58037 40.1096 2.5536 40.0851 2.52597 40.0607V1.89019ZM48.4741 54.5954C47.9198 55.0527 47.3862 55.4654 46.8702 55.8643C44.6389 57.5882 42.8768 58.95 42.8768 61.4792C42.8768 62.641 43.32 63.5406 44.1577 64.0805C44.8318 64.5148 45.6828 64.6777 46.5427 64.6777C47.2075 64.6777 47.8766 64.5799 48.4741 64.4351V66.6975C45.4626 67.4241 43.0756 67.1884 41.5708 66.0119C40.4927 65.1693 39.871 63.8189 39.8659 62.3074C39.8509 58.2308 43.2348 55.4772 46.2206 53.048C47.0443 52.3777 47.8199 51.7451 48.4741 51.1183V54.5954ZM48.4741 63.5467C47.232 63.8791 45.6028 63.989 44.6231 63.3585C44.0262 62.9737 43.7361 62.359 43.7361 61.4792C43.7361 59.3719 45.2709 58.1857 47.3954 56.5441C47.7572 56.2657 48.1167 55.9846 48.4741 55.7006V63.5467ZM48.4741 79.7302H33.7301C36.3309 77.3076 37.181 75.1117 37.4562 73.9171C38.0188 74.4043 38.9567 75.1002 40.2426 75.6646C42.0586 76.4615 44.9489 77.1254 48.4741 75.83V79.7302ZM0.635742 81.6202H50.364V-3.63925e-05H0.635742V81.6202Z"
          fill="#292929"
        />
      </svg>
      <h2 class="text-2xl font-medium text-[#1D2739]">Create an account</h2>
    </div>

    <!-- Registration Form -->
    <form @submit.prevent="handleRegister">
      <div class="mb-4">
        <label for="full-name" class="block text-sm font-medium text-[#1D2739]"
          >Full name</label
        >
        <input
          type="text"
          id="full-name"
          v-model="credential.fullName.value"
          placeholder="Enter your full name"
          class="mt-1 block w-full bg-[#E4E7EC] text-sm px-4 py-4 border-[0.5px] border-gray-100 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div class="mb-4 relative">
        <label for="email" class="block text-sm font-medium text-[#1D2739]"
          >Email address</label
        >
        <input
        type="email"
        id="email"
        :disabled="route?.query?.email?.length"
        v-model.trim="payload.email.value"
        placeholder="Enter your email address"
        class="mt-1 block w-full bg-[#E4E7EC] disabled:cursor-not-allowed disabled:opacity-70 text-sm px-4 py-4 border-[0.5px] border-gray-100 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      />
        <!-- <input
          type="email"
          id="email"
          v-model.trim="payload.email.value"
          :disabled="processing || emailExists"
          placeholder="Enter your email address"
          class="mt-1 block w-full bg-[#E4E7EC] text-sm px-4 py-4 border-[0.5px] border-gray-100 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        /> -->
        <!-- Loading Spinner -->
        <div
          v-if="processing"
          class="absolute inset-y-0 right-4 top-6 flex items-center"
        >
          <svg
            class="animate-spin h-5 w-5 text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8z"
            ></path>
          </svg>
        </div>
        <!-- Error message if email exists -->
        <p v-if="emailExists" class="text-red-500 text-xs mt-2">
          Email already exists.
        </p>
      </div>

      <div class="mb-4 relative">
        <label for="password" class="block text-sm font-medium text-[#1D2739]"
          >Password (6+ characters minimum)</label
        >
        <!-- <input
          :type="showPassword ? 'text' : 'password'"
          id="password"
          min="6"
          v-model.trim="credential.password.value"
          placeholder="Enter your password"
          class="mt-1 block w-full bg-[#E4E7EC] text-sm px-4 py-4 border-[0.5px] border-gray-100 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        /> -->
        <input
            :type="showPassword ? 'text' : 'password'"
            id="password"
            minlength="6"
            v-model.trim="credential.password.value"
            placeholder="Enter your password"
            class="mt-1 block w-full bg-[#E4E7EC] text-sm px-4 py-4 border-[0.5px] border-gray-100 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          <p v-if="credential.password.value.length > 0 && credential.password.value.length < 6" class="text-red-500 text-sm">
            Password must be at least 6 characters long.
          </p>
        <div
          @click="toggleShowPassword"
          class="absolute inset-y-0 right-4 top-6 flex items-center cursor-pointer"
        >
          <svg
            v-if="!showPassword"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.3332 6.66669C18.3332 6.66669 14.9998 11.6667 9.99984 11.6667C4.99984 11.6667 1.6665 6.66669 1.6665 6.66669"
              stroke="#1D2739"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M12.5 11.25L13.75 13.3333"
              stroke="#1D2739"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.6665 9.16669L18.3332 10.8334"
              stroke="#1D2739"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.6665 10.8334L3.33317 9.16669"
              stroke="#1D2739"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.5 11.25L6.25 13.3333"
              stroke="#1D2739"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <svg
            v-if="showPassword"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.9532 9.20419C18.2065 9.55944 18.3332 9.7371 18.3332 10C18.3332 10.2629 18.2065 10.4406 17.9532 10.7959C16.8148 12.3922 13.9075 15.8334 9.99984 15.8334C6.09215 15.8334 3.18492 12.3922 2.04654 10.7959C1.79318 10.4406 1.6665 10.2629 1.6665 10C1.6665 9.7371 1.79318 9.55944 2.04654 9.20419C3.18492 7.60789 6.09215 4.16669 9.99984 4.16669C13.9075 4.16669 16.8148 7.60789 17.9532 9.20419Z"
              stroke="#1D2739"
              stroke-width="2"
            />
            <path
              d="M12.5 10C12.5 8.61925 11.3807 7.5 10 7.5C8.61925 7.5 7.5 8.61925 7.5 10C7.5 11.3807 8.61925 12.5 10 12.5C11.3807 12.5 12.5 11.3807 12.5 10Z"
              stroke="#1D2739"
              stroke-width="1.5"
            />
          </svg>
        </div>
      </div>

      <div class="mb-4 relative">
        <label
          for="confirm-password"
          class="block text-sm font-medium text-[#1D2739]"
          >Confirm password</label
        >
        <!-- <input
          :type="showConfirmPassword ? 'text' : 'password'"
          id="confirm-password"
          min="6"
          v-model.trim="credential.confirmPassword.value"
          placeholder="Confirm your password"
          class="mt-1 block w-full bg-[#E4E7EC] text-sm px-4 py-4 border-[0.5px] border-gray-100 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        /> -->
        <input
            :type="showConfirmPassword ? 'text' : 'password'"
            id="confirm-password"
            minlength="6"
            v-model.trim="credential.confirmPassword.value"
            placeholder="Confirm your password"
            class="mt-1 block w-full bg-[#E4E7EC] text-sm px-4 py-4 border-[0.5px] border-gray-100 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          <p v-if="credential.confirmPassword.value.length > 0 && credential.confirmPassword.value.length < 6" class="text-red-500 text-sm">
            Password must be at least 6 characters long.
          </p>
        <div
          @click="toggleConfirmShowPassword"
          class="absolute inset-y-0 right-4 top-6 flex items-center cursor-pointer"
        >
          <svg
            v-if="!showConfirmPassword"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.3332 6.66669C18.3332 6.66669 14.9998 11.6667 9.99984 11.6667C4.99984 11.6667 1.6665 6.66669 1.6665 6.66669"
              stroke="#1D2739"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M12.5 11.25L13.75 13.3333"
              stroke="#1D2739"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.6665 9.16669L18.3332 10.8334"
              stroke="#1D2739"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.6665 10.8334L3.33317 9.16669"
              stroke="#1D2739"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.5 11.25L6.25 13.3333"
              stroke="#1D2739"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <svg
            v-if="showConfirmPassword"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.9532 9.20419C18.2065 9.55944 18.3332 9.7371 18.3332 10C18.3332 10.2629 18.2065 10.4406 17.9532 10.7959C16.8148 12.3922 13.9075 15.8334 9.99984 15.8334C6.09215 15.8334 3.18492 12.3922 2.04654 10.7959C1.79318 10.4406 1.6665 10.2629 1.6665 10C1.6665 9.7371 1.79318 9.55944 2.04654 9.20419C3.18492 7.60789 6.09215 4.16669 9.99984 4.16669C13.9075 4.16669 16.8148 7.60789 17.9532 9.20419Z"
              stroke="#1D2739"
              stroke-width="2"
            />
            <path
              d="M12.5 10C12.5 8.61925 11.3807 7.5 10 7.5C8.61925 7.5 7.5 8.61925 7.5 10C7.5 11.3807 8.61925 12.5 10 12.5C11.3807 12.5 12.5 11.3807 12.5 10Z"
              stroke="#1D2739"
              stroke-width="1.5"
            />
          </svg>
        </div>
        <!-- Error message if passwords do not match -->
        <p
          v-if="passwordMismatch && hasTypedConfirmPassword"
          class="text-red-500 text-xs mt-2"
        >
          Passwords do not match.
        </p>
      </div>

      <div class="mb-4 flex items-center gap-x-3">
     <div>
      <input
          id="terms"
          type="checkbox"
          v-model="credential.agreement.value"
          class="custom-checkbox"
        />
     </div>

        <label for="terms" class="ml-2 block text-sm text-gray-900">
          I have read and have agreed to BlackCountry's
          <NuxtLink to="/terms" class="text-[#326543]">Terms of Service</NuxtLink> and
          <NuxtLink to="/privacy" class="text-[#326543]">Privacy Policy</NuxtLink>
        </label>
      </div>
<!-- {{ isFormDisabled }} -->
      <button
        type="submit"
        :disabled="isFormDisabled || processing || emailExists"
        class="w-full py-4 disabled:cursor-not-allowed disabled:opacity-25 px-4 bg-[#292929] mt-6 text-white rounded-md shadow-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2"
      >
        {{ loading ? "Processing..." : "Continue" }}
      </button>
    </form>

    <p class="mt-6 text-center text-gray-600">
      Have an account?
      <NuxtLink to="/login" class="text-[#326543] font-semibold"
        >Login</NuxtLink
      >
    </p>
  </div>
  <CoreFullScreenLoader :visible="loading" text="Please wait while we create your account..." />
</template>

<style scoped>
  .custom-checkbox {
    appearance: none;
    width: 24px;
    height: 24px;
    background-color: #099137; /* Purple background */
    border-radius: 8px; /* Rounded corners */
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    border: none; /* Remove default border */
  }
  
  .custom-checkbox:checked {
    background-color: #099137 /* Purple color for checked state */
  }
  
  .custom-checkbox:checked::after {
    content: "";
    width: 10px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    position: absolute;
    top: 5px;
    left: 8px;
  }
  </style>
  

<script setup lang="ts">
import { use_auth_register } from "@/composables/auth/register";
import { use_tenant_exist } from "@/composables/auth/tenantExist";

const route = useRoute()

// Credential data and state from composables
const {
  credential,
  register,
  loading,
  isFormDisabled,
  passwordMismatch,
  populateObj,
} = use_auth_register();
const {
  credential: payload,
  handle_tenant_exist,
  loading: processing,
} = use_tenant_exist();

// Reactive state variables
const showPassword = ref(false);
const showConfirmPassword = ref(false);
const emailExists = ref(false);
const hasTypedConfirmPassword = ref(false); // To track whether the user has started typing in the confirm password field

// Toggle show password visibility
const toggleShowPassword = () => {
  showPassword.value = !showPassword.value;
};

const toggleConfirmShowPassword = () => {
  showConfirmPassword.value = !showConfirmPassword.value;
};

watch(() => route.query, (newValue: any) => {
  payload.inviteId.value = newValue?.inviteId
})


watch(() => route.query, newValue => {
  if(newValue.email){
    payload.email.value = newValue?.email
  } else {
    payload.email.value = ""
  }  
}, {deep: true, immediate: true})

// Watcher for email input
watch(
  () => payload.email.value,
  async (newEmail) => {
    if (newEmail && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail)) {
      processing.value = true;

      // API call to check if the email exists
      const response = await handle_tenant_exist(newEmail);
      if (response.exists) {
        emailExists.value = true;
      } else {
        emailExists.value = false;
      }

      processing.value = false;
    }
  }
);

// Watcher for confirm password input
watch(
  () => credential.confirmPassword.value,
  () => {
    hasTypedConfirmPassword.value = true;
  }
);

// Register function where credential.password is set to payload.password before submission
const handleRegister = () => {
  const { ...data } = payload;
  console.log(data.email.value);
  // Ensure credential.password is set to the correct payload password before form submission
  // credential.password.value = payload.password.value;
  const payloadObj = {
    fullName: credential.fullName.value,
    email: data.email.value,
    password: credential.password.value,
    inviteId: route.query.inviteId,
    confirmPassword: credential.confirmPassword.value,
    agreement: credential.agreement.value,
  };
  populateObj(payloadObj);
  // Then submit the form or make the API call to register
  register(); // This would trigger your API call for registration
};
</script>
