<template>
  <transition name="slide">
    <div class="modal" v-show="showModal">
      <!-- 这个v-show也可以放在其他组件中调取，但要用动画的话可能失效，所以放这里 -->

      <div class="mask"></div>
      <!-- 注意这个遮罩层html结构和css，都要和内容并联放置，不然会影响 -->
      <!-- 弹框 -->
      <div class="modal-dialog">
        <div class="modal-dialog-header">
          <span>标题</span>
          <a href="javascript:;" class="icon-close"></a>
        </div>
        <div class="modal-dialog-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-dialog-footer">
          <!-- 对一个组件中css样式有两种方式实现，一种是在本组件中引入，另一种是挂载在全局App.vue中引入，比如这里的btn -->
          <div class="btn-grup">
            <a href="javascript:;" class="btn">确定</a>
            <a href="javascript:;" class="btn">取消</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "modal",
  props: {
    //其他模块使用组件时自动识别并判断类型
    //弹框类型：小small、中middle、大large、表单form
    modalType: {
      type: String,
      default: "form"
    },
    //弹框标题
    title: String, //注意类型可不是字符串，不要写成"String"
    //按钮类型，确定或者取消按钮，或者二者都有
    btnType: String,
    sureText: {
      type: String,
      default: "确定"
    },
    cancelText: {
      type: String,
      default: "取消"
    },
    //是否显示弹框，可以在本组件定义，也可以在其他组件中唤醒
    showModal: Boolean
  }
};
</script>
<style lang="scss">
//每个style都设置个lang
@import "../assets/scss/config.scss";
@import "../assets/scss/mixin.scss";
@import "../assets/scss/modal.scss";
</style>
