module.exports = {
    devServer: {
        port: 8088, // 设置开发服务器端口为 8080
    },
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "@/components/material-uni/sx.scss";`
            }
        }
    }
}
