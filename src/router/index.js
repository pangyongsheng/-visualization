/*
 * @Author       : your name
 * @Date         : 2020-04-09 11:33:59
 * @LastEditTime : 2020-06-18 15:50:01
 * @LastEditors  : your name
 * @Description  : In User Settings Edit
 * @FilePath     : \vd\src\router\index.js
 */ 
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import RouterEchart from './rechart'
import RouterD3 from './rd3'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/a',
    name: 'a',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  ...RouterEchart,
  ...RouterD3
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
