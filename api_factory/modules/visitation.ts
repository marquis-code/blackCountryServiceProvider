import { GATEWAY_ENDPOINT } from "../axios.config";

export const visitation_api = {
    $_fetch_visitations: (tenantId: string | number, houseId: string | number) => {
        const url = `/visitations?tenantId=${tenantId}&houseId=${houseId}`;
        return GATEWAY_ENDPOINT.get(url);
      },
      $_delete_visitation: (id: string | number) => {
        const url = `/visitations/${id}`;
        return GATEWAY_ENDPOINT.delete(url);
      },
      $_create_visitation: (id: string | number, payload: any) => {
        const url = `/houses/${id}/visitations`;
        return GATEWAY_ENDPOINT.post(url, payload);
      },
};
