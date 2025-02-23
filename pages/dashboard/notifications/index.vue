<template>
  <main>
    <div class="flex h-screen">
      <div class="flex-1 lg:flex flex-col bg-gray-25">
        <div class="lg:flex space-y-6 w-full flex-1 overflow-hidden">
          <section class="lg:hidden w-full h-screen">
          <transition name="flip" mode="out-in">
            <div v-if="!showDetail" class="h-full">
              <div class="flex items-center justify-between p-4 border-b">
                <h1 class="text-xl font-semibold">Notification</h1>
                <button class="text-gray-500 text-sm">Clear all</button>
              </div>
              <div class="p-4">
                <div class="relative mb-4">
                  <input
                    type="text"
                    placeholder="Search"
                    class="w-full p-3 pl-12 bg-gray-100 text-sm rounded-lg text-gray-700 outline-none"
                  />
                  <svg
                    class="absolute top-3 left-5"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.668 12.166L14.668 15.166"
                      stroke="#667185"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.332 7.83398C13.332 4.52028 10.6458 1.83398 7.33203 1.83398C4.01832 1.83398 1.33203 4.52028 1.33203 7.83398C1.33203 11.1477 4.01832 13.834 7.33203 13.834C10.6458 13.834 13.332 11.1477 13.332 7.83398Z"
                      stroke="#667185"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div v-if="notificationList?.length && !loadingNotification" class="space-y-6">
                  <div v-for="(group, index) in groupedNotifications" :key="index">
                    <p class="text-[#1D2739] mb-4 text-sm">
                      {{ group.date }}
                    </p>
                    <div class="bg-white rounded-xl">
                      <div
                        v-for="(notification, i) in group.notifications"
                        :key="i"
                        @click="viewMobileNotification(notification)"
                        class="bg-white border-b cursor-pointer last:border-b-0 border-gray-50 p-4 flex items-start justify-between"
                      >
                        <div class="flex items-start">
                          <div class="h-10 w-10 rounded-full bg-[#6888E5] flex items-center justify-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" stroke-width="2"/>
                              <path d="M12 6V12L16 14" stroke="white" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                          </div>
                          <div class="ml-4">
                            <p class="font-medium text-[#1D2739] text-sm">
                              {{ notification.notification.title }}
                            </p>
                            <p class="text-gray-500 text-xs max-w-xs">
                              {{ notification.notification.content.slice(0, 80) }}...
                            </p>
                          </div>
                        </div>
                        <div class="text-xs text-gray-500">
                          {{ formatDate(notification.createdAt) }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Notification Detail -->
            <div v-else class="h-full bg-white">
              <div class="flex items-center p-4 border-b">
                <button @click="showDetail = false" class="mr-4">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="36" height="36" rx="18" fill="#EAEAEA"/>
                    <path d="M20.5 13C20.5 13 15.5 16.6824 15.5 18C15.5 19.3177 20.5 23 20.5 23" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <NuxtLink to="/dashboard/notifications" class="text-[#667185] font-medium text-sm">Notification | </NuxtLink>
                <h1 class="text-sm text-[#1D2739] font-semibold pl-2">{{ selectedNotification?.notification?.title }}</h1>
              </div>
              <div class="p-6">
                <!-- <p class="text-sm text-gray-500 mb-6">{{ formatDate(selectedNotification?.createdAt) }}</p> -->
                <div class="max-w-2xl w-full lg:w-[800px] mx-auto  px-4">
              <div class="relative flex items-center justify-center my-6">
                <div class="absolute inset-0 flex items-center">
                  <div class="border-t w-full border-gray-100"></div>
                </div>
                <div class="relative px-1 bg-white">
                  <span
                    class="text-[#1D2739] bg-[#F0F2F5] text-xs px-3 py-2 rounded-full"
                    >{{ formatDate(selectedNotification?.createdAt) }}</span
                  >
                </div>
              </div>

            </div>
                <h2 class="text-base font-semibold my-4">{{ selectedNotification?.notification?.title }}</h2>
                <p class="text-gray-700 text-sm mb-6">
                  {{ selectedNotification?.notification?.content }}
                </p>
                <NuxtLink to="#" class="text-[#326543] underline text-sm font-medium">
                  Click to view more details
                </NuxtLink>
              </div>
            </div>
          </transition>
          </section>

          <section class="hidden lg:flex space-y-6 w-full flex-1 overflow-hidden">
            <div class="lg:w-1/3 w-full border-r border-gray-200 p-6 overflow-y-auto h-screen">
            <div class="relative mb-4">
              <input
                type="text"
                placeholder="Search"
                class="w-full p-3 pl-12 bg-gray-100 text-sm rounded-lg text-gray-700 outline-none"
              />
              <svg
                class="absolute top-3 left-5"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.668 12.166L14.668 15.166"
                  stroke="#667185"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.332 7.83398C13.332 4.52028 10.6458 1.83398 7.33203 1.83398C4.01832 1.83398 1.33203 4.52028 1.33203 7.83398C1.33203 11.1477 4.01832 13.834 7.33203 13.834C10.6458 13.834 13.332 11.1477 13.332 7.83398Z"
                  stroke="#667185"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div v-if="notificationList?.length && !loadingNotification" class="space-y-6">
              <div v-for="(group, index) in groupedNotifications" :key="index">
                <p
                  class="text-[#1D2739] mb-4 rounded-md px-6 py-3 bg-white text-sm"
                >
                  {{ group.date }}
                </p>
                <div class="bg-white rounded-xl">
                  <div
                    v-for="(notification, i) in group.notifications"
                    :key="i"
                    @click="viewNotification(notification)"
                    class="bg-white border-b cursor-pointer last:border-b-0 border-gray-50 p-4 flex items-start justify-between"
                  >
                    <div class="flex items-start">
                      <div
                        class="h-10 w-10 rounded-full flex items-center justify-center"
                      >
                        <svg
                          width="44"
                          height="44"
                          viewBox="0 0 44 44"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="44" height="44" rx="22" fill="#6888E5" />
                          <path
                            d="M23.2193 18.2116L20.4473 19.5422C20.234 19.6447 20.006 19.6703 19.7736 19.6183C19.6216 19.5842 19.5455 19.5672 19.4843 19.5602C18.7239 19.4733 18.25 20.0751 18.25 20.7671V21.1469C18.25 21.8389 18.7239 22.4407 19.4843 22.3539C19.5455 22.3469 19.6216 22.3299 19.7736 22.2958C20.006 22.2437 20.234 22.2694 20.4473 22.3718L23.2193 23.7024C23.8556 24.0079 24.1737 24.1606 24.5285 24.0416C24.8832 23.9225 25.005 23.6671 25.2485 23.1562C25.9172 21.7534 25.9172 20.1607 25.2485 18.7578C25.005 18.247 24.8832 17.9915 24.5285 17.8725C24.1737 17.7534 23.8556 17.9062 23.2193 18.2116Z"
                            stroke="white"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M21.7755 25.6558L21.1541 26.168C19.7534 25.0571 19.9246 24.5273 19.9246 22.418H20.397C20.5887 23.61 21.0409 24.1746 21.6649 24.5834C22.0493 24.8351 22.1286 25.3648 21.7755 25.6558Z"
                            fill="white"
                            stroke="white"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M20.125 22.207V19.707"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <div class="ml-4">
                        <p class="font-medium text-[#1D2739] text-sm">
                          {{ notification.notification.title }}
                        </p>
                        <p class="text-gray-500 text-xs max-w-xs">
                          {{
                            notification.notification.content.slice(0, 80)
                          }}...
                        </p>
                      </div>
                    </div>
                    <div class="text-xs text-gray-500">
                      {{ formatDate(notification.createdAt) }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <section v-else-if="!notificationList?.length && loadingNotification">
              <div class="rounded-md p-4 w-full mx-auto mt-10">
                <div class="animate-pulse flex space-x-4">
                  <!-- <div class="rounded-md bg-slate-200 h-44 w-44"></div> -->
                  <div class="flex-1 space-y-6 py-1">
                    <div class="h-32 bg-slate-200 rounded"></div>
                    <div class="space-y-3">
                      <div class="grid grid-cols-3 gap-4">
                        <div class="h-32 w-full bg-slate-200 rounded col-span-2"></div>
                        <div class="h-32 w-full bg-slate-200 rounded col-span-1"></div>
                      </div>
                      <div class="h-32 w-full bg-slate-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div
            v-else
            class="flex-1 flex items-center justify-center mt-20"
          >
            <div
              class="flex justify-center items-center flex-col w-full gap-y-4"
            >
              <svg
                width="152"
                height="124"
                viewBox="0 0 152 124"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="76" cy="58" r="52" fill="#EAEAEA" />
                <circle cx="21" cy="25" r="5" fill="#BDBDBD" />
                <circle cx="18" cy="109" r="7" fill="#BDBDBD" />
                <circle cx="145" cy="41" r="7" fill="#BDBDBD" />
                <circle cx="134" cy="14" r="4" fill="#BDBDBD" />
                <g filter="url(#filter0_b_6853_116899)">
                  <rect
                    x="52"
                    y="34"
                    width="48"
                    height="48"
                    rx="24"
                    fill="#9D9D9D"
                  />
                  <path
                    d="M66.5299 60.7696C66.3173 62.1636 67.268 63.1312 68.4321 63.6134C72.8948 65.4622 79.1052 65.4622 83.5679 63.6134C84.732 63.1312 85.6827 62.1636 85.4701 60.7696C85.3394 59.9129 84.6932 59.1995 84.2144 58.5029C83.5873 57.5793 83.525 56.5718 83.5249 55.5C83.5249 51.3579 80.1559 48 76 48C71.8441 48 68.4751 51.3579 68.4751 55.5C68.475 56.5718 68.4127 57.5793 67.7856 58.5029C67.3068 59.1995 66.6606 59.9129 66.5299 60.7696Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M72 65C72.4585 66.7252 74.0755 68 76 68C77.9245 68 79.5415 66.7252 80 65"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_b_6853_116899"
                    x="44"
                    y="26"
                    width="64"
                    height="64"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_6853_116899"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_6853_116899"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <p class="text-[#1D2739] text-sm font-medium">
                No notifications found
              </p>
            </div>
          </div>
          </div>
          <div  
            v-if="Object.keys(selectedNotification)?.length"
            class="hidden flex-1 lg:flex items-center justify-center bg-gray-25"
          >
            <div class="max-w-2xl w-full lg:w-[800px] mx-auto mt-10 p-4">
              <div class="relative flex items-center justify-center my-6">
                <div class="absolute inset-0 flex items-center">
                  <div class="border-t w-full border-gray-100"></div>
                </div>
                <div class="relative px-1 bg-white">
                  <span
                    class="text-[#1D2739] bg-[#F0F2F5] text-xs px-3 py-2 rounded-full"
                    >{{ formatDate(selectedNotification?.createdAt) }}</span
                  >
                </div>
              </div>

              <div class="bg-white rounded-lg p-6">
                <p class="font-semibold text-sm text-[#1D2739]">
                  Property Listing
                </p>
                <p class="text-[#1D2739] mt-2 text-sm">
                  {{ selectedNotification?.notification?.content ?? "Nil" }}
                </p>
                <NuxtLink
                to="#"
                class="text-[#326543] underline text-sm font-medium mt-4 inline-block"
              >
                Click to view Property created
              </NuxtLink>
                <!-- <NuxtLink
                  :to="`/dashboard/listings/${selectedNotification?.notification?.metadata?.data?.houseId}/preview`"
                  class="text-[#326543] underline text-sm font-medium mt-4 inline-block"
                >
                  Click to view Property created
                </NuxtLink> -->
              </div>
            </div>
          </div>
          <div
            v-else
            class="flex-1 flex py-20 items-center justify-center bg-gray-25"
          >
            <div
              class="flex justify-center items-center flex-col w-full gap-y-4"
            >
              <svg
                width="152"
                height="124"
                viewBox="0 0 152 124"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="76" cy="58" r="52" fill="#EAEAEA" />
                <circle cx="21" cy="25" r="5" fill="#BDBDBD" />
                <circle cx="18" cy="109" r="7" fill="#BDBDBD" />
                <circle cx="145" cy="41" r="7" fill="#BDBDBD" />
                <circle cx="134" cy="14" r="4" fill="#BDBDBD" />
                <g filter="url(#filter0_b_6853_116899)">
                  <rect
                    x="52"
                    y="34"
                    width="48"
                    height="48"
                    rx="24"
                    fill="#9D9D9D"
                  />
                  <path
                    d="M66.5299 60.7696C66.3173 62.1636 67.268 63.1312 68.4321 63.6134C72.8948 65.4622 79.1052 65.4622 83.5679 63.6134C84.732 63.1312 85.6827 62.1636 85.4701 60.7696C85.3394 59.9129 84.6932 59.1995 84.2144 58.5029C83.5873 57.5793 83.525 56.5718 83.5249 55.5C83.5249 51.3579 80.1559 48 76 48C71.8441 48 68.4751 51.3579 68.4751 55.5C68.475 56.5718 68.4127 57.5793 67.7856 58.5029C67.3068 59.1995 66.6606 59.9129 66.5299 60.7696Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M72 65C72.4585 66.7252 74.0755 68 76 68C77.9245 68 79.5415 66.7252 80 65"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_b_6853_116899"
                    x="44"
                    y="26"
                    width="64"
                    height="64"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_6853_116899"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_6853_116899"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <p class="text-[#1D2739] text-sm font-medium">
                Start a conversation
              </p>
            </div>
          </div>
          </section>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { useFormatNotifications } from '@/composables/core/useFormatNotifications';
import { useUserInitials } from "@/composables/core/useUserInitials";
import { useUser } from "@/composables/auth/user";
const { user } = useUser();
import { useGetNotifications } from "@/composables/modules/notification/fetch";
const { loadingNotification, notificationList } = useGetNotifications();
import { useRouter } from "vue-router";
import { dynamicIcons } from "@/utils/assets";
const showBLogoutModal = ref(false);
const router = useRouter();
const initials = ref("") as any;

definePageMeta({
layout: "dashboard",
middleware: 'auth'
})

const { groupedNotifications, formatNotifications } = useFormatNotifications();

// Format the notifications when the component is mounted
formatNotifications(notificationList.value);

onMounted(() => {
  // Get initials from the composable
  const { getInitials } = useUserInitials(user.value);
  initials.value = getInitials.value;
});

const isOpen = ref(false);

const onConfirm = () => {
  showBLogoutModal.value = true;
  // Logic for logout
  localStorage.clear();
  setTimeout(() => {
    // loading.value = false
    showBLogoutModal.value = false;
    router.push("/login");
    window.location.href = "/login";
  }),
    3000;
  console.log("Logging out...");
};

const onCancel = () => {
  showBLogoutModal.value = false;
  // Logic to close the modal
  console.log("Cancelled");
};

const selectedNotification = ref({}) as any;

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

const viewNotification = (item: any) => {
  console.log(item, "here");
  selectedNotification.value = item;
};

watch(notificationList, (newVal) => {
if (newVal && newVal.length) {
  formatNotifications(newVal);
}
}, { immediate: true });

const showDetail = ref(false);

const viewMobileNotification = (item: any) => {
selectedNotification.value = item;
showDetail.value = true;
};

</script>

<style>
.flip-enter-active,
.flip-leave-active {
transition: transform 0.3s;
}

.flip-enter-from {
transform: translateX(100%);
}

.flip-leave-to {
transform: translateX(-100%);
}

.flip-enter-to,
.flip-leave-from {
transform: translateX(0);
}
</style>