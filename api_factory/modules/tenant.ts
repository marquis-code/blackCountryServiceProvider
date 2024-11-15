import { GATEWAY_ENDPOINT } from "../axios.config";

export const tenant_api = {
    $_fetch_tenant: (tenantId: string | number) => {
        const url = `/tenants/${tenantId}`;
        return GATEWAY_ENDPOINT.get(url);
      }
};
