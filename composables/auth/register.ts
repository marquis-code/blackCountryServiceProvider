import { auth_api } from "@/api_factory/modules/auth";
import { useCustomToast } from '@/composables/core/useCustomToast'
const { showToast } = useCustomToast();
const credential = {
  fullName: ref(""),
  email: ref(""),
  password: ref(""),
  inviteId: ref(""),
  confirmPassword: ref(""),
  agreement: ref(false)
};

export const use_auth_register = () => {
  const loading = ref(false);
  const router = useRouter();

  const register = async () => {
    loading.value = true;
    const nameParts = credential.fullName.value.trim().split(" ");
    const firstName = nameParts[0] || "";
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "";

    const sessionPayload = {
      firstName: firstName,
      lastName: lastName || firstName,
      inviteId: credential.inviteId.value,
      email: credential.email.value,
      password: credential.password.value,
    }

    try {
      const res = await auth_api.$_register(sessionPayload) as any;
     console.log(res, 'res here')
      loading.value = false;

      if (res.type !== "ERROR") {
        showToast({
          title: "Success",
          message: "Account was created successfully",
          toastType: "success",
          duration: 3000
        });
        router.push('/login');
      } else {
        showToast({
          title: "Error",
          message: res.data.error,
          toastType: "error",
          duration: 3000
        });
      }
    } catch (error:any) {
      loading.value = false;
      showToast({
        title: "Error",
        message: error.message || "An unexpected error occurred.",
        toastType: "error",
        duration: 3000
      });
    }
  };

  // Computed properties for validation
const passwordMismatch = computed(() => {
  return credential.password.value !== credential.confirmPassword.value;
});

const populateObj = (data: any) => {
   credential.fullName.value = data.fullName
   credential.email.value = data.email
   credential.password.value = data.password
   credential.inviteId.value = data.inviteId
   credential.confirmPassword.value = data.confirmPassword
   credential.agreement.value = data.agreement
}

const isFormDisabled = computed(() => {
  return (
    loading.value ||
    !credential.agreement.value ||
    !credential.fullName.value ||
    !credential.password.value ||
    credential.password.value.length <= 6 ||  // Password length must be greater than 6 characters
    !credential.confirmPassword.value ||
    passwordMismatch.value
  );
});


  return { credential, register, loading, isFormDisabled, passwordMismatch, populateObj };
};
