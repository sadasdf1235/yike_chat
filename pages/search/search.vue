<template>
	<view class="container">
		<view class="nav">
			<view class="status" :style="{height: status + 'rpx'}"></view>
			<view class="app_bar" :style="{height: navHeight + 'rpx'}">
				<input class="search" type="text" placeholder="ID/昵称/群" />
				<text class="cancel" @click="back">取消</text>
			</view>
		</view>
		<view class="search_list">
			<view class="search_item">
				<text class="title">用户</text>
				<view class="category" @click="intoDetail">
					<img class="avatar"
						src="https://ts2.cn.mm.bing.net/th?id=ORMS.136ee85a4781fba51b21ca943e849ab4&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.25&p=0"
						alt="" />
					<text class="name">adsada</text>
					<button class="handle_active" @click.stop="handleClick($event)">发消息</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		useSystemInfo
	} from '@/hooks/useSystemInfo';
	const {
		status,
		navHeight
	} = useSystemInfo();
	const back = () => {
		uni.navigateBack();
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
	.container {
		.nav {
			.app_bar {
				// height: 60rpx;
				padding: 0 32rpx;
				display: flex;
				// justify-content: space-around;
				align-items: center;
			
				.search {
					border: 2rpx solid;
					background: #F3F4F6;
					border-radius: 10rpx;
					margin-right: 20rpx;
				}
			
				.cancel {
					font-size: 28rpx;
					color: #272832;
				}
			}
		}

		.search_list {
			padding: 32rpx;

			.search_item {
				margin-top: 60rpx;

				.title {
					font-size: 44rpx;
					color: #272832;
					font-weight: 600;
				}

				.category {
					display: flex;
					align-items: center;
					margin-top: 20rpx;

					.avatar {
						width: 80rpx;
						height: 80rpx;
						border-radius: 20rpx;
						flex: 1;
					}

					.name {
						margin-left: 32rpx;
						font-size: 36rpx;
						color: #272832;
						line-height: 50rpx;
						font-weight: 400;
						flex: 5;
					}

					.handle {
						width: 120px;
						height: 48rpx;
						line-height: 48rpx;
						background: rgba(74, 170, 255, 0.10);
						border-radius: 24rpx;
						font-size: 24rpx;
						color: #4AAAFF;
						flex: 1;
					}

					.handle_active {
						@extend .handle;
						background: #FFE431;
						color: #272832;
						flex: 1;
					}
				}
			}
		}
	}
</style>