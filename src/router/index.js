// 系统库
import Vue from 'vue'
import Router from 'vue-router'

// 三方库
// import cookie from '../static/js/cookie'
// import store from '../store/store'

// 组件
import head_ from '../views/head'
import foot from '../views/foot'

import movie from '../views/movie/main'
import teleplay from '../views/teleplay/main'
import overview from '../views/overview/main'

Vue.use(Router)

let router = new Router({
  routes: [
    {// 电影页(Home页)
      path: '/',
      name: 'movie',
      components: {
        head: head_,
        content: movie,
        foot: foot
      },
      children: [],
      meta: {
        title: '电影'
      }
    },
    {// 总览页
      path: '/overview',
      name: 'overview',
      components: {
        head: head_,
        content: overview,
        foot: foot
      },
      meta: {
        title: '总览'
      }
    },
    {// 电视剧
      path: '/teleplay',
      name: 'teleplay',
      components: {
        head: head_,
        content: teleplay,
        foot: foot
      },
      children: [],
      meta: {
        title: '电视剧'
      }
    }
  ]
})

// 进行路由判断，'/'直接跳到
/*
router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    console.log('noo')
    next({
      path: '/teleplay'
    })
  }
})
*/

// 修改网页标题
router.afterEach((to, from, next) => {
  document.title = '可视分析-' + to.matched[to.matched.length - 1].meta.title
})

// 抛出路由
export default router
