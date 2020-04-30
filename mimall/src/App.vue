<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import storage from "./storage";
export default {
  data() {
    return {};
  },
  mounted() {
    // storage.setItem("a",1);  设置第一层级
    // storage.setItem('user',{'a':1});  这个是覆盖整体式输入值
    // storage.setItem("abc",{"a":2},"user");   这个针对某个模块输入值
    // storage.clear("a");  清除第一层级
    // storage.clear('a','user');  这个是清除某个模块中的值
    storage.setItem("a",1); 
  }
};
</script>

<style lang="scss"></style>
