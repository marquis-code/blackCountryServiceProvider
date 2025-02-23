<!-- <template>
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
  <CoreFullScreenLoader :visible="loading" text="Updating preference..." />
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

    console.log(updatedNotifications, 'updated')

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
</style> -->

<template>
  <div class="max-w-2xl mx-auto p-4 space-y-6">
    <svg @click="router.back()" class="cursor-pointer" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="36" height="36" rx="18" fill="#EAEAEA"/>
            <path d="M20.5 13C20.5 13 15.5 16.6824 15.5 18C15.5 19.3177 20.5 23 20.5 23" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
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
  <CoreFullScreenLoader :visible="loading" text="Updating preference..." />
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue'
import { useFetchPreferences } from '@/composables/modules/settings/useGetPreferences'
import { useSetPreferences } from '~/composables/modules/settings/useSetPreferences'
const router = useRouter()
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