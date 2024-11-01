import { GATEWAY_ENDPOINT } from '../axios.config'
export const notification_api = {
    $_get_notification: (id: string | number, metadata: { page: number; perPage: number }) => {
        let url = `/users/${id}/notifications/in-app?page=${metadata.page}&perPage=${metadata.perPage}`;
        return GATEWAY_ENDPOINT.get(url);
      },
}
