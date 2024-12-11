import { ref } from 'vue'
import { utilities_apis } from '@/api_factory/core/utilities'
import { useUser } from "@/composables/auth/user";

export const useFetchContacts = () => {
  const loading = ref(false)
  const contactsInfo = ref([])



  const fetchContacts = async () => {
    loading.value = true
  
      const res = await utilities_apis.$_contacts() as any
      console.log(res, 'contacts data')
      if (res.type !== 'ERROR') {
        contactsInfo.value = res?.data || []
    }
    loading.value = false

  }

  onMounted(() => {
    fetchContacts()
})

  return {
    fetchContacts,
    loading,
    contactsInfo,
  }
}
