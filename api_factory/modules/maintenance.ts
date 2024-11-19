import { GATEWAY_ENDPOINT } from '../axios.config'
export const maintenance_api = {
      $_fetch_maitenence_requests: (id: string) => {
        let url = `/service-providers/${id}/maintenance-requests`  
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
}
