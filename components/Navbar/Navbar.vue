<template>
	<view class="container">
		<view class="status" :style="statusStyle"></view>
		<view class="nav" :style="navStyle">
			<view class="left">
				<slot name="left">
					<uni-icons v-if="showBack" type="left" :size="iconSize" @click="back"></uni-icons>
				</slot>
			</view>
			<view class="middle">
				<slot name="middle">
					<text>{{title}}</text>
				</slot>
			</view>
			<view class="right" :style="rightStyle">
				<slot name="right">

				</slot>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
	import {
		ref,
		computed
	} from 'vue';

	import {
		useSystemInfo
	} from '@/hooks/useSystemInfo';

	const props = defineProps({
		showBack: {
			type: Boolean,
			default: true
		},
		iconSize: {
			type: Number,
			default: 30
		},
		title: {
			type: String,
			default: '标题'
		}
	})

	const {
		status,
		navHeight,
		menuButtonInfo
	} = useSystemInfo();

	const statusStyle = computed(() => {
		return {
			height: status.value + 'rpx',
		}
	})

	const navStyle = computed(() => {
		return {
			height: navHeight.value + 'rpx',
		}
	})

	const rightStyle = computed(() => {
		const menuButtonWidth = menuButtonInfo.value?.width ? (menuButtonInfo.value?.width + 24) : 0;
		return {
			marginRight: menuButtonWidth * 2 + 'rpx'
		}
	})

	const back = () => {
		uni.navigateBack();
	}
</script>

<style lang="scss" scoped>
	.container {
		.nav {
			display: flex;
			align-items: center;
			padding: 0 24rpx;

			.left {}

			.middle {
				flex: 1;
				text-align: center;
			}

			.right {}
		}
	}
</style>