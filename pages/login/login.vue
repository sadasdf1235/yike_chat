<template>
	<tm-navbar title="">
		<template #left>
			<tm-icon size="42" color="error" name="close"></tm-icon>
		</template>
		<template #right>
			<text>注册</text>
		</template>
	</tm-navbar>

	<view class="px-30rpx text-center">
		<image class="w-100rpx h-43rpx" src="/static/images/火.png"></image>

		<view class="text-left">
			<text>登录</text>
			<text>您好，欢迎来到yike!</text>
			<tm-form model="form" :rules="rules">
				<tm-form-item name="username" :required="false">
					<tm-input color="transparent" showClear v-model="form.username">
					</tm-input>
				</tm-form-item>
				<tm-form-item name="password" :required="false">
					<tm-input password v-model="form.password" color="transparent"></tm-input>
				</tm-form-item>

				<view class="w-full justify-center">
					<button class="w-full h-48rpx bg-#FFE431 rd-24rpx" @click="onsubmit">登录</button>
				</view>
			</tm-form>
		</view>
	</view>
</template>

<script lang="ts" setup>
	import { rules } from '@/common/rules'
	const form = reactive({
		username: '',
		password: ''
	})
	const onsubmit = () => {

	}
</script>

<style lang="scss">

</style>