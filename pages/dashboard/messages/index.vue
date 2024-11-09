<template>
  <!-- component -->
   <MessagingView>
  <div>
    <div class="w-full h-32" style="background-color: white"></div>
    <div class="" style="margin-top: -128px;">
      <div class="h-screen">
        <div class="flex border-[0.5px] border-gray-25 rounded h-full">

          <!-- Left -->
          <div class="w-[500px] border-[0.5px] flex flex-col">
            <div class="flex items-center space-x-4 p-2 ">

              <div class="relative flex items-center bg-[#EAEAEA] rounded-lg px-3 py-2 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.386a1 1 0 11-1.414 1.415l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z"
                    clip-rule="evenodd" />
                </svg>
                <input type="text" class="bg-[#EAEAEA] text-gray-600 text-sm ml-2 py-1.5 focus:outline-none w-full"
                  placeholder="Search" />
              </div>


              <button @click="toggleDropdown" class="bg-[#EAEAEA] p-2 rounded-lg  transition-colors">
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
              </div>
            </div>

            <!-- Header -->
            <!-- <div class="py-2 px-3 bg-grey-lighter flex flex-row justify-between items-center">
                          <div>
                              <img class="w-10 h-10 rounded-full" src="http://andressantibanez.com/res/avatar.png"/>
                          </div>

                          <div class="flex">
                              <div>
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="#727A7E" d="M12 20.664a9.163 9.163 0 0 1-6.521-2.702.977.977 0 0 1 1.381-1.381 7.269 7.269 0 0 0 10.024.244.977.977 0 0 1 1.313 1.445A9.192 9.192 0 0 1 12 20.664zm7.965-6.112a.977.977 0 0 1-.944-1.229 7.26 7.26 0 0 0-4.8-8.804.977.977 0 0 1 .594-1.86 9.212 9.212 0 0 1 6.092 11.169.976.976 0 0 1-.942.724zm-16.025-.39a.977.977 0 0 1-.953-.769 9.21 9.21 0 0 1 6.626-10.86.975.975 0 1 1 .52 1.882l-.015.004a7.259 7.259 0 0 0-5.223 8.558.978.978 0 0 1-.955 1.185z"></path></svg>
                              </div>
                              <div class="ml-4">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path opacity=".55" fill="#263238" d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"></path></svg>
                              </div>
                              <div class="ml-4">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="#263238" fill-opacity=".6" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path></svg>
                              </div>
                          </div>
                      </div> -->

            <!-- Search -->
            <!-- <div class="py-2 px-2 bg-grey-lightest">
                          <input type="text" class="w-full px-2 py-2 text-sm" placeholder="Search or start new chat"/>
                      </div> -->

            <!-- Contacts -->
            <div v-if="!loadingActiveChats && activeChatsList.length" class="bg-grey-lighter flex-1 overflow-auto">
              <ChatUserList class="px-3 flex items-center bg-grey-light cursor-pointer" :loading="loadingActiveChats"
                :users="activeChatsList" @selectUser="selectUser" />
            </div>
            <section v-else-if="loadingActiveChats && !activeChatsList?.length">
        <div class="rounded-md p-4 w-full mx-auto">
          <div class="animate-pulse flex space-x-4">
            <div class="flex-1 space-y-6 py-1">
              <div class="h-44 bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
       </section>
      <section v-else class="flex flex-col justify-between items-center space-y-2 mt-10">
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
            <h2 class="text-[#1D2739]">No conversations found</h2>
            <p class="text-[#667185]">You have not contacted anyone</p>
      </section>

          </div>


          <!-- Right -->
          <div class="w-full border-[0.5px] border-gray-100 flex flex-col">

            <!-- Header -->
            <ChatHeader :selectedUser="selectedUser || roomChatsList" :isConnected="isConnected" />
            <!-- <div class="py-2 px-3 bg-grey-lighter flex flex-row justify-between items-center">
                          <div class="flex items-center">
                              <div>
                                  <img class="w-10 h-10 rounded-full" src="https://darrenjameseeley.files.wordpress.com/2014/09/expendables3.jpeg"/>
                              </div>
                              <div class="ml-4">
                                  <p class="text-grey-darkest">
                                      New Movie! Expendables 4
                                  </p>
                                  <p class="text-grey-darker text-xs mt-1">
                                      Andrés, Tom, Harrison, Arnold, Sylvester
                                  </p>
                              </div>
                          </div>

                          <div class="flex">
                              <div>
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="#263238" fill-opacity=".5" d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z"></path></svg>
                              </div>
                              <div class="ml-6">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="#263238" fill-opacity=".5" d="M1.816 15.556v.002c0 1.502.584 2.912 1.646 3.972s2.472 1.647 3.974 1.647a5.58 5.58 0 0 0 3.972-1.645l9.547-9.548c.769-.768 1.147-1.767 1.058-2.817-.079-.968-.548-1.927-1.319-2.698-1.594-1.592-4.068-1.711-5.517-.262l-7.916 7.915c-.881.881-.792 2.25.214 3.261.959.958 2.423 1.053 3.263.215l5.511-5.512c.28-.28.267-.722.053-.936l-.244-.244c-.191-.191-.567-.349-.957.04l-5.506 5.506c-.18.18-.635.127-.976-.214-.098-.097-.576-.613-.213-.973l7.915-7.917c.818-.817 2.267-.699 3.23.262.5.501.802 1.1.849 1.685.051.573-.156 1.111-.589 1.543l-9.547 9.549a3.97 3.97 0 0 1-2.829 1.171 3.975 3.975 0 0 1-2.83-1.173 3.973 3.973 0 0 1-1.172-2.828c0-1.071.415-2.076 1.172-2.83l7.209-7.211c.157-.157.264-.579.028-.814L11.5 4.36a.572.572 0 0 0-.834.018l-7.205 7.207a5.577 5.577 0 0 0-1.645 3.971z"></path></svg>
                              </div>
                              <div class="ml-6">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="#263238" fill-opacity=".6" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path></svg>
                              </div>
                          </div>
                      </div> -->

            <!-- Messages -->
            <div v-if="!loadingRoomChats" class="flex-1 overflow-auto" style="background-color: white">
              <div class="py-2 px-3">

                <!-- <div class="flex justify-center mb-2">
                  <div class="rounded py-2 px-4" style="background-color: white">
                    <p class="text-sm uppercase">
                      February 20, 2018
                    </p>
                  </div>
                </div> -->

                <div class="flex justify-center mb-4">
                  <div class="rounded py-2 px-4" style="background-color: #FCF4CB">
                    <p class="text-xs">
                      Messages to this chat and calls are now secured with end-to-end encryption. Tap for more info.
                    </p>
                  </div>
                </div>

                <!-- <div class="flex mb-2">
                                  <div class="rounded py-2 px-3" style="background-color: #F2F2F2">
                                      <p class="text-sm text-teal">
                                          Sylverter Stallone
                                      </p>
                                      <p class="text-sm mt-1">
                                          Hi everyone! Glad you could join! I am making a new movie.
                                      </p>
                                      <p class="text-right text-xs text-grey-dark mt-1">
                                          12:45 pm
                                      </p>
                                  </div>
                              </div>

                              <div class="flex mb-2">
                                  <div class="rounded py-2 px-3" style="background-color: #F2F2F2">
                                      <p class="text-sm text-purple">
                                          Tom Cruise
                                      </p>
                                      <p class="text-sm mt-1">
                                          Hi all! I have one question for the movie
                                      </p>
                                      <p class="text-right text-xs text-grey-dark mt-1">
                                          12:45 pm
                                      </p>
                                  </div>
                              </div>

                              <div class="flex mb-2">
                                  <div class="rounded py-2 px-3" style="background-color: #F2F2F2">
                                      <p class="text-sm text-orange">
                                          Harrison Ford
                                      </p>
                                      <p class="text-sm mt-1">
                                          Again?
                                      </p>
                                      <p class="text-right text-xs text-grey-dark mt-1">
                                          12:45 pm
                                      </p>
                                  </div>
                              </div>

                              <div class="flex mb-2">
                                  <div class="rounded py-2 px-3" style="background-color: #F2F2F2">
                                      <p class="text-sm text-orange">
                                          Russell Crowe
                                      </p>
                                      <p class="text-sm mt-1">
                                          Is Andrés coming for this one?
                                      </p>
                                      <p class="text-right text-xs text-grey-dark mt-1">
                                          12:45 pm
                                      </p>
                                  </div>
                              </div>

                              <div class="flex mb-2">
                                  <div class="rounded py-2 px-3" style="background-color: #F2F2F2">
                                      <p class="text-sm text-teal">
                                          Sylverter Stallone
                                      </p>
                                      <p class="text-sm mt-1">
                                          He is. Just invited him to join.
                                      </p>
                                      <p class="text-right text-xs text-grey-dark mt-1">
                                          12:45 pm
                                      </p>
                                  </div>
                              </div>

                              <div class="flex justify-end mb-2">
                                  <div class="rounded py-2 px-3" style="background-color: #E2F7CB">
                                      <p class="text-sm mt-1">
                                          Hi guys.
                                      </p>
                                      <p class="text-right text-xs text-grey-dark mt-1">
                                          12:45 pm
                                      </p>
                                  </div>
                              </div>

                              <div class="flex justify-end mb-2">
                                  <div class="rounded py-2 px-3" style="background-color: #E2F7CB">
                                      <p class="text-sm mt-1">
                                          Count me in
                                      </p>
                                      <p class="text-right text-xs text-grey-dark mt-1">
                                          12:45 pm
                                      </p>
                                  </div>
                              </div>

                              <div class="flex mb-2">
                                  <div class="rounded py-2 px-3" style="background-color: #F2F2F2">
                                      <p class="text-sm text-purple">
                                          Tom Cruise
                                      </p>
                                      <p class="text-sm mt-1">
                                          Get Andrés on this movie ASAP!
                                      </p>
                                      <p class="text-right text-xs text-grey-dark mt-1">
                                          12:45 pm
                                      </p>
                                  </div>
                              </div> -->
                <ChatWindow class="z-10" :roomChats="roomChatsList" :messages="messages" :selectedUser="selectedUser" />
              </div>
            </div>

            <section class="flex-1 overflow-auto" v-if="loadingRoomChats">
              <div class="rounded-md p-4 w-full mx-auto">
                <div class="animate-pulse flex space-x-4">
                  <div class="flex-1 space-y-6 py-1">
                    <div class="h-96 bg-slate-200 rounded"></div>
                  </div>
                </div>
              </div>
            </section>
            <!-- <section v-else class="flex flex-col justify-between items-center space-y-2 mt-10">
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
                  <h2 class="text-[#1D2739]">No conversations found</h2>
                  <p class="text-[#667185]">You have not contacted anyone</p>
            </section> -->

            <!-- Input -->
            <ChatMessageInput v-model="newMessage" :isConnected="isConnected" :isSending="messageStatus === 'sending'"
              @sendMessage="sendMessageToUser" />
            <!-- <div class="bg-grey-lighter px-4 py-4 flex items-center">
                          <div>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path opacity=".45" fill="#263238" d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.078 1.416-12.129 0-12.129 0zm11.363 1.108s-.669 1.959-5.051 1.959c-3.505 0-5.388-1.164-5.607-1.959 0 0 5.912 1.055 10.658 0zM11.804 1.011C5.609 1.011.978 6.033.978 12.228s4.826 10.761 11.021 10.761S23.02 18.423 23.02 12.228c.001-6.195-5.021-11.217-11.216-11.217zM12 21.354c-5.273 0-9.381-3.886-9.381-9.159s3.942-9.548 9.215-9.548 9.548 4.275 9.548 9.548c-.001 5.272-4.109 9.159-9.382 9.159zm3.108-9.751c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962z"></path></svg>
                          </div>
                          <div class="flex-1 mx-4">
                              <input class="w-full border rounded px-2 py-2" type="text"/>
                          </div>
                          <div>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="#263238" fill-opacity=".45" d="M11.999 14.942c2.001 0 3.531-1.53 3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531S8.469 2.35 8.469 4.35v7.061c0 2.001 1.53 3.531 3.53 3.531zm6.238-3.53c0 3.531-2.942 6.002-6.237 6.002s-6.237-2.471-6.237-6.002H3.761c0 4.001 3.178 7.297 7.061 7.885v3.884h2.354v-3.884c3.884-.588 7.061-3.884 7.061-7.885h-2z"></path></svg>
                          </div>
                      </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</MessagingView>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import MessagingView from "@/layouts/MessagingView.vue";
import { useGetActiveChats } from "@/composables/modules/messages/fetchActiveChats";
import { useGetRoomChats } from "@/composables/modules/messages/fetchRoomMessages";
import { useWebSocket } from "@/composables/modules/messages/sockets";

// Composables
const { loadingActiveChats, activeChatsList } = useGetActiveChats();
const { getRoomChats, loadingRoomChats, roomChatsList } = useGetRoomChats();
const {
  messages,
  newMessage,
  isConnected,
  sendMessage
} = useWebSocket();

definePageMeta({
  middleware: 'auth'
})

const router = useRouter();
const route = useRoute();
const selectedUser = ref(null);
const messageStatus = ref('idle');

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

  messageStatus.value = 'sending';

  try {
    const socketPayload = {
      content,
      recipientId: selectedUser.value.participant.id,
      recipientType: selectedUser.value.participant.role,
      messageType: 'private',
      room: selectedUser.value.id // Include room ID if needed
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
  if (userId && activeChatsList.value) {
    const user = activeChatsList.value.find(u => u.id === userId);
    if (user) {
      selectUser(user);
    }
  }

  // Set up event listeners
  $emitter.on('customEvent', async (payload: any) => {
    if (payload.data) {
      await getRoomChats(payload.data);
      scrollToBottom();
    }
  });
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
</script>
