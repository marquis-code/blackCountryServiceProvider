// import { banks_api } from "@/api_factory/modules/banks";
// import { useUser } from "@/composables/auth/user";
// import { useCustomToast } from '@/composables/core/useCustomToast'
// const { showToast } = useCustomToast();
// const { user } = useUser();
// const loading = ref(false);

// const payload = ref({
//   accountName: "",
//   accountNumber: "",
//   bankSortCode: "",
//   bankName: ""
// });

// export const useAddBankAccount = () => {
//   const addBankAccount = async () => {
//     loading.value = true;
//     const res = (await banks_api.$_add_bank_account(user.value.id, payload)) as any;
//     if (res.type !== "ERROR") {
// 		showToast({
// 			title: "Success",
// 			message: "Bank Account was created successfully",
// 			toastType: "success",
// 			duration: 3000
// 		  });
//     }
//     loading.value = false;
//   };

// const setPayload = (data: any) => {
// 	payload.value.accountName = data.accountName
// 	payload.value.accountNumber = data.accountNumber
// 	payload.value.bankSortCode = data.bankSortCode
// 	payload.value.bankName = data.bankName
// }

//   return { addBankAccount, loading, payload, setPayload };
// };


import { banks_api } from "@/api_factory/modules/banks";
import { useUser } from "@/composables/auth/user";
import { useCustomToast } from '@/composables/core/useCustomToast'

const { showToast } = useCustomToast();
const { user } = useUser();
const loading = ref(false);
const router = useRouter()

const payload = ref({
  accountName: "",
  accountNumber: "",
  bankSortCode: "",
  bankName: ""
});

export const useAddBankAccount = () => {
	const router = useRouter()
  const addBankAccount = async () => {
    try {
      loading.value = true;
      
      // Check if user ID exists
      if (!user.value?.id) {
        throw new Error("User ID is not available.");
      }

      // API call to add the bank account
      const res = await banks_api.$_add_bank_account(user.value.id, payload.value) as any

      if (res && res.type !== "ERROR") {
        showToast({
          title: "Success",
          message: "Bank Account was created successfully",
          toastType: "success",
          duration: 3000
        });
		router.push('profile/linked-cards')
      } else {
        // Display error if API response indicates failure
        showToast({
          title: "Error",
          message: res.message || "Failed to create bank account",
          toastType: "error",
          duration: 3000
        });
      }
    } catch (error) {
      console.error("Error adding bank account:", error);

      // Show error toast on API call failure
      showToast({
        title: "Error",
        message: "Unable to add bank account. Please try again.",
        toastType: "error",
        duration: 3000
      });
    } finally {
      loading.value = false;
    }
  };

  const setPayload = (data: any) => {
    payload.value.accountName = data.accountName || "";
    payload.value.accountNumber = data.accountNumber || "";
    payload.value.bankSortCode = data.bankSortCode || "";
    payload.value.bankName = data.bankName || "";
  };

  return { addBankAccount, loading, payload, setPayload };
};
