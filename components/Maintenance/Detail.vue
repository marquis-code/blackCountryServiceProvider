<template>
  <main>
    <section v-if="maintenanceRequest && !loading" class="max-w-4xl mx-auto p-6 bg-white rounded-lg">
      <!-- Header with Navigation and Title -->
      <div class="flex items-center space-x-2 text-gray-600 text-sm mb-6">
        <button @click="goBack" class="text-gray-600 hover:text-gray-800">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="36" height="36" rx="18" fill="#EAEAEA" />
            <path d="M20.5 13C20.5 13 15.5 16.6824 15.5 18C15.5 19.3177 20.5 23 20.5 23" stroke="#1D2739"
              stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

        </button>
        <p>Maintenance |</p>
        <p class="text-[#1D2739] font-medium">{{ maintenanceRequest.type ??= 'Nil' }}</p>
      </div>

      <!-- {{ maintenanceRequest.tenant }} -->

      <!-- Maintenance Request Details -->
      <div class="flex justify-between items-center mb-6 border-[0.5px] border-gray-100 rounded-lg bg-white p-4">
        <div class="space-y-3">
          <h2 class="text-lg font-medium text-gray-800 mb-2">{{ maintenanceRequest.type ??= 'Nil' }}</h2>
          <span
            :class="`${colorMapGenerator(maintenanceRequest?.status)} px-3 py-2 text-xs font-semibold rounded-full`">
            {{ maintenanceRequest?.status ?? 'Nil' }}
          </span>
        </div>

        <div class="flex items-center space-x-3">
          <!-- Update Status Button -->
          <button v-if="maintenanceRequest?.status === 'accepted' || maintenanceRequest?.status === 'in_progress'"
            @click="isUpdateStatusModalOpen = true" class="px-4 py-3 text-white text-sm bg-[#292929] font-medium rounded-lg">
            Update Status
          </button>

          <!-- Generate Invoice Button -->
          <button v-if="maintenanceRequest?.status === 'completed'"
            @click="router.push(`/dashboard/maintenance/invoice?invoiceId=${route?.params?.id}`)"
            class="px-4 py-3 text-white text-sm bg-[#292929] font-medium rounded-lg">
            Generate Invoice
          </button>

          <!-- Accept and Decline Buttons -->
          <div
            v-else-if="maintenanceRequest?.status !== 'in_progress' && maintenanceRequest?.status !== 'completed' && maintenanceRequest?.status !== 'accepted' && maintenanceRequest?.status !== 'declined'"
            class="flex items-center space-x-3">
            <button @click="openModal('accept')"
              class="px-4 py-3 text-white text-sm bg-[#292929] font-medium rounded-lg">
              Accept
            </button>
            <button @click="openModal('decline')"
              class="px-4 py-3 text-[#1D192B] text-sm bg-[#EBE5E0] font-medium rounded-lg">
              Decline
            </button>
          </div>
        </div>

      </div>

      <div class="border-[0.5px] border-gray-100 rounded-lg bg-white p-4">
        <!-- User Profile and Details -->
        <div class="flex items-center rounded-lg mb-6">
          <img src="@/assets/img/female-avatar.png" alt="User profile" class="w-12 h-12 rounded-full mr-4" />
          <div class="flex-1 flex justify-between items-center">
            <h3 v-if="maintenanceRequest?.tenant" class="font-medium text-[#1D2739]">{{
              maintenanceRequest?.tenant?.firstName }} {{ maintenanceRequest?.tenant?.lastName }}</h3>
            <p v-else>Nil</p>
            <div>
              <div class="flex items-center">
                <a :href="`tel:${maintenanceRequest?.phoneNumber}`">
                  <img src="@/assets/icons/phone-call.svg" alt="call"
                    class="w-10 disabled bg-gray-50 h-10 rounded-full mr-4" />
                </a>
                <!-- <a href="tel:08147626503"><img src="@/assets/icons/phone-call.svg" alt="call" class="w-10 disabled bg-gray-50 h-10 rounded-full mr-4" /></a> -->
                <button @click="handleMessaging"><img src="@/assets/icons/phone-chat.svg" alt="chat"
                    class="w-10 disabled bg-gray-50 h-10 rounded-full mr-4" /></button>
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between">
          <p class="text- text-[#667185]">Urgency level</p>

          <div class="flex justify-end items-end">
            <span class="text-xs px-6 text-xs py-2 bg-[#FBEAE9] text-[#BA110B] font-semibold rounded-full">{{
              maintenanceRequest.urgencyLevel ??= 'Nil' }}</span>
          </div>
        </div>

        <!-- Description Section -->
        <div class="my-6">
          <h4 class="text-sm font-medium text-[#667185] mb-1">Description</h4>
          <p class="text-sm text-[#1D2739]">{{ maintenanceRequest.description ??= 'Nil' }}</p>
        </div>
      </div>


      <!-- Images Section -->
      <div class=" border-[0.5px] border-gray-100 rounded-lg bg-white p-4 mt-6">
        <h4 class="text-sm font-medium text-gray-700 mb-3">Images</h4>
        <div class="grid grid-cols-2 gap-3">
          <img v-for="(image, index) in maintenanceRequest.images" :key="index" :src="image" alt="Maintenance issue"
            class="rounded-lg object-cover h-60 w-full" />
        </div>
      </div>

      <!-- Modal for Accept/Decline Confirmation -->
      <MaintenanceModal :maintenanceRequest="maintenanceRequest" v-if="isUpdateStatusModalOpen" :type="modalType"
        @close="closeModal" />
    </section>
    <div v-else-if="!maintenanceRequest.length && loading" class="rounded-md p-4 max-w-4xl mx-auto mt-10">
      <div class="animate-pulse flex space-x-4">
        <div class="flex-1 space-y-6 py-1">
          <div class="h-96 bg-slate-200 rounded"></div>
        </div>
      </div>
    </div>
    <MaintenanceEmptyState v-else />


    <!-- Modal for Accepting Request -->
    <div v-if="isModalOpen && modalType === 'accept'" class="modal-overlay">
      <div class="modal-content space-y-3">
        <h3 class="text-lg font-medium pb-5">Accept maintenance request</h3>
       <div>
        <label class="text-sm">Date</label>
        <input type="date" v-model="selectedDate" placeholder="Select the date you plan on providing your service" class="input-field border rounded-lg bg-gray-25 rounded-lg border-[0.5px] text-sm py-3.5" />
       </div>
<div>
  <label class="text-sm">Time</label>
  <input type="time" placeholder="Select a time" v-model="selectedTime" class="input-field border rounded-lg bg-gray-25 rounded-lg border-[0.5px] text-sm py-3.5" />
</div>
        <div class="modal-actions pt-5 space-x-6">
          <button @click="closeModal" class="bg-white text-[#292929] border w-full rounded-lg text-sm py-3">Cancel</button>
          <button :disabled="accepting" @click="confirmAccept" class="confirm-button disabled:cursor-not-allowed disabled:opacity-25 bg-[#292929] w-full rounded-lg text-sm py-3">{{ accepting ?  'processing..' : 'Proceed' }}</button>
        </div>
      </div>
    </div>

    <!-- Modal for Declining Request -->
    <div v-if="isModalOpen && modalType === 'decline'" class="modal-overlay">
      <div class="modal-content">
        <h3 class="text-lg font-medium pb-5">Decline maintenance request</h3>
        <label class="text-sm pb-3">What’s your reason for rejecting this request</label>
        <textarea v-model="declineReason" class="input-field border mt-2 rounded-lg bg-gray-25 rounded-lg border-[0.5px] text-sm py-3.5 resize-none" rows="6"></textarea>
        <!-- <div class="modal-actions">
          <button @click="closeModal" class="cancel-button">Cancel</button>
          <button @click="confirmDecline" class="confirm-button">Continue</button>
        </div> -->
        <div class="modal-actions pt-6 space-x-6">
          <button @click="closeModal" class="bg-white text-[#292929] border w-full rounded-lg text-sm py-3">Cancel</button>
          <button :disabled="delining" @click="confirmDecline" class="confirm-button disabled:cursor-not-allowed disabled:opacity-2 bg-[#292929] w-full rounded-lg text-sm py-3">{{ declining ?  'processing..' : 'Continue' }}</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
  import { useAcceptMaintenenceRequest } from '@/composables/modules/maintenance/useAcceptMaintenanceRequest'
    import { useDeclineMaintenenceRequest } from '@/composables/modules/maintenance/useRejectMaintenanceRequest'
import { useFetchMaintenanceRequest } from '@/composables/modules/maintenance/useFetchMaintenenceRequest'
const { loading: accepting, acceptMaintenenceRequest, setPayload } = useAcceptMaintenenceRequest()
const { loading: declining, declineMaintenenceRequest, setPayloadObj } = useDeclineMaintenenceRequest()
const {
  maintenanceRequest, loading } = useFetchMaintenanceRequest()
import { ref } from 'vue';
const router = useRouter()
const route = useRoute()
const selectedDate = ref(null);
const selectedTime = ref(null);
const declineReason = ref('');

const handleMessaging = () => {
  localStorage.setItem('selected-user', JSON.stringify(maintenanceRequest.value.tenant))
  router.push({ path: '/dashboard/messages/', query: { userId: maintenanceRequest.value.tenant?.id } })
}


const isModalOpen = ref(false);

const isUpdateStatusModalOpen = ref(false);
const modalType = ref<string | null>(null);

// const openModal = (type: string) => {
//   modalType.value = type;
//   isModalOpen.value = true;
// };

const colorMapGenerator = (color: any) => {
  const colorMap = {
    'in_progress': 'text-[#DD900D] bg-[#FEF6E7]',
    'completed': 'text-[#099137] bg-[#E7F6EC]',
    'accepted': 'text-[#1D4ED8] bg-[#E8EDFB]',
    'assigned': 'text-[#1D2739] bg-[#F9FAFB]',
    'declined': 'bg-[#FBEAE9] text-[#BA110B]'
  }

  return colorMap[color] || '';
}

// const closeModal = () => {
//   isModalOpen.value = false;
// };

const goBack = () => {
  window.history.back();
};

const formatTime = (time) => {
  if (!time) return '';
  const [hour, minute] = time.split(':');
  let formattedHour = parseInt(hour, 10);
  const suffix = formattedHour >= 12 ? 'PM' : 'AM';
  formattedHour = formattedHour % 12 || 12;
  return `${String(formattedHour).padStart(2, '0')}:${minute} ${suffix}`;
};



const confirmAccept = async () => {
  console.log(`Accepted on ${selectedDate.value} at ${selectedTime.value}`);
  const formattedTime = formatTime(selectedTime.value);
  const payloadObj = {
     expectedStartDate: selectedDate.value,
     expectedStartTime: formattedTime
  }
  setPayload(payloadObj)
  await acceptMaintenenceRequest(maintenanceRequest.value.id)
  closeModal();
};

const confirmDecline = async () => {
  // console.log(`Declined with reason: ${declineReason.value}`);
  const payloadObj = {
     reason: declineReason.value
  }
  setPayloadObj(payloadObj)
  await declineMaintenenceRequest(maintenanceRequest.value.id)
  closeModal();
};

const openModal = (type) => {
  modalType.value = type;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  modalType.value = null;
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
}

.input-field {
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
}

.modal-actions {
  display: flex;
  justify-content: space-between;
}

.cancel-button {
  background: #ccc;
  padding: 10px;
  border-radius: 5px;
}

.confirm-button {
  color: white;
  padding: 10px;
  border-radius: 5px;
}
</style>
