<!-- Invoice.vue -->
<template>
  <div class="p-6 max-w-3xl mx-auto">
    <h1 class="text-xl font-semibold text-[#1D2739]">Invoice</h1>
    <InvoiceSearch />
    <InvoicePlaceholder v-if="!invoices.length" />
    <InvoiceList v-if="invoices.length" :invoices="invoices" />
  </div> 
</template>
<script setup lang="ts">
 const invoices = [
    { id: "1075478", recipient: "Gary Schimmel", amount: "116,129.52", date: "22/03/2024", status: "Paid" },
    { id: "1075478", recipient: "Jay Writting", amount: "116,129.52", date: "22/03/2024", status: "Not Paid" },
    { id: "1075478", recipient: "Jennie Boyer", amount: "116,129.52", date: "22/03/2024", status: "Paid" },
  ];
</script>

<style scoped>
/* Additional global styles can go here if needed */
</style>
