<template>
  <div class="service">
    <!-- 他的源码是这样子的，分开设置每个图标的格式和路径
      我的话全面拥抱flex布局 -->
    <!-- <ul>
          <li><span class="icon-setting"></span>预约维修服务</li>
          <li><span class="icon-7day"></span>7天无理由退货</li>
          <li><span class="icon-15day"></span>15天免费换货</li>
          <li><span class="icon-post"></span>满150元包邮</li>
      </ul> -->
    <div class="container">
      <div class="item">
        <img src="/imgs/icon-setting.png" alt="" />
        预约维修服务
      </div>
      <div class="item">
        <img src="/imgs/icon-7day.png" alt="" />
        7天无理由退货
      </div>
      <div class="item">
        <img src="/imgs/icon-15day.png" alt="" />
        15天免费换货
      </div>
      <div class="item">
        <img src="/imgs/icon-post.png" alt="" />
        满150元包邮
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "service-bar",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/base.scss";
@import "../assets/scss/mixin.scss";
.service {
  outline: 1px dashed #000;
  height: 84px;
  background-color: #fff;
  line-height: 16px;
  font-size: 16px;
  // 把container居中
  @include flex(center, center);
  .container {
    // outline: 1px dashed red;
    @include flex(center, center);
    .item {
      //  outline: 1px dashed blue;
      @include flex(center, center);
      flex-basis: 25%;
      position: relative;
      img {
        width: 20px;
        margin-right: 8px;
      }
      &::after {
        content: "";
        height: 34px;
        border-right: 1px solid #e5e5e5;
        position: absolute;
        right: 0;
        top: -9px;
      }
      &:last-child::after {
        display: none;
      }
    }
  }
}
</style>
