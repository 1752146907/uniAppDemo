<template>
	<view class="content"> 
		<view class="content-title">
			新闻列表
		</view>
		{{news}}
	</view>
</template>

<script>
	import mixins from '../../common/mixin';
	import util from '../../common/util';

	export default {
        mixins: [mixins],
		data() {
			return {
				news : []
			}
		},
		onLoad:function(){
			this.handleLoad()
		},
		methods: {
			handleLoad: function() {
				uni.showLoading({
					title:"加载中...."
				})
				this.request({
					url: 'api/news',
					method: 'GET',
					data: {},
					success: (response) => {
					this.news = response.data;
					},
					fail: (response) => {

					},
					complete: () => {
						uni.hideLoading();
					}
				});
			},
			openinfo(e) {
				var newsid = e.currentTarget.dataset.newsid;
				uni.navigateTo({
					url: '../info/info?newsid='+newsid
				});
			}

		}
	}
</script>

<style scoped> 
	.content-title{
		line-height: 40px;
		text-align: center;
	}
	
	/* 列表 */
	
	.uni-list {
		background-color: #FFFFFF;
		position: relative;
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	
	.uni-list:after {
		position: absolute;
		z-index: 10;
		right: 0;
		bottom: 0;
		left: 0;
		height: 1upx;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}
	
	.uni-list:before {
		position: absolute;
		z-index: 10;
		right: 0;
		top: 0;
		left: 0;
		height: 1upx;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}
	
	.uni-list-cell {
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	
	.uni-list-cell-hover {
		background-color: #eee;
	}
	
	.uni-list-cell-pd {
		padding: 22upx 30upx;
	}
	
	.uni-list-cell-left {
		padding: 0 30upx;
	}
	
	.uni-list-cell-db,
	.uni-list-cell-right {
		flex: 1;
	}
	
	.uni-list-cell:after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 30upx;
		height: 1upx;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}
	
	.uni-list .uni-list-cell:last-child:after {
		height: 0upx;
	}
	
	.uni-list-cell-last.uni-list-cell:after {
		height: 0upx;
	}
	
	.uni-list-cell-divider {
		position: relative;
		display: flex;
		color: #999;
		background-color: #f7f7f7;
		padding: 10upx 20upx;
	}
	
	.uni-list-cell-divider:before {
		position: absolute;
		right: 0;
		top: 0;
		left: 0upx;
		height: 1upx;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}
	
	.uni-list-cell-divider:after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0upx;
		height: 1upx;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}
	
	.uni-list-cell-navigate {
		padding: 22upx 30upx;
		line-height: 48upx;
		position: relative;
		display: flex;
		box-sizing: border-box;
		width: 100%;
		flex: 1;
		justify-content: space-between;
		align-items: center;
	}
	
	.uni-list-cell-navigate {
		padding-right: 36upx;
	}
	
	.uni-navigate-badge {
		padding-right: 50upx;
	}
	
	.uni-list-cell-navigate.uni-navigate-right:after {
		font-family: uniicons;
		content: '\e583';
		position: absolute;
		right: 24upx;
		top: 50%;
		color: #bbb;
		-webkit-transform: translateY(-50%);
		transform: translateY(-50%);
	}
	
	.uni-list-cell-navigate.uni-navigate-bottom:after {
		font-family: uniicons;
		content: '\e581';
		position: absolute;
		right: 24upx;
		top: 50%;
		color: #bbb;
		-webkit-transform: translateY(-50%);
		transform: translateY(-50%);
	}
	
	.uni-list-cell-navigate.uni-navigate-bottom.uni-active:after {
		font-family: uniicons;
		content: '\e580';
		position: absolute;
		right: 24upx;
		top: 50%;
		color: #bbb;
		-webkit-transform: translateY(-50%);
		transform: translateY(-50%);
	}
	
	.uni-collapse.uni-list-cell {
		flex-direction: column;
	}
	
	.uni-list-cell-navigate.uni-active {
		background: #eee;
	}
	
	.uni-list.uni-collapse {
		box-sizing: border-box;
		height: 0;
		overflow: hidden;
	}
	
	.uni-collapse .uni-list-cell {
		padding-left: 36upx;
	}
	
	.uni-collapse .uni-list-cell:after {
		left: 52upx;
	}
	
	.uni-list.uni-active {
		height: auto;
	} 
	
	/* 图文列表 */
	
	.uni-media-list {
		padding: 22upx 30upx;
		box-sizing: border-box;
		display: flex;
		width: 100%;
		flex-direction: row;
	}
	
	.uni-navigate-right.uni-media-list {
		padding-right: 74upx;
	}
	
	.uni-pull-right {
		flex-direction: row-reverse;
	}
	
	.uni-pull-right>.uni-media-list-logo {
		margin-right: 0upx;
		margin-left: 20upx;
	}
	
	.uni-media-list-logo {
		height: 84upx;
		width: 84upx;
		margin-right: 20upx;
	}
	
	.uni-media-list-logo image {
		height: 100%;
		width: 100%;
	}
	
	.uni-media-list-body {
		height: 84upx;
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		overflow: hidden;
	}
	
	.uni-media-list-text-top {
		width: 100%;
		line-height: 36upx;
		font-size: 34upx;
		overflow : hidden;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-line-clamp: 1;
	    -webkit-box-orient: vertical;
	}
	
	.uni-media-list-text-bottom {
		width: 100%;
		line-height: 30upx;
		font-size: 28upx;
		color: #8f8f94;
	}
	
	
	
	 
</style>
