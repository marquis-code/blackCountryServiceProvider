import { auth_api } from '@/api_factory/modules/auth'
export const use_auth_forgot_password = () => {
	const Router = useRouter()
	const credential = {
		email: ref('')
	}

	const loading = ref(false)


	const disabled = computed(() => {
		return (
		  loading.value || !credential.email.value
		);
	  });

	const forgot_password = async () => {
		loading.value = true
		const res = (await auth_api.$_verify_email({
			email: credential.email.value
		})) as any

		loading.value = false
		if (res.type !== 'ERROR') {
			useNuxtApp().$toast.success("OTP was sent successfully.", {
				autoClose: 5000,
				dangerouslyHTMLString: true,
			  });
			Router.push('/verify-email?email=' + credential.email.value)
		}
	}

	const setObj = (data: any) => {
		credential.email.value = data.email
	}

	return { credential, forgot_password, loading, disabled, setObj }
}
