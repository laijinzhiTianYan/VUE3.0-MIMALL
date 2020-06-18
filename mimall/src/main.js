import Vue from "vue";
import router from "./router";
import store from "./store";//默认读取当前文件夹下的index.js文件
import axios from "axios";
// 虽然引入了axios但是以后只要用，那每个组件都要再引一下，所以要借助vue-axios
import VueAxios from "vue-axios";
import VueLazyload from "vue-lazyload"; // 用于实现图片懒加载
import VueCookie from "vue-cookie";//使用vue-cookie
// 插件在上，组件在下，养成好习惯
import App from "./App.vue";
// import env from "./env";
// mock开关
const mock = false;
if (mock) {
  // import是预编译加载，在编译的时候加载好了，而require是按序运行到，才加载
  require("./mock/api");
}
// 根据前端的跨域方式做调整,比如下面的原始链接怎么到指定链接
// 就是统一一个baseURL，这个值要根据跨域的方式做调整
// 例如  /a/b : /api/a/b =>  /a/b
// 最后请求成功后，可以发现，实际的链接前面带着这个/api的，是前端自己设置，方便前端自己拦截和管理
axios.defaults.baseURL = "/api";
// 超时要设置好，对用户体验好一些
axios.defaults.timeout = 8000;
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;
// interceptors是axios对请求request和响应response的值做拦截处理的机制
// 在这里只做针对错误响应的一个拦截，
// 对请求的拦截更多是用在后台管理系统中，对请求进行筛选和处理
axios.interceptors.response.use(function (response) {
  let res = response.data;
  // 这里头的status都是要和后端商量好的，哪个码代表成功
  // 哪个码代表失败，哪个代表有货，哪个代表缺货，都是按需更改的
  // 非登录状态也是可以访问首页的，但是不能访问一些加密区，判断一下路径
  // hash路径就是带#的，例如"#/index"
  let path = location.hash;
  if (res.status === 0) {
    return res.data;
  } else if (res.status === 10) {
    if(path !== "#/index"){//只要是非首页，都要跳转到注册页面
      window.location.href = "/#/login";
    }
    
  } else {//注意这里筛选的情况太少了，如果其他页面有不同的status码那么就会出现错误，比如登陆注册那有status为1的码
    alert(res.msg);
    return Promise.reject(res);//这里就会自动拦截到错误并报错，不会执行其他的步骤
  }
});
// productionTip是生产环境的提示
Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(VueCookie);
Vue.use(VueLazyload, {
  error: '/imgs/loading-svg/loading-balls.svg',
  loading: '/imgs/loading-svg/loading-bubbles.svg' //loading加载svg动画
}); //用懒加载一定要注意带变量的和不带变量的两种链接的写法，如果是字符串一定要用"‘’"这种结构引入图片，不然报错

new Vue({
  // 注意这里key和值相同可以缩写不然比如上面引入是用的routers那么这里用router：routers
  router,
  store,
  render: h => h(App)
}).$mount("#app");