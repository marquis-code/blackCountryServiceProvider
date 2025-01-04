import { settings_api } from "@/api_factory/modules/settings";
const loading = ref(false)
const policiesList = ref({})

export const useFetchPrivacyPolicy = () => {
    const getPrivacyPolicy = async () => {
        loading.value = true
        const res = await  settings_api.$_fetch_privacy_policy() as any
        console.log(res, 'res hweere')
        if (res.type !== 'ERROR') {
            policiesList.value = res?.data[0] ?? {}
        }
        loading.value = false
    }

    onMounted(() => {
        getPrivacyPolicy()
    })

    return { loading, policiesList }
}
