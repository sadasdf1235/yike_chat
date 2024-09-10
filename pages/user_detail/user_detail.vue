<template>
	<view class="w-100vw h-100vh flex-col flex justify-around">
		<view class="flex-col flex-col-center-center flex-between px-100">
			<view class="w-400 h-400 b-#fff-6 rd-48">
				<img 
					src="https://ts1.cn.mm.bing.net/th?id=ORMS.1609bfdfa8e0e176c762cea6fba55f21&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.25&p=0"
					alt="" />
				<img src="" alt="" />
			</view>
			<view class="flex-col flex-col-center-center flex-around ">
				<text class="fs-52 text-#272832 mt-20">左左左表妹</text>
				<text class="fs-28 text-#272832 mt-20">昵称：很好搭档</text>
				<text class="text-#272832 mt-20 px-50">
					夜，结束了一天的喧嚣后安静下来，伴随着远处路灯那微弱的光。风，毫无预兆地席卷整片旷野，撩动人的思绪万千。
				</text>
			</view>
		</view>
		<button class="w-684 h-80 lh-80 bg-#FFE431 rd-5" @click="intoAddFriend">加为好友</button>
	</view>
</template>

<script setup lang="ts">
	const intoAddFriend = () => {
		uni.navigateTo({
			url: '/pages/add-friend/add-friend'
		})
	}
</script>

<style lang="scss" scoped>

</style>