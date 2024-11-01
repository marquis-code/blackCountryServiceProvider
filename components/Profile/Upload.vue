<template>
    <div class="mt-6 bg-[#F0F2F5] rounded-lg p-6 border-dashed border-2 border-[#F0F2F5] justify-center text-center flex items-center">
          <div id="image-preview" class="mb-4">
            <img
              v-if="user.profilePicture || profileImage"
              :src="profileImage || user.profilePicture"
              alt="Profile Preview"
              class="h-20 w-20 rounded-full object-cover"
            />
          </div>
  
          <!-- Add photo button is always visible -->
          <div class="flex justify-center items-center flex-col w-full">
            <div class="flex justify-center items-center">
              <button @click="triggerFileUpload" class="bg-[#5B8469] text-white py-2 px-4 rounded-md flex items-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 2V10" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M2 6H10" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span v-if="loading">Uploading...</span>
                <span v-else> {{user.profilePicture ? 'Change Photo' : 'Add Photo'}}</span>
              </button>
              <input
                type="file"
                accept="image/*"
                class="hidden"
                ref="fileInput"
                @change="onFileSelected"
              />
            </div>
            <p class="text-[#1D2739] text-sm mt-2">Accepts jpg & png, 2MB size max/each</p>
          </div>
        </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { dynamicIcons } from "@/utils/assets";
import { useUser } from '@/composables/auth/user';
import { useUploadFile } from '@/composables/core/upload'
import { use_update_profile } from '@/composables/auth/updateProfile'
const router = useRouter()

const { user } = useUser();
const { uploadFile, loading, uploadResponse } = useUploadFile();
const { credential, updateProfile, loading: updating } = use_update_profile();

// Profile image state
const profileImage = ref<string | null>(null);
const fileInput = ref<HTMLInputElement | null>(null);

// Function to trigger file upload
const triggerFileUpload = () => {
  fileInput.value?.click();
};

// Function to handle file selection and upload
const onFileSelected = async (event: Event) => {
const file = (event.target as HTMLInputElement).files?.[0];
if (file) {
  // Preview the image locally
  const reader = new FileReader();
  reader.onload = () => {
    profileImage.value = reader.result as string;
  };
  reader.readAsDataURL(file);

  // Upload the file using the composable
  await uploadFile(file);

  if (uploadResponse.value?.secure_url) {
    // Update profile with the secure URL after upload
    const uploadPayload = { profilePicture: uploadResponse.value.secure_url }
    await updateProfile(uploadPayload);
  }
}
};
</script>

<style scoped></style>
