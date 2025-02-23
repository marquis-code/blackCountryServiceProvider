<template>
    <main>
        <TopNavBar />
        <div v-if="!loading" class="lg:p-6 p-3 bg-gray-25 min-h-screen">
            <div class="max-w-2xl mx-auto">
                <svg @click="router.back()" class="cursor-pointer mb-3" width="36" height="36" viewBox="0 0 36 36" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect width="36" height="36" rx="18" fill="#EAEAEA" />
          <path d="M20.5 13C20.5 13 15.5 16.6824 15.5 18C15.5 19.3177 20.5 23 20.5 23" stroke="#1D2739"
            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
                <div class="flex items-center gap-x-4">
                    <CoreGoBack />
                    <!-- Breadcrumbs -->
                    <div class="text-sm text-gray-500 my-4">
                        <NuxtLink to="/dashboard/profile">Profile</NuxtLink>
                        <span class="mx-2">|</span>
                        <span class="font-medium text-gray-700">Emergency Contacts</span>
                    </div>
                </div>


                <!-- Call Section -->
                <div class="mb-6">
                    <h3
                        class="text-[#1D2739] rounded-xl font-medium mb-3 border-[0.5px] border-gray-25 bg-white py-4 p-3">
                        Lagos State Emergency Contacts</h3>
                    <div v-for="item in contactsInfo?.lagos_state_emergency_contacts" class="bg-white p-4 rounded-lg border-[0.5px] border-gray-25">
                        <div class="">
                            <p class="text-[#1D2739]">{{ item?.name ?? 'Nil' }}</p>
                            <p v v-if="item?.description" class="text-sm pt-1 text-gray-500">{{ item?.description ?? 'Nil' }}</p>
                            <div class="flex justify-between items-center w-full" v-for="(itm, idx) in item?.contacts" :key="idx">
                                <p class="text-[#667185] py-2">{{ `${itm} ` ?? 'Nil' }}</p>
                                <p @click="copyToClipboard(itm)" class="cursor-pointer">
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M11.3091 6.48773C11.3075 4.52096 11.2778 3.50223 10.7053 2.80469C10.5947 2.66998 10.4712 2.54646 10.3365 2.43591C9.6006 1.83203 8.50727 1.83203 6.32062 1.83203C4.13397 1.83203 3.04064 1.83203 2.30476 2.43591C2.17004 2.54646 2.04652 2.66998 1.93595 2.80469C1.33203 3.54052 1.33203 4.63378 1.33203 6.82028C1.33203 9.0068 1.33203 10.1 1.93595 10.8359C2.04651 10.9705 2.17004 11.0941 2.30476 11.2046C3.00235 11.7771 4.02115 11.8069 5.98804 11.8085"
                                        stroke="#326543" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M9.3522 6.5167L11.3293 6.48828M9.34287 15.1679L11.32 15.1394M14.6477 9.8484L14.6291 11.8215M6.00693 9.85746L5.98828 11.8305M7.6582 6.5167C7.10307 6.61614 6.21192 6.71842 6.00693 7.8662M12.9965 15.1394C13.5531 15.0485 14.4457 14.9599 14.6683 13.8154M12.9965 6.5167C13.5517 6.61614 14.4428 6.71842 14.6477 7.8662M7.66673 15.1385C7.11147 15.0394 6.2203 14.9376 6.01469 13.7899"
                                        stroke="#326543" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <section class="flex-1 overflow-auto" v-else>
            <div class="rounded-md p-4 w-full mx-auto">
                <div class="animate-pulse flex space-x-4">
                    <div class="flex-1 space-y-6 py-1">
                        <div class="h-96 bg-slate-200 rounded"></div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
  import { useCustomToast } from '@/composables/core/useCustomToast'
  const { showToast } = useCustomToast();
import { useFetchContacts } from '@/composables/core/useFetchContacts'
const { loading,
    contactsInfo } = useFetchContacts()

const navigateToSocials = (item: any) => {
    console.log(item, 'item herre')
    window.location.href = item.contacts[0]
}

const copyToClipboard = (text: string) => {
    console.log(text, 'text here')
    navigator.clipboard.writeText(text);
    showToast({
          title: "Success",
          message: `Copied: ${text}`,
          toastType: "success",
          duration: 3000
        });
  };

  definePageMeta({
  middleware: "auth",
  layout: "dashboard",
});

const router = useRouter()

</script>

<style scoped></style>