<template>
	<view class="content">
		<!-- 这里是状态栏 -->
		<view class="status_bar"></view> 
		<view>登 录</view>
		<image class="logo" src="/static/logo.png"></image>
		<view>  
			<button type="default" @click="handleCancel">取消</button> 
			<button open-type="getUserInfo" lang="zh_CN" @getuserinfo="handleLogin" @click="handleLogin">登录</button>
		</view>
	</view>
</template>

<script>
	import mixins from '../../common/mixin';
	import util from '../../common/util';

	export default {
        mixins: [mixins],
		data() {
			return {
				title: 'Hello',
				nickName: '',
				pageData: {}
			}
		},
		onLoad() { 
		},
		methods: {
			handleCancel: function() { 
				uni.navigateBack({
				    delta: 1
				});
			},
			handleLogin: function(e) {
				//#ifdef MP-WEIXIN
					uni.showLoading({
						title: '加载中'
					});
					if (e.detail.errMsg !== 'getUserInfo:ok') {
						uni.hideLoading(); 
					}
					else {
						// 微信小程序 获取到用户信息
						uni.login({
							provider: 'weixin',
							success: (loginRes) => { 
							// 获取用户信息
							uni.getUserInfo({
								provider: 'weixin',
								success: (infoRes) => {
									// 回调 获取信息成功
									uni.$emit("login-callback", { success: true }); 
									uni.setStorage({
										key: 'storage_token',
										data: infoRes.cloudID,
										success: function () {
											console.log('token存储成功！');
										}
									});
									
									this.handleCancel();
								},
								fail: (response) => {
									// 回调 获取信息失败
									uni.$emit("login-callback", { success: false });
									
									this.handleCancel();
								},
								complete: () => {
									uni.hideLoading();
								}
							});
						  }
						}); 
					}
				//#endif
			}
		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
