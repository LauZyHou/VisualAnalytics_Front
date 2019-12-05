// 系统库
import Vue from 'vue'
import Router from 'vue-router'

// 三方库
// import cookie from '../static/js/cookie'
// import store from '../store/store'

// 组件
import home from '../views/home'

Vue.use(Router)

let router = new Router({
  routes: [
    {// Home页
      path: '/',
      name: 'home',
      component: home,
      children: [],
      meta: {
        title: '可视分析-主页'
      }
    }
  ]
})

// 进行路由判断，'/'直接跳到Home页
/*
router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    console.log('noo')
    next({
      path: 'home'
    })
  }
})
*/

// 修改网页标题
router.afterEach((to, from, next) => {
  document.title = to.matched[to.matched.length - 1].meta.title
})

// 抛出路由
export default router
