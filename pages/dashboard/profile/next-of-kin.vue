<template>
    <main>
      
      <div v-if="!loading" class="max-w-2xl mx-auto bg-white p-6 w-full">
        <div class="text-gray-500 flex-col">
          <svg @click="router.back()" class="cursor-pointer" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="36" height="36" rx="18" fill="#EAEAEA"/>
            <path d="M20.5 13C20.5 13 15.5 16.6824 15.5 18C15.5 19.3177 20.5 23 20.5 23" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
    
          <h2 class="text-lg font-semibold text-[#1D2739] pt-3">Next of Kin</h2>
        </div>
        <!-- {{profileObj}} -->
        
        <form @submit.prevent="handleSave" class="mt-6 space-y-4">
          <section class="flex gap-x-6 justify-between items-center"></section>
          <section class="flex justify-between items-center gap-x-6">
            <div class="w-full">
              <label class="text-[#1D2739] text-sm">Full Name <span class="text-red-500">*</span></label>
              <input v-model="credential.nextOfKinName" type="text" class="w-full p-2 mt-1 outline-none focus-within:border-2 focus-within:border-[#5B8469] border-[0.5px] text-sm rounded-md bg-[#E4E7EC] py-4" placeholder="Enter full name" />
            </div>
    
            <div class="w-full">
              <label class="text-[#1D2739] text-sm">Relationship <span class="text-red-500">*</span></label>
              <select v-model="credential.nextOfKinRelationship" class="w-full p-2 mt-1 outline-none focus-within:border-2 focus-within:border-[#5B8469] border-[0.5px] text-sm rounded-md bg-[#E4E7EC] py-4">
                <option value="brother">Brother</option>
                <option value="sister">Sister</option>
              </select>
            </div>
          </section>
    
          <div>
            <label class="text-[#1D2739] text-sm">Email Address <span class="text-red-500">*</span></label>
            <input v-model="credential.nextOfKinEmail" type="email" class="w-full p-2 mt-1 outline-none focus-within:border-2 focus-within:border-[#5B8469] border-[0.5px] text-sm rounded-md bg-[#E4E7EC] py-4" placeholder="Enter email address" />
          </div>
    
          <div>
            <label class="text-[#1D2739] text-sm">Residential Address <span class="text-red-500">*</span></label>
            <input v-model="credential.nextOfKinAddress" type="text" class="w-full p-2 mt-1 outline-none focus-within:border-2 focus-within:border-[#5B8469] border-[0.5px] text-sm rounded-md bg-[#E4E7EC] py-4" placeholder="Enter residential address" />
          </div>
    
          <div>
            <label class="text-[#1D2739] text-sm">Phone Number <span class="text-red-500">*</span></label>
            <input v-model="credential.nextOfKinPhone" type="tel" class="w-full p-2 mt-1 outline-none focus-within:border-2 focus-within:border-[#5B8469] border-[0.5px] text-sm rounded-md bg-[#E4E7EC] py-4" placeholder="Enter phone number" />
          </div>
    
          <div>
            <label class="text-[#1D2739] text-sm">Occupation</label>
            <input v-model="credential.nextOfKinOccupation" type="text" class="w-full p-2 mt-1 outline-none focus-within:border-2 focus-within:border-[#5B8469] border-[0.5px] text-sm rounded-md bg-[#E4E7EC] py-4" placeholder="e.g. Accountant" />
          </div>
          
          <section class="flex gap-x-6 justify-between items-center">
            <div class="w-full">
              <label class="text-[#1D2739] text-sm">Organization Name</label>
              <input v-model="credential.nextOfKinEmployer" type="text" class="w-full p-2 mt-1 outline-none focus-within:border-2 focus-within:border-[#5B8469] border-[0.5px] text-sm rounded-md bg-[#E4E7EC] py-4" placeholder="Enter organization name" />
            </div>
    
            <div class="w-full">
              <label class="text-[#1D2739] text-sm">Office Address</label>
              <input v-model="credential.nextOfKinEmployerAddress" type="text" class="w-full p-2 mt-1 outline-none focus-within:border-2 focus-within:border-[#5B8469] border-[0.5px] text-sm rounded-md bg-[#E4E7EC] py-4" placeholder="Enter office address" />
            </div>
          </section>
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
    import NaijaStates from 'naija-state-local-government';
    import { useUser } from '@/composables/auth/user';
    import { use_update_profile } from '@/composables/auth/updateProfile';
    import { useRouter, useRoute } from 'vue-router';
    import { use_tenant_profile } from '@/composables/auth/fetchProfile.ts'
    const { loading, profileObj } = use_tenant_profile()
    
    const { hopBack } = useHopBack();
    const { user } = useUser();
    const { credential, updateProfile, loading: updating } = use_update_profile();
    
    const router = useRouter();
    const route = useRoute();
    
  // Watch for changes in profileObj and prefill form fields
watch(profileObj, (newProfile) => {
  if (newProfile) {
    credential.value = {
      nextOfKinName: newProfile.nextOfKinName || '',
      nextOfKinRelationship: newProfile.nextOfKinRelationship || '',
      nextOfKinEmail: newProfile.nextOfKinEmail || '',
      nextOfKinAddress: newProfile.nextOfKinAddress || '',
      nextOfKinPhone: newProfile.nextOfKinPhone || '',
      nextOfKinOccupation: newProfile.nextOfKinOccupation || '',
      nextOfKinEmployer: newProfile.nextOfKinEmployer || '',
      nextOfKinEmployerAddress: newProfile.nextOfKinEmployerAddress || ''
    };
  }
}, { immediate: true });
    
    // Computed property to check if all required fields are filled
    const isFormValid = computed(() => {
      return (
        credential.value.nextOfKinName &&
        credential.value.nextOfKinRelationship &&
        credential.value.nextOfKinEmail &&
        credential.value.nextOfKinAddress &&
        credential.value.nextOfKinPhone
      );
    });
    
    // Handle save logic
    const handleSave = async () => {
      await updateProfile({
        nextOfKinName: credential.value.nextOfKinName,
        nextOfKinRelationship: credential.value.nextOfKinRelationship,
        nextOfKinEmail: credential.value.nextOfKinEmail,
        nextOfKinAddress: credential.value.nextOfKinAddress,
        nextOfKinPhone: credential.value.nextOfKinPhone,
        nextOfKinOccupation: credential.value.nextOfKinOccupation,
        nextOfKinEmployer: credential.value.nextOfKinEmployer,
        nextOfKinEmployerAddress: credential.value.nextOfKinEmployerAddress
      });
      router.back();
    };
    
    definePageMeta({
  layout: "dashboard"
})
    </script>
    