import { banks_api } from "@/api_factory/modules/banks";
import { useUser } from '@/composables/auth/user'
const { user } = useUser()
const loading = ref(false)
const bankAccounts = ref([])

export const useFetchBankAccounts = () => {
	const fetchBankAccounts = async () => {
		loading.value = true
		const res = await  banks_api.$_fetch_banks_accounts(user.value.id) as any
		console.log(res, 'bank accounts here')
        if (res.type !== 'ERROR') {
			bankAccounts.value = res?.data
        }
        loading.value = false
	}

	onMounted(() => {
		fetchBankAccounts()
	})

	return { fetchBankAccounts, loading, bankAccounts }
}
