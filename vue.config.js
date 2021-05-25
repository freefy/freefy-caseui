module.exports = {
    pages: {
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    // css: {
    //     extract: false   //强制使用内联样式，这样打包出的插件样式会内置在js中，不需要单独引入
    // },
    chainWebpack: config => {
        config.module
            .rule('js')
            .include.add('/packages')
            .end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                return options
            })
    }
}
// 首先修改入口文件地址为examples下的main.js,其次将packages加入打包编译任务中