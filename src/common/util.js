 
var events = {};

// 时间装换
function timeToYMD(time) {
    var date = new Date(time);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    return y + '-' + m + '-' + d;
}

// 返回上一页
function handleBack () {
    this.$router.back(-1);
}

// 验证手机
function handleChackPnone(phone) {
    var myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
    if (!myreg.test(phone)) {
        return false;
    } else {
        return true;
    }
}

// 校验登录
function handleAuth(config) {
	uni.getStorage({
	    key: 'storage_token',
	    success: function (res) {
			config.success(); 
	    }, 
		fail: function (res) { 
			// 去登录
			uni.navigateTo({
			    url: '/pages/login/index'
			}); 
			// 监听回调 是否成功
			uni.$on("login-callback", function (data) {
				if (data.success && config.success) {
				  config.success();
				} else {
				  if (config.fail) {
					config.fail();
				  }
				}
				
				uni.$off('login-callback')
			}); 
		}
	})
}

exports.timeToYMD = timeToYMD;
exports.handleBack = handleBack;
exports.handleChackPnone = handleChackPnone;
exports.handleAuth = handleAuth;
