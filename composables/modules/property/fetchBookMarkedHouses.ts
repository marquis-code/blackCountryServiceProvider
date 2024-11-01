import { property_api } from '@/api_factory/modules/property'

export const useGetBookmarkedHouses = () => {
    const loading = ref(false);
    const bookmarkedList = ref([] as any);
    const { $_fetch_bookmarked_listings } =  property_api;
    const getBookmarkedProperties = async () => {
        loading.value = true;
        try {
            const res = await $_fetch_bookmarked_listings() as any;
    
            if (res.type !== 'ERROR') {
                bookmarkedList.value = res?.data?.result ?? []
            }
        } catch (error) {
            console.error('Error fetching rentals', error);
        } finally {
            loading.value = false;
        }
    };



    onMounted(() => {
        getBookmarkedProperties()
    });

    return {
        getBookmarkedProperties,
        loading,
        bookmarkedList
    };
};
