<template>
	<view class="container">
		<view class="info">
			<view class="frame">
				<img class="avatar"
					src="https://ts1.cn.mm.bing.net/th?id=ORMS.1609bfdfa8e0e176c762cea6fba55f21&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.25&p=0"
					alt="" />
				<img class="sex" src="" alt="" />
			</view>
			<view class="description">
				<text class="username">左左左表妹</text>
				<text class="nickname">昵称：很好搭档</text>
				<text class="signature">
					夜，结束了一天的喧嚣后安静下来，伴随着远处路灯那微弱的光。风，毫无预兆地席卷整片旷野，撩动人的思绪万千。
				</text>
			</view>
		</view>
		<button class="handle" @click="intoAddFriend">加为好友</button>
	</view>
</template>

<script setup lang="ts">
const intoAddFriend = () => {
	uni.navigateTo({
		url:'/pages/addFriend/addFriend'
	})
}
</script>

<style lang="scss" scoped>
	.container {
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: space-around;

		.info {
			display: flex;
			flex-direction: column;
			align-items: center;
			padding: 0 100rpx;

			.frame {
				width: 400rpx;
				height: 400rpx;
				border: 6rpx solid #FFFFFF;
				border-radius: 48rpx;

				.avatar {
					@extend .frame;
					border: none;
				}
			}
			.description {
				display: flex;
				flex-direction: column;
				justify-content: space-evenly;
				align-items: center;
				.username {
					font-size: 52rpx;
					color: #272832;
					margin-top: 20rpx;
				}
				.nickname {
					@extend .username;
					font-size: 28rpx;
				}
				.signature {
					@extend .nickname;
					line-height: 24px;
					font-weight: 200;
				}
			}
		}

		.handle {
			width: 684rpx;
			height: 80rpx;
			line-height: 80rpx;
			background: #FFE431;
			border-radius: 5px;
		}
	}
</style>