import { ref } from 'vue'
import { maintenance_api } from '@/api_factory/modules/maintenance'
import { useUser } from "@/composables/auth/user";

export const useFetchMaintenanceRequests = () => {
  const loading = ref(false)
  const maintenanceRequests = ref([])
  const { user } = useUser();

  const queryObj = ref({
    page: 1,
    perPage: 1000000,
    status: ''
  })

  const fetchMaintenanceRequests = async () => {
    loading.value = true
  
      const res = await maintenance_api.$_fetch_maitenence_requests(
        user.value.id,    
        queryObj.value.page,
        queryObj.value.perPage,
        queryObj.value.status
      ) as any

      if (res.type !== 'ERROR') {
        maintenanceRequests.value = res?.data?.result || []
    }
    loading.value = false

  }

  onMounted(() => {
    fetchMaintenanceRequests()
})

watch(
  () => queryObj.value.status,
  (newStatus, oldStatus) => {
    if (newStatus !== oldStatus) {
      fetchMaintenanceRequests();
    }
  }
);

  return {
    fetchMaintenanceRequests,
    loading,
    maintenanceRequests,
    queryObj
  }
}
