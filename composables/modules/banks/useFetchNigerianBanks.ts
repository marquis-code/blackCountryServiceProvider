import { banks_api } from "@/api_factory/modules/banks";
import { useUser } from '@/composables/auth/user'
const { user } = useUser()
const loading = ref(false)
const banksList = ref([])

export const useFetchNigerianBanks = () => {
	const getNigerianBanks = async () => {
		loading.value = true
		const res = await  banks_api.$_fetch_nigerian_banks() as any
        if (res.type !== 'ERROR') {
			console.log(res.data, 'banks list jhee')
			banksList.value = res?.data
        }
        loading.value = false
	}

	onMounted(() => {                        
		getNigerianBanks()
	})

	return { getNigerianBanks, loading, banksList }
}
