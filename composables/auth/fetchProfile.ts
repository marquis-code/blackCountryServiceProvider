import { auth_api } from '@/api_factory/modules/auth'
import { useUser } from '@/composables/auth/user'
export const use_tenant_profile = () => {
  const profileObj = ref({}) as any
  const loading = ref(false);
  const { updateUser } = useUser()

  const fetch_profile = async () => {
    loading.value = true;
    try {
      const res = await auth_api.$_fetch_profile();

      if(res.status == 200 || res.status == 201){
         profileObj.value = res.data
		 updateUser(profileObj.value)
      }

    } catch (error) {
        useNuxtApp().$toast.error('Error Fetching profile.', {
            autoClose: 5000,
            dangerouslyHTMLString: true,
          });
    } finally {
      loading.value = false;
    }
  };

  onMounted(() => {
    fetch_profile()
  })

  return { fetch_profile, loading, profileObj };
};
