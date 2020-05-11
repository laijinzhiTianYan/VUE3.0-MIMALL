<template>
  <div id="app">
    <router-view></router-view>
    这是app.vue的视图层
  </div>
</template>

<script>
// import storage from "./storage";
export default {
  data() {
    return {
      res: {}
    };
  },
  mounted() {
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
  }
};
</script>

<style lang="scss">
@import "./assets/scss/reset.scss";
</style>
