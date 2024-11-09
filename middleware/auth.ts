import { useUser } from "@/composables/auth/user";
const { isLoggedIn } =  useUser();
export default defineNuxtRouteMiddleware((to, from) => {
  if (!isLoggedIn.value && to.path !== "/login") {
    return navigateTo("/login");
  }
});
