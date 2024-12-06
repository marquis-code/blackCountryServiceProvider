import { maintenance_api } from "@/api_factory/modules/maintenance";
import { useCustomToast } from "@/composables/core/useCustomToast";
const { showToast } = useCustomToast();
const loading = ref(false);

const invoicePayload = ref({
  billFrom: "", // service provider name
  billTo: "", // property manager's name can be gotten from the reviewedBy field of the maintenance request
  issuedOn: "",
  dueOn: "",
  items: [],
  note: "",
  grandTotal: '',
  paymentBank: {
    accountName: "",
    accountNumber: "",
    bankSortCode: "",
    bankName: ""
}
});

export const useGenerateInvoive = () => {
  const route = useRoute() as any
  const generateInvoice = async () => {
    loading.value = true;

    const res = (await maintenance_api.$_generate_invoice(
      route.query.invoiceId, invoicePayload.value
    )) as any;

    if (res.type !== "ERROR") {
      showToast({
        title: "Success",
        message: "Invoice was generated Successfully",
        toastType: "success",
        duration: 3000,
      });
      window.location.href = "/dashboard/invoice/success";
      // router.push('/dashboard/invoice/success')
    } else {
      showToast({
        title: "Error",
        message: res.data.error,
        toastType: "error",
        duration: 3000,
      });
    }
    loading.value = false;
  };

  const setPayload = (data: any) => {
    invoicePayload.value.billFrom = data.billFrom
    invoicePayload.value.billTo = data.billTo
    invoicePayload.value.issuedOn = data.issuedOn
    invoicePayload.value.dueOn = data.dueOn
    invoicePayload.value.items = data.items
    invoicePayload.value.note = data.note
    invoicePayload.value.grandTotal = data.grandTotal

    invoicePayload.value.paymentBank.accountName = data.accountName
    invoicePayload.value.paymentBank.accountNumber = data.accountNumber
    invoicePayload.value.paymentBank.bankSortCode = data.bankSortCode
    invoicePayload.value.paymentBank.bankName = data.bankName
  }

  return { generateInvoice, loading, invoicePayload, setPayload };
};
