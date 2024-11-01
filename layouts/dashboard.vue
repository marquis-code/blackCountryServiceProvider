<template>
  <main>
    <CoreNavbar />
    <section>
        <slot></slot>
    </section>
  </main>
</template>

<script setup lang="ts">
import { dynamicIcons } from "@/utils/assets";
const router = useRouter();
definePageMeta({
  middleware: "auth",
});

const checkOnlineStatus = () => {
  if (navigator.onLine) {
    router.push(router?.options?.history?.state?.current);
  } else {
    router.push("/login");
    useNuxtApp().$toast.success("You are currently offline.", {
      autoClose: 5000,
      dangerouslyHTMLString: true,
    });
  }
};

onMounted(() => {
  // Check online status when the component is mounted
  checkOnlineStatus();

  // Listen for online and offline events
  window.addEventListener("online", checkOnlineStatus);
  window.addEventListener("offline", checkOnlineStatus);
});

onUnmounted(() => {
  // Remove event listeners to prevent memory leaks
  window.removeEventListener("online", checkOnlineStatus);
  window.removeEventListener("offline", checkOnlineStatus);
});
</script>
