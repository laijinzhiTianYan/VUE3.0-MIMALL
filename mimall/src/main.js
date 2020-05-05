import Vue from "vue";
import router from "./router";
import store from "./store";
import axios from "axios";
// 虽然引入了axios但是以后只要用，那每个组件都要再引一下，所以要借助vue-axios
import VueAxios from "vue-axios";
// 插件在上，组件在下，养成好习惯
import App from "./App.vue";
// import env from "./env";
// mock开关
const mock = false;
if(mock){
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
axios.interceptors.response.use(function(response) {
  let res = response.data;
  // 这里头的status都是要和后端商量好的，哪个码代表成功
  // 哪个码代表失败，哪个代表有货，哪个代表缺货，都是按需更改的
  if (res.status === 0) {
    return res.data;
  } else if (res.status === 10) {
    window.location.href = "/#/";
  } else {
    alert(res.msg);
  }
});
// productionTip是生产环境的提示
Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
new Vue({
  // 注意这里key和值相同可以缩写不然比如上面引入是用的routers那么这里用router：routers
  router,
  store,
  render: h => h(App)
}).$mount("#app");
