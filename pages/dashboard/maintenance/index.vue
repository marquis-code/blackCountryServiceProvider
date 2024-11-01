<template>
   <main>
    <section v-if="!requests.length" class="max-w-2xl mx-auto p-4 bg-white rounded-lg">
      <h1 class="text-xl font-medium py-3 text-[#1D2739]">Maintenance</h1>

      <MaintenanceEmptyState />
    </section>
    <MaintenanceList v-else :requests="requests" />
   </main>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  
  const tabs = ['All', 'Upcoming', 'Completed', 'Cancelled', 'Declined'];
  const activeTab = ref<string>('All');
  
  const setActiveTab = (tab: string) => {
    activeTab.value = tab;
  };

  definePageMeta({
  layout: "dashboard"
})

const requests = ref([
    { id: 1, date: '23rd March, 2024', type: 'Plumbing Service', location: 'Iconic Tower, off Ajose Adegun VI, Lagos.', status: 'New request', statusColor: 'bg-[#F9FAFB]', textColor: 'text-[#1D2739]', dueDate: '03/04/2024' },
    { id: 2, date: '23rd March, 2024', type: 'Plumbing Service', location: 'Iconic Tower, off Ajose Adegun VI, Lagos.', status: 'Accepted', statusColor: 'bg-[#E8EDFB]', textColor: 'text-[#1D4ED8]', dueDate: '03/04/2024' },
    { id: 3, date: '23rd March, 2024', type: 'Plumbing Service', location: 'Iconic Tower, off Ajose Adegun VI, Lagos.', status: 'Upcoming', statusColor: 'bg-[#FEF6E7]', textColor: 'text-[#F79009]', dueDate: '03/04/2024' },
    { id: 4, date: '23rd March, 2024', type: 'Plumbing Service', location: 'Flat 12, Iconic Tower, off Ajose Adegun VI, Lagos.', status: 'Cancelled', statusColor: 'bg-[#F9FAFB]', textColor: 'text-[#1D2739]', dueDate: '03/04/2024' },
    { id: 5, date: '23rd March, 2024', type: 'Plumbing Service', location: 'Iconic Tower, off Ajose Adegun VI, Lagos.', status: 'Completed', statusColor: 'bg-[#E7F6EC]', textColor: 'text-[#099137]', dueDate: '03/04/2024' },
    { id: 6, date: '23rd March, 2024', type: 'Appliance repair', location: 'Iconic Tower, off Ajose Adegun VI, Lagos.', status: 'Cancelled', statusColor: 'bg-[#F9FAFB]', textColor: 'text-[#1D2739]', dueDate: '03/04/2024' },
  ]);

  </script>
  
  <style scoped>
  /* Additional styling if needed */
  </style>
  