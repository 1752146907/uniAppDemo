import Vue from 'vue'
import App from './App'
import storage from './common/storage.js' 
import Router from 'uni-simple-router'  
import pagesRouter from './pages.json'

Vue.config.productionTip = false

Vue.prototype.$storage = storage;				// 本地存储

Vue.use(Router)

const router = new Router({
	loading:false,
	routes: []
});

Router.beforeEach((to, from, next) => {
	// 一些逻辑
})

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
