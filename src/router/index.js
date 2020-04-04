import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout'
import Login from '../views/login'
import Home from '@/views/home'
import Article from '@/views/article'
import Publish from '@/views/publish'
import Comment from '@/views/comment'
import Material from '@/views/material'
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

export default router
