import {useUserStore} from '@/stores/user'
export const isLogined = () => {
	const userStore = useUserStore()
	return userStore.auth.token ? true : false
}