<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">121:{{nickName}}</text>
			<button open-type="getUserInfo" lang="zh_CN" @getuserinfo="onGotUserInfo" @click="onGotUser">获取用户信息</button>
			{{pageData}}
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
			},
			onGotUserInfo: function(e) {
				//#ifdef MP-WEIXIN
					if (e.detail.errMsg !== 'getUserInfo:ok') {
						console.log(e)
						return false;
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
										this.nickName = infoRes.userInfo.nickName
										console.log('用户信息为：' + infoRes);
								  }
							});
						  }
						}); 
					}
				//#endif
			},
			onGotUser: function(e) {
					//#ifdef H5
						console.log(e)
					//#endif
			},

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
