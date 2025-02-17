import { GATEWAY_ENDPOINT } from "../axios.config";

export const settings_api = {
      $_create_notification_preferences: (payload: any) => {
        const url = '/preferences/users';
        return GATEWAY_ENDPOINT.post(url, payload);
      },
      $_fetch_notification_preferences: () => {
        const url = '/preferences/users';
        return GATEWAY_ENDPOINT.get(url);
      },
      $_fetch_faq: () => {
        const url = '/faqs?app=service-provider-app';
        return GATEWAY_ENDPOINT.get(url);
      },
      $_fetch_terms_of_use: () => {
        const url = '/policies?app=service-provider-app&type=terms_of_use';
        return GATEWAY_ENDPOINT.get(url);
      },
      $_fetch_privacy_policy: () => {
        const url = '/policies?app=service-provider-app&type=privacy_policy';
        return GATEWAY_ENDPOINT.get(url);
      },
      $_create_preferences: (payload: any) => {
        const url = '/preferences/users';
        return GATEWAY_ENDPOINT.post(url, payload);
      },
};
