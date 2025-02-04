<script setup lang="ts">
	import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
	onLaunch(() => {
		console.log("App Launch");
	});
	onShow(() => {
		console.log("App Show");
	});
	onHide(() => {
		console.log("App Hide");
	});
</script>

<style lang="scss">
	/* 图标必须 */
	@import url(@/uni_modules/tm-ui/css/remixicon.min.css);
	/* #ifdef APP-NVUE */
	@import './tmui/scss/nvue.css';
	/* #endif */
	/* #ifndef APP-NVUE */
	@import './tmui/scss/noNvue.css';
	/* #endif */
	@import "./js_sdk/a-hua-unocss/index.scss";
</style>