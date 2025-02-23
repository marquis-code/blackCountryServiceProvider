// import { auth_api } from "@/api_factory/modules/auth"
// import { useRouter } from "vue-router"
// import { ref, onMounted, watch } from "vue"
// import { useUser } from '@/composables/auth/user'
// import { use_service_provider_profile } from '@/composables/auth/fetchProfile'
// import { useCustomToast } from '@/composables/core/useCustomToast'

// interface ProfileCredential {
//   firstName: string
//   lastName: string
//   profilePicture: string
//   craft: string
//   email: string
//   phone: string;
//   isEmailVerified: boolean | null
// }

// export const use_update_profile = () => {
//   const Router = useRouter()
//   const { updateUser } = useUser()
//   const { profileObj } = use_service_provider_profile()
//   const { showToast } = useCustomToast()

//   // Initialize the credential object with default values and proper typing
//   const credential = ref<ProfileCredential>({
//     firstName: "",
//     lastName: "",
//     profilePicture: "",
//     craft: "",
//     email: "",
//     phone: "",
//     isEmailVerified: null
//   }) as Ref<ProfileCredential>  // Explicit typing as Ref

//   // Store the original data to compare against
//   const originalCredential = ref<ProfileCredential | null>(null)
  
//   const loading = ref(false)
//   const error = ref<string | null>(null)

//   // Function to compare and get changed fields only
//   const getChangedFields = (current: ProfileCredential, original: ProfileCredential): Partial<ProfileCredential> => {
//     const changes: Partial<ProfileCredential> = {}
    
//     Object.keys(current).forEach((key) => {
//       const typedKey = key as keyof ProfileCredential
//       if (current[typedKey] !== original[typedKey] && current[typedKey] !== "") {
//         changes[typedKey] = current[typedKey]
//       }
//     })
    
//     return changes
//   }

//   // Function to update the profile
//   const updateProfile = async (profilePayload: Partial<ProfileCredential>) => {
//     loading.value = true
//     error.value = null

//     try {
//       // Get only the changed fields
//       const changedFields = originalCredential.value 
//         ? getChangedFields(profilePayload as ProfileCredential, originalCredential.value)
//         : profilePayload

//       // Only proceed if there are actual changes
//       // if (Object.keys(changedFields).length === 0) {
//       //   loading.value = false
//       //   showToast({
//       //     title: "Info",
//       //     message: "No changes detected to update",
//       //     toastType: "info",
//       //     duration: 3000
//       //   })
//       //   return null
//       // }

//       const res = await auth_api.$_update_profile(changedFields)

//       loading.value = false

//       if (res.type !== "ERROR") {
//         showToast({
//           title: "Success",
//           message: "Profile was updated successfully",
//           toastType: "success",
//           duration: 3000
//         })
        
//         // Update local storage and state
//         updateUser(res.data)
//         originalCredential.value = { ...credential.value }
//         Router.push('/dashboard/profile')
//         return res
//       } else {
//         error.value = res.message || "An error occurred while updating the profile."
//         return Promise.reject(error.value)
//       }
//     } catch (err: any) {
//       loading.value = false
//       const errorMessage = err.message || "An unexpected error occurred while updating the profile."
//       error.value = errorMessage
      
//       showToast({
//         title: "Error",
//         message: errorMessage,
//         toastType: "error",
//         duration: 3000
//       })
      
//       return Promise.reject(error.value)
//     }
//   }

//   // // Load initial data
//   // onMounted(() => {
//   //   const userData = localStorage.getItem("user")
//   //   if (userData) {
//   //     try {
//   //       const parsedUser = JSON.parse(userData)
//   //       const initialData: ProfileCredential = {
//   //         firstName: parsedUser?.firstName || "",
//   //         lastName: parsedUser?.lastName || "",
//   //         profilePicture: parsedUser?.profilePicture || "",
//   //         craft: parsedUser?.craft || profileObj?.value?.craft,
//   //         email: parsedUser?.email || "",
//   //         isEmailVerified: parsedUser?.isEmailVerified || null
//   //       }
        
//   //       credential.value = initialData
//   //       originalCredential.value = { ...initialData }
//   //     } catch (error) {
//   //       console.error("Error parsing user data from localStorage:", error)
//   //     }
//   //   }
//   // })

//   // Load initial data with proper nested optional chaining for craft
//   onMounted(() => {
//     const userData = localStorage.getItem("user")
//     if (userData) {
//       try {
//         const parsedUser = JSON.parse(userData)
//         const initialData: ProfileCredential = {
//           firstName: parsedUser?.firstName || "",
//           lastName: parsedUser?.lastName || "",
//           profilePicture: parsedUser?.profilePicture || "",
//           craft: parsedUser?.craft || profileObj.value?.craft || "",
//           email: parsedUser?.email || "",
//           phone: parsedUser?.phone || "",
//           isEmailVerified: parsedUser?.isEmailVerified || null
//         }
        
//         credential.value = initialData
//         originalCredential.value = { ...initialData }
//       } catch (error) {
//         console.error("Error parsing user data from localStorage:", error)
//       }
//     } else {
//       // Handle case when no user data in localStorage but profileObj exists
//       if (profileObj.value) {
//         const initialData: ProfileCredential = {
//           firstName: profileObj.value?.firstName || "",
//           lastName: profileObj.value?.lastName || "",
//           profilePicture: profileObj.value?.profilePicture || "",
//           craft: profileObj.value?.craft || "",
//           email: profileObj.value?.email || "",
//           phone: profileObj.value?.phone || "",
//           isEmailVerified: profileObj.value?.isEmailVerified || null
//         }
        
//         credential.value = initialData
//         originalCredential.value = { ...initialData }
//       }
//     }
//   })

//   return {
//     credential,
//     updateProfile,
//     loading,
//     error,
//     profileObj
//   }
// }
import { auth_api } from "@/api_factory/modules/auth"
import { useRouter } from "vue-router"
import { ref, onMounted, watch } from "vue"
import { useUser } from '@/composables/auth/user'
import { use_service_provider_profile } from '@/composables/auth/fetchProfile'
import { useCustomToast } from '@/composables/core/useCustomToast'

interface ProfileCredential {
  firstName: string
  lastName: string
  profilePicture: string
  craft: string
  email: string
  phoneNumber: string;
  isEmailVerified: boolean | null
}

export const use_update_profile = () => {
  const Router = useRouter()
  const { updateUser } = useUser()
  const { profileObj } = use_service_provider_profile()
  const { showToast } = useCustomToast()

  // Initialize the credential object with default values and proper typing
  const credential = ref<ProfileCredential>({
    firstName: "",
    lastName: "",
    profilePicture: "",
    craft: "",
    email: "",
    phoneNumber: "",
    isEmailVerified: null
  }) as Ref<ProfileCredential>  // Explicit typing as Ref

  // Store the original data to compare against
  const originalCredential = ref<ProfileCredential | null>(null)
  
  const loading = ref(false)
  const error = ref<string | null>(null)

  // Function to compare and get changed fields only
  const getChangedFields = (current: ProfileCredential, original: ProfileCredential): Partial<ProfileCredential> => {
    const changes: Partial<ProfileCredential> = {}
    
    Object.keys(current).forEach((key) => {
      const typedKey = key as keyof ProfileCredential
      if (current[typedKey] !== original[typedKey] && current[typedKey] !== "") {
        changes[typedKey] = current[typedKey]
      }
    })
    
    return changes
  }

  // Function to update the profile
  const updateProfile = async (profilePayload: Partial<ProfileCredential>) => {
    loading.value = true
    error.value = null

    try {
      // Get only the changed fields
      const changedFields = originalCredential.value 
        ? getChangedFields(profilePayload as ProfileCredential, originalCredential.value)
        : profilePayload

      // Only proceed if there are actual changes
      // if (Object.keys(changedFields).length === 0) {
      //   loading.value = false
      //   showToast({
      //     title: "Info",
      //     message: "No changes detected to update",
      //     toastType: "info",
      //     duration: 3000
      //   })
      //   return null
      // }

      const res = await auth_api.$_update_profile(changedFields)

      loading.value = false

      if (res.type !== "ERROR") {
        showToast({
          title: "Success",
          message: "Profile was updated successfully",
          toastType: "success",
          duration: 3000
        })
        
        // Update local storage and state
        updateUser(res.data)
        originalCredential.value = { ...credential.value }
        Router.push('/dashboard/profile')
        return res
      } else {
        error.value = res.message || "An error occurred while updating the profile."
        return Promise.reject(error.value)
      }
    } catch (err: any) {
      loading.value = false
      const errorMessage = err.message || "An unexpected error occurred while updating the profile."
      error.value = errorMessage
      
      showToast({
        title: "Error",
        message: errorMessage,
        toastType: "error",
        duration: 3000
      })
      
      return Promise.reject(error.value)
    }
  }

  // // Load initial data
  // onMounted(() => {
  //   const userData = localStorage.getItem("user")
  //   if (userData) {
  //     try {
  //       const parsedUser = JSON.parse(userData)
  //       const initialData: ProfileCredential = {
  //         firstName: parsedUser?.firstName || "",
  //         lastName: parsedUser?.lastName || "",
  //         profilePicture: parsedUser?.profilePicture || "",
  //         craft: parsedUser?.craft || profileObj?.value?.craft,
  //         email: parsedUser?.email || "",
  //         isEmailVerified: parsedUser?.isEmailVerified || null
  //       }
        
  //       credential.value = initialData
  //       originalCredential.value = { ...initialData }
  //     } catch (error) {
  //       console.error("Error parsing user data from localStorage:", error)
  //     }
  //   }
  // })

  // Load initial data with proper nested optional chaining for craft
  onMounted(() => {
    const userData = localStorage.getItem("user")
    if (userData) {
      try {
        const parsedUser = JSON.parse(userData)
        const initialData: ProfileCredential = {
          firstName: parsedUser?.firstName || "",
          lastName: parsedUser?.lastName || "",
          profilePicture: parsedUser?.profilePicture || "",
          craft: parsedUser?.craft || profileObj.value?.craft || "",
          email: parsedUser?.email || "",
          phoneNumber: parsedUser?.phoneNumber || "",
          isEmailVerified: parsedUser?.isEmailVerified || null
        }
        
        credential.value = initialData
        originalCredential.value = { ...initialData }
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error)
      }
    } else {
      // Handle case when no user data in localStorage but profileObj exists
      if (profileObj.value) {
        const initialData: ProfileCredential = {
          firstName: profileObj.value?.firstName || "",
          lastName: profileObj.value?.lastName || "",
          profilePicture: profileObj.value?.profilePicture || "",
          craft: profileObj.value?.craft || "",
          email: profileObj.value?.email || "",
          phoneNumber: profileObj.value?.phoneNumber || "",
          isEmailVerified: profileObj.value?.isEmailVerified || null
        }
        
        credential.value = initialData
        originalCredential.value = { ...initialData }
      }
    }
  })

  return {
    credential,
    updateProfile,
    loading,
    error,
    profileObj
  }
}