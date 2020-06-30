/*
 * @Author       : your name
 * @Date         : 2020-04-10 15:26:24
 * @LastEditTime : 2020-06-30 15:31:52
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \vd\src\router\rd3.js
 */ 
import dList from '@/config/d3.js'
export default[
    {
        path: '/d3',
        redirect: '/d3/d1',
        component: () => import(/* webpackChunkName: 'd3page' */ '@/views/About'),
        children: dList.map(item => {
            return {
                path: item.path,
                name: item.path,
                component: () => import(/* webpackChunkName: 'd3page' */ `@/views/d3/${item.path}`)
            }
        })
    },
]