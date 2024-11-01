<template>
<main>  
  
  <div class="p-6 bg-gray-25 min-h-screen">
    <div class="max-w-2xl mx-auto space-y-5">
      <h2 class="text font-medium text-gray-700">
        <span class="text-[#667185]">Profile </span>|
        <span class="text-[#1D2739]"> Notification Preference</span>
      </h2>
      <h2 class="text-lg font-medium mb-4">Configure table</h2>
      <div class="space-y-3">
        <section class=" border-[0.5px] bg-white rounded-md border-gray-50 p-3">
          <CoreToggleSwitch
            id="emailNotification"
            label="Email Notification"
            v-model="options.emailNotification"
          />
        </section>

        <section class="space-y-6 border-[0.5px] bg-white rounded-md border-gray-50 p-3">
          <CoreToggleSwitch
            id="rentDueReminders"
            label="Rent Due Reminders"
            v-model="options.rentDueReminders"
          />

          <CoreToggleSwitch
            id="leaseRenewalNotices"
            label="Lease Renewal Notices"
            v-model="options.leaseRenewalNotices"
          />

          <CoreToggleSwitch
            id="propertyAlerts"
            label="Property Alerts"
            v-model="options.propertyAlerts"
          />

          <CoreToggleSwitch
            id="maintenanceUpdates"
            label="Maintenance Updates"
            v-model="options.maintenanceUpdates"
          />

          <CoreToggleSwitch
            id="securityAlerts"
            label="Security Alerts"
            v-model="options.securityAlerts"
          />
        </section>

        <section class=" border-[0.5px] bg-white rounded-md border-gray-50 p-3">
          <CoreToggleSwitch
            id="Push/In-appNotification"
            label="Push/In-app Notification"
            v-model="options.emailNotification"
          />
        </section>

        <section class="space-y-6 border-[0.5px] bg-white rounded-md border-gray-50 p-3">
          <CoreToggleSwitch
            id="rentDueReminders"
            label="Rent Due Reminders"
            v-model="options.rentDueReminders"
          />

          <CoreToggleSwitch
            id="leaseRenewalNotices"
            label="Lease Renewal Notices"
            v-model="options.leaseRenewalNotices"
          />

          <CoreToggleSwitch
            id="propertyAlerts"
            label="Property Alerts"
            v-model="options.propertyAlerts"
          />

          <CoreToggleSwitch
            id="maintenanceUpdates"
            label="Maintenance Updates"
            v-model="options.maintenanceUpdates"
          />

          <CoreToggleSwitch
            id="securityAlerts"
            label="Security Alerts"
            v-model="options.securityAlerts"
          />
        </section>
      </div>
    </div>
  </div>
</main>
</template>

<script setup lang="ts">
import { ref } from "vue";

const options = ref({
  emailNotification: true,
  rentDueReminders: true,
  leaseRenewalNotices: true,
  propertyAlerts: true,
  rentalApplicationUpdates: true,
  maintenanceUpdates: true,
  securityAlerts: false,
});

definePageMeta({
  layout: "dashboard"
})
</script>

<style scoped>
.toggle-checkbox {
  width: 24px;
  height: 24px;
}
</style>
