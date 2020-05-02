module.exports = {
    devServer:{
        host:'localhost',
        port:8080,
        // 设置了proxy就不用jsonp和cros跨域了，
        // 连带着main中的axios.default.baseURL也要更改
        // proxy:{
        //     '/api':{
        //         target:'https://www.imooc.com',
        //         changeOrigin:true,
        //         pathRewrite:{
        //             '/api':''
        //         }
        //     }
        // }
    }
}