
<template>
<main class="sticky top-0 z-50">
  <section class="bg-[#292929] sticky top-0 z-50">
    <nav class="flex items-center justify-between container mx-auto p-4 py-3 text-white">
      <div class="flex items-center space-x-4">
        <img src="@/assets/icons/white-logo-with-text.svg" alt="" />

      <!-- <div class="block lg:hidden border-4 w-full">
        <button @click="isOpen = true" class="p-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div> -->

        <div class="flex items-center space-x-2 hidden lg:flex">
          <NuxtLink to="/dashboard" class="px-4 py-3 rounded-lg flex items-center gap-x-1.5 text-sm">
            <img src="@/assets/icons/dashboard.svg" alt="" />

            Dashboard
        </NuxtLink>
          <NuxtLink to="/dashboard/maintenance" class="flex py-3 px-4 rounded-lg  items-center space-x-1 gap-x-1.5">
            <img src="@/assets/icons/maintenance.svg" alt="" />

            <span>Maintenance</span>
          </NuxtLink>
          <NuxtLink to="/dashboard/invoice" class="flex py-3 px-4 rounded-lg  items-center gap-x-1.5 text-sm">
            <img src="@/assets/icons/invoice.svg" alt="" />


            <span>Invoice</span>
          </NuxtLink>
          <NuxtLink to="/dashboard/messages" class="flex py-3 px-4 rounded-lg items-center gap-x-1.5 text-sm">
            <img src="@/assets/icons/messages.svg" alt="" />

            <span>Messages</span>
          </NuxtLink>

        </div>
      </div>
      <div class="flex items-center space-x-4 hidden lg:flex">
       <NuxtLink to="/dashboard/notifications">
          <img class="h-8 cursor-pointer" src="@/assets/icons/notification.svg" alt="" />
       </NuxtLink>

        <!-- <NuxtLink to="/dashboard/profile" class="flex cursor-pointer items-center block space-x-2">
          <img src="@/assets/icons/user-icon.svg" alt="" />

          <span class="text-">{{ `${user?.firstName} ${user?.lastName}` ?? 'Nil' }}</span>
          <img src="@/assets/icons/more-caret.svg" alt="" />

        </NuxtLink> -->
        <ProfileDropdown 
          :user="user" 
          :profileObj="profileObj" 
        />
      </div>

      <div class="block lg:hidden w-full flex justify-end items-end">
        <button @click="isOpen = true" class="p-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>

    <div v-if="isOpen" class="relative z-30 xl:hidden" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-gray-900/80" aria-hidden="true"></div>

    <div class="fixed inset-0 flex">
      <div class="relative mr-16 flex w-full flex-1">


        <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 ring-1 ring-white/10">
          <!-- <div class="flex h-16 shrink-0 items-center pt-4">
            <img src="@/assets/icons/logo-with-text.svg" alt="logo" class=" object-contain" />
          </div> -->
          <div class="flex items-center justify-between py-4 bg-gray-900 rounded-lg max-w-md w-full text-white">
            <!-- Profile Picture -->
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                <img v-if="user.profilePicture" :src="user?.profilePicture" alt="User profile" class="object-cover w-full h-full" />
                <img v-else src="@/assets/icons/users-avatar.svg" class="object-cover w-full h-full" alt="User profile"  />
              </div>
              
              <!-- User Info -->
              <div>
                <p class="font-semibold">{{ `${user.firstName} ${user.lastName}` }}</p>
                <p class="text-sm text-gray-300">{{ user.email ?? 'Nil' }}</p>
              </div>
            </div>
            
            <!-- Arrow Icon -->
            <div>
              <svg @click="isOpen = false" xmlns="http://www.w3.org/2000/svg" class="w-5 cursor-pointer h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
          <nav class="flex flex-1 flex-col">
            <ul role="list" class="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" class="-mx-2 space-y-4">
                  <li>
                    <NuxtLink @click.native="isOpen = false" to="/dashboard" class="group flex gap-x-3 rounded-md p-2  py-3text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.08203 9.99967C2.08203 6.26772 2.08203 4.40175 3.2414 3.24237C4.40077 2.08301 6.26675 2.08301 9.9987 2.08301C13.7306 2.08301 15.5966 2.08301 16.756 3.24237C17.9154 4.40175 17.9154 6.26772 17.9154 9.99967C17.9154 13.7316 17.9154 15.5976 16.756 16.757C15.5966 17.9163 13.7306 17.9163 9.9987 17.9163C6.26675 17.9163 4.40077 17.9163 3.2414 16.757C2.08203 15.5976 2.08203 13.7316 2.08203 9.99967Z" fill="white" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M5 7.50033H7.91667M14.1667 7.50033H15M10 6.66699V8.33366M12.0833 6.66699V8.33366" stroke="#292929" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 12.5003H10M5.83333 12.5003H5M7.91667 11.667V13.3337" stroke="#292929" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


                      Dashboard
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink @click.native="isOpen = false" to="/dashboard/maintenance" class="group flex gap-x-3 rounded-md bg-gray-800 p-2 py-3 text-sm font-semibold leading-6 text-white">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.582 15.9153C14.582 15.0819 15.332 14.76 15.332 14.1663C15.332 12.9699 13.6445 12.8423 13.6445 13.9673M18.332 14.583C18.332 16.6541 16.6531 18.333 14.582 18.333C12.5109 18.333 10.832 16.6541 10.832 14.583C10.832 12.5119 12.5109 10.833 14.582 10.833C16.6531 10.833 18.332 12.5119 18.332 14.583Z" stroke="#D0D5DD" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.98535 2.05501C3.51383 0.409003 15.0108 4.44117 15.0013 5.91331C14.9906 7.58269 10.5114 8.09627 9.26989 8.44458C8.52339 8.65399 8.32339 8.86874 8.15124 9.65158C7.3716 13.1972 6.98017 14.9607 6.08805 15.0001C4.66602 15.0629 0.49369 3.66139 1.98535 2.05501Z" stroke="#D0D5DD" stroke-width="1.5"/>
</svg>



                        Maintenance
                      </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/dashboard/invoice" @click.native="isOpen = false" class="group flex gap-x-3 rounded-md p-2 py-3 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.68 1.66699C15.7522 1.66699 15 3.90557 15 6.66699H16.68C17.4897 6.66699 17.8945 6.66699 18.1451 6.38745C18.3958 6.1079 18.3521 5.73977 18.2648 5.0035C18.0345 3.05985 17.4119 1.66699 16.68 1.66699Z" stroke="#D0D5DD"/>
<path d="M15.0013 6.71221V15.5385C15.0013 16.7982 15.0013 17.4281 14.6163 17.676C13.9872 18.0812 13.0147 17.2315 12.5256 16.9231C12.1214 16.6682 11.9194 16.5407 11.6951 16.5334C11.4527 16.5254 11.2471 16.6477 10.8104 16.9231L9.21797 17.9273C8.78839 18.1982 8.57363 18.3337 8.33463 18.3337C8.09564 18.3337 7.88085 18.1982 7.4513 17.9273L5.85891 16.9231C5.45476 16.6682 5.25268 16.5407 5.02841 16.5334C4.78607 16.5254 4.58041 16.6477 4.14369 16.9231C3.65459 17.2315 2.68203 18.0812 2.05293 17.676C1.66797 17.4281 1.66797 16.7982 1.66797 15.5385V6.71221C1.66797 4.33387 1.66797 3.1447 2.4002 2.40585C3.13244 1.66699 4.31094 1.66699 6.66797 1.66699H16.668" stroke="#D0D5DD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 5H11.6667" stroke="#D0D5DD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.66667 8.33301H5" stroke="#D0D5DD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.418 9.06217C9.72764 9.06217 9.16797 9.55184 9.16797 10.1559C9.16797 10.76 9.72764 11.2497 10.418 11.2497C11.1083 11.2497 11.668 11.7393 11.668 12.3434C11.668 12.9475 11.1083 13.4372 10.418 13.4372M10.418 9.06217C10.9622 9.06217 11.4252 9.36651 11.5968 9.79134M10.418 9.06217V8.33301M10.418 13.4372C9.87372 13.4372 9.41072 13.1328 9.23914 12.708M10.418 13.4372V14.1663" stroke="#D0D5DD" stroke-width="1.5" stroke-linecap="round"/>
</svg>

                        
                    Invoice
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/dashboard/messages" @click.native="isOpen = false" class="group flex gap-x-3 rounded-md py-3 p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.8101 17.4084C15.296 17.1768 18.0726 14.3607 18.3011 10.8254C18.3458 10.1336 18.3458 9.41709 18.3011 8.72526C18.0726 5.18999 15.296 2.37395 11.8101 2.14223C10.6209 2.06318 9.3793 2.06335 8.19247 2.14223C4.70662 2.37395 1.92998 5.18999 1.7015 8.72526C1.65679 9.41709 1.65679 10.1336 1.7015 10.8254C1.78472 12.113 2.35416 13.3052 3.02456 14.3118C3.41381 15.0166 3.15692 15.8962 2.75147 16.6645C2.45914 17.2185 2.31297 17.4955 2.43033 17.6956C2.5477 17.8957 2.80985 17.9021 3.33416 17.9148C4.37102 17.9401 5.0702 17.6461 5.6252 17.2368C5.93997 17.0048 6.09736 16.8887 6.20583 16.8753C6.3143 16.862 6.52778 16.9499 6.95464 17.1258C7.3383 17.2838 7.78377 17.3813 8.19247 17.4084C9.3793 17.4873 10.6209 17.4875 11.8101 17.4084Z" stroke="#D0D5DD" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M9.99759 10H10.005M13.3272 10H13.3347M6.66797 10H6.67544" stroke="#D0D5DD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


                     Messages
                    </NuxtLink>
                  </li>

                  <li>
                    <NuxtLink to="/dashboard/notifications" @click.native="isOpen = false" class="group flex gap-x-3 rounded-md py-3 p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.10697 12.3083C1.92976 13.47 2.72203 14.2763 3.69207 14.6782C7.41104 16.2188 12.5864 16.2188 16.3053 14.6782C17.2754 14.2763 18.0676 13.47 17.8905 12.3083C17.7815 11.5944 17.243 10.9999 16.844 10.4194C16.3214 9.64974 16.2695 8.81016 16.2695 7.91699C16.2695 4.46521 13.4619 1.66699 9.9987 1.66699C6.53547 1.66699 3.72797 4.46521 3.72797 7.91699C3.72789 8.81016 3.67597 9.64974 3.15337 10.4194C2.7544 10.9999 2.21587 11.5944 2.10697 12.3083Z" stroke="#D0D5DD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.66797 15.833C7.05004 17.2707 8.39755 18.333 10.0013 18.333C11.6051 18.333 12.9526 17.2707 13.3346 15.833" stroke="#D0D5DD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


                        Notification
                    </NuxtLink>
                  </li>

                  <li>
                    <NuxtLink to="/dashboard/profile/contact-us" @click.native="isOpen = false" class="group flex gap-x-3 rounded-md py-3 p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.168 11.5037C14.168 11.2157 14.168 11.0717 14.2113 10.9433C14.3373 10.5703 14.6695 10.4257 15.0022 10.2741C15.3763 10.1037 15.5633 10.0185 15.7486 10.0035C15.9591 9.98649 16.1698 10.0318 16.3496 10.1327C16.5881 10.2665 16.7543 10.5207 16.9246 10.7275C17.7106 11.6823 18.1037 12.1598 18.2476 12.6863C18.3636 13.1112 18.3636 13.5555 18.2476 13.9803C18.0378 14.7482 17.3751 15.392 16.8845 15.9878C16.6336 16.2926 16.5081 16.445 16.3496 16.5339C16.1698 16.6348 15.9591 16.6802 15.7486 16.6632C15.5633 16.6482 15.3763 16.563 15.0022 16.3926C14.6695 16.241 14.3373 16.0963 14.2113 15.7233C14.168 15.595 14.168 15.451 14.168 15.1629V11.5037Z" stroke="#D0D5DD"/>
<path d="M7.91797 17.5C9.06855 18.6111 10.9341 18.6111 12.0846 17.5" stroke="#D0D5DD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.83464 11.5037C5.83464 11.1411 5.82445 10.8151 5.53123 10.5601C5.42458 10.4674 5.28318 10.403 5.00039 10.2741C4.62631 10.1038 4.43927 10.0186 4.25394 10.0036C3.69789 9.95864 3.39874 10.3381 3.07808 10.7276C2.29193 11.6824 1.89885 12.1598 1.75502 12.6863C1.63895 13.1111 1.63895 13.5555 1.75502 13.9803C1.9648 14.7482 2.62757 15.3918 3.11814 15.9876C3.42738 16.3632 3.72278 16.706 4.25394 16.663C4.43927 16.648 4.62631 16.5628 5.00039 16.3924C5.28318 16.2636 5.42458 16.1992 5.53123 16.1065C5.82445 15.8515 5.83464 15.5256 5.83464 15.1628V11.5037Z" stroke="#D0D5DD" stroke-width="1.5"/>
<path d="M1.66797 13.3337V10.0003C1.66797 5.39795 5.39893 1.66699 10.0013 1.66699C14.6036 1.66699 18.3346 5.39795 18.3346 10.0003L18.3347 13.3337" stroke="#D0D5DD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


                        Contact us
                    </NuxtLink>
                  </li>

                  <li class="mt-auto">
                <a
                  href="#"
                  @click="showLogoutModal = true"
                  class="group -mx-2 flex gap-x-3 ml-0 rounded-md p-2 py-3 text-[#D42620] text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5 14.6875C12.4387 16.2307 11.1526 17.5412 9.42967 17.499C9.02883 17.4892 8.53342 17.3495 7.5426 17.07C5.15801 16.3973 3.08796 15.2669 2.5913 12.7346C2.5 12.2692 2.5 11.7453 2.5 10.6977V9.30225C2.5 8.25467 2.5 7.73087 2.5913 7.26538C3.08796 4.73304 5.15801 3.60263 7.5426 2.93002C8.53342 2.65053 9.02883 2.51079 9.42967 2.50099C11.1526 2.45884 12.4387 3.76922 12.5 5.31251" stroke="#D42620" stroke-linecap="round"/>
<path d="M17.4987 10.0003H8.33203M17.4987 10.0003C17.4987 9.41683 15.8368 8.3266 15.4154 7.91699M17.4987 10.0003C17.4987 10.5838 15.8368 11.6741 15.4154 12.0837" stroke="#D42620" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                  Logout
                </a>
              </li>
                </ul>
              </li>

  
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
   </section>
   <CoreModalWithoutCloseBtn
  :isOpen="showLogoutModal"
  @close="showLogoutModal = false"
  >
  <div
  class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
  @click.self="onCancel"
>
  <div class="bg-white rounded-xl p-6 max-w-sm w-full text-center shadow-lg">
    <div class="flex justify-center items-center bg-yellow-500 rounded-full w-16 h-16 mx-auto mb-4">
      <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.921875" width="63.1513" height="64" rx="31.5756" fill="#F3A218"/>
        <path d="M42.2031 32.375C42.2031 26.8521 37.7259 22.375 32.2031 22.375C26.6803 22.375 22.2031 26.8521 22.2031 32.375C22.2031 37.8978 26.6803 42.375 32.2031 42.375C37.7259 42.375 42.2031 37.8978 42.2031 32.375Z" stroke="white" stroke-width="1.5"/>
        <path d="M32.4453 37.375V32.375C32.4453 31.9036 32.4453 31.6679 32.2988 31.5214C32.1524 31.375 31.9167 31.375 31.4453 31.375" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M32.1953 28.377H32.2043" stroke="white" stroke-width="3.25" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        
    </div>
    <h2 class="text-lg font-semibold text-gray-700 mb-2">Logout</h2>
    <p class="text-gray-500 mb-6">Are you sure you want to logout?</p>
    <div class="space-y-3">
      <button
        type="button"
        class="w-full disabled:cursor-not-allowed text-sm disabled:opacity-25 bg-[#292929] text-white py-3.5 rounded-md font-semibold"
        @click="onConfirm"
      >
        Yes, log out
      </button>
      <button
        type="button"
        class="w-full bg-[#EBE5E0] text-gray-700 text-sm py-3.5 rounded-md font-semibold"
        @click="onCancel"
      >
        Cancel
      </button>
    </div>
  </div>
</div>
  </CoreModalWithoutCloseBtn>
</main>
  </template>

  <script setup lang="ts">
    import { useUser } from '@/composables/auth/user'
         import { use_service_provider_profile } from '@/composables/auth/fetchProfile'
    const { loading, profileObj } = use_service_provider_profile()
    const { user } = useUser()
const router = useRouter()
const isOpen = ref(false)
const showLogoutModal = ref(false);
const onConfirm = () => {
  showLogoutModal.value = true
  // Logic for logout
  localStorage.clear()
  setTimeout(() => {
    // loading.value = false
    showLogoutModal.value = false
    router.push('/login')
    window.location.href = "/login"
  }), 3000
  console.log("Logging out...");
};

const onCancel = () => {
  showLogoutModal.value = false
  // Logic to close the modal
  console.log("Cancelled");
};

</script>
  
  <style scoped>
  .router-link-exact-active {
    background-color: #5B8469;
    color: white;
  }
  </style>
  