// 系统库
import Vue from 'vue'
import Router from 'vue-router'

// 三方库
// import cookie from '../static/js/cookie'
// import store from '../store/store'

// 组件
import home from '../views/home'
import head_ from '../views/head'
import foot from '../views/foot'

Vue.use(Router)

let router = new Router({
  routes: [
    {// Home页
      path: '/',
      name: 'home',
      components: {
        head: head_,
        content: home,
        foot: foot
      },
      children: [],
      meta: {
        title: '主页'
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
  document.title = '可视分析' + to.matched[to.matched.length - 1].meta.title
})

// 抛出路由
export default router
