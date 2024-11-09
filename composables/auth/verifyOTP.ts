import { auth_api } from "@/api_factory/modules/auth";
import { useUser } from "@/composables/auth/user";
import { useCustomToast } from "@/composables/core/useCustomToast";
const { showToast } = useCustomToast();

export const use_auth_verify_otp = () => {
  const Router = useRouter();
  const route = useRoute();
  const credential = {
    email: ref(""),
    otpCode: ref(""),
    password: ref(""),
  };

  const loading = ref(false);
  const errorMessage = ref("");

  const verify_OTP = async () => {
    loading.value = true;
    errorMessage.value = "";

    try {
      const otp = String(credential?.otpCode?.value?.join(""));
      const otpRes = (await auth_api.$_confirm_otp({
        email: credential.email.value,
        otpCode: otp,
      })) as any;

      loading.value = false;

      if (otpRes.type !== "ERROR") {
        showToast({
          title: "Success",
          message: otpRes?.data?.message,
          toastType: "success",
          duration: 3000,
        });
        const referrer = route.query.referrer || route.meta.referrer;
        console.log(referrer, "here");

        if (referrer === "signup") {
          const userData = JSON.parse(
            sessionStorage.getItem("auth-payload") || "{}"
          );
          const { firstName, lastName, email, password } = userData;

          if (!firstName || !email || !password) {
            throw new Error("Incomplete registration data.");
          }

          const signupRes = (await auth_api.$_register({
            firstName,
            lastName: lastName || firstName,
            email: credential.email.value,
            password: password,
          })) as any;
          console.log(signupRes, "here res");
          if (signupRes.type !== "ERROR") {
            showToast({
              title: "Success",
              message: signupRes?.data?.message,
              toastType: "success",
              duration: 3000,
            });

            useUser().createUser(signupRes.data);
            Router.push("/success");
            return { success: true, data: signupRes?.data };
          } else {
            showToast({
              title: "Error",
              message: errorMessage.value,
              toastType: "error",
              duration: 3000,
            });
            return { success: false, error: errorMessage.value };
          }
        } else {
          Router.push(`/reset-password?otpId=${otpRes?.data?.otpId}`);
          return { success: true, data: otpRes?.data };
        }
      } else {
        showToast({
          title: "Error",
          message: otpRes?.data?.error || "OTP verification failed.",
          toastType: "error",
          duration: 3000,
        });
        return { success: false, error: errorMessage.value };
      }
    } catch (error: any) {
      loading.value = false;
      showToast({
        title: "Error",
        message: error?.message || "An unexpected error occurred.",
        toastType: "error",
        duration: 3000,
      });
      return { success: false, error: errorMessage.value };
    }
  };

  const setPayload = (data: any) => {
    credential.email.value = data.email;
    credential.otpCode.value = data.otpCode;
    credential.password.value = data.password;
  };

  return { credential, verify_OTP, setPayload, loading, errorMessage };
};
