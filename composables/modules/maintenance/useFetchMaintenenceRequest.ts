import { ref } from 'vue'
import { maintenance_api } from '@/api_factory/modules/maintenance'

export const useFetchMaintenanceRequest = () => {
  const loading = ref(false)
  const maintenanceRequest = ref({})
  const route = useRoute() as any

  const fetchMaintenanceRequests = async () => {
    loading.value = true
  
      const res = await maintenance_api.$_fetch_maitenence_request(route.params.id) as any
      console.log(res, 'hereooo')
      if (res.type !== 'ERROR') {
        maintenanceRequest.value = res?.data || {}
    }
    loading.value = false

  }

  onMounted(() => {
    fetchMaintenanceRequests()
  })

  return {
    fetchMaintenanceRequests,
    loading,
    maintenanceRequest
  }
}
