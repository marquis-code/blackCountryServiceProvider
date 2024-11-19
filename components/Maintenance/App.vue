<template>
    <main>
        <section class="max-w-3xl mx-auto">
            <div class="p-4 min-h-screen space-y-4">
                <h1 class="text-xl font-medium py-3 text-[#1D2739]">Maintenance</h1>
                <MaintenanceHeaderActions @selected="handleSelected" />

                <div v-if="!requestDates.some(date => filteredRequestsByStatus(date).length > 0) && !loading"
                    class="flex flex-col items-center mt-20 text-gray-500 border-[0.5px] border-gray-100 py-20 rounded-lg">
                    <div class="flex items-center justify-center mb-4">
                        <svg width="152" height="124" viewBox="0 0 152 124" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <circle cx="76" cy="58" r="52" fill="#EAEAEA" />
                            <circle cx="21" cy="25" r="5" fill="#BDBDBD" />
                            <circle cx="18" cy="109" r="7" fill="#BDBDBD" />
                            <circle cx="145" cy="41" r="7" fill="#BDBDBD" />
                            <circle cx="134" cy="14" r="4" fill="#BDBDBD" />
                            <g filter="url(#filter0_b_6053_208442)">
                                <rect x="52" y="34" width="48" height="48" rx="24" fill="#9D9D9D" />
                                <path
                                    d="M83 51C83.3437 51.0502 83.6777 51.113 84 51.1874C84.5912 51.324 84.8868 51.3923 85.241 51.6749C85.443 51.8361 85.6952 52.1552 85.8059 52.3897C86 52.801 86 53.1998 86 53.9974V64.8599C86 65.853 84.96 66.5351 84 66.3134C83.0803 66.1009 82.0659 65.9832 81 65.9832C79.0829 65.9832 77.3325 66.364 76 66.9916C74.6675 67.6192 72.9171 68 71 68C69.9341 68 68.9197 67.8823 68 67.6699C67.4088 67.5333 67.1132 67.465 66.759 67.1824C66.557 67.0212 66.3048 66.7021 66.1941 66.4676C66 66.0563 66 65.6575 66 64.8599V53.9974C66 53.0043 67.04 52.3222 68 52.544C68.3223 52.6184 68.6563 52.6812 69 52.7314"
                                    stroke="white" stroke-width="2" stroke-linecap="round" />
                                <path
                                    d="M78.5 59.5C78.5 60.8807 77.3807 62 76 62C74.6193 62 73.5 60.8807 73.5 59.5C73.5 58.1193 74.6193 57 76 57C77.3807 57 78.5 58.1193 78.5 59.5Z"
                                    stroke="white" stroke-width="1.5" />
                                <path d="M69.5 60.5V60.509" stroke="white" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M82.5 58.4922V58.5012" stroke="white" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M76 48V52M72 51V53M80 49V51" stroke="white" stroke-width="1.5"
                                    stroke-linecap="round" />
                            </g>
                            <defs>
                                <filter id="filter0_b_6053_208442" x="44" y="26" width="64" height="64"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
                                    <feComposite in2="SourceAlpha" operator="in"
                                        result="effect1_backgroundBlur_6053_208442" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_6053_208442"
                                        result="shape" />
                                </filter>
                            </defs>
                        </svg>

                    </div>
                    <p>No {{ selectedStatus  }} Maintenence request available </p>
                </div>

               
                <div v-else-if="!loading && requestDates.length">
                    <div class="space-y-4">
                        <div v-for="date in requestDates" :key="date" class="space-y-2">
                            <h3 v-if="filteredRequestsByStatus(date)?.length" class="text-gray-400 text-sm p-4 bg-white border-[0.5px] border-gray-50 rounded-lg">
                                {{ formatDate(date) }}
                            </h3>
                            <div v-for="request in filteredRequestsByStatus(date)" :key="request.id"
                                @click="handleSelectedRequest(request)"
                                class="flex items-center cursor-pointer justify-between p-4 bg-white border-[0.5px] border-gray-50 rounded-lg">
                                <div class="flex items-center gap-x-3">
                                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect width="44" height="44" rx="22" fill="#F0F5FD" />
                                        <path
                                            d="M15.5037 24.4221C15.5264 24.2067 15.6825 24.033 15.9948 23.6857L16.6822 22.9173C16.8502 22.7045 16.9694 22.334 16.9694 22.0005C16.9694 21.6673 16.8502 21.2967 16.6822 21.084L15.9948 20.3155C15.6825 19.9682 15.5264 19.7946 15.5037 19.5791C15.4811 19.3636 15.5977 19.1612 15.831 18.7564L16.1601 18.1853C16.4089 17.7534 16.5334 17.5375 16.7451 17.4514C16.9568 17.3653 17.1962 17.4332 17.6751 17.5691L18.4886 17.7982C18.7944 17.8687 19.1151 17.8287 19.3943 17.6853L19.6189 17.5557C19.8583 17.4024 20.0424 17.1763 20.1443 16.9106L20.367 16.2457C20.5133 15.8057 20.5865 15.5857 20.7608 15.4598C20.9351 15.334 21.1665 15.334 21.6294 15.334H22.3726C22.8355 15.334 23.067 15.334 23.2412 15.4598C23.4155 15.5857 23.4887 15.8057 23.6351 16.2457L23.8577 16.9106C23.9596 17.1763 24.1437 17.4024 24.3831 17.5557L24.6077 17.6853C24.8869 17.8287 25.2077 17.8687 25.5134 17.7982L26.3269 17.5691C26.8057 17.4332 27.0452 17.3653 27.2569 17.4514C27.4687 17.5375 27.5931 17.7534 27.8419 18.1853L28.171 18.7564C28.4043 19.1612 28.5209 19.3636 28.4983 19.5791C28.4756 19.7946 28.3195 19.9682 28.0072 20.3155L27.3198 21.084C27.1519 21.2967 27.0325 21.6673 27.0325 22.0005C27.0325 22.334 27.1518 22.7045 27.3198 22.9173L28.0072 23.6857C28.3195 24.033 28.4756 24.2067 28.4983 24.4221C28.5209 24.6377 28.4043 24.8401 28.171 25.2449L27.8419 25.8159C27.5931 26.2478 27.4687 26.4638 27.2569 26.5499C27.0452 26.636 26.8057 26.5681 26.3269 26.4321L25.5134 26.203C25.2076 26.1325 24.8868 26.1725 24.6076 26.316L24.3831 26.4456C24.1437 26.5989 23.9596 26.8249 23.8577 27.0907L23.6351 27.7557C23.4887 28.1957 23.4155 28.4157 23.2412 28.5415C23.067 28.6673 22.8355 28.6673 22.3726 28.6673H21.6294C21.1665 28.6673 20.9351 28.6673 20.7608 28.5415C20.5865 28.4157 20.5133 28.1957 20.367 27.7557"
                                            stroke="#6A9AEB" stroke-linecap="round" />
                                    </svg>
                                    <div class="space-y-1">
                                        <h4 class="text-[#1D2739] text-sm">{{ request.type }}</h4>
                                        <p class="flex items-center text-sm gap-x-2">
                                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7.94366 12.9642C7.69072 13.201 7.35257 13.3334 7.00064 13.3334C6.64872 13.3334 6.31062 13.201 6.05762 12.9642C3.74093 10.7819 0.636277 8.34411 2.15032 4.80488C2.96895 2.89126 4.93403 1.66675 7.00064 1.66675C9.06727 1.66675 11.0323 2.89126 11.851 4.80488C13.3631 8.33967 10.2661 10.7894 7.94366 12.9642Z"
                                                    fill="#5B8469" stroke="#5B8469" />
                                                <path
                                                    d="M9.04036 6.91667C9.04036 8.04425 8.12628 8.95833 6.9987 8.95833C5.87111 8.95833 4.95703 8.04425 4.95703 6.91667C4.95703 5.78908 5.87111 4.875 6.9987 4.875C8.12628 4.875 9.04036 5.78908 9.04036 6.91667Z"
                                                    fill="white" stroke="#5B8469" />
                                            </svg>

                                            {{ request.house.address ??= 'Nil' }}
                                        </p>

                                    </div>
                                </div>
                                <div class="flex flex-col justify-end items-end space-y-2">
                                    <span :class="statusClasses(request.status)"
                                        class="px-2 py-1 text-xs font-semibold rounded-full">
                                        {{ request.status }}
                                    </span>
                                    <p class="text-xs text-[#667185]">{{ request.date }}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <section v-else="loading">
                    <div class="rounded-md p-4 w-full mx-auto mt-4">
                        <div class="animate-pulse h-60 bg-slate-200 flex space-x-4"></div>
                    </div>
                </section>

            </div>
        </section>
    </main>
</template>


<script lang="ts" setup>
import { useFetchMaintenanceRequests } from '@/composables/modules/maintenance/useFetchMaintenanceRequests'
import { ref, computed } from 'vue'
const { maintenanceRequests, loading } = useFetchMaintenanceRequests()
const router = useRouter()

// State to store selected status filter
const selectedStatus = ref<string>('All requests')

// Format backend data into a format compatible with frontend display
const requests = computed(() =>
    maintenanceRequests.value.map((req) => ({
        ...req,
        id: req.id,
        type: req.type,
        date: new Date(req.createdAt).toISOString().split('T')[0],
        status: req.status.charAt(0).toUpperCase() + req.status.slice(1), // Capitalize status
    }))
)

// Extract unique dates from requests and sort them
const requestDates = computed(() =>
    [...new Set(requests.value.map((req) => req.date))].sort()
)

const handleSelectedRequest = (item: any) => {
    router.push(`/dashboard/maintenance/${item.id}`)
}

// Filter requests based on selected status and date
const filteredRequestsByStatus = (date: string) => {
    return requests.value.filter((req) =>
        req.date === date && (selectedStatus.value === 'All requests' || req.status === selectedStatus.value)
    )
}

// Format date to a readable format
const formatDate = (date: string) =>
    new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })

// Class styles based on request status
// Class styles based on request status
const statusClasses = (status: string) => {
    // Convert status to lowercase to handle inconsistent casing
    switch (status.toLowerCase()) {
        case 'assigned':
            return 'bg-[#FEF6E7] text-[#DD900D]'
        case 'accepted':
            return 'bg-[#E8EDFB] text-[#1D4ED8]'
        case 'cancelled':
            return 'bg-[#F9FAFB] text-[#1D2739]'
        case 'completed':
            return 'bg-[#E7F6EC] text-[#099137]'
        case 'declined':
            return 'bg-[#FBEAE9] text-[#BA110B]'
        default:
            return ''
    }
}

const statusTextMap = (status: string) => {
    // Convert status to lowercase to handle inconsistent casing
    switch (status.toLowerCase()) {
        case 'assigned':
            return 'new request'
        case 'accepted':
            return 'bg-[#E8EDFB] text-[#1D4ED8]'
        case 'cancelled':
            return 'bg-[#F9FAFB] text-[#1D2739]'
        case 'completed':
            return 'bg-[#E7F6EC] text-[#099137]'
        case 'declined':
            return 'bg-[#FBEAE9] text-[#BA110B]'
        default:
            return ''
    }
}



// Handle status filter selection
const handleSelected = (status: string) => {
    selectedStatus.value = status
}
</script>




<style scoped>
.empty-state-icon {
    width: 5rem;
    height: 5rem;
}
</style>