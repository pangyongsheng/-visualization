/*
 * @Author       : your name
 * @Date         : 2020-04-21 17:10:50
 * @LastEditTime : 2020-07-22 16:56:55
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \vd\vue.config.js
 */ 
const path = require('path')


const isProduction = process.env.NODE_ENV === 'production';

const cdn = {
    css: [
        //"https://cdn.jsdelivr.net/npm/v-charts/lib/style.min.css"
    ],
    js: [
        "https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js",
        "https://cdn.jsdelivr.net/npm/vue-router@3.3.4/dist/vue-router.min.js",
        "https://cdn.jsdelivr.net/npm/vuex@3.5.1/dist/vuex.min.js",
        "https://cdn.jsdelivr.net/npm/d3@5.16.0/dist/d3.min.js",
        "https://cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js",
        //"https://cdn.jsdelivr.net/npm/v-charts/lib/index.min.js"
        // "https://cdn.jsdelivr.net/npm/three@0.118.3/build/three.min.js",
    ],
};


function resolve(dir) {
    path.join(__dirname, dir)
}

module.exports = {
    productionSourceMap: false,
    //publicPath: './',
    // devServer: {
    //     port: 3000,
    //     open: true,
    //     overlay: {
    //         warnings: false,
    //         errors: true
    //     },
    //     proxy: {
    //         '/': {
    //             //要访问的跨域的域名
    //             target: '/',
    //             changOrigin: true,
    //             //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样客户端端和服务端进行数据的交互就不会有跨域问题
    //             ws: false,
    //         }
    //     }
    // },
    configureWebpack: () =>({
        resolve: {
            alias: {
                '@': resolve('src'),
                images: '@/assets/images',
                components: '@/components',
                views: '@/views'
            }
        },
        externals: !isProduction 
            ? {} 
            : {
                'vue': 'Vue',
                'vue-router': 'VueRouter',
                'vuex' : 'Vuex',
                'd3': 'd3',
                'echarts': 'echarts',
                'VCharts': 'v-charts',
            }
    }),
    chainWebpack: config => {
        if (isProduction) {
            config.plugin('html')
            .tap(args => {
                args[0].cdn = cdn;
                return args;
            })
        }
    }

}