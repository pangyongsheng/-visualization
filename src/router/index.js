/*
 * @Author       : your name
 * @Date         : 2020-04-09 11:33:59
 * @LastEditTime : 2020-07-16 15:39:48
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \vd\src\router\index.js
 */ 
import Vue from 'vue'
import VueRouter from 'vue-router'

import RouterEchart from './rechart'
import RouterD3 from './rd3'
import RouterWebGL from './rwebgl'
import RouterAL from './algorithm'

Vue.use(VueRouter)

const routes = [
  ...RouterEchart,
  ...RouterD3,
  ...RouterWebGL,
  ...RouterAL
]

console.log(routes)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
