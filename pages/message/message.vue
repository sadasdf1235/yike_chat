<template>
	<view class="container">
		<view class="app_bar">
			<uni-icons class="back_icon" type="left" size="30"></uni-icons>
			<text class="name">name</text>
			<img class="avatar"
				src="https://ts1.cn.mm.bing.net/th?id=ORMS.b248d1cd032fb240f0b6ecefb77fc3d1&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.25&p=0"
				alt="" />
		</view>
		<view class="msg_list">
			<view class="time">11月14日 14:23</view>
			<view class="msg_send">
				<img class="avatar"
					src="https://ts1.cn.mm.bing.net/th?id=ORMS.b248d1cd032fb240f0b6ecefb77fc3d1&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.25&p=0"
					alt="" />
				<text class="content">
					开发的，啥可大可久多久的开发
					上课地方，是的开发绿色健康。
					上课地方叫来，都看见。
				</text>
			</view>
			<view class="msg_accept">
				<img class="avatar"
					src="https://ts1.cn.mm.bing.net/th?id=ORMS.b248d1cd032fb240f0b6ecefb77fc3d1&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.25&p=0"
					alt="" />
				<text class="content">
					开发的，啥可大可久多久的开发
					上课地方，是的开发绿色健康。
					上课地方叫来，都看见。
				</text>
			</view>
		</view>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
	.container {
		.app_bar {
			display: flex;
			padding: 0 32rpx;

			.back_icon {
				flex: 1;
			}

			.name {
				font-size: 20px;
				color: #272832;
				font-weight: 400;
				flex: 8;
				text-align: center;
			}

			.avatar {
				width: 68rpx;
				height: 68rpx;
				border-radius: 16rpx;
				flex: 1;
			}
		}

		.msg_list {
			padding: 0 32rpx;
			margin-top: 20rpx;
			
			.time {
				text-align: center;
				font-size: 24rpx;
				color: rgba(39,40,50,0.30);
			}

			.msg_send {
				display: flex;
				margin-top: 40rpx;

				.avatar {
					width: 80rpx;
					height: 80rpx;
					border-radius: 20rpx;
					margin-right: 20rpx;
				}

				.content {
					display: inline-block;
					max-width: 480rpx;
					min-height: 80rpx;
					padding: 16rpx 24rpx;
					background: #FFFFFF;
					border-radius: 0 20rpx 20rpx 20rpx;
					font-size: 32rpx;
					color: #272832;
				}
			}

			.msg_accept {
				@extend .msg_send;
				flex-direction: row-reverse;

				.avatar {
					margin-right: 0;
					margin-left: 20rpx;
				}

				.content {
					background: #FFE431;
					border-radius: 20rpx 0 20rpx 20rpx;
				}
			}
		}
	}
</style>