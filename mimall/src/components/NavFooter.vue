<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="MILogo" />
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <!-- 使用a标签即可 -->
      <!-- 竖线用伪元素加也可以，直接用span加也可以，单数效果不如 -->
      <a href="https://www.mi.com/index.html" target="_blank">小米商城</a>
      <a href="https://home.miui.com/" target="_blank">MIUI</a>
      <a href="https://home.mi.com/index.html" target="_blank">米家</a>
      <a href="http://www.miliao.com/" target="_blank">米聊</a>
    </div>
    <div class="copyright">
      Copyright © 2019 <span>mi.futurefe.com </span>All Rights Reserved
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-footer"
};
</script>
// style上设置scope的原因及影响https://www.jianshu.com/p/b92e2a022cd8
<style lang="scss" scoped>
@import "../assets/scss/config.scss";
@import "../assets/scss/mixin.scss";
.footer {
  position: relative;
  background-color: $colorB;
  color: $colorD;
  border-top: 4px solid #f60;
  height: 234px;
  line-height: 16px;
  font-size: 16px;
  // text-align属性对图片也有效，即父元素设置了，对子元素起作用
  // 也可以用flex布局来做，但代码会臃肿
  text-align: center;

  .footer-logo {
    img {
      margin-top: 46px;
      margin-bottom: 13px;
      width: 53px;
      height: 36px;
    }
  }
  .footer-link {
    margin-top: 31px;
    a {
      // a标签的字体颜色要单个做，因为它优先级比价高
      color: #999;
      display: inline-block;
      &::after {
        content: "丨";
      }
      &:last-child::after {
        display: none;
      }
    }
  }
  .copyright {
    margin-top: 14px;
    span {
      color: #f60;
    }
  }
}
</style>
