<template>
    <div class="max-w-4xl mx-auto mt-6">
      <div class="overflow-hidden border-[0.5px] border-gray-100 bg-white rounded-lg">
        <table class="min-w-full bg-white">
          <thead>
            <tr>
              <th class="px-4 py-6 text-sm font-medium text-left text-[#1D2739]">Invoice ID</th>
              <th class="px-4 py-6 text-sm font-medium text-left text-[#1D2739]">Sent to</th>
              <th class="px-4 py-6 text-sm font-medium text-left text-[#1D2739]">Amount (₦)</th>
              <th class="px-4 py-6 text-sm font-medium text-left text-[#1D2739]">Date</th>
              <th class="px-4 py-6 text-sm font-medium text-left text-[#1D2739]">Status</th>
              <th class="px-4 py-6 text-sm font-medium text-left text-[#1D2739]">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="invoice in invoices" :key="invoice.id" class="border-t border-gray-25">
              <td class="px-4 py-6 text-[#667185] font-light text-sm">#{{ invoice.id }}</td>
              <td class="px-4 py-6 text-[#667185] font-light text-sm">{{ invoice.recipient }}</td>
              <td class="px-4 py-6 text-[#667185] font-light text-sm">{{ invoice.amount }}</td>
              <td class="px-4 py-6 text-[#667185] font-light text-sm">{{ invoice.date }}</td>
              <td class="px-4 py-6">
                <span :class="invoice.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'" class="px-4 py-2 text-xs font-semibold rounded-full">
                  {{ invoice.status }}
                </span>
              </td>
              <td class="px-4  py-3.5 text-green-700">
                <span v-if="invoice.status === 'Not Paid'" class="cursor-pointer text-sm hover:underline">Mark as Paid</span>
                <span v-else>
                  <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.3151 21.9311 10.6462 21.8 10" stroke="#099137" stroke-width="1.5" stroke-linecap="round"/>
<path d="M8 12.5C8 12.5 9.5 12.5 11.5 16C11.5 16 17.0588 6.83333 22 5" stroke="#099137" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const props = defineProps({
    invoices: {
      type: Array
    }
  })
  </script>
  
