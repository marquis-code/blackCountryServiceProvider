<template>
    <main>
     <InvoiceSuccess @success="handleRedirection" />
    </main>
 </template>

 <script setup lang="ts">
 const router = useRouter()
 const handleRedirection = () => {
    router.push('/dashboard/maintenance/2')
 }
</script>