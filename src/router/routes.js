import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/common/Home.vue'
import Login from '../components/page/Login.vue'
import ReadMe from '../components/page/ReadMe.vue'
import File from '../components/page/File.vue'
import Editor from '../components/blog/Editor.vue'
import Hash from '../components/hash/Hash.vue'

Vue.use(VueRouter)

export const routes = [
  { path: '/login', component: Login, name: 'login'},
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    component: Home,
    meta:{requireAuth:true},
    children: [
      {
        meta:{requireAuth:true},
        path: '/',
        component: ReadMe
      },
      {
        meta:{requireAuth:true},
        path: '/tools/file',
        component: File
      },
      {
        meta:{requireAuth:true},
        path: '/tools/hash',
        component: Hash
      },
      {
        meta:{requireAuth:true},
        path: '/blog/editor',
        component: Editor
      }
    ]
  }
]

export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes
})
