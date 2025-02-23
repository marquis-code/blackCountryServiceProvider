import { ref, unref, watch } from 'vue';

/**
 * Composable to calculate the profile completion percentage based on the provided profile data.
 *
 * For the sample profile:
 * {
 *   "id": "88310add-5410-4bee-b018-236ebdd61c03",
 *   "firstName": "Ene",
 *   "lastName": "Aba",
 *   "email": "enene.aba@gmail.com",
 *   "isEmailVerified": true,
 *   "isActive": true,
 *   "profilePicture": "https://blackcountrystorage.blob.core.windows.net/blackcountry-dev/images/1740300521310-club-sandwich-3538455_1280.jpg",
 *   "createdAt": "2024-11-20T18:05:48.432Z",
 *   "updatedAt": "2025-02-23T08:56:22.172Z",
 *   "deletedAt": null,
 *   "authProvider": "bc",
 *   "craft": "Pest Control Technician",
 *   "phoneNumber": "08147626503"
 * }
 *
 * The profile is divided into four groups:
 * 1. Profile Picture (20%)
 * 2. Basic Information (firstName, lastName, craft) (30%)
 * 3. Contact Information (email, phoneNumber) (30%)
 * 4. Email Verification (isEmailVerified) (20%)
 *
 * @param profileData - The profile object (or ref) with fields and values
 * @returns The profile completion percentage (reactive ref)
 */
export const useProfileCompletion = (profileData) => {
  console.log(profileData, 'profile data ghee')
  const completionPercentage = ref(0);

  // Define the grouped fields with their respective weights
  const profileGroups = {
    profilePicture: {
      fields: ['profilePicture'],
      weight: 20,
    },
    basicInformation: {
      // Including "craft" with firstName and lastName
      fields: ['firstName', 'lastName', 'craft'],
      weight: 30,
    },
    contactInformation: {
      fields: ['email', 'phoneNumber'],
      weight: 30,
    },
    emailVerification: {
      fields: ['isEmailVerified'],
      weight: 20,
    },
  };

  // Function to calculate the completion percentage
  const calculateCompletion = () => {
    // Unwrap the profileData in case it's a ref
    const data = unref(profileData);
    let totalPercentage = 0;

    Object.values(profileGroups).forEach((group) => {
      const totalFields = group.fields.length;
      const filledFields = group.fields.filter((field) => {
        // For booleans, only count true as filled
        if (typeof data[field] === 'boolean') {
          return data[field] === true;
        }
        return data[field] !== null && data[field] !== undefined && data[field] !== '';
      }).length;

      totalPercentage += (filledFields / totalFields) * group.weight;
    });

    completionPercentage.value = Math.round(totalPercentage);
  };

  // Watch for changes in profileData and recalculate immediately and on change
  watch(profileData, calculateCompletion, { immediate: true, deep: true });

  return { completionPercentage };
};
