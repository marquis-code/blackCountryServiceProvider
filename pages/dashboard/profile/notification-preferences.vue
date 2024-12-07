<template>
  <div class="max-w-2xl mx-auto p-4 space-y-6">
    <h2 class="text font-medium text-gray-700">
      <NuxtLink to="/dashboard/profile" class="text-[#667185]">Profile </NuxtLink>|
      <span class="text-[#1D2739]"> Notification Preference</span>
    </h2>
    <CoreToggleSwitch v-if="!fetchingPreferences" v-for="(value, key) in localNotificationSettings" :id="key"
      :label="formatLabel(key)" @change="handleToggle(key)" v-model="localNotificationSettings[key]"
      :loading="loading" />
    <section v-else="loading">
      <div class="rounded-md p-4 w-full mx-auto mt-4">
        <div class="animate-pulse h-60 bg-slate-200 flex space-x-4"></div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue'
import { useFetchPreferences } from '@/composables/modules/settings/useGetPreferences'
import { useSetPreferences } from '~/composables/modules/settings/useSetPreferences'

const { setPreferences, loading, payload, setPayload } = useSetPreferences()
const { loading: fetchingPreferences, notificationOptions } = useFetchPreferences()

definePageMeta({
  layout: "dashboard"
})


// Ensure notificationOptions is reactive (use a computed property if necessary)
const localNotificationSettings = ref({ ...notificationOptions.value })

// Watch for changes in notificationOptions and update local state
watch(notificationOptions, (newOptions) => {
  localNotificationSettings.value = { ...newOptions }
}, { immediate: true })

const formatLabel = (key: string): string => {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase())
    .replace('Enabled', '')
    .trim()
}

const handleToggle = async (key: string) => {
  try {
    // Update the localNotificationSettings immediately to ensure reactivity
    const updatedNotifications = {
      notifications: {
        ...localNotificationSettings.value
      }
    }

    // Update the payload for API
    setPayload(updatedNotifications)

    // Call the API to save changes
    await setPreferences()
  } catch (error) {
    // If the API call fails, revert the local state
    localNotificationSettings.value[key] = !localNotificationSettings.value[key]
  }
}
</script>

<style scoped>
.toggle-checkbox {
  width: 24px;
  height: 24px;
}
</style>