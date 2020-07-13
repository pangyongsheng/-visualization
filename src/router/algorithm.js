/*
 * @Author       : your name
 * @Date         : 2020-07-13 14:32:38
 * @LastEditTime : 2020-07-13 14:36:43
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \vd\src\router\algorithm.js
 */ 
import dList from '@/config/algorithm.js'
export default[
    {
        path: '/al',
        redirect: '/al/a1',
        component: () => import(/* webpackChunkName: 'al' */ '@/views/About'),
        children: dList.map(item => {
            return {
                path: item.path,
                name: item.path,
                component: () => import(/* webpackChunkName: 'al' */ `@/views/al/${item.path}`)
            }
        })
    },
]