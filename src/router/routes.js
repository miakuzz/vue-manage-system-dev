// import Vue from 'vue'
// import Router from 'vue-router'


import Home from '../components/common/Home.vue'
import Login from '../components/page/Login.vue'
import ReadMe from '../components/page/ReadMe.vue'
import File from '../components/page/File.vue'


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
  { path: '/login', component: Login, name: 'login'},
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/',
        component: ReadMe
      },
      {
        path: '/tools/file',
        component: File
     }
    ]
  }

]
export default routes
