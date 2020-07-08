/*
 * @Author       : your name
 * @Date         : 2020-04-10 15:26:12
 * @LastEditTime : 2020-07-06 10:57:52
 * @LastEditors  : your name
 * @Description  : In User Settings Edit
 * @FilePath     : \vd\src\router\rechart.js
 */ 
export default[
    {
        path: '/echart',
        redirect: '/echart/e1',
        component: () => import(/* webpackChunkName: 'echart' */ '@/views/About'),
        children: [
            {
                path: 'e1',
                name: 'echart1',
                component: () => import(/* webpackChunkName: 'echart' */ '@/views/echart/e1')
            },
            {
                path: 'e2',
                name: 'echart2',
                component: () => import(/* webpackChunkName: 'echart' */ '@/views/echart/e2')
            },
            {
                path: 'e3',
                name: 'echart3',
                component: () => import(/* webpackChunkName: 'echart' */ '@/views/echart/e3')
            },
            {
                path: 'e4',
                name: 'echart4',
                component: () => import(/* webpackChunkName: 'echart' */ '@/views/echart/e4')
            },
            {
                path: 'e5',
                name: 'echart5',
                component: () => import(/* webpackChunkName: 'echart' */ '@/views/echart/e5')
            },
        ]
    },
]