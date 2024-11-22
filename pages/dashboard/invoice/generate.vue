<template>
    <main>
        <InvoiceGenerateInvoiceForm @success="handleRedirection" title="Invoice" />
    </main>
</template>

<script setup lang="ts">
const router = useRouter()
definePageMeta({
  layout: "dashboard"
})

const handleRedirection = () => {
  //  router.push('/dashboard/invoice/success')
 }
</script>