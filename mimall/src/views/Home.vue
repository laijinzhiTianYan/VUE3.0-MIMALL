<template>
  <div>
    Home页面
    <nav-header></nav-header>
    <!-- router-view加载的就是index.vue里头的东西 -->
    <router-view></router-view>
    <!-- home页面是最根部的页面，基础页面
    因为有的页面没有使用servicebar组件，所以这里不能用这个
    把servicebar组件放到index中
    <service-bar></service-bar> -->
    <nav-footer></nav-footer>
    <!-- 以下这两种写法都是可以的
    <nav-footer></nav-footer>
    <NavFooter></NavFooter> -->
  </div>
</template>

<script>
import NavHeader from "../components/NavHeader";
import NavFooter from "../components/NavFooter";
export default {
  name: "nav-home",
  components: {
    NavHeader,
    NavFooter
  }
};
</script>
