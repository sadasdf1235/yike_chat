<template>
	<tm-app>
		<tm-navbar hideHome hideBack title="" :leftWidth="500">
			<template #left>
				<tm-input class="fulled" :margin="[16,0]" suffix="tmicon-search" v-model="keyword" placeholder="ID/昵称/群"></tm-input>
			</template>
			<template #right>
				<text class="mr-16" @click="back">取消</text>
			</template>
		</tm-navbar>
		<view class="pa-32">
			<view class="mt-60">
				<text class="text-weight-b">用户</text>
				<view class="flex flex-center mt-20" @click="intoDetail">
					<img class="avatar"
						src="https://ts2.cn.mm.bing.net/th?id=ORMS.136ee85a4781fba51b21ca943e849ab4&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.25&p=0"
						alt="" />
					<text class="name ml-32 text-size-m flex-5">adsada</text>
					<button class="handle_active" @click.stop="handleClick($event)">发消息</button>
				</view>
			</view>
		</view>
	</tm-app>
</template>

<script setup lang="ts">
	import { ref } from "vue"
	const keyword = ref("")
	const back = () => {
		uni.navigateBack()
	}
	const intoDetail = () => {
		uni.navigateTo({
			url: '/pages/user_detail/user_detail'
		})
	}
	const handleClick = (event) => {
		event.stopPropagation();
		console.log('点击了按钮')
	}
</script>

<style lang="scss" scoped>
	.avatar {
		width: 80rpx;
		height: 80rpx;
		border-radius: 20rpx;
		flex: 1;
	}

	.handle {
		width: 120px;
		height: 48rpx;
		line-height: 48rpx;
		background: rgba(74, 170, 255, 0.10);
		border-radius: 24rpx;
		font-size: 24rpx;
		color: #4AAAFF;
		flex: 2;
	}

	.handle_active {
		@extend .handle;
		background: #FFE431;
		color: #272832;
		flex: 2;
	}
</style>