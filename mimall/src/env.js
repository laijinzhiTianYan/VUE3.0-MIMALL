let baseURL;
// 这个baseURL会根据运行环境来切换基本链接,
// 影响main.JS中的，axios.defaults.baseURL = env.baseURL;
// 配合package.json中的--mode= 识别并转换,注意case值一定和mode值吻合了
// 这种方式适合使用jsonp或者cors进行跨域的操作
// 对于使用代理的proxy，这种方式无效，
// 使用proxy时，实现同样的环境切换需要手动修改vue.config.js中的proxy链接
// 如target:'https://www.imooc.com',改为'https://test-www.imooc.com'这样子
switch (process.env.NODE_ENV) {
  case "development":
    baseURL = "http://dev-mall-pre.springboot.cn/api";
    console.log("development status");
    break;
  case "test":
    baseURL = "http://test-mall-pre.springboot.cn/api";
    console.log("test status");
    break;
  case "production":
    baseURL = "http://mall-pre.springboot.cn/api";
    console.log("production status");
    break;
  default:
    baseURL = "http://mall-pre.springboot.cn/api";
    console.log("default status");
    break;
}
export default{
    baseURL
}