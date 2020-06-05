<template>
  <div class="modal" v-show="showModal">
    <!-- 这个v-show也可以放在其他组件中调取，但要用动画的话可能失效，所以放这里 -->
    <div class="mask">
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
          <a href="javascript:;" class="btn">确定</a>
          <a href="javascript:;" class="btn">取消</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",
  props: {
    //弹框类型：小small、中middle、大large、表单form
    modalType: {
      type: String,
      default: "form"
    },
    //弹框标题
    title: "String",
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
<style></style>
