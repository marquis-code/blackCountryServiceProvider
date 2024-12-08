<template>
  <div class="max-w-2xl p-6 border-[0.5px] border-gray-200 mx-auto bg-white rounded-lg">
    <h2 class="mb-4 font-medium text-[#1D2739]">Review invoice and send</h2>
    <div class="space-y-6">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <p class="text-[#667185] text-sm">Bill From</p>
          <p class="text-[#1D2739] text-sm">{{ formData?.billFrom ?? 'Nil' }}</p>
        </div>
        <div>
          <p class="text-[#667185] text-sm">Bill To</p>
          <p class="text-[#1D2739] text-sm">{{ formData?.billTo ?? 'Nil' }}</p>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <p class="text-[#667185] text-sm">Issued On</p>
          <p class="text-[#1D2739] text-sm">{{ formData?.issuedOn ?? 'Nil' }}</p>
        </div>
        <div>
          <p class="text-[#667185] text-sm">Due On</p>
          <p class="text-[#1D2739] text-sm">{{ formData?.dueOn ?? 'Nil' }}</p>
        </div>
      </div>

      <!-- Invoice Items Table -->
      <div class="space-y-4">
        <!-- Table Header -->
        <div class="grid grid-cols-4 gap-4 border-b-[0.5px] border-gray-100 pb-2 text-gray-800 font-semibold text-sm">
          <span class="text-[#1D2739] font-medium text-sm">Description</span>
          <span class="text-[#1D2739] font-medium text-sm">Price</span>
          <span class="text-[#1D2739] font-medium text-sm">Quantity</span>
          <span class="text-[#1D2739] font-medium text-sm">Total Amount</span>
        </div>

        <!-- Invoice Items List -->
        <div
          v-for="(item, index) in items"
          :key="index"
          class="grid grid-cols-4 gap-4 py-2 text-gray-600 text-sm border-b-[0.5px] border-gray-100"
        >
          <span class="text-sm">{{ item?.name ?? 'Nil' }}</span>
          <span class="text-sm">₦{{ formatCurrency(item.price) }}</span>
          <span class="text-sm">{{ item?.quantity ?? 'Nil' }}</span>
          <span class="text-sm">₦{{ formatCurrency(item.price * item.quantity) }}</span>
        </div>

        <!-- Grand Total -->
        <div class="flex justify-between items-center pt-4 font-semibold text-gray-800 text-">
          <span>Grand Total</span>
          <span>{{ formatCurrency(grandTotal) }}</span>
        </div>
        <div class="space-y-3 border-t-[0.5px] pt-3">
          <!-- {{ formatted }} -->
          <div class="flex justify-between items-center border-b-[0.5px] border-gray-25" v-for="(item, idx) in formatted" :key="key">
          <p class="text-sm font-medium">{{ item.key }}</p>
          <p class="text-sm">{{ item.value }}</p>
        </div>
        </div>
      </div>
    </div>

    <!-- Notification Message -->
    <p class="mt-4 text-xs text-gray-500 bg-[#E8EDFB] py-3 px-4 rounded-lg flex items-center gap-x-3">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M16.33 22H7.66C4.27 22 2 19.62 2 16.08V7.909C2 4.379 4.27 2 7.66 2H16.33C19.72 2 22 4.379 22 7.909V16.08C22 19.62 19.72 22 16.33 22ZM12.01 14.939C12.48 14.939 12.87 15.33 12.87 15.809C12.87 16.299 12.48 16.689 11.99 16.689C11.51 16.689 11.12 16.299 11.12 15.809C11.12 15.33 11.51 14.939 12.01 14.939ZM11.13 8.219C11.13 7.739 11.52 7.349 12.01 7.349C12.49 7.349 12.88 7.739 12.88 8.219V12.639C12.88 13.12 12.49 13.519 12.01 13.519C11.52 13.519 11.13 13.12 11.13 12.639V8.219Z"
              fill="#4A71E0" />
      </svg>
      Client will get notified to make payment with any credit card, debit card, or bank transfer.
    </p>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'
import { useFormatKeys } from '@/composables/core/useFormatKeys'
const { formatObjectKeys } = useFormatKeys()

// Define the structure of an Invoice Item
interface InvoiceItem {
  description: string
  price: number
  quantity: number
}


// Define props
const props = defineProps<{
  formData: {
    billFrom: string,
    billTo: string,
    issuedOn: string,
    dueOn: string
  },
  bankObj: {
    type: Object
  },
  items: InvoiceItem[],
  amount: number
}>()

const formatted = formatObjectKeys(props.bankObj)

// Calculate the grand total based on the items prop
const grandTotal = computed(() =>
  props.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
)

// Format currency with commas
const formatCurrency = (amount: number) => {
  return amount.toLocaleString('en-GB')
}
</script>
