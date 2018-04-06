import router from './router/routes'
import { getToken } from '@/utils/auth'
import http from '../static/js/http'

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requireAuth)){
    let token = getToken()
    if(token){
      if(to.path === '/login'){
        next({ path: '/' })
      } else {
        // 这里获取用户信息
        let data = {}
        http.apiGet('admin/user/info', { token }).then((res) => {
          http.handleResponse(res, (data) => {
            next()
          }, () => {
            next({
              path: '/login',
              query: {redirect: to.fullPath}
            })
          })
        }).catch(() => {
          next({
            path: '/login',
            query: {redirect: to.fullPath}
          })
        })
      }
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})
