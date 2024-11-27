import { ref } from 'vue'
import { maintenance_api } from '@/api_factory/modules/maintenance'
import { useUser } from "@/composables/auth/user";

export const useFetchInvoices = () => {
  const loading = ref(false)
  const invoices = ref([])
  const { user } = useUser();

  const queryObj = ref({
    page: 1,
    perPage: 1000000
  })

  const fetchInvoices = async () => {
    loading.value = true
  
      const res = await maintenance_api.$_fetch_invoices(
        user.value.id,    
        queryObj.value.page,
        queryObj.value.perPage
      ) as any

      if (res.type !== 'ERROR') {
        invoices.value = res?.data?.result || []
    }
    loading.value = false

  }

  onMounted(() => {
    fetchInvoices()
})

  return {
    fetchInvoices,
    loading,
    invoices,
  }
}
