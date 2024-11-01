<template>
    <section class="max-w-3xl mx-auto p-6 bg-white rounded-lg">
      <h1 class="text-xl font-medium py-3 text-[#1D2739]">Maintenance</h1>
  
    
      <MaintenanceTabs :tabs="tabs" v-model="activeTab" />
  

      <div v-for="(group, date) in filteredRequests" :key="date" class="mt-4 space-y-3">
        <p class="text-sm text-gray-500 font-medium text-[#667185] font-lioght pl-6 py-4 bg-white border-[0.5px] bg-white border-gray-50 rounded-lg">{{ date }}</p>
        <MaintenanceRequest v-for="request in group" :key="request.id" :request="request" />
      </div>
    </section>
  </template>
  
  <script lang="ts" setup>
  import { ref, computed } from 'vue';
  
  const tabs = ['All', 'Accepted', 'Pending', 'Completed', 'Declined'];
  const activeTab = ref<string>('All');
  
  // Sample data for maintenance requests

  const props = defineProps({
    requests: {
        type: Array
    }
  })

  
  // Filtered maintenance requests based on active tab
  const filteredRequests = computed(() => {
    if (activeTab.value === 'All') {
      return groupByDate(props.requests);
    }
    return groupByDate(props.requests.filter(request => request.status === activeTab.value));
  });
  
  // Helper function to group requests by date
  const groupByDate = (requests) => {
    return requests.reduce((groups, request) => {
      (groups[request.date] = groups[request.date] || []).push(request);
      return groups;
    }, {});
  };
  </script>
  