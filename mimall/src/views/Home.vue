<template>
  <div>
    Home
    <nav-header></nav-header>
    <!-- router-view加载的就是index.vue里头的东西 -->
    <router-view></router-view>
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
