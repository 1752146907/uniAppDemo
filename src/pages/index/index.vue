<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">121:{{nickName}}</text>
			<button open-type="getUserInfo" lang="zh_CN" @getuserinfo="onGotUserInfo" @click="onGotUser">设置</button>
		</view>
	</view>
</template>

<script>
    // import mixins from '../../common/mixin';
	
	export default {
        // mixins: [mixins],
		data() {
			return {
				title: 'Hello',
				nickName: ''
			}
		},
		onLoad() { 
		},
		methods: {
			
			onGotUserInfo: function(e) { 
				//#ifdef MP-WEIXIN 
					if (e.detail.errMsg !== 'getUserInfo:ok') {
						console.log(e) 
						return false;
					}		
					else { 
						console.log(e.detail.rawData) 
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
