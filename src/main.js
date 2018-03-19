// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import routes  from './router/routes'
import VueRouter from 'vue-router'
import store from './vuex/store'
import _g from '../static/js/global'
import axios from 'axios'
import Lockr from 'lockr'
import Cookies from 'js-cookie'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'    // 默认主题

axios.defaults.timeout = 1000 * 15
axios.defaults.headers.authKey = Lockr.get('authKey')
axios.defaults.headers.sessionId = Lockr.get('sessionId')
axios.defaults.headers['Content-Type'] = 'application/json'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes
})

Vue.use(ElementUI)
Vue.use(VueRouter)

window.router = router
window.store = store
window.axios = axios
window.Lockr = Lockr
window.Cookies = Cookies
window._g = _g

const bus = new Vue()
window.bus = bus

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
