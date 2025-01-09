import { ref, onMounted, watch } from 'vue'
import { payment_api } from '@/api_factory/modules/payment'
import { useUser } from '@/composables/auth/user' 


export const useGetTransactionHistory = () => {
    const { user } = useUser()
    const loading = ref(false) // Loading state for general properties
    const paymentList = ref([] as any) // Array to hold all properties
    const currentPage = ref(1)
    const perPage = ref(20)
    const totalPages = ref(1) // To store total pages

    const { $_fetch_payment_history } = payment_api

    const fetchPaymentHistory = async () => {
        loading.value = true
        // Pass page, perPage, and searchQuery to the API factory
        const res = await $_fetch_payment_history(user?.value?.id, currentPage.value, perPage.value) as any

        if (res.type !== 'ERROR') {
            paymentList.value = res?.data?.result ?? [];
            totalPages.value = Math.ceil(res?.data?.metadata?.total / perPage.value) || 1; // Set total pages
            // Ensure currentPage and perPage are set correctly
        }
        loading.value = false
    }


    // Watch currentPage for pagination
    watch(currentPage, () => {
        fetchPaymentHistory()
    })


    onMounted(() => {
        fetchPaymentHistory()
    })

    return {
        fetchPaymentHistory,
        loading,
        paymentList,
        currentPage,
        perPage,
        totalPages,
    }
}
