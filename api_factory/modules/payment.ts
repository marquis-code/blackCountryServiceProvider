import { GATEWAY_ENDPOINT } from '../axios.config'
export const payment_api = {
    $_fetch_payment_history: (tenentId: string | number, page = 1, perPage = 20) => {
        let url = `/tenants/${tenentId}/payments?page=${page}&perPage=${perPage}&sort=transactionDate:desc`
        return GATEWAY_ENDPOINT.get(url)
      },
}
