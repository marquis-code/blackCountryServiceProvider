import { address_api } from "@/api_factory/core/address";
import { ref, onMounted } from "vue";
import { useNuxtApp } from "#app";
// import { use_create_property } from '@/composables/modules/property/create'

export const useGetLocation = () => {
  const states = ref<any[]>([]);
  const cities = ref<any[]>([]);
  const selectedState = ref<string | null>(null);
  const selectedCity = ref<string | null>(null); // Add this line
  const loadingStates = ref(false);
  const loadingCities = ref(false);
  const cityId = ref('NG');

  // const { payload } = use_create_property()
  const { $_get_cities, $_get_states } = address_api;

  const getStates = async () => {
    loadingStates.value = true;
    try {
      const res = await $_get_states();
      if (res.status === 200 || res.status === 201) {
        states.value = res.data;
      }
    } catch (error) {
      useNuxtApp().$toast.error('Error Fetching states.', {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
    } finally {
      loadingStates.value = false;
    }
  };

  const getCities = async (stateId: string) => {
    loadingCities.value = true;
    try {
      const res = await $_get_cities(cityId.value, stateId);
      if (res.status === 200 || res.status === 201) {
        cities.value = res.data;
      }
    } catch (error) {
      useNuxtApp().$toast.error('Error Fetching cities.', {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
    } finally {
      loadingCities.value = false;
    }
  };

  watch(
    () => selectedCity.value,
    (newCityId: any) => {
      console.log(newCityId, 'new city from composable')
      if (newCityId) {
        // payload.cityId.value = newCityId;
        // console.log(payload, 'new city from composable')
      }
    }
  );

  const handleStateChange = (stateId: string) => {
    selectedState.value = stateId;
    getCities(stateId);
  };

  onMounted(() => {
    getStates();
  });

  return {
    states,
    cities,
    loadingStates,
    loadingCities,
    getStates,
    getCities,
    selectedState,
    selectedCity, // Include this in the return object
    handleStateChange,
  };
};