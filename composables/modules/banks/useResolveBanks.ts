import { banks_api } from "@/api_factory/modules/banks";
import { ref } from 'vue'; // Added explicit import for ref

const resolvingBankInfo = ref(false);
const bankObj = ref({});

export const useResolveBank = () => {
    const resolveBank = async (accountNumber: string, sortCode: string) => {
        try {
            resolvingBankInfo.value = true;
            const res = await banks_api.$_resolve_banks(accountNumber, sortCode) as any;
            console.log(res, 'resolved');
            
            if (res.type !== 'ERROR') {
                bankObj.value = res?.data?.data;
                return res.data;
            }
            return null; // Added explicit return for error case
        } catch (error) {
            console.error('Bank resolution error:', error);
            return null;
        } finally {
            resolvingBankInfo.value = false; // This ensures resolvingBankInfo is set to false in all cases
        }
    };

    return { resolveBank, resolvingBankInfo, bankObj };
};