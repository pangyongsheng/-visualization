const path = require('path')

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

    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src'),
                images: '@/assets/images',
                components: '@/components',
                views: '@/views'
            }
        }
    },
}