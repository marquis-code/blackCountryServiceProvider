<template>
  <main>
    
  <div class="p-8 bg-gray-25 min-h-screen">
    <div class="max-w-xl mx-auto px-6">
      <svg @click="router.back()" class="cursor-pointer mb-3" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" rx="18" fill="#EAEAEA"/>
        <path d="M20.5 13C20.5 13 15.5 16.6824 15.5 18C15.5 19.3177 20.5 23 20.5 23" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <!-- Breadcrumbs -->
      <div class="text-sm text-gray-500 mb-4">
        <span>Profile</span>
        <span class="mx-2">|</span>
        <span class="font-semibold text-gray-700">Login and security</span>
      </div>

      <section class="space-y-3">
        <div @click="router.push('/profile/create-password')" class="flex cursor-pointer justify-between items-center p-4 rounded-lg bg-white">
          <div class="space-y-2">
            <p class="text-[#1D2739] font-medium text-sm">Create password</p>
            <p class="text-[#1D2739] text-xs">
              You signed up using google/ios authentication, click to attach
              password.
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>

        <div @click="router.push('/profile/change-password')" class="flex cursor-pointer justify-between items-center p-4 rounded-lg bg-white">
          <div class="space-y-2">
            <p class="text-[#1D2739] text-sm font-medium">Change password</p>
            <p class="text-[#1D2739] text-xs">
              On clicking the switch, you are enabling biometric for transaction
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </section>

      <section
        class="space-y-6 mt-5 border-[0.5px] disabled opacity-25 bg-white rounded-md border-gray-50 p-3"
      >
        <CoreToggleSwitch
          id="EnablePasswordLogin"
          label="Enable Password login"
          v-model="options.passwordLogin"
        />

        <CoreToggleSwitch
          id="EnableBiometrics"
          label="Enable Biometrics"
          v-model="options.biometricsLogin"
          extra="On clicking the switch, you enable fingerprint & face id login option"
        />

        <!-- Enable Password Login (disabled) -->
        <!-- <div class="flex justify-between items-center p-4 bg-gray-100">
    <div>
      <p class="text-gray-400 font-medium">Enable Password login</p>
    </div>
    <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-400" disabled />
  </div> -->

        <!-- Enable Biometrics (disabled) -->
        <!-- <div class="flex justify-between items-center p-4 bg-gray-100">
    <div>
      <p class="text-gray-400 font-medium">Enable Biometrics</p>
      <p class="text-gray-400 text-sm">On clicking the switch, you enable fingerprint & face id login option</p>
    </div>
    <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-400" disabled />
  </div> -->
      </section>
    </div>
  </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
const router = useRouter()

const options = ref({
  passwordLogin: true,
  biometricsLogin: true,
});

definePageMeta({
  layout: "dashboard"
})
</script>

<style scoped>
.toggle-checkbox {
  width: 24px;
  height: 24px;
}
</style>
