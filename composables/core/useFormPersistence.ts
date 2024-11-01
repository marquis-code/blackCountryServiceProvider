import { useCustomToast } from '@/composables/core/useCustomToast'
import { use_tenant_profile } from '@/composables/auth/fetchProfile'
const { loading: loadingProfile, profileObj } = use_tenant_profile()
const { showToast } = useCustomToast();
const route = useRoute()
const router = useRouter()
export function useFormPersistence() {
  const saveData = (key: string, data: any) => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
      showToast({
        title: "Success",
        message: "Record was saved successfully",
        toastType: "success",
        duration: 3000
      });
      // router.push(`/dashboard/listings/${route.params.id}/rental-applications/create?step=2`)
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const loadData = (key: string) => {
    if(!loadingProfile){
      console.log(profileObj, 'loaded here')
    }
    try {
      const savedData = localStorage.getItem(key);
      console.log("Loaded data:", savedData ? JSON.parse(savedData) : null); // Better logging for clarity
      return savedData ? JSON.parse(savedData) : null;
    } catch (error) {
      console.error("Error loading data:", error);
      return null;
    }
  };

  return { saveData, loadData };
}
