export function useClearLocalStorage() {
    const clearLocalStorageExceptUserAndToken = () => {
      const user = localStorage.getItem('user');
      const token = localStorage.getItem('token');
  
      // Clear the entire localStorage
      localStorage.clear();
  
      // Restore the user and token items
      if (user !== null) {
        localStorage.setItem('user', user);
      }
  
      if (token !== null) {
        localStorage.setItem('token', token);
      }
    };
  
    return {
      clearLocalStorageExceptUserAndToken,
    };
  }
  