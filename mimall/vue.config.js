module.exports = {
    devServer:{
        host:'localhost',
        port:8080,
        // 设置了proxy就不用jsonp和cros跨域了，
        // 连带着main中的axios.default.baseURL也要更改
        proxy:{
            '/api':{
               //  真实的接口代理
              //  记得重设代理后要重新启动下项目
                target:'http://mall-pre.springboot.cn',
                changeOrigin:true,
                pathRewrite:{
                    '/api':''
                }
            }
        
    }
}