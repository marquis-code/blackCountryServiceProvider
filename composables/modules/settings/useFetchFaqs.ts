import { settings_api } from "@/api_factory/modules/settings";
const loading = ref(false)
const faqList = ref([])

export const useFetchFaqs = () => {
	const getFaqs = async () => {
		loading.value = true
		const res = await  settings_api.$_fetch_faq() as any
        console.log(res, 'res hweere')
        if (res.type !== 'ERROR') {
            faqList.value = res?.data ?? []
        }
        loading.value = false
	}

    onMounted(() => {
        getFaqs()
    })

	return { loading, faqList }
}
