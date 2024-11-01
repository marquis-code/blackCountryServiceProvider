import { auth_api } from "@/api_factory/modules/auth";
import { useUser } from "@/composables/auth/user";

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
        useNuxtApp().$toast.success(otpRes?.data?.message, {
          autoClose: 5000,
          dangerouslyHTMLString: true,
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
            password: password
          })) as any;
          console.log(signupRes, 'here res')
          if (signupRes.type !== "ERROR") {
            useNuxtApp().$toast.success(signupRes?.data?.message, {
              autoClose: 5000,
              dangerouslyHTMLString: true,
            });
            useUser().createUser(signupRes.data);
            Router.push("/success");
            return { success: true, data: signupRes?.data };
          } else {
            errorMessage.value =
              signupRes?.data?.error || "Registration failed.";
            useNuxtApp().$toast.error(errorMessage.value, {
              autoClose: 5000,
              dangerouslyHTMLString: true,
            });
            return { success: false, error: errorMessage.value };
          }
        } else {
          Router.push(`/reset-password?otpId=${otpRes?.data?.otpId}`);
          return { success: true, data: otpRes?.data };
        }
      } else {
        errorMessage.value = otpRes?.data?.error || "OTP verification failed.";
        useNuxtApp().$toast.error(errorMessage.value, {
          autoClose: 5000,
          dangerouslyHTMLString: true,
        });
        return { success: false, error: errorMessage.value };
      }
    } catch (error: any) {
      loading.value = false;
      errorMessage.value = error?.message || "An unexpected error occurred.";
      useNuxtApp().$toast.error(errorMessage.value, {
        autoClose: 5000,
        dangerouslyHTMLString: true,
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
