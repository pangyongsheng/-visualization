/*
 * @Author       : your name
 * @Date         : 2020-04-10 15:26:24
 * @LastEditTime : 2020-07-03 18:22:19
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \vd\src\router\rd3.js
 */ 
import dList from '@/config/webgl.js'
export default[
    {
        path: '/webgl',
        redirect: '/webgl/t1',
        component: () => import(/* webpackChunkName: 'd3page' */ '@/views/About'),
        children: dList.map(item => {
            return {
                path: item.path,
                name: item.path,
                component: () => import(/* webpackChunkName: 'd3page' */ `@/views/webgl/${item.path}`)
            }
        })
    },
]