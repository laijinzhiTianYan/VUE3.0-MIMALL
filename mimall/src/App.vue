<template>
  <div id="app">
    <router-view></router-view>
    这是app.vue的视图层
  </div>
</template>

<script>
// import storage from "./storage";
import { mapActions } from "vuex";//当方法变量过多时 ，可以用...mapActions语法糖来简写
// 其实就是省略了写很多this.$store.dispatch("方法",参数)
// 改为了上面简单的传参this.方法(参数) ，写n个
// 然后下面统一用...mapActions(["方法1","方法2"...])这样可以少些一些字
// 当然本质还是this.$store.dispatch("方法",参数)
export default {
  data() {
    return {
      res: {}
    };
  },
  mounted() {
    this.getUser();
    this.getCartCount();
    // 这里可以直接使用this调用axios的原因是，
    // 在main.js中利用了vue-axios把axios挂载到了全局vue对象上，
    // 不然的话每个利用axios的模块都要先引入才能使用
    // 注意mock时，路径中不能带public，即"../public/mock/...."
    // 因为public已经是顶级目录了就不要带了，带了反而会报错
    // 这种是加载本地mock静态文件的方式，
    // 文件设置在顶层public/mock/user中
    // 需要把main中的axios.defaults.baseURL 注释掉
    //  this.axios.get("/mock/user/login.json").then((res) => {
    //    this.res = res;
    //  });
    //这种是通过easy-mock平台实现mock
    // 需要把main中的axios.defaults.baseURL换成easy-mock中生成的Base-URL
    // 也要注释掉env模块
    // this.axios.get("/mock").then((res) => {
    // this.res = res;
    // });
    // 这种是利用mockjs拦截请求实现mock模拟的方式
    // 不需要任何更改，只需打开main中的mock开关即可
    // 文件设置在src下的mock文件夹中
    // 这种mock方式是读取不到xhr请求的，因为它的本质就是拦截ajax请求，代入模拟的数据
    // this.axios.get("/user/login").then((res) => {
    // this.res = res;
    // console.log(res);
    // });
    // storage的使用
    // storage.setItem("a",1);  设置第一层级
    // storage.setItem('user',{'a':1});  这个是覆盖整体式输入值
    // storage.setItem("abc",{"a":2},"user");   这个针对某个模块输入值
    // storage.clear("a");  清除第一层级
    // storage.clear('a','user');  这个是清除某个模块中的值
  },
  methods: {
    getUser(){
      //这里再像后台请求，就是为了考虑刷新刷新以后页面数据的连贯性
      this.axios.get("/user").then((res)=>{
        //这里也要用vuex来存一下状态，不然navheader组件第一次加载成功
        // 后续一刷新就又没了
        // 即便到这一步，刷新了仍然也会跳出登陆状态，因为axios拿数据有延迟，
        // 终端组件使用的时候也会达不到预期，因此需要在终端组件中使用computed
        // 此外如果不用...mapActions，这里就是写法1：
        // this.$store.dispatch('saveUserName', res.username)
        // 使用的话，写法2：
        this.saveUserName(res.username);
      })
    },
    ...mapActions(["saveUserName"]),
    getCartCount(){
      this.axios.get("/carts/products/sum").then((res)=>{
        // 这个请求拉回的是单个的数，network中对应的是sum项
        this.$store.dispatch('saveCartCount', res)
      })
    }
  }
};
</script>

<style lang="scss">
//如果没有lang="scss"这个可能识别不了文件导致报错,这里放的是全局样式
@import "./assets/scss/reset.scss";
@import "./assets/scss/base.scss";
@import "./assets/scss/config.scss";
@import "./assets/scss/mixin.scss"; //一定要注意这个顺序，如果后面的module用了前面的东西，一定要放好前后位置，不然报错
@import "./assets/scss/button.scss"; //这个文件里需要一些变量因此一定要引入config.scss不然报错，无法编译
@import "./assets/scss/modal.scss";
</style>
