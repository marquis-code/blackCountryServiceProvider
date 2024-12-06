<!-- Invoice.vue -->
<template>
  <div class="p-6 max-w-6xl mx-auto">
    <!-- <h1 class="text-xl font-semibold text-[#1D2739]">Invoice</h1> -->
    <!-- <InvoiceSearch /> -->
    <InvoiceList v-if="invoices.length && !loading" :invoices="invoices" />
    <section v-else-if="loading && !invoices.length">
        <div class="rounded-md p-4 w-full mx-auto">
          <div class="animate-pulse flex space-x-4">
            <div class="flex-1 space-y-6 py-1">
              <div class="h-44 bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
       </section>
       <InvoicePlaceholder v-else />
  </div> 
</template>
<script setup lang="ts">
import { useFetchInvoices } from '@/composables/modules/maintenance/useFetchInvoices'
const { loading, invoices, } =useFetchInvoices()
</script>

<style scoped>
/* Additional global styles can go here if needed */
</style>
