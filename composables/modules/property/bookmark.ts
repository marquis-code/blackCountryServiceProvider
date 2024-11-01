import { property_api } from "@/api_factory/modules/property";
import { useCustomToast } from '@/composables/core/useCustomToast'
const { showToast } = useCustomToast();
const loading = ref(false)

export const useBookmarkProperty = () => {
	const bookmarkProperty = async (id: string | number) => {
		loading.value = true
        const payload = {
            houseId: id
        }
		const res = await property_api.$_bookmark_listing(payload) as any

        if (res.type !== 'ERROR') {
            showToast({
                title: "Success",
                message: "Success",
                toastType: "success",
                duration: 3000
              });
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

	return { bookmarkProperty, loading }
}
