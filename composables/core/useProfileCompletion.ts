import { ref } from 'vue';

/**
 * Composable to calculate the profile completion percentage based on grouped fields
 * @param profileData - The profile object with fields and values
 * @returns The profile completion percentage
 */
export const useProfileCompletion = (profileData: any) => {
    console.log(profileData, 'profile data')
  const completionPercentage = ref(0);

  // Define the grouped fields with their respective weights
  const profileGroups = {
    profilePicture: {
      fields: ['profilePicture'],
      weight: 20,
    },
    personalInformation: {
      fields: ['firstName', 'lastName', 'email', 'phoneNumber', 'dateOfBirth', 'gender', 'maritalStatus', 'cityId'],
      weight: 20,
    },
    rentalHistory: {
      fields: ['currentLandlord', 'rentalAddress', 'lengthOfTenancy', 'reasonForMovingOut'],
      weight: 20,
    },
    employmentInformation: {
      fields: ['employmentStatus', 'employerName', 'employerAddress', 'occupation', 'monthlyNetSalary'],
      weight: 20,
    },
    nextOfKin: {
      fields: [
        'nextOfKinName',
        'nextOfKinRelationship',
        'nextOfKinEmail',
        'nextOfKinAddress',
        'nextOfKinPhone',
        'nextOfKinOccupation',
        'nextOfKinEmployer',
        'nextOfKinEmployerAddress',
      ],
      weight: 20,
    },
  };

  // Function to calculate the completion percentage
  const calculateCompletion = () => {
    let totalPercentage = 0;

    Object.values(profileGroups).forEach((group) => {
      const totalFields = group.fields.length;
      const filledFields = group.fields.filter(
        (field) => profileData[field] !== null && profileData[field] !== undefined && profileData[field] !== ''
      ).length;

      const groupCompletion = (filledFields / totalFields) * group.weight;
      totalPercentage += groupCompletion;
    });

    completionPercentage.value = Math.round(totalPercentage);
  };

  // Initial calculation
  calculateCompletion();

  // Return the completion percentage
  return { completionPercentage };
};
