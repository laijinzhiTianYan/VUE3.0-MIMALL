<template>
  <div class="service">
      <div class="container">
          <div class="item">
              <img src="/imgs/icon-setting.png" alt="">
              预约维修服务
          </div>
          <div class="item">
              <img src="/imgs/icon-7day.png" alt="">
              7天无理由退货
          </div>
          <div class="item">
              <img src="/imgs/icon-15day.png" alt="">
              15天免费换货
          </div>
          <div class="item">
              <img src="/imgs/icon-post.png" alt="">
              满150元包邮
          </div>

      </div>
  </div>
</template>

<script>
export default {
    name: "service-bar",
    data () {
        return {}
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/base.scss";
@import "../assets/scss/mixin.scss";
.service{
    height: 80px;
    background-color: #fff;
    line-height: 16px;
    font-size: 16px;
    .container{
        @include flex(space-around,center);
        margin-top: 32px;
        // text-align: center;
        .item{
            margin-top:32px;
            img{
                display: inline-block;
                width: 20px;
                xiugai
            }
        }
    }
}


</style>