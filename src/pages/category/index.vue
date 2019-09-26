<template>
	<view class="content">
		分类
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

<style>
	.content {
		text-align: center;
		height: 400upx;
	} 
</style>
