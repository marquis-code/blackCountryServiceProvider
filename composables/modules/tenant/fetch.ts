import { tenant_api } from "@/api_factory/modules/tenant";
import { useCustomToast } from "@/composables/core/useCustomToast";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute() as any;

const { showToast } = useCustomToast();
const loading = ref(false);
const tenant = ref({});

export const useFetchTenant = () => {
    const route = useRoute() as any;
    console.log(route, 'router here')
  const getTenant = async () => {
    // Check if tenantId (userId) is available
    const tenantId = route.query.userId;
    if (!tenantId) {
      console.warn("No tenantId provided in the route query.");
      return;
    }

    loading.value = true;
    try {
      const res = (await tenant_api.$_fetch_tenant(tenantId)) as any;
      if (res.type !== "ERROR") {
        tenant.value = res.data || {};
        return res;
      } else {
        showToast({
          title: "Error",
          message: res.data.error,
          toastType: "error",
          duration: 3000,
        });
      }
    } catch (error) {
      showToast({
        title: "Error",
        message: "An error occurred while fetching tenant data",
        toastType: "error",
        duration: 3000,
      });
      console.error("Error fetching tenant data:", error);
    } finally {
      loading.value = false;
    }
  };

  onMounted(() => {
    getTenant();
  });

  return { getTenant, loading, tenant };
};
