<template>
  <div>
    <oder-header></oder-header>
    cart
    <NavFooter></NavFooter>
  </div>
</template>

<script>
import OderHeader from "../components/OderHeader";
import NavFooter from "../components/NavFooter";
export default {
  name: "cart",
  components: {
    OderHeader,
    NavFooter
  }
};
</script>
