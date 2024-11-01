import { auth_api } from "@/api_factory/modules/auth";
export const use_auth_reset_password = () => {
  const Router = useRouter();
  const route = useRoute();
  const credential = {
    password: ref(""),
    confirmPassword: ref(""),
  };

  const loading = ref(false);


  const isFormDisabled = computed(() => {
    return (
      loading.value || !credential.confirmPassword.value || !credential.password.value || passwordMismatch.value
    );
  });

  const reset_password = async () => {
    loading.value = true;
    const res = (await auth_api.$_reset_password({
      otpId: route?.query?.otpId,
      password: credential.password.value,
    })) as any;

    console.log(res, "es here");

    loading.value = false;
    if (res.type !== "ERROR") {
      useNuxtApp().$toast.success(res.data.message, {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
      Router.push("/login");
    } else {
      useNuxtApp().$toast.error(res.data.error || "Something went wrong!", {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
    }
  };

    // Computed properties for validation
const passwordMismatch = computed(() => {
	return credential.password.value !== credential.confirmPassword.value;
  });
  

  return { credential, reset_password, loading, isFormDisabled, passwordMismatch };
};
