import { ref, onMounted, watch } from 'vue'
import { property_api } from '@/api_factory/modules/property'
import { debounce } from 'lodash'

export const useGetProperties = () => {
    const loadingProperties = ref(false) // Loading state for general properties
    const loadingSearch = ref(false) // Loading state for search operations
    const propertiesList = ref([] as any) // Array to hold all properties
    const searchResults = ref([] as any) // Array to hold search results
    const searchQuery = ref('')
    const currentPage = ref(1)
    const perPage = ref(20)
    const totalPages = ref(1) // To store total pages
    const sortBy = ref('all') // To store the sort type

    const { $_fetch_properties } = property_api

    // Sorting logic based on the "sortBy" ref
    const sortProperties = (properties) => {
        if (sortBy.value === 'newest') {
            return properties.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        } else if (sortBy.value === 'oldest') {
            return properties.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
        } else if (sortBy.value === 'lowToHigh') {
            return properties.sort((a, b) => a.price - b.price);
        } else if (sortBy.value === 'highToLow') {
            return properties.sort((a, b) => b.price - a.price);
        } else {
            // 'all' or any other default sorting
            return properties; // Return as is for 'all'
        }
    };

    const getProperties = async () => {
        loadingProperties.value = true

        // Pass page, perPage, and searchQuery to the API factory
        const res = await $_fetch_properties(currentPage.value, perPage.value, searchQuery.value) as any

        if (res.type !== 'ERROR') {
            let properties = res?.data?.result ?? [];
            propertiesList.value = sortProperties(properties); // Sort the properties before setting them
            totalPages.value = Math.ceil(res?.data?.metadata?.total / perPage.value) || 1; // Set total pages
            // Ensure currentPage and perPage are set correctly
        }
        loadingProperties.value = false
    }

    const searchProperties = async () => {
        loadingSearch.value = true // Set loading state for search

        // Perform search operation with the current search query
        const res = await $_fetch_properties(1, perPage.value, searchQuery.value) as any // Always start from page 1 for search

        if (res.type !== 'ERROR') {
            let results = res?.data?.result ?? [];
            searchResults.value = sortProperties(results); // Sort search results before setting them
        }
        loadingSearch.value = false // Reset loading state
    }

    // Debounced version of searchProperties to avoid multiple API calls
    const debouncedSearchProperties = debounce(searchProperties, 300)

    // Watch searchQuery to trigger the search when it changes
    watch(searchQuery, () => {
        currentPage.value = 1 // Reset to page 1 for new search
        debouncedSearchProperties() // Call the debounced version
    })

    // Watch currentPage for pagination
    watch(currentPage, () => {
        if (!searchQuery.value) {
            getProperties() // Fetch properties if no search query
        }
    })

    // Watch sortBy to refetch and apply sorting
    watch(sortBy, () => {
        currentPage.value = 1 // Reset page for new sort
        if (!searchQuery.value) {
            getProperties() // Refetch properties on sort change if no search
        } else {
            debouncedSearchProperties() // Refetch search results on sort change
        }
    })

    onMounted(() => {
        getProperties()
    })

    const clearSearch = () => {
        searchQuery.value = '';
        searchResults.value = []; // Clear search results when search is cleared
    }

    return {
        getProperties,
        debouncedSearchProperties,
        loadingProperties,
        loadingSearch, // Expose loading state for search
        propertiesList,
        searchResults, // Expose search results
        searchQuery,
        currentPage,
        perPage,
        totalPages,
        clearSearch,
        sortBy, // Return sortBy to allow changing the sort type from a component
    }
}
