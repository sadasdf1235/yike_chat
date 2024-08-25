<template>
	<view class="container">
		<view class="app_bar">
			<img class="avatar"
				src="https://ts2.cn.mm.bing.net/th?id=ORMS.35c9466342ed96c647c73579400fb9e2&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.25&p=0"
				alt="头像" />
			<view class="title">
				<img class="title_img" src="@/static/images/火.png" alt="" />
			</view>
			<view class="action">
				<uni-icons type="search" size="26" @click="intoSearch"></uni-icons>
				<uni-icons type="plusempty" size="26" @click="intoAddFriend"></uni-icons>
			</view>
		</view>
		<view class="chat_list">
			<view class="chat" v-for="chat in 10" :key="chat" @click="intoMessage(chat)">
				<img class="avatar"
					src="https://ts2.cn.mm.bing.net/th?id=ORMS.3eb85da3993ccf02c1d5f09582891300&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.25&p=0"
					alt="" />
				<view class="chat_content">
					<text class="username">username</text>
					<text class="msg">hello world!</text>
				</view>
				<view class="status">
					<text class="time">09.30</text>
					<view class="msg_num">1</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	const intoSearch = () => {
		uni.navigateTo({
			url: '/pages/search/search'
		})
	}
	const intoAddFriend = () => {

	}
	const intoMessage = (chat) => {
		uni.navigateTo({
			url:'/pages/message/message'
		})
	}
</script>

<style lang="scss" scoped>
	.container {
		padding: 10rpx 32rpx 0 32rpx;

		.app_bar {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.avatar {
				width: 70rpx;
				height: 70rpx;
				border-radius: 8px;
				flex: 1;
			}

			.title {
				flex: 6;
				display: flex;
				justify-content: center;

				.title_img {
					width: 88rpx;
					height: 42rpx;
				}
			}

			.action {
				flex: 2;
				display: flex;
				justify-content: space-evenly;
			}
		}

		.chat_list {

			.chat {
				display: flex;
				justify-content: space-between;
				margin-top: 30rpx;

				.avatar {
					width: 96rpx;
					height: 96rpx;
					border-radius: 24rpx;
					flex: 1;
				}

				.chat_content {
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					flex: 4;
					margin-left: 32rpx;

					.username {
						font-size: 36rpx;
						color: #272832;
					}

					.msg {
						font-size: 28rpx;
						color: rgba(39, 40, 50, 0.60);
					}
				}

				.status {
					flex: 1;
					font-size: 28rpx;
					color: rgba(39, 40, 50, 0.60);
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					.msg_num {
						width: 60rpx;
						color: #fdfdfd;
						text-align: center;
						background-color: #cccccc;
						border: 2rpx solid;
						border-radius: 20rpx;
					}
				}
			}
		}
	}
</style>