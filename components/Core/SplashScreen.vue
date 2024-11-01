<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 flex items-center z-50 justify-center bg-white transition-opacity duration-700 ease-in-out"
    :class="{ 'opacity-0': !isVisible }"
  >
 <img src="@/assets/icons/splash-logo.svg" alt="" />
    <!-- <h1 class="text-white text-3xl font-bold animate-pulse">Welcome to My App</h1> -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const router = useRouter()

// Splash screen visibility state
const isVisible = ref(true)

onMounted(() => {
  // Hold the splash screen for 3 seconds, then fade out
  setTimeout(() => {
    isVisible.value = false

  }, 3000)
})
</script>

<style scoped>
/* Additional animations, if needed */
</style>
