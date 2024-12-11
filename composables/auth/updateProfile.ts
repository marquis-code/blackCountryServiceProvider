import { auth_api } from "@/api_factory/modules/auth";
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import { useNuxtApp } from "#app"; // Use this to show toast notifications
import { useUser } from '@/composables/auth/user'
import { use_service_provider_profile } from '@/composables/auth/fetchProfile';
const { profileObj} = use_service_provider_profile();
import { useCustomToast } from '@/composables/core/useCustomToast'
const { showToast } = useCustomToast();

export const use_update_profile = () => {
  const Router = useRouter();
  const { updateUser } = useUser()
  

  // Initialize the credential object with default values
  const credential = ref({
    firstName: "",
    lastName: "",
    profilePicture: "",
    email: "",
    role: ""
  }) as any;

  const loading = ref(false);
  const error = ref(null); // Track error messages

  // Function to update the profile
  const updateProfile = async (profilePayload: any) => {
    loading.value = true;
    error.value = null; // Reset error before the API call

    try {
      const res = (await auth_api.$_update_profile(profilePayload)) as any;

      loading.value = false;

      if (res.type !== "ERROR") {
                showToast({
          title: "Success",
          message: "Profile was updated successfully",
          toastType: "success",
          duration: 3000
        });
        console.log(res.data, 'update res')
        Router.push('/dashboard/profile')
        updateUser(res.data)
        return res;
      } else {
        // If API returns an error, set the error state
        error.value = res.message || "An error occurred while updating the profile.";
        return Promise.reject(error.value);
      }
    } catch (err: any) {
      loading.value = false;
      error.value = err.message || "An unexpected error occurred while updating the profile.";
      // useNuxtApp().$toast.error(error.value, {
      //   autoClose: 5000,
      //   dangerouslyHTMLString: true,
      // });
      showToast({
        title: "Error",
        message: `${err.message} || "An unexpected error occurred while updating the profile."`,
        toastType: "error",
        duration: 3000
      });
      return Promise.reject(error.value); // Return the error to the calling function
    }
  };

  // Prefill user credentials from localStorage when the component is mounted
  onMounted(() => {
    console.log(profileObj.value, 'from here')
    const userData = localStorage.getItem("user");

    if (userData) {
      try {
        const parsedUser = JSON.parse(userData);
        // Update the credential object with data from local storage
        credential.value.firstName = parsedUser.firstName || "";
        credential.value.lastName = parsedUser.lastName || "";
        credential.value.profilePicture = parsedUser.profilePicture || "";
        credential.value.role = parsedUser.role || "";
        credential.value.email = parsedUser.email || "";
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
      }
    }
  });

  return { credential, updateProfile, loading, error };
};
