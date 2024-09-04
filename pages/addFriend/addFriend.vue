<template>
	<view class="container">
		<view class="card">
			<view class="content">
				<img class="avatar"
					src="https://ts1.cn.mm.bing.net/th?id=ORMS.da980e896836f2477a0f3333cff424a9&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.25&p=0"
					alt="头像" />
				<text class="username">左左左表妹</text>
				<textarea class="signature" placeholder="填写验证信息" v-model="signature" />
			</view>
			<view class="bottom_btn">
				<button class="cancel" @click="cancel">取消</button>
				<button class="send" @click="send">发送</button>
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
	.container {
		position: relative;
		height: 100vh;
		background: rgba(255, 228, 49, 0.60);

		.card {
			position: absolute;
			width: 100%;
			box-sizing: border-box;
			bottom: 0;
			left: 0;
			padding: 0 32rpx;
			margin-top: 200rpx;
			display: flex;
			flex-direction: column;
			// justify-content: space-around;
			background: #FFFFFF;
			border-radius: 40rpx 40rpx 0 0;

			.content {
				position: relative;
				display: flex;
				flex-direction: column;
				justify-content: start;

				.avatar {
					width: 240rpx;
					height: 240rpx;
					margin-left: 60rpx;
					transform: translateY(-50%);
					border: 6rpx solid #FFFFFF;
					box-shadow: 0 36rpx 40rpx 0 rgba(39, 40, 50, 0.1);
					border-radius: 50%;
				}

				.username {
					font-size: 52rpx;
					color: #272832;
					margin-top: -68rpx;
				}

				.signature {
					max-height: 720rpx;
					margin-top: 48rpx;
					padding: 18rpx 22rpx;
					background: #F3F4F6;
					border-radius: 20rpx;
				}
			}

			.bottom_btn {
				margin: 94rpx 0;
				display: flex;

				.cancel {
					flex: 1;
					border-radius: 10rpx;
					margin-right: 32rpx;
				}

				.send {
					flex: 3;
					background: #FFE431;
					border-radius: 10rpx;
				}
			}
		}
	}
</style>