import { visitation_api } from "@/api_factory/modules/visitation";
import { useCustomToast } from "@/composables/core/useCustomToast";
const { showToast } = useCustomToast();
const scheduling = ref(false);
const route = useRoute() as any
const router = useRouter()

export const useCreateVisitation = () => {
  const scheduling = ref(false);

  const createVisitation = async (payload: any) => {
    scheduling.value = true;
    const res = (await visitation_api.$_create_visitation(route.params.id, payload)) as any;
   console.log(res, 'here')
    if (res.type !== "ERROR") {
      showToast({
        title: "Success",
        message: `Visitation was created for ${res?.data?.date} successfully at  ${res?.data?.time}`,
        toastType: "success",
        duration: 3000,
      });
      router.push('/dashboard/listings/booking-schedule-success')
    } else {
      showToast({
        title: "Error",
        message: res.data.error,
        toastType: "error",
        duration: 3000,
      });
    }
    scheduling.value = false;
  };

  return { createVisitation, scheduling };
};
