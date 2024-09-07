<template>
	<tm-app>
		<tm-navbar title="name" :hideHome="true">
			<template #right>
				<img class="avatar"
					src="https://ts1.cn.mm.bing.net/th?id=ORMS.b248d1cd032fb240f0b6ecefb77fc3d1&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.25&p=0"
					alt="" />
			</template>
		</tm-navbar>
		<view class="mt-20 px-32 text-align-center">
			<view class="text-size-n">11月14日 14:23</view>
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
	</tm-app>
</template>

<script setup lang="ts">
	
</script>

<style lang="scss" scoped>
	.avatar {
		width: 68rpx;
		height: 68rpx;
		border-radius: 16rpx;
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
</style>