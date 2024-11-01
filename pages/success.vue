

<template>
    <div class="flex justify-center items-center min-h-screen">
      <div class="bg-white p-8  text-center max-w-md">
        <!-- Success Icon -->
        <div class="flex justify-center mb-4">
          <div class="">
            <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.923828" width="63.1513" height="64" rx="31.5756" fill="#0F973D"/>
                <path d="M44.1626 32.3596C44.1626 25.7418 38.7977 20.377 32.1799 20.377C25.5621 20.377 20.1973 25.7418 20.1973 32.3596C20.1973 38.9774 25.5621 44.3423 32.1799 44.3423C38.7977 44.3423 44.1626 38.9774 44.1626 32.3596Z" stroke="white" stroke-width="1.7974"/>
                <path d="M27.584 32.9633L30.5297 35.9839L37.0103 28.7344" stroke="white" stroke-width="1.7974" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>                
          </div>
        </div>
        
        <!-- Success Message -->
        <h2 class="text-xl font-semibold text-[#1D2739] mb-2">Registration successful!</h2>
        <p class="text-[#667185] mb-6">
            Welcome to  BlackCountry! Start exploring now.
        </p>
  
        <!-- Confirmation Button -->
   <div class="pt-6">
    <button 
    class="bg-[#292929] text-white w-full text-sm py-4 rounded-lg font-semibold" 
    @click="handleSuccess">
    Continue
  </button>
   </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
const router = useRouter();

const handleSuccess = () => {
  router.push("/dashboard");
};

// definePageMeta({
//   middleware: "auth",
// });
</script>
  
  <style scoped>
/* Basic centering and padding for the modal */
button:focus {
  outline: none;
}
</style>
  