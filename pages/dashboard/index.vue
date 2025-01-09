<template>
  <main>
    <section class="bg-gray-25">

      <div class="min-h-screen max-w-5xl mx-auto p-4 lg:p-6">
        <h1 class="text-lg font-semibold mb-4">Welcome <span class="text-">{{ `${user?.firstName} ${user?.lastName}` ?? 'Nil' }}</span> 👋</h1>


      
        <div v-if="!loading" class="grid grid-cols-1 sm:grid-cols-4 gap-2 mb-6">
          <DashboardStatCard title="Maintenance request" :count="maintenanceRequests.length" />
          <DashboardStatCard title="Upcoming" :count="upcomingCount" />
          <DashboardStatCard title="Completed" :count="completedCount" />
          <DashboardStatCard title="Total Earnings" count="0" />
        </div>
        <section v-else-if="loading">
        <div class="rounded-md p-4 w-full mx-auto">
          <div class="animate-pulse flex space-x-4">
            <div class="flex-1 space-y-6 py-1">
              <div class="h-44 bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
       </section>
       <section v-else class="flex flex-col justify-between items-center space-y-2 mt-10">
             <svg width="152" height="124" viewBox="0 0 152 124" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="76" cy="58" r="52" fill="#EAEAEA"/>
            <circle cx="21" cy="25" r="5" fill="#BDBDBD"/>
            <circle cx="18" cy="109" r="7" fill="#BDBDBD"/>
            <circle cx="145" cy="41" r="7" fill="#BDBDBD"/>
            <circle cx="134" cy="14" r="4" fill="#BDBDBD"/>
            <g filter="url(#filter0_b_6853_118795)">
            <rect x="52" y="34" width="48" height="48" rx="24" fill="#9D9D9D"/>
            <path d="M85.9598 56.9707C86.0134 57.8009 86.0134 58.6607 85.9598 59.4909C85.6856 63.7332 82.3536 67.1125 78.1706 67.3905C76.7435 67.4854 75.2536 67.4852 73.8294 67.3905C73.339 67.3579 72.8044 67.2409 72.344 67.0513C71.8318 66.8403 71.5756 66.7348 71.4454 66.7508C71.3153 66.7668 71.1264 66.9061 70.7487 67.1846C70.0827 67.6757 69.2437 68.0285 67.9994 67.9982C67.3703 67.9829 67.0557 67.9752 66.9148 67.7351C66.774 67.495 66.9494 67.1626 67.3002 66.4978C67.7867 65.5758 68.095 64.5203 67.6279 63.6746C66.8234 62.4666 66.1401 61.036 66.0402 59.4909C65.9866 58.6607 65.9866 57.8009 66.0402 56.9707C66.3144 52.7284 69.6464 49.3491 73.8294 49.0711C75.0318 48.9911 75.2812 48.9786 76.5 49.0337" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M72.5 61H79.5M72.5 56H76" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M86 51.5C86 53.433 84.433 55 82.5 55C80.567 55 79 53.433 79 51.5C79 49.567 80.567 48 82.5 48C84.433 48 86 49.567 86 51.5Z" stroke="white" stroke-width="1.5"/>
            </g>
            <defs>
            <filter id="filter0_b_6853_118795" x="44" y="26" width="64" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="4"/>
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_6853_118795"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_6853_118795" result="shape"/>
            </filter>
            </defs>
            </svg>
            <h2 class="text-[#1D2739]">No Statistics available</h2>
      </section>
        
        <div class="rounded-lg mb-4 space-y-3 overflow-hidden w-full">
        <h2 class="text- font-medium mb-2 border-[0.5px] text-[#1D2739] border-gray-50 px-6 bg-white rounded-lg py-4">
          Upcoming maintenance
        </h2>
        <DashboardMaintanceRequests />
         <!-- <MaintenanceApp /> -->
    </div>


        <div class="rounded-lg mb-4 space-y-3">
          <!-- <div class="flex justify-between items-center w-full px-6 bg-white rounded-lg py-4 border-[0.5px] border-gray-25">
            <h2 class="text- font-medium text-[#1D2739] mb-2">Recent
              transactions
            </h2>
            <a href="#" class="text-[#D0D5DD] hover:underline">View all</a>
          </div> -->
          <DashboardTransactionsList />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
   import { useFetchMaintenanceRequests } from '@/composables/modules/maintenance/useFetchMaintenanceRequests'
   const { maintenanceRequests, loading } = useFetchMaintenanceRequests()
  import { useUser } from '@/composables/auth/user'
  const { user } = useUser()
definePageMeta({
  layout: "dashboard"
})

// Count of upcoming requests
const upcomingCount = computed(() =>
    maintenanceRequests.value.filter((req) => req.status.toLowerCase() === 'assigned').length
);

// Count of completed requests
const completedCount = computed(() =>
    maintenanceRequests.value.filter((req) => req.status.toLowerCase() === 'completed').length
);

</script>
