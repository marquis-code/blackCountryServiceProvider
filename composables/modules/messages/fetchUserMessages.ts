import { message_api } from '@/api_factory/modules/messages'

export const useGetUserChats = () => {
    const loadingUserChats = ref(false);
    const userChatsList = ref([] as any);
    const { $_get_user_messages } = message_api;
    const getUserChats = async (id: any) => {
        loadingUserChats.value = true;
        try {
            const res = await $_get_user_messages(id) as any;
    
            if (res.type !== 'ERROR') {
                userChatsList.value = res?.data?.result
            }
        } catch (error) {
            console.error('Error fetching notifications:', error);
        } finally {
            loadingUserChats.value = false;
        }
    };

    return {
        getUserChats,
        loadingUserChats,
        userChatsList
    };
};
