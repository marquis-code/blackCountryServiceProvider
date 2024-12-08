import { maintenance_api } from '@/api_factory/modules/maintenance'
import { useCustomToast } from '@/composables/core/useCustomToast'
const { showToast } = useCustomToast();
const loading = ref(false)

const payload = ref({
    invoiceIds: []
})

export const useBatchMarkAsPaid = () => {
	const batchMarkAsPaid = async () => {
		loading.value = true

		const res = await maintenance_api.$_batch_mark_as_paid(payload.value) as any

        if (res.type !== 'ERROR') {
            showToast({
                title: "Success",
                message: "Invoice status was updated Successfully",
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
        payload.value.invoiceIds = data.invoiceIds
    }

	return { batchMarkAsPaid, loading, payload, setPayloadObj }
}
