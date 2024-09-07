<template>
	<z-paging ref="paging" v-model="dataList" @query="queryList">
		<template #top>
			<tm-navbar hideHome :padding="[32,0]">
				<template #left>
					<tm-avatar :size="70"
						img="https://ts2.cn.mm.bing.net/th?id=ORMS.35c9466342ed96c647c73579400fb9e2&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.25&p=0"></tm-avatar>
				</template>
				<img class="title_img" src="@/static/images/火.png" alt="" />
				<template #right>
					<view class="flex flex-around">
						<uni-icons type="search" size="26" @click="intoSearch"></uni-icons>
						<uni-icons type="plusempty" size="26" @click="intoAddFriend"></uni-icons>
					</view>
				</template>
			</tm-navbar>
		</template>
		<view class="px-32 py-10">
			<view class="flex flex-between mt-30" v-for="chat in 10" :key="chat" @click="intoMessage(chat)">
				<tm-avatar :size="96" round="4"
					img="https://ts2.cn.mm.bing.net/th?id=ORMS.3eb85da3993ccf02c1d5f09582891300&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.25&p=0"></tm-avatar>
				<view class="flex flex-col flex-1 ml-32">
					<text class="text-size-xl text-#272832">username</text>
					<text class="text-size-n text-#ccc">hello world!</text>
				</view>
				<view class="text-size-n flex flex-col">
					<text class="time">09.30</text>
					<view class="msg_num">1</view>
				</view>
			</view>
		</view>
	</z-paging>
</template>

<script setup lang="ts">
	import tmNavbar from '@/tmui/components/tm-navbar/tm-navbar.vue'
	import tmAvatar from '@/tmui/components/tm-avatar/tm-avatar.vue'
	const intoSearch = () => {
		uni.navigateTo({
			url: '/pages/search/search'
		})
	}
	const intoAddFriend = () => {

	}
	const intoMessage = () => {
		uni.navigateTo({
			url: '/pages/message/message'
		})
	}
</script>

<style lang="scss" scoped>
	.title_img {
		width: 88rpx;
		height: 42rpx;
	}

	.msg_num {
		width: 60rpx;
		color: #fdfdfd;
		text-align: center;
		background-color: #cccccc;
		border: 2rpx solid;
		border-radius: 20rpx;
	}
</style>