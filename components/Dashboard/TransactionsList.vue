<template>
    <!-- <div class="space-y-2">
      <div v-for="(payment, index) in payments" :key="index" class="flex items-center justify-between p-4 bg-white rounded-lg">
        <div class="flex items-center space-x-4">
          <div class="rounded-full">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="44" height="44" rx="22" fill="#F0F5FD"/>
                <path d="M24.9154 19.083C25.0586 19.1039 25.1977 19.1301 25.332 19.1611C25.5784 19.218 25.7015 19.2465 25.8491 19.3642C25.9333 19.4314 26.0384 19.5643 26.0845 19.6621C26.1654 19.8334 26.1654 19.9996 26.1654 20.3319V24.858C26.1654 25.2718 25.732 25.556 25.332 25.4636C24.9488 25.3751 24.5262 25.326 24.082 25.326C23.2832 25.326 22.5539 25.4847 21.9987 25.7462C21.4435 26.0077 20.7141 26.1663 19.9154 26.1663C19.4712 26.1663 19.0486 26.1173 18.6654 26.0288C18.419 25.9719 18.2959 25.9434 18.1483 25.8257C18.0641 25.7585 17.959 25.6256 17.9129 25.5278C17.832 25.3565 17.832 25.1903 17.832 24.858V20.3319C17.832 19.9181 18.2654 19.6339 18.6654 19.7263C18.7997 19.7573 18.9388 19.7835 19.082 19.8044" stroke="#6A9AEB" stroke-linecap="round"/>
                <path d="M23.0404 22.6247C23.0404 23.2 22.574 23.6663 21.9987 23.6663C21.4234 23.6663 20.957 23.2 20.957 22.6247C20.957 22.0494 21.4234 21.583 21.9987 21.583C22.574 21.583 23.0404 22.0494 23.0404 22.6247Z" fill="white" stroke="#6A9AEB"/>
                <path d="M19.293 23.042V23.0457" stroke="#6A9AEB" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M24.707 22.2051V22.2088" stroke="#6A9AEB" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21.9987 17.833V19.4997M20.332 19.083V19.9163M23.6654 18.2497V19.083" stroke="#6A9AEB" stroke-linecap="round"/>
                </svg>                
          </div>
          <div>
            <h3 class="text-base font-medium text-[#1D2739]">{{ payment.description }}</h3>
            <p class="text-sm text-[#667185] font-light">{{ payment.date }},{{ payment.time }}</p>
          </div>
        </div>
        <p class="text-base font-medium text-[#292929]">{{ payment.amount }}</p>
      </div>
    </div> -->
    <section class="mt-10">
          <div
            class="flex justify-between items-center bg-white rounded-md py-5 px-4"
          >
            <h3 class="text-base font-medium text-[#171717]">
              Recent transactions
            </h3>
            <NuxtLink to="/dashboard/payment-list" class="text-[#171717]"
              >View all</NuxtLink
            >
          </div>
          <div class="pt-3 rounded-lg">
            <div
              v-if="!paymentList?.length && !loading"
              class="text-center text-gray-500 py-12"
            >
              <img
                src="@/assets/icons/transaction-illustration.svg"
                alt="No transactions"
                class="mx-auto mb-2"
              />
              <p>No recent transactions made</p>
            </div>
            <section class="mb-6" v-if="!paymentList?.length && loading">
              <div
                class="animate-pulse flex space-x-4 h-20 bg-slate-200 rounded"
              ></div>
            </section>
            <div v-else>
              <div
                @click="
                  router.push(
                    `/dashboard/transaction/${transaction.id}/maintenance-request`
                  )
                "
                v-for="transaction in paymentList"
                :key="transaction.id"
                class="flex justify-between items-center bg-white p-4 rounded-lg mb-2"
              >
                <div class="flex items-center gap-x-3">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1"
                      y="1"
                      width="48"
                      height="48"
                      rx="24"
                      fill="white"
                    />
                    <rect
                      x="1"
                      y="1"
                      width="48"
                      height="48"
                      rx="24"
                      stroke="#F9FAFB"
                    />
                    <rect
                      x="3"
                      y="3"
                      width="44"
                      height="44"
                      rx="22"
                      fill="#F0F5FD"
                    />
                    <path
                      d="M27.9168 22.0835C28.06 22.1044 28.1992 22.1306 28.3335 22.1616C28.5798 22.2185 28.703 22.2469 28.8506 22.3647C28.9347 22.4319 29.0398 22.5648 29.086 22.6626C29.1668 22.8339 29.1668 23.0001 29.1668 23.3324V27.8585C29.1668 28.2722 28.7335 28.5565 28.3335 28.4641C27.9503 28.3755 27.5276 28.3265 27.0835 28.3265C26.2847 28.3265 25.5554 28.4852 25.0002 28.7467C24.445 29.0082 23.7156 29.1668 22.9168 29.1668C22.4727 29.1668 22.05 29.1178 21.6668 29.0293C21.4205 28.9724 21.2973 28.9439 21.1497 28.8262C21.0656 28.759 20.9605 28.626 20.9144 28.5283C20.8335 28.357 20.8335 28.1908 20.8335 27.8585V23.3324C20.8335 22.9186 21.2668 22.6344 21.6668 22.7268C21.8011 22.7578 21.9403 22.784 22.0835 22.8049"
                      stroke="#6A9AEB"
                      stroke-linecap="round"
                    />
                    <path
                      d="M26.0418 25.6252C26.0418 26.2005 25.5755 26.6668 25.0002 26.6668C24.4249 26.6668 23.9585 26.2005 23.9585 25.6252C23.9585 25.0499 24.4249 24.5835 25.0002 24.5835C25.5755 24.5835 26.0418 25.0499 26.0418 25.6252Z"
                      fill="white"
                      stroke="#6A9AEB"
                    />
                    <path
                      d="M22.2915 26.0415V26.0453"
                      stroke="#6A9AEB"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M27.7085 25.2051V25.2088"
                      stroke="#6A9AEB"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M25.0002 20.8335V22.5002M23.3335 22.0835V22.9168M26.6668 21.2502V22.0835"
                      stroke="#6A9AEB"
                      stroke-linecap="round"
                    />
                  </svg>

                  <div class="space-y-1">
                    <h4 class="font-medium text-[#1D2739] text-sm">
                      {{ transaction?.narration ?? "Nil" }}
                    </h4>
                    <p class="text-xs text-[#667185]">
                      {{
                        moment(transaction?.transactionDate).format(
                          "MMMM Do YYYY, HH:MM A"
                        ) ?? "Nil"
                      }}
                    </p>
                  </div>
                </div>
                <span class="text-sm font-semibold text-[#292929]">{{
                  formatCurrency(transaction?.amountSubunit) ?? "0.00"
                }}</span>
              </div>
            </div>
          </div>
        </section>
  </template>
  
  <script lang="ts" setup>
  import moment from "moment";
  import { useGetTransactionHistory } from "@/composables/modules/payment/useFetchPaymenttHistory";
  import { useCurrencyFormatter } from "@/composables/core/useCurrencyFormatter";
  const { paymentList, loading } = useGetTransactionHistory();
  const { formatCurrency } = useCurrencyFormatter();
  // const payments = [
  //   { description: 'Maintenance payment', date: '03/04/2024', time: '16:00 pm', amount: '₦50,000.00' },
  //   { description: 'Rent payment', date: '03/04/2024', time: '16:00 pm', amount: '₦50,000.00' },
  //   { description: 'Maintenance payment', date: '03/04/2024', time: '16:00 pm', amount: '₦50,000.00' },
  // ];
  </script>
  
  <style scoped>
  /* Additional custom styles if needed */
  </style>
  