// import Vue from 'vue'
// import Router from 'vue-router'

import Login from '../components/page/Login.vue'
import Home from '../components/common/Home.vue'
import Test from '../components/common/test.vue'



// Vue.use(Router)

// export default new Router({
//   mode: 'history',
//   routes: [
//     {
//       path: '/',
//       redirect: '/login'
//     },
//     {
//       path: '/login',
//       component: resolve => require(['../components/page/Login.vue'], resolve)
//     }
//   ]
// })
const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login, name: 'login'},
  {
    path: '/index',
    component: Home,
    name: 'home'
  },
  {
    path: '/test',
    component: Test
  }
]
export default routes
