<template>
	<view class="content">
		<!-- 这里是状态栏 -->
		<view class="status_bar"></view> 
		<view>分 类 </view>
		<button @click="handleSeverCavasToImage">保持cavas为图片</button>
		<canvas canvas-id="myCanvas" :style="'width:'+windowWidth+'px;height:'+windowHeight+'px'"/>
	</view>
</template>

<script>
import mixins from '../../common/mixin';
import util from '../../common/util'; 

export default {
	mixins: [mixins],
	data() {
		return {
			dataURL: 0,
			pageData: {},
			url: '',
			windowWidth: 278,
			windowHeight: 524
		};
	},
	onLoad() {},
	methods: {
		handleSeverCavasToImage: function () {
			uni.showLoading({
				title: '图片绘制中...',
			})
			var url = '../../static/goods_canvas04.png'
			 
			//开始绘制图片，这边主要就是canvas写法了，uniapp官方：https://uniapp.dcloud.io/api/ui/canvas?id=%E5%9C%A8canvas%E4%B8%8A%E7%94%BB%E5%9B%BE
			const context = uni.createCanvasContext('myCanvas')  
			context.drawImage(url,0, 0, this.windowWidth, this.windowHeight) 
			context.setFontSize(14)
			context.setFillStyle("#FEEDBB")
			context.fillText('李荣浩', 118, 60)
			
			//重点：这边本来保存图片是写在draw之后，但第一次保存时空白，第二次才生效，写在draw回调里面就OK了。
			context.draw(false,function(){
				uni.canvasToTempFilePath({
					canvasId:'myCanvas',
					success: function(res){
						uni.hideLoading()
						console.log(res.tempFilePath)
						
						//#ifdef H5
						let imageList = [];
						imageList.push(res.tempFilePath)
						uni.previewImage({
							urls: imageList,
						})
						//#endif
						
						//#ifdef MP-WEIXIN
							uni.saveImageToPhotosAlbum({
								filePath:res.tempFilePath,
								success : function(res){
									uni.showToast({title : '图片已保存'})
								}
							})
						//#endif
					}
				})
				
			}) 
		}
	}
};
</script>

<style scoped>
.content {
	text-align: center;
	height: 400upx;
}
</style>
