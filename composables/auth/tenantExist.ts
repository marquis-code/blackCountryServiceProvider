import { auth_api } from "@/api_factory/modules/auth";

const credential = {
  email: ref(""),
};

export const use_tenant_exist = () => {
  const loading = ref(false);
  const handle_tenant_exist = async () => {
    loading.value = true;
    const res = (await auth_api.$_tenant_exist(credential.email.value)) as any;
    loading.value = false;
    if (res.type !== "ERROR") {
      return res.data
    }
  };
  return { credential, handle_tenant_exist, loading };
};
