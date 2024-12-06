<script setup lang="ts">
import { ref, computed } from 'vue'
import { useMarkAsPaid } from '@/composables/modules/maintenance/useMarkAsPaid'
  // const { formatCurrency } = useCurrencyFormatter()
  const {  markAsPaid: handleMarkInvoiceAsPaid, loading } = useMarkAsPaid()

//   const proceedToMarkAsPaid = async () => {
//   await handleMarkAsPaid(selectedInvoice?.value?.id)
//   openConfirmationModal.value = false
// }

const selectedIndividualInvoice = ref({})

const updateInvoiceStatus = (data: any) => {
  console.log(data, 'data here')
  selectedIndividualInvoice.value = data
  openConfirmationModal.value = true
}

interface MaintenanceRequest {
  id: string
  type: string
  urgencyLevel: string
  description: string
  images: string[]
  status: string
  isConfirmedCompleted: boolean | null
  satisfactoryLevel: string | null
  createdAt: string
}

interface Invoice {
  id: string
  billFrom: string
  billTo: string
  invoiceNumber: string | null
  issuedOn: string
  dueOn: string
  note: string
  status: 'PAID' | 'UNPAID'
  grandTotal: number
  createdAt: string
  maintenanceRequest: MaintenanceRequest
}

interface Metadata {
  total: number
  page: number
  perPage: number
  pages: number
}

// interface Props {
//   invoices: {
//     result: Invoice[]
//     metadata: Metadata
//   }
// }

// const props = defineProps<Props>()

const props = defineProps({
    invoices: {
      type: Array
    }
  })

const emit = defineEmits(['update:invoices', 'markAsPaid'])

const selectedInvoice = ref({})

const selectedInvoices = ref<Set<string>>(new Set())
const selectAll = ref(false)

const unpaidInvoices = computed(() => {
  return props.invoices.filter(invoice => invoice.status !== 'PAID')
})

const toggleSelectAll = () => {
  selectAll.value = !selectAll.value
  if (selectAll.value) {
    selectedInvoices.value = new Set(
      unpaidInvoices.value.map(invoice => invoice.id)
    )
  } else {
    selectedInvoices.value.clear()
  }
}

const toggleInvoice = (invoice: Invoice) => {
  if (invoice.status !== 'PAID') {
    if (selectedInvoices.value.has(invoice.id)) {
      selectedInvoices.value.delete(invoice.id)
    } else {
      selectedInvoices.value.add(invoice.id)
    }
    selectAll.value = unpaidInvoices.value.every(inv => 
      selectedInvoices.value.has(inv.id)
    )
  }
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-GB')
}


const openConfirmationModal = ref(false)

const handleMarkAsPaid = (data: any) => {
  console.log(data, 'data here')
  selectedInvoice.value = data
  openConfirmationModal.value = true
}

const proceedToMarkAsPaid = async () => {
  await handleMarkInvoiceAsPaid(selectedInvoice?.value?.id)
  openConfirmationModal.value = false

}

const markAsPaid = async () => {
  if (selectedInvoices.value.size === 0) return
  
  try {
    emit('markAsPaid', Array.from(selectedInvoices.value))
    selectedInvoices.value.clear()
    selectAll.value = false
  } catch (error) {
    console.error('Error marking invoices as paid:', error)
  }
}

const isChecked = (invoice: Invoice) => {
  return selectedInvoices.value.has(invoice.id)
}
</script>

<template>
<main>
  <div class="px-4 max-w-7xl mx-auto">
    <div class="flex justify-between items-center mb-2">
      <h1 class="text-2xl font-bold text-gray-800">Invoice</h1>
      <!-- <button 
        @click="markAsPaid"
        :disabled="selectedInvoices.size === 0"
        class="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Mark as paid
      </button> -->
    </div>

    <div class="mb-6 flex w-full gap-x-4">
      <div class="relative flex-1">
        <input
          type="text"
          placeholder="Search"
          class="w-full px-4 py-3  bg-gray-50 outline-none rounded-md pl-10"
        />
        <div class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
      <button 
        @click="markAsPaid"
        :disabled="selectedInvoices.size === 0"
        class="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Mark as paid
      </button>
    </div>

    <div class="overflow-x-auto border-[0.5px] border-gray-100 bg-white rounded-lg">
      <table class="w-full">
        <thead>
          <tr class="border-b-[0.5px]">
            <th class="px-4 py-6 text-sm font-medium text-left text-[#1D2739]">
              <input
                type="checkbox"
                :checked="selectAll"
                @change="toggleSelectAll"
                class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
            </th>
            <th class="px-4 py-6 text-sm font-medium text-left text-[#1D2739]">Invoice ID</th>
            <th class="px-4 py-6 text-sm font-medium text-left text-[#1D2739]">From</th>
            <th class="px-4 py-6 text-sm font-medium text-left text-[#1D2739]">To</th>
            <th class="px-4 py-6 text-sm font-medium text-left text-[#1D2739]">Amount (₦)</th>
            <th class="px-4 py-6 text-sm font-medium text-left text-[#1D2739]">Issue Date</th>
            <th class="px-4 py-6 text-sm font-medium text-left text-[#1D2739]">Due Date</th>
            <th class="px-4 py-6 text-sm font-medium text-left text-[#1D2739]">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="invoice in invoices" :key="invoice.id" class="border-b-[0.5px] hover:bg-gray-50">
            <td class="px-4 py-6 text-[#667185] font-light text-sm">
              <input
                type="checkbox"
                :checked="isChecked(invoice)"
                :disabled="invoice.status === 'PAID'"
                @change="toggleInvoice(invoice)"
                class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
            </td>
            <td class="px-4 py-6 text-[#667185] font-light text-sm">{{ invoice.id.slice(0, 8) }}</td>
            <td class="px-4 py-6 text-[#667185] font-light text-sm">{{ invoice.billFrom }}</td>
            <td class="px-4 py-6 text-[#667185] font-light text-sm">{{ invoice.billTo }}</td>
            <td class="px-4 py-6 text-[#667185] font-light text-sm">{{ invoice.grandTotal.toLocaleString() }}</td>
            <td class="px-4 py-6 text-[#667185] font-light text-sm">{{ formatDate(invoice.issuedOn) }}</td>
            <td class="px-4 py-6 text-[#667185] font-light text-sm">{{ formatDate(invoice.dueOn) }}</td>
            <td class="px-4 py-6 text-[#667185] font-light text-sm">
              <span
                :class="{
                  'px-3 py-1 rounded-full text-sm': true,
                  'bg-green-100 text-green-800': invoice.status === 'PAID',
                  'bg-red-100 text-red-800': invoice.status === 'UNPAID'
                }"
              >
                {{ invoice.status }}
              </span>
              <button @click="updateInvoiceStatus(invoice)" type="button" v-if="invoice.status === 'NOT PAID'" class="cursor-pointer text-sm hover:underline">Mark as Paid</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <CoreModalWithoutCloseBtn @close="openConfirmationModal = false" :isOpen="openConfirmationModal">
      <div
          class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
          <div
            class="bg-white rounded-xl p-6 max-w-sm w-full text-center shadow-lg"
          >
            <div
              class="flex justify-center items-center bg-yellow-500 rounded-full w-16 h-16 mx-auto mb-4"
            >
              <svg
                width="65"
                height="64"
                viewBox="0 0 65 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.921875"
                  width="63.1513"
                  height="64"
                  rx="31.5756"
                  fill="#F3A218"
                />
                <path
                  d="M42.2031 32.375C42.2031 26.8521 37.7259 22.375 32.2031 22.375C26.6803 22.375 22.2031 26.8521 22.2031 32.375C22.2031 37.8978 26.6803 42.375 32.2031 42.375C37.7259 42.375 42.2031 37.8978 42.2031 32.375Z"
                  stroke="white"
                  stroke-width="1.5"
                />
                <path
                  d="M32.4453 37.375V32.375C32.4453 31.9036 32.4453 31.6679 32.2988 31.5214C32.1524 31.375 31.9167 31.375 31.4453 31.375"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M32.1953 28.377H32.2043"
                  stroke="white"
                  stroke-width="3.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <h2 class="text-lg font-semibold text-gray-700 mb-2">Confirm!</h2>
            <p class="text-gray-500 mb-6">Are you sure you mark as paid?</p>
            <div class="space-y-3">
              <button
                type="button"
                class="w-full disabled:cursor-not-allowed text-sm disabled:opacity-25 bg-[#292929] text-white py-3.5 rounded-md font-semibold"
                @click="proceedToMarkAsPaid"
                :disabled="loading"
              >
                 {{  loading ? 'processing..' : 'Yes, Continue' }}
              </button>
              <button
                type="button"
                class="w-full bg-[#EBE5E0] text-gray-700 text-sm py-3.5 rounded-md font-semibold"
                @click="openConfirmationModal = false"
              >
                Nah, Just Kidding
              </button>
            </div>
          </div>
        </div>
    </CoreModalWithoutCloseBtn>
</main>
</template>
