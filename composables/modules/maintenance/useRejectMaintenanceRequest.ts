import { maintenance_api } from '@/api_factory/modules/maintenance'
import { useCustomToast } from '@/composables/core/useCustomToast'
const { showToast } = useCustomToast();
const loading = ref(false)

const payload = ref({
    reason:  "",
})


export const useDeclineMaintenenceRequest = () => {
	const declineMaintenenceRequest = async (id: any) => {
		loading.value = true

		const res = await maintenance_api.$_decline_maintenance_request(id, payload.value) as any

        if (res.type !== 'ERROR') {
            showToast({
                title: "Success",
                message: "Maintenence Request Declined Successfully",
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

    const setPayloadObj = (data: any) => {
        payload.value.reason =  data.reason
    }

	return { declineMaintenenceRequest, loading, setPayloadObj, payload }
}
