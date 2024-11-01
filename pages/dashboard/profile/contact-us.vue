<template>
 <main>
  
  <div class="p-6 bg-gray-25 min-h-screen">
    <div class="max-w-2xl mx-auto">
      <!-- Breadcrumbs -->
      <div class="text-sm text-gray-500 mb-4">
        <span>Profile</span>
        <span class="mx-2">|</span>
        <span class="font-medium text-gray-700">Contact us</span>
      </div>

      <!-- Chat Section -->
      <div class="mb-6 ">
        <h3 class="text-[#1D2739] rounded-xl font-medium mb-3 border-[0.5px] border-gray-25 bg-white py-4 p-3">Chat</h3>
        <div class="space-y-2 bg-white border-[0.5px] border-gray-25">
          <div class="flex justify-between items-center p-4">
            <div>
              <p class="text-gray-700">Live Chat</p>
              <p class="text-sm text-gray-500">Start a conversation on live chat</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
          <div class="flex justify-between items-center p-4">
            <div>
              <p class="text-gray-700">WhatsApp</p>
              <p class="text-sm text-gray-500">Start a conversation on WhatsApp</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>

      <!-- Call Section -->
      <div class="mb-6">
        <h3 class="text-[#1D2739] rounded-xl font-medium mb-3 border-[0.5px] border-gray-25 bg-white py-4 p-3">Call</h3>
        <div class="flex justify-between items-center bg-white p-4 rounded-lg border-[0.5px] border-gray-25">
          <div>
            <p class="text-gray-700">+234 000 000 0000</p>
            <p class="text-sm text-gray-500">Average response time: 2 minutes</p>
          </div>
        </div>
      </div>

      <!-- Email Section -->
      <div class="mb-6">
        <h3 class="text-[#1D2739] rounded-xl font-medium mb-3 border-[0.5px] border-gray-25 bg-white py-4 p-3">Email</h3>
        <div class="flex justify-between items-center bg-white p-4 rounded-lg border-[0.5px] border-gray-25">
          <div>
            <p class="text-gray-700">support@blackcountry.com</p>
            <p class="text-sm text-gray-500">Average response time: 6 hours</p>
          </div>
        </div>
      </div>

      <!-- Social Media Section -->
      <div>
        <h3 class="text-[#1D2739] rounded-xl font-medium mb-3 border-[0.5px] border-gray-25 bg-white py-4 p-3">Social Media</h3>
        <div class="space-y-2">
          <div class="flex items-center gap-x-2 bg-white p-4 rounded-lg border-[0.5px] border-gray-25">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="16" fill="#FEF7FF"/>
                  <rect x="8.42578" y="8.04492" width="15.5556" height="15.9091" rx="4.26667" fill="url(#paint0_radial_6053_206888)"/>
                  <rect x="8.42578" y="8.04492" width="15.5556" height="15.9091" rx="4.26667" fill="url(#paint1_radial_6053_206888)"/>
                  <rect x="8.42578" y="8.04492" width="15.5556" height="15.9091" rx="4.26667" fill="url(#paint2_radial_6053_206888)"/>
                  <path d="M20.0929 12.8732C20.0929 13.3439 19.7198 13.7255 19.2595 13.7255C18.7993 13.7255 18.4262 13.3439 18.4262 12.8732C18.4262 12.4025 18.7993 12.021 19.2595 12.021C19.7198 12.021 20.0929 12.4025 20.0929 12.8732Z" fill="white"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.204 18.8391C17.7381 18.8391 18.9818 17.5672 18.9818 15.9982C18.9818 14.4292 17.7381 13.1573 16.204 13.1573C14.6699 13.1573 13.4262 14.4292 13.4262 15.9982C13.4262 17.5672 14.6699 18.8391 16.204 18.8391ZM16.204 17.7028C17.1245 17.7028 17.8707 16.9396 17.8707 15.9982C17.8707 15.0568 17.1245 14.2937 16.204 14.2937C15.2835 14.2937 14.5373 15.0568 14.5373 15.9982C14.5373 16.9396 15.2835 17.7028 16.204 17.7028Z" fill="white"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6484 15.771C10.6484 13.8617 10.6484 12.907 11.0117 12.1778C11.3313 11.5363 11.8413 11.0148 12.4685 10.688C13.1815 10.3164 14.1149 10.3164 15.9818 10.3164H16.4262C18.2931 10.3164 19.2265 10.3164 19.9395 10.688C20.5667 11.0148 21.0767 11.5363 21.3962 12.1778C21.7595 12.907 21.7595 13.8617 21.7595 15.771V16.2255C21.7595 18.1348 21.7595 19.0894 21.3962 19.8186C21.0767 20.4601 20.5667 20.9816 19.9395 21.3085C19.2265 21.68 18.2931 21.68 16.4262 21.68H15.9818C14.1149 21.68 13.1815 21.68 12.4685 21.3085C11.8413 20.9816 11.3313 20.4601 11.0117 19.8186C10.6484 19.0894 10.6484 18.1348 10.6484 16.2255V15.771ZM15.9818 11.4528H16.4262C17.378 11.4528 18.025 11.4537 18.5251 11.4954C19.0122 11.5361 19.2613 11.6099 19.4351 11.7005C19.8532 11.9184 20.1932 12.2661 20.4062 12.6937C20.4948 12.8714 20.5669 13.1262 20.6067 13.6244C20.6476 14.1359 20.6484 14.7976 20.6484 15.771V16.2255C20.6484 17.1989 20.6476 17.8606 20.6067 18.372C20.5669 18.8702 20.4948 19.125 20.4062 19.3027C20.1932 19.7304 19.8532 20.0781 19.4351 20.296C19.2613 20.3865 19.0122 20.4603 18.5251 20.501C18.025 20.5428 17.378 20.5437 16.4262 20.5437H15.9818C15.03 20.5437 14.383 20.5428 13.8829 20.501C13.3958 20.4603 13.1467 20.3865 12.9729 20.296C12.5548 20.0781 12.2148 19.7304 12.0018 19.3027C11.9132 19.125 11.8411 18.8702 11.8013 18.372C11.7604 17.8606 11.7595 17.1989 11.7595 16.2255V15.771C11.7595 14.7976 11.7604 14.1359 11.8013 13.6244C11.8411 13.1262 11.9132 12.8714 12.0018 12.6937C12.2148 12.2661 12.5548 11.9184 12.9729 11.7005C13.1467 11.6099 13.3958 11.5361 13.8829 11.4954C14.383 11.4537 15.03 11.4528 15.9818 11.4528Z" fill="white"/>
                  <defs>
                  <radialGradient id="paint0_radial_6053_206888" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13.9813 19.9767) rotate(-55.9754) scale(14.3965 14.2792)">
                  <stop stop-color="#B13589"/>
                  <stop offset="0.79309" stop-color="#C62F94"/>
                  <stop offset="1" stop-color="#8A3AC8"/>
                  </radialGradient>
                  <radialGradient id="paint1_radial_6053_206888" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13.4258 24.5222) rotate(-65.6239) scale(12.7877 12.6014)">
                  <stop stop-color="#E0E8B7"/>
                  <stop offset="0.444662" stop-color="#FB8A2E"/>
                  <stop offset="0.71474" stop-color="#E2425C"/>
                  <stop offset="1" stop-color="#E2425C" stop-opacity="0"/>
                  </radialGradient>
                  <radialGradient id="paint2_radial_6053_206888" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(7.59245 8.6131) rotate(-8.31232) scale(21.616 4.72417)">
                  <stop offset="0.156701" stop-color="#406ADC"/>
                  <stop offset="0.467799" stop-color="#6A45BE"/>
                  <stop offset="1" stop-color="#6A45BE" stop-opacity="0"/>
                  </radialGradient>
                  </defs>
                  </svg>
                  
            <p class="text-gray-700">Instagram</p>
          </div>
          <div class="flex items-center gap-x-2 bg-white p-4 rounded-lg border-[0.5px] border-gray-25">
              <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16.75" r="16" fill="#F0F2F5"/>
                  <rect x="7.91016" y="8.75" width="16" height="16" rx="4.26667" fill="black"/>
                  <path d="M18.2181 13.0156H19.4151L16.8 16.0045L19.8764 20.0716H17.4676L15.5809 17.6049L13.4222 20.0716H12.2245L15.0215 16.8747L12.0703 13.0156H14.5403L16.2456 15.2703L18.2181 13.0156ZM17.798 19.3552H18.4612L14.1799 13.6944H13.4681L17.798 19.3552Z" fill="white"/>
                  </svg>
                  
            <p class="text-gray-700">Twitter</p>
          </div>
          <div class="flex items-center gap-x-2 bg-white p-4 rounded-lg border-[0.5px] border-gray-25">
              <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16.25" r="16" fill="#E6F1FF"/>
                  <rect x="7.79688" y="8.25" width="16" height="16" rx="4.26667" fill="#1877F2"/>
                  <path d="M18.9094 18.5645L19.2656 16.252H17.0469V14.752C17.0469 14.1207 17.3563 13.502 18.35 13.502H19.3594V11.5332C19.3594 11.5332 18.4438 11.377 17.5688 11.377C15.7406 11.377 14.5469 12.4832 14.5469 14.4895V16.252H12.5156V18.5645H14.5469V24.252H17.0469V18.5645H18.9094Z" fill="white"/>
                  </svg>
                  
            <p class="text-gray-700">Facebook</p>
          </div>
        </div>
      </div>
    </div>
  </div>
 </main>
  </template>
  
  <script setup lang="ts">
 definePageMeta({
  layout: "dashboard"
})

  </script>
  
  <style scoped></style>
  