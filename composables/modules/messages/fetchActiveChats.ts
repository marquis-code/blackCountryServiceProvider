import { message_api } from '@/api_factory/modules/messages'

export const useGetActiveChats = () => {
    const loadingActiveChats = ref(false);
    const activeChatsList = ref([] as any);
    const { $_get_active_chats } = message_api;
    const getActiveChats = async () => {
        loadingActiveChats.value = true;
        try {
            const res = await $_get_active_chats() as any;
            if (res.type !== 'ERROR') {
                activeChatsList.value = res?.data?.result
            }
        } catch (error) {
            console.error('Error fetching notifications:', error);
        } finally {
            loadingActiveChats.value = false;
        }
    };

    onMounted(() => {
        getActiveChats()
    });

    return {
        getActiveChats,
        loadingActiveChats,
        activeChatsList
    };
};
