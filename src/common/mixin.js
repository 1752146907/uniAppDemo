import reqwest from 'reqwest'; 
import application from './application';

export default {
    data() {
        return {
            // host: application.host,
            // imageHost: application.imageHost
        }
    },
    components: {
		
    },
    created() {

    },
    methods: {
        request(config) { 
            config.method = config.method ? config.method : 'POST'
            // config.data.timestamp = Math.round(new Date().getTime() / 1000);

            if (!config.url.startsWith('http')) {
                config.url = application.host + config.url;
            }

            reqwest({
                url: config.url,
                type: 'json',
                method: config.method,
                crossOrigin: true,
                headers: {
                    // 'Content-Type': 'application/json',
                    'Accept': 'application/vnd.website.v1+json',
                    "Authorization": this.$storage.getToken()
                },
                // data: JSON.stringify(config.data),
                data: config.data,
                success: (response) => {
                    config.success(response);
                },
                error: (response) => {  
                    config.error(response);
                },
                complete: (response) => { 
                    config.complete();
                }
            });
        },   
        // 返回上一页
        handleBack: function () {
            this.$router.back(-1);
        },
        // 验证手机
        handleChackPnone: function (phone) {
            var myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
            if (!myreg.test(phone)) {
                return false;
            } else {
                return true;
            }
        }
    }
}
