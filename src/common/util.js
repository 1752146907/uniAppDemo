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

exports.timeToYMD = timeToYMD;
exports.handleBack = handleBack;
exports.handleChackPnone = handleChackPnone;
