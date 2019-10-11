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
			dataURL: 0,
			pageData: {},
			url: ''
		};
	},
	onLoad() {},
	methods: {
		 
	}
};
</script>

<style scoped>
.content {
	text-align: center;
	height: 400upx;
}
</style>
