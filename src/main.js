import Vue from 'vue'
import App from './App'
import storage from './common/storage.js' 

import './uni.scss'

Vue.config.productionTip = false

Vue.prototype.$storage = storage;				// 本地存储

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
