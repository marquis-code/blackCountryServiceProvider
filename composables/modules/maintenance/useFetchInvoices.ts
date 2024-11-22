import { ref } from 'vue'
import { maintenance_api } from '@/api_factory/modules/maintenance'

export const useFetchInvoices = () => {
  const loading = ref(false)
  const invoices = ref([])

  const fetchInvoices = async () => {
    loading.value = true
  
      const res = await maintenance_api.$_fetch_invoices() as any

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
