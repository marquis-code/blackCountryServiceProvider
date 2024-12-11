import { auth_api } from "@/api_factory/modules/auth";
import { useCustomToast } from '@/composables/core/useCustomToast'
const { showToast } = useCustomToast();
import { useUser } from '@/composables/auth/user'


export const use_service_provider_profile = () => {
  const profileObj = ref({}) as any
  const { user } = useUser()
  const loading = ref(false);

  const getProfile = async () => {
    loading.value = true;
    try {
      const res = await auth_api.$_fetch_profile(user?.value?.id);

      if(res.status == 200 || res.status == 201){
        console.log(res, 'res here');
         profileObj.value = res.data
      }

    } catch (error) {
            showToast({
        title: "Error",
        message: "Error Fetching profile",
        toastType: "error",
        duration: 3000
      });
        // useNuxtApp().$toast.error('Error Fetching profile.', {
        //     autoClose: 5000,
        //     dangerouslyHTMLString: true,
        //   });
    } finally {
      loading.value = false;
    }
  };

  onMounted(() => {
    getProfile()
  })

  return { getProfile, loading, profileObj };
};
