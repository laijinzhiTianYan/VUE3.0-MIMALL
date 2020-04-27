// 承载核心
<template>
  <div>
    <oder-header></oder-header>
    <router-view></router-view>
    <NavFooter></NavFooter>
  </div>
</template>

<script>
import OderHeader from "../components/OderHeader";
import NavFooter from "../components/NavFooter";
export default {
  name: "order",
  components: {
    OderHeader,
    NavFooter
  }
};
</script>
