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
  
          <button
            @click="confirmAction"
            class="px-4 py-3 w-full rounded-lg flex items-center justify-center"
            :class="{
              'bg-gray-900 text-white': type === 'updateStatus',
              'bg-[#292929] text-white': type !== 'updateStatus',
              'cursor-not-allowed opacity-50': isLoading // Disable button while loading
            }"
            :disabled="isLoading"
          >
            <template v-if="isLoading">
              <span class="loader"></span> 
              <span v-if="type === 'accept'">Accepting...</span>
              <span v-else-if="type === 'decline'">Declining...</span>
              <span v-else-if="type === 'updateStatus'">Updating...</span>
            </template>
            <template v-else>
              <span v-if="type === 'accept'">Accept</span>
              <span v-else-if="type === 'decline'">Decline</span>
              <span v-else-if="type === 'updateStatus'">Update</span>
            </template>
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { useCompleteMaintenenceRequest } from '@/composables/modules/maintenance/useCompleteMaintenenceRequest'
  import { useStartMaintenenceRequest } from '@/composables/modules/maintenance/useSetMaintenenceInProgress'
  import { useAcceptMaintenenceRequest } from '@/composables/modules/maintenance/useAcceptMaintenanceRequest'
    import { useDeclineMaintenenceRequest } from '@/composables/modules/maintenance/useRejectMaintenanceRequest'
  import { useCustomToast } from '@/composables/core/useCustomToast'
  const { showToast } = useCustomToast();
  const { loading: accepting, acceptMaintenenceRequest } = useAcceptMaintenenceRequest()
  const { loading: declining, declineMaintenenceRequest } = useDeclineMaintenenceRequest()
  const { startMaintenenceRequest, loading: starting } = useStartMaintenenceRequest()
  const { completeMaintenenceRequest, loading: completing } = useCompleteMaintenenceRequest()
  import { ref } from 'vue';
  const router = useRouter()
  
  const props = defineProps({
    type: {
      type: String,
      required: true
    },
    maintenanceRequest: {
      type: Object,
      required: true
    }
  });
  
  const emit = defineEmits(['close']);
  const selectedStatus = ref<string | null>(null);

  const confirmAction = async () => {
  if (props.type === 'updateStatus' && !selectedStatus.value) {
    showToast({
      title: "Error",
      message: "Please select a status before updating",
      toastType: "error",
      duration: 3000
    });
    return;
  }

  const actionMap = {
    accept: () => acceptMaintenenceRequest(props.maintenanceRequest.id),
    decline: () => declineMaintenenceRequest(props.maintenanceRequest.id),
    updateStatus: () => selectedStatus.value === 'In-progress' ? startMaintenenceRequest(props.maintenanceRequest.id) : selectedStatus.value === 'Completed' ?  completeMaintenenceRequest(props.maintenanceRequest.id) :  Promise.resolve() // No additional async action needed here
  };

  if (actionMap[props.type]) {
    await actionMap[props.type]();
  }

  emit('close');

  // showToast({
  //   title: "Success",
  //   message: props.type === 'updateStatus'
  //     ? `Status updated to ${selectedStatus.value}`
  //     : `Request ${props.type}ed`,
  //   toastType: "success",
  //   duration: 3000
  // });

  // router.push('/dashboard/maintenance/invoice');
};


// const isLoading = computed(() =>
//   props.type === 'accept' ? accepting.value :
//   props.type === 'decline' ? declining.value :
//   props.type === 'updateStatus' && starting.value
// );

const isLoading = computed(() => {
  if (selectedStatus.value === 'In-progress') {
    return starting.value; // Replace with your actual processing state
  }
  if (selectedStatus.value === 'Completed') {
    return completing.value; // Replace with your actual completing state
  }
  return props.type === 'accept' ? accepting.value :
         props.type === 'decline' ? declining.value :
         props.type === 'updateStatus' && starting.value;
});


  
  // const confirmAction = async () => {
  //   if (props.type === 'updateStatus' && !selectedStatus.value) {
  //       showToast({
  //         title: "Error",
  //         message: "Please select a status before updating",
  //         toastType: "error",
  //         duration: 3000
  //       });
  //     return;
  //   }

  //   if(props.type === 'accept'){
  //     await acceptMaintenenceRequest(props.maintenanceRequest.id)
  //     emit('close');
  //     router.push('/dashboard/maintenance/invoice')
  //   } else if (props.type === 'decline') {
  //     await declineMaintenenceRequest(props.maintenanceRequest.id)
  //     emit('close');
  //     router.push('/dashboard/maintenance/invoice')
  //   } else {
  //     emit('close');
  //   showToast({
  //         title: "Success",
  //         message: `${props.type === 'updateStatus' ? `Status updated to ${selectedStatus.value}` : `Request ${props.type}ed`}`,
  //         toastType: "success",
  //         duration: 3000
  //       });
  //   router.push('/dashboard/maintenance/invoice')
  //   }
  // };
  </script>
  
<style scoped>
.loader {
  border: 2px solid #f3f3f3;
  border-top: 2px solid #292929;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  animation: spin 0.6s linear infinite;
  margin-right: 0.5rem; /* Space between loader and text */
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

  </style>
  