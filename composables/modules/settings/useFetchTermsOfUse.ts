import { settings_api } from "@/api_factory/modules/settings";
const loading = ref(false)
const termsList = ref({})

export const useFetchTermsOfUse = () => {
    const getTermsOfUse = async () => {
        loading.value = true
        const res = await  settings_api.$_fetch_terms_of_use() as any
        console.log(res.data, 'res hweere')
        if (res.type !== 'ERROR') {
            termsList.value = res?.data[0] ?? {}
        }
        loading.value = false
    }

    onMounted(() => {
        getTermsOfUse()
    })

    return { loading, termsList }
}
