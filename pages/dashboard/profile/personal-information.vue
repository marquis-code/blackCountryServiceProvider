<template>
  <main>  
    
    <div v-if="!loading" class="min-h-screen flex flex-col justify-between">
      <div class="max-w-3xl w-5/12 mx-auto bg-white p-6">
        <div class="text-gray-500 flex-col">
          <svg @click="router.back()" class="cursor-pointer" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="36" height="36" rx="18" fill="#EAEAEA"/>
            <path d="M20.5 13C20.5 13 15.5 16.6824 15.5 18C15.5 19.3177 20.5 23 20.5 23" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <h2 class="text-lg font-semibold text-[#1D2739] pt-3">Profile Information</h2>
        </div>
        <ProfileUpload />
        <form class="mt-6 space-y-6">
          <div>
            <label class="text-[#1D2739] text-sm">Full name</label>
            <input v-model="addressObj.fullName" type="text" class="w-full p-2 mt-1 outline-none focus-within:border-2 focus-within:border-[#5B8469] border-[0.5px] text-sm rounded-md bg-[#E4E7EC] py-4" :disabled="!!addressObj.fullName" >
          </div>
  
          <div>
            <label class="text-[#1D2739] text-sm">Email Address</label>
            <input v-model="credential.email" type="email" class="w-full p-2 mt-1 outline-none focus-within:border-2 focus-within:border-[#5B8469] border-[0.5px] text-sm rounded-md bg-[#E4E7EC] py-4"  :disabled="!!credential.email" />
          </div>
  
          <div>
            <label class="text-[#1D2739] text-sm">Phone Number <span class="text-red-500">*</span></label>
            <input v-model="credential.phoneNumber" type="tel" class="w-full p-2 mt-1 outline-none focus-within:border-2 focus-within:border-[#5B8469] border-[0.5px] text-sm rounded-md bg-[#E4E7EC] py-4" placeholder="Enter phone number" />
          </div>
        </form>
      </div>
      <div class="flex justify-between p-4 bg-white mt-6 max-w-2xl mx-auto w-full">
        <button @click="router.back()" class="text-[#292929] border rounded-md px-4 py-3 hover:bg-gray-100">Cancel</button>
        <button :disabled="updating" @click="handleSave" class="text-white disabled:opacity-25 disabled:cursor-not-allowed font-medium rounded-md px-6 py-3 bg-[#292929]">{{updating ? 'Processing..' : 'Save'}}</button>
      </div>
    </div>
    <div v-else class="rounded-md p-4 max-w-4xl mx-auto mt-10">
      <div class="animate-pulse flex space-x-4">
        <div class="flex-1 space-y-6 py-1">
          <div class="h-96 bg-slate-200 rounded"></div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useHopBack } from '@/composables/core/useHopBack';
import { useUser } from '@/composables/auth/user';
import { use_tenant_profile } from '@/composables/auth/fetchProfile'
import { use_update_profile } from '@/composables/auth/updateProfile';
import { useRouter } from 'vue-router';

// Hook for back navigation
const { loading, profileObj } = use_tenant_profile();

// Import user composable
const { user } = useUser();

// API to update profile
const { credential, updateProfile, loading: updating } = use_update_profile();

// Router instance
const router = useRouter();

// Address object and LGA array
const addressObj = ref({
  fullName: ''
});

// Watch for changes in profileObj and prefill form fields
watch(profileObj, (newProfile) => {
  if (newProfile) {
    credential.value = {
      email: newProfile.email || '',
      phoneNumber: newProfile.phoneNumber || '',
    };

    // Update full name and address fields in addressObj
    addressObj.value.fullName = `${newProfile.firstName || ''} ${newProfile.lastName || ''}`.trim();
  }
}, { immediate: true });


// Handle save logic
const handleSave = async () => {
  const nameParts = addressObj.value.fullName.trim().split(' ');
  const firstName = nameParts[0] || '';
  const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';

  await updateProfile({
    firstName,
    lastName,
    email: credential.value.email,
    phoneNumber: credential.value.phoneNumber
  });
  router.back()
  // router.push("/profile/profile-update-success");
};


// Watch for changes in profileObj and prefill form fields
watch(profileObj, (newProfile) => {
  if (newProfile) {
    credential.value = {
      email: newProfile.email || '',
      phoneNumber: newProfile.phoneNumber || ''
    };

    // Update full name and address fields in addressObj
    addressObj.value.fullName = `${newProfile.firstName || ''} ${newProfile.lastName || ''}`.trim();
  }
}, { immediate: true });

definePageMeta({
  layout: "dashboard"
})
</script>