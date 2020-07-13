/*
 * @Author       : your name
 * @Date         : 2020-06-30 15:27:57
 * @LastEditTime : 2020-07-13 14:27:00
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \vd\src\config\d3.js
 */ 
import eList from '@/config/echart.js'
export default [
    {
        path: '/echart',
        redirect: '/echart/e1',
        component: () => import(/* webpackChunkName: 'd3page' */ '@/views/About'),
        children: eList.map(item => {
            return {
                path: item.path,
                name: item.path,
                component: () => import(/* webpackChunkName: 'd3page' */ `@/views/echart/${item.path}`)
            }
        })
    },
]