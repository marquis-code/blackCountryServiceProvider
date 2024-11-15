import { ref } from 'vue'
import { maintenance_api } from '@/api_factory/modules/maintenance'
import { useUser } from "@/composables/auth/user";

export const useFetchMaintenanceRequests = () => {
  const loading = ref(false)
  const maintenanceRequests = ref([])
  const { user } = useUser();

  const fetchMaintenanceRequests = async () => {
    loading.value = true
  
      const res = await maintenance_api.$_fetch_maitenence_requests(user.value.id) as any

      if (res.type !== 'ERROR') {
        maintenanceRequests.value = res?.data?.result || []
    }
    loading.value = false

  }

  onMounted(() => {
    fetchMaintenanceRequests()
})

  return {
    fetchMaintenanceRequests,
    loading,
    maintenanceRequests,
  }
}
