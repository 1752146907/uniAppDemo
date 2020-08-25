<template>
	<view class="content">
		<!-- 这里是状态栏 -->
		<view class="status_bar"></view> 
		购 物 车
	</view>
</template>

<script>
	import mixins from '../../common/mixin';
	import util from '../../common/util';

	export default {
        mixins: [mixins],
		data() {
			return { 
				pageData: {}
			}
		},
		onLoad() {
			this.handleLoad();
		},
		methods: {
			handleLoad: function() {
				this.request({
					url: 'api/page',
					method: 'GET',
					data: {

					},
					success: (response) => {
						this.pageData = response;
					},
					fail: (response) => {

					},
					complete: () => {

					}
				});
			} 
		}
	}
</script>

<style scoped> 
	.content {
		text-align: center;
		height: 400upx;
	} 
</style>
