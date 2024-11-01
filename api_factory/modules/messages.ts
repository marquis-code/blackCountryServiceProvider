import { GATEWAY_ENDPOINT } from '../axios.config'
export const message_api = {
    $_get_active_chats: () => {
        let url = `/chat-rooms/active`;
        return GATEWAY_ENDPOINT.get(url);
      },
      $_get_room_messages: (id: string | number) => {
        let url = `/chat-rooms/${id}/messages`;
        return GATEWAY_ENDPOINT.get(url);
      },
      $_get_user_messages: (id: string | number) => {
        let url = `/users/${id}/messages`;
        return GATEWAY_ENDPOINT.get(url);
      },
}
