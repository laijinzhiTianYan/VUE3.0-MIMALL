<template>
  <div>
    这是index.vue的视图层
    <service-bar></service-bar>
  </div>
  
</template>

<script>
import ServiceBar from "../components/ServiceBar";
export default {
  name: "index",
  components: {
    ServiceBar
  }
};
</script>
