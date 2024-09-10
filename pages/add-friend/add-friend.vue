<template>
	<view class="relative h-100vh bg-#ffef83">
		<view class="absloute h-100% border-box b-0 l-0 mt-200 px-32 flex-col bg-#fff" style="border-radius: 40rpx 40rpx 0 0">
			<view class="flex-col">
				<img style="transform: translateY(-50%);" class="w-240 h-240 ml-60 b-#fff-6 rd-full"
					src="https://ts1.cn.mm.bing.net/th?id=ORMS.da980e896836f2477a0f3333cff424a9&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.25&p=0"
					alt="头像" />
				<text class="fs-52 text-#272832 mt--68">左左左表妹</text>
				<textarea class="max-w-720 mt-48 py-18 px-22 bg-#F3F4F6 rd-20" placeholder="填写验证信息" v-model="signature" />
			</view>
			<view class="my-94 flex">
				<button class="rd-10 mr-32 flex-1" @click="cancel">取消</button>
				<button class="flex-3 bg-#FFE431 rd-10" @click="send">发送</button>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
	import {
		ref
	} from "vue";
	const signature = ref("亲爱的，快点来到我这里～");
	const cancel = () => {
		signature.value = "";
		uni.navigateBack();
	}
	const send = () => {

	}
</script>

<style lang="scss" scoped>

</style>