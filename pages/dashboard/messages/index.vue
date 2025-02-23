<template>
  <!-- component -->
   <MessagingView>
  <div>
    <div class="w-full h-32" style="background-color: white"></div>
    <div class="mt-[-128px]">
      <div class="h-screen">
            <!-- Mobile View (Original Code) -->
            <div class="lg:hidden h-full w-full">
          <transition name="flip" mode="out-in">
            <!-- Chat List View -->
            <div v-if="!showChatDetail" class="h-full flex flex-col w-full overflow-hidden">
              <div class="flex items-center justify-between px-4 border-b bg-white w-full">
                  <h1 class="text-lg font-semibold">Messages</h1>
                  <div class="relative">
                    <button @click="toggleFilterModal" class="p-2">
                      <svg class="cursor-pointer" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="44" height="44" rx="8" fill="#EAEAEA"/>
                        <path d="M21.9941 22H22.0016" stroke="#1D2739" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M21.9863 27H21.9938" stroke="#1D2739" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M22 17H22.0075" stroke="#1D2739" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </button>

                    <div v-if="showFilterModal" class="absolute right-0 mt-2 w-44 bg-white rounded-lg border-[0.5px] border-gray-25 z-20 shadow">
                      <ul>
                        <li
                          @click="filterChats('all')"
                          class="flex items-center justify-between text-sm px-4 py-2 mb-2 border-b text-[#1D2739] last:border-b-0 border-gray-100 cursor-pointer hover:bg-gray-100"
                        >
                          All
                        </li>
                        <li
                          @click="filterChats('read')"
                          class="flex items-center justify-between text-sm px-4 py-2 mb-2 border-b text-[#1D2739] last:border-b-0 border-gray-100 cursor-pointer hover:bg-gray-100"
                        >
                          Read
                        </li>
                        <li
                          @click="filterChats('unread')"
                          class="flex items-center justify-between text-sm px-4 py-2 mb-2 border-b text-[#1D2739] last:border-b-0 border-gray-100 cursor-pointer hover:bg-gray-100"
                        >
                          Unread
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              <!-- Search Bar - Fixed -->
              <div class="p-4 bg-white flex items-center gap-x-3 w-full">
                <div class="relative w-full">
                  <input
                    type="text"
                    v-model="searchTerm"
                    placeholder="Search"
                    class="w-full p-3 pl-12 bg-[#EAEAEA] text-sm rounded-lg text-gray-700 outline-none"
                  />
                  <svg
                    class="absolute top-3 left-5"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11.668 12.166L14.668 15.166" stroke="#667185" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M13.332 7.83398C13.332 4.52028 10.6458 1.83398 7.33203 1.83398C4.01832 1.83398 1.33203 4.52028 1.33203 7.83398C1.33203 11.1477 4.01832 13.834 7.33203 13.834C10.6458 13.834 13.332 11.1477 13.332 7.83398Z" stroke="#667185" stroke-width="1.5" stroke-linejoin="round"/>
                  </svg>
                </div>
              <!-- <button  @click="showFilterModal = true">
                <svg class="cursor-pointer" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="44" height="44" rx="8" fill="#EAEAEA"/>
                <path d="M21.9941 22H22.0016" stroke="#1D2739" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21.9863 27H21.9938" stroke="#1D2739" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22 17H22.0075" stroke="#1D2739" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>


                <div v-if="showFilterModal" class="fixed inset-0 z-50" @click="showFilterModal = false">
                <div
                  class="absolute left-[170px] mt-4 top-10 w-44 bg-white rounded-lg border-[0.5px] border-gray-25 z-20 shadow">
                  <ul>
                    <li
                      class="flex items-center justify-between text-sm px-4 py-2 mb-2 border-b text-[#1D2739] last:border-b-0 border-gray-100 cursor-pointer ">
                      Read
                    </li>
                    <li
                      class="flex items-center justify-between text-sm px-4 py-1 mb-2 border-b text-[#1D2739] last:border-b-0 border-gray-100 cursor-pointer ">
                      Unread
                    </li>
                  </ul>
                </div>
                </div>
              </button> -->
              </div>

              <!-- Scrollable Chat List -->
              <div class="flex-1 overflow-y-auto overflow-x-hidden bg-white w-full">
                <div v-if="!loadingActiveChats && filteredChats.length" class="divide-y divide-gray-100">
                  <div
                    v-for="chat in filteredChats"
                    :key="chat.id"
                    @click="openChatDetail(chat)"
                    class="flex items-center p-4 cursor-pointer hover:bg-gray-50 w-full"
                  >
                <!-- {{ chat.readAt }} -->
                    <div class="relative shrink-0">
                      <img
                       v-if="chat.participant?.profilePicture"
                        :src="chat.participant?.profilePicture"
                        class="w-12 h-12 rounded-full object-cover"
                        :alt="chat.participant?.firstName"
                      />
                      <svg v-else class="h-16 w-16" viewBox="0 0 111 106" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M86.162 83.0406C90.5989 78.8716 94.1335 73.8369 96.5473 68.2476C98.9612 62.6584 100.203 56.6334 100.196 50.5452C100.196 25.8886 80.2096 5.90234 55.553 5.90234C30.8964 5.90234 10.9102 25.8886 10.9102 50.5452C10.9031 56.6334 12.1449 62.6584 14.5588 68.2476C16.9726 73.8369 20.5072 78.8716 24.9441 83.0406C33.2176 90.8561 44.1718 95.2034 55.553 95.1881C66.9343 95.2034 77.8885 90.8561 86.162 83.0406ZM28.7444 77.1569C31.9591 73.1351 36.0384 69.8892 40.6796 67.6602C45.3207 65.4312 50.4044 64.2763 55.553 64.2815C60.7017 64.2763 65.7854 65.4312 70.4265 67.6602C75.0676 69.8892 79.147 73.1351 82.3616 77.1569C78.8544 80.6995 74.6787 83.5104 70.0767 85.4267C65.4747 87.343 60.5381 88.3264 55.553 88.3199C50.568 88.3264 45.6313 87.343 41.0294 85.4267C36.4274 83.5104 32.2516 80.6995 28.7444 77.1569ZM72.7234 36.8089C72.7234 41.3628 70.9144 45.7301 67.6943 48.9502C64.4742 52.1703 60.1069 53.9793 55.553 53.9793C50.9992 53.9793 46.6318 52.1703 43.4118 48.9502C40.1917 45.7301 38.3827 41.3628 38.3827 36.8089C38.3827 32.2551 40.1917 27.8877 43.4118 24.6677C46.6318 21.4476 50.9992 19.6386 55.553 19.6386C60.1069 19.6386 64.4742 21.4476 67.6943 24.6677C70.9144 27.8877 72.7234 32.2551 72.7234 36.8089Z" fill="#D6D0CC"/>
            <path d="M105.5 50C105.5 77.6142 83.1142 100 55.5 100C27.8858 100 5.5 77.6142 5.5 50C5.5 22.3858 27.8858 0 55.5 0C83.1142 0 105.5 22.3858 105.5 50ZM11.3186 50C11.3186 74.4007 31.0993 94.1814 55.5 94.1814C79.9007 94.1814 99.6814 74.4007 99.6814 50C99.6814 25.5993 79.9007 5.81863 55.5 5.81863C31.0993 5.81863 11.3186 25.5993 11.3186 50Z" fill="#F0F2F5"/>
            </svg>
                      <div
                        v-if="chat.unread"
                        class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full"
                      ></div>
                    </div>
                    <div class="flex-1 min-w-0 ml-3">
                      <div class="flex justify-between items-start w-full">
                        <h3 class="font-medium text-sm truncate max-w-[150px]">
                          {{ chat.participant?.firstName }}  {{ chat.participant?.lastName }}
                        </h3>
                        <span class="text-xs text-gray-500 shrink-0 ml-2">
                          {{ formatDate(chat.lastMessage?.createdAt) }}
                        </span>
                      </div>
                      <p class="text-sm text-gray-500 truncate pr-4">
                        {{ chat.lastMessage?.content }}
                      </p>
                    </div>
                  </div>
                </div>

                <div v-else-if="loadingActiveChats" class="p-4 space-y-4">
                  <div v-for="n in 3" :key="n" class="animate-pulse flex space-x-4">
                    <div class="rounded-full bg-slate-200 h-12 w-12 shrink-0"></div>
                    <div class="flex-1 space-y-2 py-1 min-w-0">
                      <div class="h-4 bg-slate-200 rounded w-3/4"></div>
                      <div class="h-4 bg-slate-200 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Chat Detail View -->
            <div v-else class="h-full flex flex-col w-full overflow-hidden">
              <!-- Fixed Header -->
              <div class="flex items-center p-4 border-b bg-white w-full">
                <button @click="showChatDetail = false" class="p-2 shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
                <div class="flex items-center min-w-0 ml-2">
                  <img
                   v-if="selectedUser?.participant?.profilePicture"
                    :src="selectedUser?.participant?.profilePicture"
                    class="w-10 h-10 rounded-full object-cover shrink-0"
                    :alt="selectedUser?.participant?.firsrName"
                  />
                  <svg v-else class="h-16 w-16" viewBox="0 0 111 106" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M86.162 83.0406C90.5989 78.8716 94.1335 73.8369 96.5473 68.2476C98.9612 62.6584 100.203 56.6334 100.196 50.5452C100.196 25.8886 80.2096 5.90234 55.553 5.90234C30.8964 5.90234 10.9102 25.8886 10.9102 50.5452C10.9031 56.6334 12.1449 62.6584 14.5588 68.2476C16.9726 73.8369 20.5072 78.8716 24.9441 83.0406C33.2176 90.8561 44.1718 95.2034 55.553 95.1881C66.9343 95.2034 77.8885 90.8561 86.162 83.0406ZM28.7444 77.1569C31.9591 73.1351 36.0384 69.8892 40.6796 67.6602C45.3207 65.4312 50.4044 64.2763 55.553 64.2815C60.7017 64.2763 65.7854 65.4312 70.4265 67.6602C75.0676 69.8892 79.147 73.1351 82.3616 77.1569C78.8544 80.6995 74.6787 83.5104 70.0767 85.4267C65.4747 87.343 60.5381 88.3264 55.553 88.3199C50.568 88.3264 45.6313 87.343 41.0294 85.4267C36.4274 83.5104 32.2516 80.6995 28.7444 77.1569ZM72.7234 36.8089C72.7234 41.3628 70.9144 45.7301 67.6943 48.9502C64.4742 52.1703 60.1069 53.9793 55.553 53.9793C50.9992 53.9793 46.6318 52.1703 43.4118 48.9502C40.1917 45.7301 38.3827 41.3628 38.3827 36.8089C38.3827 32.2551 40.1917 27.8877 43.4118 24.6677C46.6318 21.4476 50.9992 19.6386 55.553 19.6386C60.1069 19.6386 64.4742 21.4476 67.6943 24.6677C70.9144 27.8877 72.7234 32.2551 72.7234 36.8089Z" fill="#D6D0CC"/>
            <path d="M105.5 50C105.5 77.6142 83.1142 100 55.5 100C27.8858 100 5.5 77.6142 5.5 50C5.5 22.3858 27.8858 0 55.5 0C83.1142 0 105.5 22.3858 105.5 50ZM11.3186 50C11.3186 74.4007 31.0993 94.1814 55.5 94.1814C79.9007 94.1814 99.6814 74.4007 99.6814 50C99.6814 25.5993 79.9007 5.81863 55.5 5.81863C31.0993 5.81863 11.3186 25.5993 11.3186 50Z" fill="#F0F2F5"/>
            </svg>
                  <div class="ml-3 min-w-0">
                    <h2 class="font-medium text-sm truncate">{{ selectedUser?.participant?.firstName }} {{ selectedUser?.participant?.lastName }}</h2>
                    <p class="text-xs text-gray-500 truncate">{{ selectedUser?.participant?.status || 'Online' }}</p>
                  </div>
                </div>
              </div>

              <!-- Scrollable Messages Area -->
              <div class="flex-1 overflow-y-auto overflow-x-hidden">
                <ChatWindow
                  class="z-10"
                  :roomChats="roomChatsList"
                  :messages="messages"
                  :selectedUser="selectedUser"
                />
              </div>

              <!-- Fixed Message Input -->
              <div class="border-t bg-white w-full">
                <ChatMessageInput
                  v-model="newMessage"
                  :isConnected="isConnected"
                  :isSending="messageStatus === 'sending'"
                  @sendMessage="sendMessageToUser"
                />
              </div>
            </div>
          </transition>
            </div>
          <!-- Desktop View (Original Code) -->
          <section class="hidden lg:flex h-full rounded">
            <!-- Left sidebar -->
            <div class="w-[400px] flex flex-col border-r border-gray-25">
              <!-- Search and Filter Header -->
              <div class="p-4 border-b border-gray-100">
                <div class="flex items-center space-x-4">
                  <div class="relative flex-1">
                    <input
                      type="text"
                      placeholder="Search"
                      v-model="searchTerm"
                      class="w-full p-3 pl-12 bg-[#EAEAEA] text-sm rounded-lg text-gray-700 outline-none"
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
                  <div class="relative">
                    <button @click="toggleFilterModal" class="p-2">
                      <svg class="cursor-pointer" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="44" height="44" rx="8" fill="#EAEAEA"/>
                        <path d="M21.9941 22H22.0016" stroke="#1D2739" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M21.9863 27H21.9938" stroke="#1D2739" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M22 17H22.0075" stroke="#1D2739" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </button>

                    <div v-if="showFilterModal" class="absolute right-0 mt-2 w-44 bg-white rounded-lg border-[0.5px] border-gray-25 z-20 shadow">
                      <ul>
                        <li
                          @click="filterChats('all')"
                          class="flex items-center justify-between text-sm px-4 py-2 mb-2 border-b text-[#1D2739] last:border-b-0 border-gray-100 cursor-pointer hover:bg-gray-100"
                        >
                          All
                        </li>
                        <li
                          @click="filterChats('read')"
                          class="flex items-center justify-between text-sm px-4 py-2 mb-2 border-b text-[#1D2739] last:border-b-0 border-gray-100 cursor-pointer hover:bg-gray-100"
                        >
                          Read
                        </li>
                        <li
                          @click="filterChats('unread')"
                          class="flex items-center justify-between text-sm px-4 py-2 mb-2 border-b text-[#1D2739] last:border-b-0 border-gray-100 cursor-pointer hover:bg-gray-100"
                        >
                          Unread
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!-- <button @click="toggleDropdown" class="bg-[#EAEAEA] p-2 rounded-lg">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.8333 3.33398H2.5" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path d="M9.16667 15.834H2.5" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path d="M17.5001 15.834H14.1667" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path d="M17.5001 9.58398H9.16675" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path d="M17.4999 3.33398H15.8333" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path d="M4.16667 9.58398H2.5" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path
                        d="M12.0833 1.66602C12.4715 1.66602 12.6657 1.66602 12.8188 1.72945C13.023 1.81402 13.1853 1.97626 13.2698 2.18045C13.3333 2.33359 13.3333 2.52773 13.3333 2.91602V3.74935C13.3333 4.13763 13.3333 4.33177 13.2698 4.48492C13.1853 4.68911 13.023 4.85134 12.8188 4.93592C12.6657 4.99935 12.4715 4.99935 12.0833 4.99935C11.695 4.99935 11.5008 4.99935 11.3477 4.93592C11.1435 4.85134 10.9813 4.68911 10.8967 4.48492C10.8333 4.33177 10.8333 4.13763 10.8333 3.74935V2.91602C10.8333 2.52773 10.8333 2.33359 10.8967 2.18045C10.9813 1.97626 11.1435 1.81402 11.3477 1.72945C11.5008 1.66602 11.695 1.66602 12.0833 1.66602Z"
                        stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path
                        d="M10.4167 14.166C10.805 14.166 10.9992 14.166 11.1523 14.2294C11.3565 14.314 11.5187 14.4763 11.6033 14.6804C11.6667 14.8336 11.6667 15.0278 11.6667 15.416V16.2493C11.6667 16.6376 11.6667 16.8318 11.6033 16.9849C11.5187 17.1891 11.3565 17.3513 11.1523 17.4359C10.9992 17.4993 10.805 17.4993 10.4167 17.4993C10.0285 17.4993 9.83433 17.4993 9.68116 17.4359C9.477 17.3513 9.31475 17.1891 9.23017 16.9849C9.16675 16.8318 9.16675 16.6376 9.16675 16.2493V15.416C9.16675 15.0278 9.16675 14.8336 9.23017 14.6804C9.31475 14.4763 9.477 14.314 9.68116 14.2294C9.83433 14.166 10.0285 14.166 10.4167 14.166Z"
                        stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path
                        d="M7.91675 7.91602C8.30503 7.91602 8.49917 7.91602 8.65233 7.97945C8.8565 8.06402 9.01875 8.22626 9.10333 8.43043C9.16675 8.5836 9.16675 8.77777 9.16675 9.16602V9.99935C9.16675 10.3876 9.16675 10.5818 9.10333 10.7349C9.01875 10.9391 8.8565 11.1013 8.65233 11.1859C8.49917 11.2493 8.30503 11.2493 7.91675 11.2493C7.52846 11.2493 7.33432 11.2493 7.18118 11.1859C6.97699 11.1013 6.81476 10.9391 6.73018 10.7349C6.66675 10.5818 6.66675 10.3876 6.66675 9.99935V9.16602C6.66675 8.77777 6.66675 8.5836 6.73018 8.43043C6.81476 8.22626 6.97699 8.06402 7.18118 7.97945C7.33432 7.91602 7.52846 7.91602 7.91675 7.91602Z"
                        stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>

                  <div v-if="showDropdown" class="fixed inset-0 z-50" @click="toggleDropdown">

                  <div
                    class="absolute left-[170px] mt-4 top-10 w-44 bg-white rounded-lg border-[0.5px] border-gray-25 z-20 shadow">
                    <ul>
                      <li
                        class="flex items-center justify-between text-sm px-4 py-2 mb-2 border-b text-[#1D2739] last:border-b-0 border-gray-100 cursor-pointer ">
                        Read
                      </li>
                      <li
                        class="flex items-center justify-between text-sm px-4 py-1 mb-2 border-b text-[#1D2739] last:border-b-0 border-gray-100 cursor-pointer ">
                        Unread
                      </li>
                    </ul>
                  </div>
                  </div> -->
                </div>
              </div>

              <!-- Chat List -->
              <div class="flex-1 overflow-y-auto">
                <div v-if="!loadingActiveChats && filteredChats.length" class="divide-y divide-gray-100">
                  <ChatUserList class="px-3 flex items-center bg-grey-light cursor-pointer" :loading="loadingActiveChats"
                  :users="filteredChats" @selectUser="selectUser" />
                  <!-- <div
                    v-for="chat in activeChatsList"
                    :key="chat.id"
                    @click="selectUser(chat)"
                    class="flex items-center space-x-3 p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                    :class="{'bg-gray-50': selectedUser?.id === chat.id}"
                  >
                    <div class="relative">
                      <img
                        :src="chat.participant?.avatar || '/placeholder-avatar.png'"
                        class="w-12 h-12 rounded-full object-cover"
                        :alt="chat.participant?.name"
                      />
                      <div
                        v-if="chat.unread"
                        class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full"
                      ></div>
                    </div>
                    <div class="flex-1 min-w-0">
                      <div class="flex justify-between items-start">
                        <h3 class="font-medium text-sm truncate">{{ chat.participant?.name }}</h3>
                        <span class="text-xs text-gray-500 whitespace-nowrap ml-2">
                          {{ formatDate(chat.lastMessage?.createdAt) }}
                        </span>
                      </div>
                      <p class="text-sm text-gray-500 truncate">
                        {{ chat.lastMessage?.content }}
                      </p>
                    </div>
                  </div> -->
                </div>
              </div>
            </div>

            <!-- Right Content -->
            <div class="flex-1 flex flex-col">
              <!-- Chat Header -->
              <ChatHeader :selectedUser="selectedUser || roomChatsList" :isConnected="isConnected" />
              <!-- <div class="flex items-center space-x-4 p-4 bg-white border-b border-gray-100">
                <div class="flex items-center space-x-3">
                  <img
                    :src="selectedUser?.participant?.avatar || '/placeholder-avatar.png'"
                    class="w-10 h-10 rounded-full object-cover"
                    :alt="selectedUser?.participant?.name"
                  />
                  <div>
                    <h2 class="font-medium text-sm">{{ selectedUser?.participant?.name }}</h2>
                    <p class="text-xs text-gray-500">{{ selectedUser?.participant?.status || 'Online' }}</p>
                  </div>
                </div>
              </div> -->

              <!-- Chat Messages -->
              <div class="flex-1 overflow-y-auto p-4">
              <ChatWindow
                  class="z-10"
                  :roomChats="roomChatsList"
                  :messages="messages"
                  :selectedUser="selectedUser"
                />
              </div>

              <!-- Message Input -->
              <div class="bg-white">
                <ChatMessageInput
                  v-model="newMessage"
                  :isConnected="isConnected"
                  :isSending="messageStatus === 'sending'"
                  @sendMessage="sendMessageToUser"
                />
              </div>
            </div>
          </section>
      </div>
    </div>
  </div>
</MessagingView>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { useFetchTenant } from '@/composables/modules/tenant/fetch';
import { useRouter, useRoute } from 'vue-router';
import MessagingView from "@/layouts/MessagingView.vue";
import { useGetActiveChats } from "@/composables/modules/messages/fetchActiveChats";
import { useGetRoomChats } from "@/composables/modules/messages/fetchRoomMessages";
import { useWebSocket } from "@/composables/modules/messages/sockets";

// Composables
const { loadingActiveChats, activeChatsList } = useGetActiveChats();
const { getRoomChats, loadingRoomChats, roomChatsList } = useGetRoomChats();
const { loading, tenant } = useFetchTenant();
const {
  messages,
  newMessage,
  isConnected,
  sendMessage
} = useWebSocket();

definePageMeta({
  middleware: 'auth'
});

const router = useRouter();
const route = useRoute();
const selectedUser = ref(null);
const messageStatus = ref('idle');

const showFilterModal = ref(false)

const filterStatus = ref('all')

const toggleFilterModal = () => {
  showFilterModal.value = !showFilterModal.value
}

const filterChats = (status: 'all' | 'read' | 'unread') => {
  filterStatus.value = status
  showFilterModal.value = false
}

// Watch for selected user changes
watch(selectedUser, async (newVal: any) => {
  if (newVal?.id) {
    try {
      await getRoomChats(newVal.id);
    } catch (error) {
      console.error('Failed to fetch room chats:', error);
    }
  }
});

// Watch for new messages to scroll to bottom
watch(messages, (newMessages) => {
  if (newMessages.length > 0) {
    scrollToBottom();
  }
}, { deep: true });

// Message handling
const sendMessageToUser = async (content: string) => {
  if (!selectedUser.value?.participant?.id || !isConnected.value) {
    console.error('Cannot send message: No recipient selected or not connected');
    return;
  }

  const userId = selectedUser?.value?.participant?.id || route?.query?.userId;

  if (!userId || !isConnected.value) {
    console.error(
      "Cannot send message: No recipient selected or not connected"
    );
    return;
  }

  messageStatus.value = 'sending';

  try {
    const socketPayload = {
      content,
      recipientId: selectedUser?.value?.participant?.id,
      recipientType: selectedUser?.value?.participant?.role,
      messageType: "private",
      room: selectedUser.value.id, // Include room ID if needed
      // content,
      // recipientId: participant.id,
      // recipientType: participant.role || 'TENANT', // Default role to TENANT if not provided
      // messageType: 'private',
      // room: selectedUser.value?.id || tenant.value.id // Use tenant's ID as room ID if selectedUser is null
    };

    await sendMessage(socketPayload);
    messageStatus.value = 'sent';
    newMessage.value = ''; // Clear input after successful send
  } catch (error) {
    console.error('Failed to send message:', error);
    messageStatus.value = 'error';
    // Optionally show error notification to user
  }
};

// User selection
const selectUser = (user: any) => {
  selectedUser.value = user;
  // Optionally update URL
  router.push({ query: { userId: user.id } });
};

// Scroll handling
const scrollToBottom = () => {
  const chatWindow = document.querySelector('.custom-scrollbar');
  if (chatWindow) {
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }
};

// Event handling
const { $emitter } = useNuxtApp();

onMounted(() => {
  // Handle URL parameters
  const userId = route.query.userId;
  console.log(userId, 'user here');
  if (userId && activeChatsList.value) {
    const user = activeChatsList.value.find(u => u.id === userId);
    if (user) {
      selectUser(user);
    }
  }

  // // Set up event listeners
  // $emitter.on('customEvent', async (payload: any) => {
  //   if (payload.data) {
  //     await getRoomChats(payload.data);
  //     scrollToBottom();
  //   }
  // });
});

onUnmounted(() => {
  // Clean up event listeners
  $emitter.off('customEvent');
});

// State for dropdown visibility
const showDropdown = ref(false);

function toggleDropdown() {
  showDropdown.value = !showDropdown.value;
}


const showChatDetail = ref(false);

const openChatDetail = (user: any) => {
  selectedUser.value = user;
  showChatDetail.value = true;
};

// Add this to your existing script
function formatDate(dateString: string) {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });
}



// Add this new ref for the search term
const searchTerm = ref('');

// Add this computed property to filter the chats
// const filteredChats = computed(() => {
//   if (!searchTerm.value) return activeChatsList.value;
  
//   return activeChatsList.value.filter(chat => 
//     chat.participant?.firstName.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
//     chat.participant?.lastName.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
//     chat.lastMessage?.content.toLowerCase().includes(searchTerm.value.toLowerCase())
//   );
// });

// const filteredChats = computed(() => {
//   let filtered = activeChatsList.value;

//   // Filter chats by search term if provided
//   if (searchTerm.value) {
//     const lowerSearchTerm = searchTerm.value.toLowerCase();
//     filtered = filtered.filter(chat => {
//       return (
//         chat.participant?.firstName.toLowerCase().includes(lowerSearchTerm) ||
//         chat.participant?.lastName.toLowerCase().includes(lowerSearchTerm) ||
//         chat.lastMessage?.content.toLowerCase().includes(lowerSearchTerm)
//       );
//     });
//   }

//   // // Filter chats by read/unread status if not 'all'
//   // if (filterStatus.value !== 'all') {
//   //   filtered = filtered.filter(chat =>
//   //     filterStatus.value === 'read' ? !chat.unread : chat.unread
//   //   );
//   // }
//   if (filterStatus.value !== 'all') {
//   filtered = filtered.filter(chat =>
//     filterStatus.value === 'read' ? chat.readAt !== null : chat.readAt === null
//   );
// }

//   return filtered;
// });

const filteredChats = computed(() => {
  let filtered = activeChatsList.value;

  // Filter chats by search term if provided
  if (searchTerm.value) {
    const lowerSearchTerm = searchTerm.value.toLowerCase();
    filtered = filtered.filter(chat => {
      return (
        chat.participant?.firstName.toLowerCase().includes(lowerSearchTerm) ||
        chat.participant?.lastName.toLowerCase().includes(lowerSearchTerm) ||
        chat.lastMessage?.content.toLowerCase().includes(lowerSearchTerm)
      );
    });
  }

  // Filter chats by read/unread status if not 'all'
  if (filterStatus.value !== 'all') {
    filtered = filtered.filter(chat =>
      filterStatus.value === 'read' ? chat.readAt !== null : chat.readAt === null
    );
  }

  return filtered;
});

</script>

<style>
.flip-enter-active,
.flip-leave-active {
  transition: transform 0.3s ease-out;
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

/* Add these styles for better scrolling */
.overflow-y-auto {
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: rgba(0,0,0,0.2) transparent;
}

.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: transparent;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background-color: rgba(0,0,0,0.2);
  border-radius: 3px;
}

/* Add these styles for better scrolling */
.overflow-y-auto {
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: rgba(0,0,0,0.2) transparent;
}

/* .overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: transparent;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background-color: rgba(0,0,0,0.2);
  border-radius: 3px;
} */


/* Add these styles to prevent horizontal overflow */
.overflow-x-hidden {
  overflow-x: hidden;
}

/* Ensure text truncation works properly */
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Add smooth scrolling */
.overflow-y-auto {
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: rgba(0,0,0,0.2) transparent;
}
</style>
