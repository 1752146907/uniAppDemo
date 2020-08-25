<template>
	<view class="user"> 
		<view class="hander">
			<img class="hander-avatar" src="https://wx.qlogo.cn/mmopen/vi_32/aUddbUB5jSEbfQ2ClpMxY9tnicKEYdHnIL4ZjdiaNEsTlmCnjaMGicsUPAfnSncbcqZTlQtYNNg9atWMMuQOuwaVg/132" alt="">
			Mr.Li
		</view>
		<view class="order-navbar">
			<view style="padding-left: 15px;" @click="handleOrder"> 
				<view class="order-navbar-headeres">
					<span>我的订单 </span>
					<view class="item-sub">
						查看所有订单
					</view> 
					<uniIcons type="uni-icon uni-icon-wrapper uni-icon-arrowright" color="rgb(187, 187, 187)" size="20"/>
				</view>
			</view>
			<view class="order-navbar-body">
				<view class="item">
					<img src="/static/logo.png" alt="">
					<text class="text">待支付</text>
				</view>
				<view class="item">
					<img src="/static/logo.png" alt="">
					<text class="text">待收货</text>
				</view>
				<view class="item">
					<img src="/static/logo.png" alt="">
					<text class="text">待评价</text>
				</view>
				<view class="item">
					<img src="/static/logo.png" alt="">
					<text class="text">退款/售后</text>
				</view>
			</view>
		</view>
		<view class="user-list"> 
			<view style="margin-top: 10px;">
				<uni-list> 
					<uni-list-item title="UTD积分"></uni-list-item> 
					<uni-list-item title="收货地址"></uni-list-item> 
				</uni-list>
			</view>
			<view style="margin-top: 10px;">
				<uni-list style="border-top: 10px solid #F6F6F6"> 
					<uni-list-item title="店主中心"></uni-list-item> 
					<uni-list-item title="邀请好友"></uni-list-item> 
				</uni-list>
			</view>
			<view style="margin-top: 10px;">
				<uni-list style="border-top: 10px solid #F6F6F6"> 
					<uni-list-item title="帮助中心"></uni-list-item> 
					<uni-list-item title="联系客服"></uni-list-item> 
				</uni-list>
			</view>
		</view>
	</view>
</template>

<script>
	import mixins from '../../common/mixin';
	import util from '../../common/util';
	 
	import {uniList,uniListItem,uniIcons} from "@dcloudio/uni-ui"

	export default {   
		components: {uniList,uniListItem,uniIcons}, 
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
			handleOrder: function() {
				// 判断是否已登录
				util.handleAuth({ 
				  success: () => {
					// 登录之后的逻辑
					console.log("登录成功了，你想干嘛呢")
				  }
				});
			},
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
	.user {
		height: 100vh;
		background: #F6F6F6;
	}
	.hander{
		height: 114px;
		display: flex;
		color: #ffffff;
		align-items: center;
		background: #F75148;
		padding-top: 40px;
	}
	.hander-avatar{
		width: 60px;
		height: 60px;
		border: 2px solid #ffffff;
		margin: 0px 10px 0px 24px;
		border-radius: 50%;
	} 
	.order-navbar{
		background: #ffffff;
	}
	.order-navbar-headeres{
		display: flex;
		align-items: center; 
		padding: 10px 15px 10px 0px;
		font-size: 16px;
		margin-bottom: 10px;
		border-bottom: 1px solid #dfdee0;
	}
	.order-navbar-headeres span{ 
	}
	.order-navbar-headeres .item-sub{ 
		flex: 1;
		font-size: 13px;
		color: rgb(187, 187, 187);
		text-align: right;
	}
	.order-navbar-body{
		display: flex;
		text-align: center;
		padding-bottom: 4px;
		border-bottom: 1px solid #dfdee0;
	}
	.order-navbar-body .item{
		flex: 1;
	}
	.order-navbar-body .item img{
		width: 44px;
		height: 44px;
		display: block;
		margin: 0 auto;
	}
	.order-navbar-body .item .text{
		font-size: 26rpx;
		color: #333;
		position: relative;
		top: -4px;
	}
</style>
