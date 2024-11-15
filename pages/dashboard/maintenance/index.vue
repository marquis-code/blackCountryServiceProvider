<template>
    <main>
     <section v-if="maintenanceRequests.length && !loading" class="max-w-4xl mx-auto bg-white rounded-lg">
     <MaintenanceApp />
     </section>
     <div v-else-if="!maintenanceRequests.length && loading" class="rounded-md p-4 max-w-4xl mx-auto mt-10">
         <div class="animate-pulse flex space-x-4">
           <div class="flex-1 space-y-6 py-1">
             <div class="h-96 bg-slate-200 rounded"></div>
           </div>
         </div>
       </div>
     <MaintenanceEmptyState  v-else />
    </main>
   </template>
   
   <script lang="ts" setup>
   import { useFetchMaintenanceRequests } from '@/composables/modules/maintenance/useFetchMaintenanceRequests'
   const { maintenanceRequests, loading } = useFetchMaintenanceRequests()
   
   definePageMeta({
   layout: "dashboard"
 })
 
   </script>
   
   <style scoped>
   /* Additional styling if needed */
   </style>
   