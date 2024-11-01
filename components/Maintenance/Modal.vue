<template>
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg max-w-md w-full p-6">
        <h2 class="text-lg font-semibold text-gray-800 mb-4">
          <template v-if="type === 'accept'">Accept Request</template>
          <template v-else-if="type === 'decline'">Decline Request</template>
          <template v-else-if="type === 'updateStatus'">Update work status</template>
        </h2>
  
        <div v-if="type === 'updateStatus'" class="space-y-4">
          <label class="flex items-start space-x-3">
            <div>
              <p class="font-medium text-[#1D2739]">In-progress</p>
              <p class="text-sm text-[#667085] leading-snug">It indicates that you, the service provider is actively addressing the issue or performing the requested maintenance.</p>
            </div>
            <input type="radio" v-model="selectedStatus" value="In-progress" class="mt-1 h-10 w-10">
          </label>
  
          <label class="flex items-start space-x-3">
            <div>
              <p class="font-medium text-[#1D2739]">Completed</p>
              <p class="text-sm text-[#667085] leading-snug">It indicates that you, the service provider have addressed the issue.</p>
            </div>
            <input type="radio" v-model="selectedStatus" value="Completed" class="mt-1 h-6 w-6">
          </label>
        </div>
  
        <p v-else class="text-sm text-gray-600 mb-6">
          Are you sure you want to {{ type }} this maintenance request?
        </p>
  
        <div class="flex justify-end space-x-4 pt-14">
          <button @click="$emit('close')" class="px-4 py-3 w-full border-gray-100 border bg-white text-[#292929] rounded-lg text-sm">Cancel</button>
          <button @click="confirmAction" class="px-4 py-3 w-full rounded-lg" :class="type === 'updateStatus' ? 'bg-gray-900 text-white' : 'bg-[#292929] text-white'">
            <template v-if="type === 'accept'">Accept</template>
            <template v-else-if="type === 'decline'">Decline</template>
            <template v-else-if="type === 'updateStatus'">Update</template>
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { useCustomToast } from '@/composables/core/useCustomToast'
  const { showToast } = useCustomToast();
  import { ref } from 'vue';
  const router = useRouter()
  
  const props = defineProps({
    type: {
      type: String,
      required: true
    }
  });
  
  const emit = defineEmits(['close']);
  const selectedStatus = ref<string | null>(null);
  
  const confirmAction = () => {
    if (props.type === 'updateStatus' && !selectedStatus.value) {
        showToast({
          title: "Error",
          message: "Please select a status before updating",
          toastType: "error",
          duration: 3000
        });
      return;
    }
    emit('close');
    showToast({
          title: "Error",
          message: `${props.type === 'updateStatus' ? `Status updated to ${selectedStatus.value}` : `Request ${props.type}ed`}`,
          toastType: "error",
          duration: 3000
        });
    router.push('/dashboard/maintenance/invoice')
  };
  </script>
  
  <style scoped>
  /* Optional additional styling */
  </style>
  