<template>
    <main>
        <InvoiceGenerateInvoiceForm @success="handleRedirection" title="Maintenance" />
    </main>
</template>

<script setup lang="ts">
const router = useRouter()
definePageMeta({
  layout: "dashboard"
})

const handleRedirection = () => {
  router.push('/dashboard/maintenance/success')
 }
</script>