import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./action";
Vue.use(Vuex);

const state = {
  username: "", //登陆用户名
  cartCount: 0 //购物车的数量
}
export default new Vuex.Store({
  state,
  mutations,
  actions
  // modules也是在当前文件夹下设置一个文件然后引入
});

// 给vuex中保存数据的起点，比如登陆组件中，利用axios获取到后台数据时，
//利用dispatch分发到action中，触发相应的mutation，（有的事件可以直接调动mutation
//有的需要借助下action间接触发mutation
// 然后action分到mutation中，mutation控制state数据
// 在终点组件的date中，直接用$store.state.mz读取（如果读的比较多可以用快捷函数一次性结构出来）
//this.$storestore.dispatch('action', payload)