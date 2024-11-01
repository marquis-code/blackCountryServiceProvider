<template>
    <div class="bg-white rounded-md border-4 overflow-x-auto">
        <div>
            <table class="min-w-full text-left border-separate border-spacing-y-2">
                <thead>
                    <tr class="text-[#1D2739] text-sm">
                        <th class="px-4 py-3 font-medium">Full name</th>
                        <th class="px-4 py-3 font-medium">Property interested in</th>
                        <th class="px-4 py-3 font-medium">Date</th>
                        <th class="px-4 py-3 font-medium">Time</th>
                        <th class="px-4 py-3 font-medium">Status</th>
                        <th class="px-4 py-3 font-medium sr-only">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(visit, index) in visits" :key="index" class="rounded-md">
                        <td class="px-4 py-3.5 text-[#667185] font-light text-sm">{{ visit.name }}</td>
                        <td class="px-4 py-3.5 text-[#667185] font-light text-sm">{{ visit.property }}</td>
                        <td class="px-4 py-3.5 text-[#667185] font-light text-sm">{{ visit.date }}</td>
                        <td class="px-4 py-3.5 text-[#667185] font-light text-sm">{{ visit.time }}</td>
                        <td class="px-4 py-3.5 text-[#1D2739] font-medium gap-x-2 text-sm flex items-center space-x-2">
                            {{ visit.status }}
                            <button class="text-gray-400 hover:text-gray-600">
                                <img src="@/assets/icons/info-icon.svg" alt="Info" />
                            </button>
                        </td>
                        <td class="px-4 py-3.5 text-[#667185] font-light text-sm">
                            <button class="text-gray-400 hover:text-gray-600">
                                <img src="@/assets/icons/arrow-down.svg" alt="Expand" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";

interface Visit {
    name: string;
    property: string;
    date: string;
    time: string;
    status: string;
}

const props = defineProps({
    visits: {
        type: Array as PropType<Visit[]>,
        required: true,
    },
})
</script>
