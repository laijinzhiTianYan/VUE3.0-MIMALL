import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  // 注意这里key和值相同可以缩写不然比如上面引入是用的routers那么这里用router：routers
  router,
  store,
  render: h => h(App)
}).$mount("#app");
