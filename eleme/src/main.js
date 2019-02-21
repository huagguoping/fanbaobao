import Vue from 'vue'
import App from './App'
//导入全局样式
import './assets/css/reset.css' 
import './assets/css/index.css'
//导入插件
import VueAxios from 'vue-axios'
import Axios from 'axios'
Vue.use(VueAxios,Axios)
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
