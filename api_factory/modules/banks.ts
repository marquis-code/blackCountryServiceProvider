import { GATEWAY_ENDPOINT } from '../axios.config'
export const banks_api = {
	$_resolve_banks: (accountNumber: string, sortCode: any) => {
		const url = `/utilities/banks/resolve?accountNumber=${accountNumber}&bankSortCode=${sortCode}`
		return GATEWAY_ENDPOINT.get(url)
	},
	$_add_bank_account: (userId: string, payload: any) => {
		const url = `/users/${userId}/banks`
		return GATEWAY_ENDPOINT.post(url, payload)
	},
    $_fetch_nigerian_banks: () => {
		const url = `/utilities/banks`
		return GATEWAY_ENDPOINT.get(url)
	},
    $_fetch_banks_accounts: (userId: string) => {
		const url = `/users/${userId}/banks`
		return GATEWAY_ENDPOINT.get(url)
	},
    $_create_card: (userId: string) => {
		const url = `/users/${userId}/banks`
		return GATEWAY_ENDPOINT.get(url)
	}
}