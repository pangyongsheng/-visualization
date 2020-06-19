/*
 * @Author       : your name
 * @Date         : 2020-04-10 15:26:24
 * @LastEditTime : 2020-06-18 15:56:07
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \vd\src\router\rd3.js
 */ 
export default[
    {
        path: '/d3',
        redirect: '/d3/d1',
        component: () => import(/* webpackChunkName: 'echart' */ '@/views/About'),
        children: [
            {
                path: 'd1',
                name: 'd1',
                component: () => import(/* webpackChunkName: 'echart' */ '@/views/d3/d1')
            },
            {
                path: 'd2',
                name: 'd2',
                component: () => import(/* webpackChunkName: 'echart' */ '@/views/d3/d2')
            },
            {
                path: 'd3',
                name: 'd3',
                component: () => import(/* webpackChunkName: 'echart' */ '@/views/d3/d3')
            },
            {
                path: 'd4',
                name: 'd4',
                component: () => import(/* webpackChunkName: 'echart' */ '@/views/d3/d4')
            },
            {
                path: 'd5',
                name: 'd5',
                component: () => import(/* webpackChunkName: 'echart' */ '@/views/d3/d5')
            },
            {
                path: 'd6',
                name: 'd6',
                component: () => import(/* webpackChunkName: 'echart' */ '@/views/d3/d6')
            },
            {
                path: 'd7',
                name: 'd7',
                component: () => import(/* webpackChunkName: 'echart' */ '@/views/d3/d7')
            },
            {
                path: 'd8',
                name: 'd8',
                component: () => import(/* webpackChunkName: 'echart' */ '@/views/d3/d8')
            },
            {
                path: 'd9',
                name: 'd9',
                component: () => import(/* webpackChunkName: 'echart' */ '@/views/d3/d9')
            },
        ]
    },
]