<template>
  <main>
    <TopNavBar />
    <div class="lg:p-6 p-3 bg-gray-25 min-h-screen">
      <div class="max-w-xl mx-auto">
        <svg @click="router.back()" class="cursor-pointer mb-3" width="36" height="36" viewBox="0 0 36 36" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect width="36" height="36" rx="18" fill="#EAEAEA" />
          <path d="M20.5 13C20.5 13 15.5 16.6824 15.5 18C15.5 19.3177 20.5 23 20.5 23" stroke="#1D2739"
            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <div class="text-sm text-gray-500 mb-4">
          <span>Profile</span>
          <span class="mx-2">|</span>
          <span class="font-semibold text-gray-700">FAQs</span>
        </div>

        <h2 class="text-center text-xl font-medium text-[#1D2739] mb-6">
          How can we help you?
        </h2>

        <div class="relative w-full mb-8">
          <input
            type="text"
            placeholder="Search for how-tos and more"
            v-model="searchQuery"
            class="w-full p-3 py-4 outline-none border text-sm rounded-md bg-[#EAEAEA] pl-10"
          />
          <svg class="absolute top-5 left-3" width="16" height="17" viewBox="0 0 16 17" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M11.668 12.166L14.668 15.166" stroke="#667185" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
            <path
              d="M13.332 7.83398C13.332 4.52028 10.6458 1.83398 7.33203 1.83398C4.01832 1.83398 1.33203 4.52028 1.33203 7.83398C1.33203 11.1477 4.01832 13.834 7.33203 13.834C10.6458 13.834 13.332 11.1477 13.332 7.83398Z"
              stroke="#667185" stroke-width="1.5" stroke-linejoin="round" />
          </svg>
        </div>
        <section v-if="!loading && faqList.length" class="space-y-4">
          <div v-for="item in filteredFaqList" :key="item.id" class="overflow-hidden border-[0.5px] border-gray-50 px-3 bg-white rounded-lg">
            <button class="w-full text-left py-3  transition-colors duration-300 flex justify-between items-center"
              @click="toggle(item.id)">
              <p class="text-[#1D2739] font-light">
                {{ item.question }}
              </p>
              <span class="relative h-5 w-5 shrink-0">
                <svg v-if="isClose(item.id)" width="16" height="16" viewBox="0 0 16 16" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 6.00003C12 6.00003 9.05407 10 8 10C6.94587 10 4 6 4 6" stroke="#667185"
                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <svg v-if="isOpen(item.id)" width="16" height="16" viewBox="0 0 16 16" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 10C12 10 9.05407 6.00001 8 6C6.94587 5.99999 4 10 4 10" stroke="#667185"
                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
            </button>
            <div v-if="isOpen(item.id)" class="overflow-hidden transition-max-height duration-500 pb-3"
              :style="{ maxHeight: isOpen(item.id) ? `${maxHeight}px` : '0' }">
              <p class="p-1 lg:p-4 text-gray-700 text-sm font-light md:text-base rounded-lg">
                {{ item.answer }}
              </p>
            </div>
          </div>
        </section>

        <section v-else-if="!loading && !faqList.length" class="flex border-[0.5px] py-10 rounded-lg flex-col justify-between items-center space-y-2 mt-10">
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
            <h2 class="text-[#1D2739]">No FAQs available</h2>
      </section>

        <div v-else class="rounded-md container mx-auto">
        <div class="animate-pulse flex space-x-4">
          <div class="flex-1 space-y-6 py-1">
            <div class="h-44 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useFetchFaqs } from '@/composables/modules/settings/useFetchFaqs';
import { ref, computed } from 'vue';

const { loading, faqList } = useFetchFaqs();
const router = useRouter();
const openFAQ = ref<number | null>(null);
const searchQuery = ref(''); // Track the search input

const toggleFAQ = (index: number) => {
  if (openFAQ.value === index) {
    openFAQ.value = null;
  } else {
    openFAQ.value = index;
  }
};

definePageMeta({
  middleware: 'auth',
});

const openId = ref(null);
const maxHeight = ref(0);

const toggle = (id: any) => {
  openId.value = openId.value === id ? null : id;
  maxHeight.value = openId.value ? 200 : 0;
};

const isOpen = (id: any) => openId.value === id;

const isClose = (id: any) => openId.value !== id;

// Computed property to filter FAQs based on the search query
const filteredFaqList = computed(() => {
  if (!searchQuery.value.trim()) {
    return faqList.value; // Return all FAQs if the search query is empty
  }
  const query = searchQuery.value.toLowerCase();
  return faqList.value.filter(
    (item: any) =>
      item.question.toLowerCase().includes(query) ||
      item.answer.toLowerCase().includes(query)
  );
});
</script>
