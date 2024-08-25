import { ref, onBeforeMount } from "vue";
export const useSystemInfo = () => {
	const status = ref(0)
	const navHeight = ref(0)
	const menuButtonInfo = ref(null)
	onBeforeMount(() => {
		const { system, statusBarHeight } = uni.getSystemInfoSync();
		menuButtonInfo.value = uni.getMenuButtonBoundingClientRect();
		const isIOS = system.indexOf('iOS') > -1;
		navHeight.value = !isIOS ? 96 : 88;
		status.value = statusBarHeight * 2;
	})
	return {
		status,
		navHeight,
		menuButtonInfo
	}
}