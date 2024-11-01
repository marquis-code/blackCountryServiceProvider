import { auth_api } from "@/api_factory/modules/auth";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useUser } from '@/composables/auth/user'
import { useCustomToast } from '@/composables/core/useCustomToast'
const { showToast } = useCustomToast();
import { useNuxtApp } from "#app"; // Use this to show toast notifications

export const use_update_profile = () => {
  const Router = useRouter();
  const { updateUser } = useUser()
  
  const credential = ref({
    firstName: "",
    lastName: "",
    email: "",
    isEmailVerified: false,
    isActive: false,
    phoneNumber: "",
    dateOfBirth: "",
    gender: "",
    maritalStatus: "",
    profilePicture: null,
    currentLandlord: null,
    rentalAddress: null,
    lengthOfTenancy: null,
    reasonForMovingOut: null,
    employmentStatus: null,
    employerName: null,
    employerAddress: null,
    occupation: null,
    monthlyNetSalary: null,
    nextOfKinName: null,
    nextOfKinRelationship: null,
    nextOfKinEmail: null,
    nextOfKinAddress: null,
    nextOfKinPhone: null,
    nextOfKinOccupation: null,
    nextOfKinEmployer: null,
    nextOfKinEmployerAddress: null,
    shouldContactReferences: null,
  }) as any;

  const loading = ref(false);
  const error = ref(null); // Track error messages

  const updateProfile = async (profilePayload: any) => {
    loading.value = true;
    error.value = null; // Reset error before the API call

    try {
      const res = await auth_api.$_update_profile(profilePayload);

      loading.value = false;

      if (res.type !== "ERROR") {
        useNuxtApp().$toast.success("Profile was updated successfully.", {
          autoClose: 5000,
          dangerouslyHTMLString: true,
        });
        Router.push('/profile/profile-update-success')
        const data = {
          profilePicture: res.data.profilePicture
        }
        updateUser(data)
        console.log(res, 'res here ooooo again')
        return res;
      } else {
        console.log(res, 'res here')
        showToast({
          title: "Error",
          message: res.data.error,
          toastType: "error",
          duration: 3000
        });
        // If API returns an error, set the error state
        error.value = res.message || "An error occurred while updating the profile.";
        return Promise.reject(error.value);
      }
    } catch (err) {
      console.log(err, 'res here')
      loading.value = false;
      error.value = err.message || "An unexpected error occurred while updating the profile.";
      useNuxtApp().$toast.error(error.value, {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
      return Promise.reject(error.value); // Return the error to the calling function
    }
  };

  return { credential, updateProfile, loading, error };
};
