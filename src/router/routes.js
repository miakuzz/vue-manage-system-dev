// import Vue from 'vue'
// import Router from 'vue-router'


import Home from '../components/common/Home.vue'
import Test from '../components/common/test.vue'
import Login from '../components/page/Login.vue'
import ReadMe from '../components/page/ReadMe.vue'


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
    path: '/home',
    component: Home,
    name: 'home',
    children: [
      {
        path: '/readme',
        component: ReadMe
      }
    ]
  },
  {
    path: '/test',
    component: Test
  }
]
export default routes
