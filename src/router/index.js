// 系统库
import Vue from 'vue'
import Router from 'vue-router'

// 三方库
// import cookie from '../static/js/cookie'
// import store from '../store/store'

// 组件
import head_ from '../views/head'
import foot from '../views/foot'

import home from '../views/home/main'
import overview from '../views/overview/main'
import type from '../views/type/main'
import person from '../views/person/main'

Vue.use(Router)

let router = new Router({
  routes: [
    {// Home
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
    {// 按类别
      path: '/type',
      name: 'type',
      components: {
        head: head_,
        content: type,
        foot: foot
      },
      children: [],
      meta: {
        title: '按类别'
      }
    },
    {// 人物关系
      path: '/person',
      name: 'person',
      components: {
        head: head_,
        content: person,
        foot: foot
      },
      children: [],
      meta: {
        title: '人物关系'
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
