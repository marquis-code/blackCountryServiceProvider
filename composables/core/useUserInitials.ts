// export const useUserInitials = (user: any) => {
//     const getInitials = computed(() => {
//       if (!user || !user.firstName || !user.lastName) {
//         return '';
//       }
  
//       const firstInitial = user.firstName.charAt(0).toUpperCase();
//       const lastInitial = user.lastName.charAt(0).toUpperCase();
  
//       return `${firstInitial}${lastInitial}`;
//     });
  
//     return {
//       getInitials,
//     };
//   };

import { computed } from 'vue';

export const useUserInitials = (user: any) => {
  const getInitials = computed(() => {
    // Ensure that both firstName and lastName are valid strings
    if (!user || !user.firstName || !user.lastName) {
      return '';
    }

    // Extract initials
    const firstInitial = user.firstName.trim().charAt(0).toUpperCase();
    const lastInitial = user.lastName.trim().charAt(0).toUpperCase();

    return `${firstInitial}${lastInitial}`;
  });

  return {
    getInitials,
  };
};
