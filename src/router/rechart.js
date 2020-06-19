export default[
    {
        path: '/echart',
        redirect: '/echart/e1',
        component: () => import(/* webpackChunkName: 'echart' */ '@/views/About'),
        children: [
            {
                path: 'e1',
                name: 'echart',
                component: () => import(/* webpackChunkName: 'echart' */ '@/views/echart/e1')
            },
            {
                path: 'e2',
                name: 'echart',
                component: () => import(/* webpackChunkName: 'echart' */ '@/views/echart/e2')
            },
            {
                path: 'e3',
                name: 'echart',
                component: () => import(/* webpackChunkName: 'echart' */ '@/views/echart/e3')
            },
            {
                path: 'e4',
                name: 'echart',
                component: () => import(/* webpackChunkName: 'echart' */ '@/views/echart/e4')
            },
            {
                path: 'e5',
                name: 'echart',
                component: () => import(/* webpackChunkName: 'echart' */ '@/views/echart/e5')
            },
        ]
    },
]