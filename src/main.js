import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import './style/index.css' // 去除浏览器默认样式css文件
import './style/clear.css' // 清除浏览器默认边距
import axios from 'axios'
Vue.config.productionTip = false
Vue.prototype.$axios = axios // 让所有的vue实例都可以使用axios
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0' // 请求基地址
Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
