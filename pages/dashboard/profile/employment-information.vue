<template>
    <main>
      <div  v-if="!loading" class="max-w-2xl mx-auto bg-white p-6 w-full">
        <div class="text-gray-500 flex-col">
          <svg @click="router.back()" class="cursor-pointer" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="36" height="36" rx="18" fill="#EAEAEA"/>
            <path d="M20.5 13C20.5 13 15.5 16.6824 15.5 18C15.5 19.3177 20.5 23 20.5 23" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
    
          <h2 class="text-lg font-semibold text-[#1D2739] pt-3">Employment Information</h2>
        </div>
      <form @submit.prevent="handleSave" class="mt-6 space-y-5">
        <div>
          <label class="text-[#1D2739] text-sm">Are you currently employed? <span class="text-red-500">*</span></label>
          <select v-model="credential.employmentStatus" class="w-full p-2 mt-1 outline-none focus-within:border-2 focus-within:border-[#5B8469] border-[0.5px] text-sm rounded-md bg-[#E4E7EC] py-4">
            <option value="employed">Employed</option>
            <option value="unemployed">Un-Employed</option>
            <option value="self-employed">Self Employed</option>
          </select>
        </div>
    
        <div>
          <label class="text-[#1D2739] text-sm">Employer's Full Name <span class="text-red-500">*</span></label>
          <input v-model="credential.employerName" type="text" class="w-full p-2 mt-1 outline-none focus-within:border-2 focus-within:border-[#5B8469] border-[0.5px] text-sm rounded-md bg-[#E4E7EC] py-4" placeholder="Enter employer's name" />
        </div>
    
        <div>
          <label class="text-[#1D2739] text-sm">Organization Address</label>
          <input v-model="credential.employerAddress" type="text" class="w-full p-2 mt-1 outline-none focus-within:border-2 focus-within:border-[#5B8469] border-[0.5px] text-sm rounded-md bg-[#E4E7EC] py-4" placeholder="Enter organization's address" />
        </div>
    
        <div>
          <label class="text-[#1D2739] text-sm">Occupation</label>
          <input v-model="credential.occupation" type="text" class="w-full p-2 mt-1 outline-none focus-within:border-2 focus-within:border-[#5B8469] border-[0.5px] text-sm rounded-md bg-[#E4E7EC] py-4" placeholder="Enter your job role" />
        </div>
    
        <div>
          <label class="text-[#1D2739] text-sm">Monthly Net Salary <span class="text-red-500">*</span></label>
          <input v-model="credential.monthlyNetSalary" type="tel" class="w-full p-2 mt-1 outline-none focus-within:border-2 focus-within:border-[#5B8469] border-[0.5px] text-sm rounded-md bg-[#E4E7EC] py-4" placeholder="Enter your monthly net salary" />
        </div>
      </form>
    
      <div class="flex justify-between p-4 bg-white mt-6 max-w-2xl mx-auto  w-full">
        <button @click="router.back()" class="text-[#292929] border rounded-md px-4 py-3 hover:bg-gray-100">Cancel</button>
        <button :disabled="updating" @click="handleSave" class="text-white disabled:opacity-25 disabled: cursor-not-allowed font-medium rounded-md px-6 py-3 bg-[#292929]">{{updating ? 'Processing..' : 'Save'}}</button>
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
    import { ref, computed, onMounted } from 'vue';
    import { useHopBack } from '@/composables/core/useHopBack';
    import { useUser } from '@/composables/auth/user';
    import { use_update_profile } from '@/composables/auth/updateProfile';
    import { useRouter, useRoute } from 'vue-router';
    import { use_tenant_profile } from '@/composables/auth/fetchProfile.ts'
const { loading, profileObj } = use_tenant_profile()

definePageMeta({
  layout: "dashboard"
})

    
    const { hopBack } = useHopBack();
    
    // Import user composable
    const { user } = useUser();
    
    // API to update profile
    const { credential, updateProfile, loading: updating } = use_update_profile();
    
    // Step management
    const router = useRouter();
    const route = useRoute();
// Watch for changes in profileObj and prefill form fields
watch(profileObj, (newProfile) => {
  if (newProfile) {
    credential.value = {
      employmentStatus: newProfile.employmentStatus || '',
      employerName: newProfile.employerName || '',
      employerAddress: newProfile.employerAddress || '',
      occupation: newProfile.occupation || '',
      monthlyNetSalary: newProfile.monthlyNetSalary || '',
    }
  }
}, { immediate: true });
    
    // Computed property to check if all required fields are filled
    const isFormValid = computed(() => {
      return (
        credential.value.employmentStatus &&
        credential.value.employerName &&
        credential.value.monthlyNetSalary
      );
    });
    
    // Handle save logic
    const handleSave = async () => {
      await updateProfile({
        employmentStatus: credential.value.employmentStatus,
        employerName: credential.value.employerName,
        employerAddress: credential.value.employerAddress,
        occupation: credential.value.occupation,
        monthlyNetSalary: credential.value.monthlyNetSalary
      });
      router.back();
    };
    </script>
    