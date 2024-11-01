import { notification_api } from '@/api_factory/modules/notification'
import { useUser } from '@/composables/auth/user'

// Debounce function to limit the rate at which a function can be called
function debounce(fn: Function, delay: number) {
    let timeoutId: number | undefined;
    const debounced = function (...args: any) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            fn(...args);
        }, delay);
    };

    debounced.cancel = () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
    };

    return debounced;
}

export const useGetNotifications = () => {
    const { user } = useUser()
    const loadingNotification = ref(false);
    const notificationList = ref([] as any);
    const searchQuery = ref<string>("");
    const metadata = ref({
        page: 1,
        perPage: 7,
        total: 100,
        pages: 0,
    });

    // Filters including dates and agentId
    const { $_get_notification } = notification_api;
    const getNotifications = async () => {
        console.log(user, 'here')
        loadingNotification.value = true;
        try {
            const res = await $_get_notification(user.value.id, metadata.value) as any;
    
            if (res.type !== 'ERROR') {
                // Sort properties by 'createdAt' in descending order
                notificationList.value = res?.data?.result
                metadata.value = res?.data?.metadata;
            }
        } catch (error) {
            console.error('Error fetching notifications:', error);
        } finally {
            loadingNotification.value = false;
        }
    };

    // Debounced version of getNotifications to avoid multiple API calls
    const debouncedGetProperties = debounce(getNotifications, 300); // 300ms delay

    watch( [metadata.value.page, metadata.value.perPage], // Watch only page and perPage
        () => {
            // debouncedGetProperties(); // Use the debounced version here
            getNotifications()
        }
    );

    const setPaginationObj = (val: number) => {
        if (metadata.value.page !== val) {
            metadata.value.page = val;
        }
    };

    onMounted(() => {
        getNotifications()
        // Call debounced function once on mount
        // debouncedGetProperties();
    });

    onBeforeUnmount(() => {
        // Clear timeout to avoid memory leaks
        debouncedGetProperties.cancel?.();
    });

    return {
        getNotifications,
        loadingNotification,
        notificationList,
        searchQuery,
        metadata,
        setPaginationObj
    };
};
