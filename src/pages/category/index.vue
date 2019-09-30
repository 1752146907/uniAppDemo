<template>
	<view class="content">
		分类
		<view id="capture">
			<view style="padding: 10px; background: #f5da55"><h4 style="color: #000; " @click="toImage">Hello world!</h4></view>
			<view @click="handleLoad">下载</view>
			<image :src="url" alt="" />
			<view ref="canvasContain"></view>
		</view>
	</view>
</template>

<script>
import mixins from '../../common/mixin';
import util from '../../common/util';
import html2canvas from 'html2canvas';

export default {
	mixins: [mixins],
	data() {
		return {
			dataURL:0,
			pageData: {},
			url: ''
		};
	},
	onLoad() {
		
	},
	methods: {
		handleLoad: function() {
			let _this = this;
			html2canvas(document.getElementById('capture')).then(function(canvas) {
				// 打印临时URL
				_this.url = canvas.toDataURL("image/png");
				console.log(canvas.toDataURL("image/png"))
				uni.showToast({
				    title: '截图了',
				    duration: 2000
				});
			});
		}
	}
};
</script>

<style>
.content {
	text-align: center;
	height: 400upx;
}
</style>
