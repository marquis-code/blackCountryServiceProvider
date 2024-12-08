import { GATEWAY_ENDPOINT } from '../axios.config'
export const maintenance_api = {
      $_fetch_maitenence_requests: (id: string, page = 1, perPage = 100000, status = '') => {
        let url = `/service-providers/${id}/maintenance-requests?page=${page}&perPage=${perPage}`  

          // Add search query to the URL if provided
            if (status) {
              url += `&status=${status}`
          }

        return GATEWAY_ENDPOINT.get(url)
      },
      $_fetch_maitenence_request: (id: string) => {
        let url = `/maintenance-requests/${id}`  
        return GATEWAY_ENDPOINT.get(url)
      },
      $_accept_maintenance_request: (maintenanceRequestId: string) => {
        let url = `/maintenance-requests/${maintenanceRequestId}/accepted`  
        return GATEWAY_ENDPOINT.patch(url)
      },
      $_decline_maintenance_request: (maintenanceRequestId: string) => {
        let url = `/maintenance-requests/${maintenanceRequestId}/declined`  
        return GATEWAY_ENDPOINT.patch(url)
      },
      $_complete_maintenance_request: (maintenanceRequestId: string) => {
        let url = `/maintenance-requests/${maintenanceRequestId}/completed`  
        return GATEWAY_ENDPOINT.patch(url)
      },
      $_set_maintenance_request_in_progress: (maintenanceRequestId: string) => {
        let url = `/maintenance-requests/${maintenanceRequestId}/start`  
        return GATEWAY_ENDPOINT.patch(url)
      },
      $_generate_invoice: (maintenanceRequestId: string, payload: any) => {
        let url = `/maintenance-requests/${maintenanceRequestId}/invoices`  
        return GATEWAY_ENDPOINT.post(url, payload)
      },
      $_fetch_invoices: (id: string, page = 1, perPage = 100000) => {
        let url = `/service-providers/${id}/invoices?page=${page}&perPage=${perPage}`  
        return GATEWAY_ENDPOINT.get(url)
      },
      $_mark_as_paid: (id: any) => {
        let url = `/invoices/${id}/paid`  
        return GATEWAY_ENDPOINT.patch(url)
      },
      $_batch_mark_as_paid: (payload: any) => {
        let url = '/invoices/paid/batch'
        return GATEWAY_ENDPOINT.patch(url, payload)
      }
}
