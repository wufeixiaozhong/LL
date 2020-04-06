import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout'
import Login from '../views/login'
import Home from '@/views/home'
import Article from '@/views/article'
import Publish from '@/views/publish'
import Comment from '@/views/comment'
import Material from '@/views/material'
import Nprogress from 'nprogress'
Vue.use(VueRouter)

const routes = [
  // 一级路由
  {
    path: '/',
    component: Layout,
    // 二级路由
    children: [
      {
        path: '', // 默认显示子路由
        component: Home
      },
      {
        path: '/article',
        component: Article
      },
      {
        path: '/publish',
        component: Publish
      },
      {
        path: '/comment',
        component: Comment
      },
      {
        path: '/material',
        component: Material
      }
    ]
  },
  // 一级路由
  {
    path: '/login',
    component: Login
  }

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

// 设置页面访问权限
// (路由前置守卫)
router.beforeEach((to, from, next) => {
  // 访问所有页面都要经过这里
  Nprogress.start() // 开启进度条
  if (to.path === '/login') {
    next()
    // 停止代码往下执行
    return
  }
  const token = window.localStorage.getItem('user-token')
  if (token) {
    next()
  } else {
    next('/login')
    // 如果在登录页的非登录状态访问其他页面需要手动关闭进度条
    Nprogress.done() // 关闭进度条
  }
})
// 路由后置守卫
router.afterEach((to, from) => {
  Nprogress.done() // 关闭进度条
})

export default router
