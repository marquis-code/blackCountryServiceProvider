import { maintenance_api } from '@/api_factory/modules/maintenance'
import { useCustomToast } from '@/composables/core/useCustomToast'
const { showToast } = useCustomToast();
const loading = ref(false)

export const useStartMaintenenceRequest = () => {
	const startMaintenenceRequest = async (id: any) => {
		loading.value = true

		const res = await maintenance_api.$_set_maintenance_request_in_progress(id) as any
       console.log(res, 'res here')
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
                message: res.data.error,
                toastType: "error",
                duration: 3000
              });
        }
        loading.value = false
	}

	return { startMaintenenceRequest, loading }
}
