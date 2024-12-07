<template>
     <div  class="space-y-4">
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Select Recipient
            </label>
            <div class="grid gap-4">
              <div
                v-for="beneficiary in bankAccounts"
                :key="beneficiary.id"
                @click="selectBeneficiary(beneficiary)"
                :class="[
                  'cursor-pointer p-4 rounded-xl transition-all transform hover:scale-105',
                  selectedBeneficiary?.id === beneficiary.id
                    ? 'ring-2 ring-blue-500 bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                    : 'bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300'
                ]"
              >
                <div class="flex justify-between items-start">
                  <div>
                    <p class="font-semibold">{{ beneficiary.accountName }}</p>
                    <p class="text-sm opacity-80">
                      {{ beneficiary.bankName }}
                    </p>
                    <p class="text-sm opacity-80">
                      •••• {{ beneficiary.lastFourDigits }}
                    </p>
                  </div>
                  <div class="w-12">
                    <img
                      v-if="beneficiary.cardType === 'visa'"
                      src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                      alt="Visa"
                      class="w-full"
                    />
                    <img
                      v-else
                      src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                      alt="Mastercard"
                      class="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
</template>

<script setup lang="ts">
const props = defineProps({
    bankAccounts: {
        type: Array,
        default: () => []
    }
})
</script>