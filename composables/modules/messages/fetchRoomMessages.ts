import { message_api } from '@/api_factory/modules/messages'

export const useGetRoomChats = () => {
    const loadingRoomChats = ref(false);
    const roomChatsList = ref([] as any);
    const { $_get_room_messages } = message_api;
    const getRoomChats = async (id: string | number) => {
        loadingRoomChats.value = true;
        try {
            const res = await $_get_room_messages(id) as any;
            console.log(res, 'here')
            if (res.type !== 'ERROR') {
                roomChatsList.value = res?.data?.result
            }
        } catch (error) {
            console.error('Error fetching notifications:', error);
        } finally {
            loadingRoomChats.value = false;
        }
    };

    return {
        getRoomChats,
        loadingRoomChats,
        roomChatsList
    };
};
