<template>
	<tm-app>
		<tm-navbar title="name" :hideHome="true">
			<template #right>
				<img class="w-68 h-68 rd-16"
					src="https://ts1.cn.mm.bing.net/th?id=ORMS.b248d1cd032fb240f0b6ecefb77fc3d1&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.25&p=0"
					alt="" />
			</template>
		</tm-navbar>
		<view class="mt-20 px-32 text-align-center">
			<view class="text-size-n">11月14日 14:23</view>
			<view class="flex mt-40" :class="index % 2 == 0 ? ['flex-row-reverse']:''" v-for="(item,index) in 10">
				<img class="w-80 h-80 rd-20 mr-20" :class="index % 2 == 0?['mr-0 ml-20']:''"
					src="https://ts1.cn.mm.bing.net/th?id=ORMS.b248d1cd032fb240f0b6ecefb77fc3d1&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.25&p=0"
					alt="" />
				<text class="send_content d-inline-block max-w-480 min-h-80 py-16 px-24 fs-32 text-#272832"
					:class="index % 2 == 0?['bg-#FFE431','accept_content']:'bg-#fff'">
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
	// TODO
	.send_content {
		border-radius: 0 20rpx 20rpx 20rpx;
	}

	.accept_content {
		border-radius: 20rpx 0 20rpx 20rpx;
	}
</style>