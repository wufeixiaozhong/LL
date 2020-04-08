import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import './style/index.css' 去除浏览器默认样式css文件
import './style/clear.css' // 清除浏览器默认边距
import 'nprogress/nprogress.css'
import axios from 'axios' // 引入进度条样式
import JsonBig from 'json-bigint'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0' // 请求基地址
axios.defaults.transformResponse = [function (data) {
  // 在这里操作请求响应数据
  return JsonBig.parse(data)
}]
require('promise.prototype.finally').shim()
Vue.config.productionTip = false
Vue.prototype.$axios = axios // 让所有的vue实例都可以使用axios
Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
