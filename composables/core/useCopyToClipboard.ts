import { useCustomToast } from '@/composables/core/useCustomToast'
const { showToast } = useCustomToast();

export function useClipboard() {
    const copied = ref(false);
    const error = ref<string | null>(null);
  
    const copyToClipboard = async (text: string) => {
      try {
        if (!navigator.clipboard) {
          throw new Error("Clipboard API not available");
        }
  
        await navigator.clipboard.writeText(text);
        copied.value = true;
        error.value = null;
        showToast({
            title: "Success",
            message: 'Copied!',
            toastType: "success",
            duration: 3000
          });
  
        // Reset the copied state after a few seconds
        setTimeout(() => {
          copied.value = false;
        }, 2000);
      } catch (err) {
        showToast({
            title: "Error",
            message: error.value || "Something went wrong",
            toastType: "error",
            duration: 3000
          });
        error.value = (err as Error).message;
      }
    };
  
    return {
      copied,
      error,
      copyToClipboard,
    };
  }
  