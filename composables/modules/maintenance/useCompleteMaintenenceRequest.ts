import { maintenance_api } from '@/api_factory/modules/maintenance'
import { useCustomToast } from '@/composables/core/useCustomToast'
const { showToast } = useCustomToast();
const loading = ref(false)

export const useCompleteMaintenenceRequest = () => {
	const completeMaintenenceRequest = async (id: any) => {
		loading.value = true

		const res = await maintenance_api.$_complete_maintenance_request(id) as any
        if (res.type !== 'ERROR') {
            showToast({
                title: "Success",
                message: "Maintenence Request completed Successfully",
                toastType: "success",
                duration: 3000
              });
              window.location.reload();
        } else {
            showToast({
                title: "Error",
                message: res?.data?.error,
                toastType: "error",
                duration: 3000
              });
        }
        loading.value = false
	}

	return { completeMaintenenceRequest, loading }
}
