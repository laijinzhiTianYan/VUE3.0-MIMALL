<template>
  <div>
    这是index.vue的视图层
    <!-- 这里就是首页的全部内容 -->
    <div class="index">

      <div class="container">

        <!-- 轮播区 -->
        <div class="swiper-box">

          <!-- 左侧菜单区 -->
          <div class="nav-menu">
            <ul class="menu-wrap">
              <li class="menu-item">
                <a href="javascript:">手机 电话卡</a>
                <div class="children"></div>
              </li>
              <li class="menu-item">
                <a href="javascript:">电视 盒子</a>
                <div class="children"></div>
              </li>
              <li class="menu-item">
                <a href="javascript:">笔记本 显示器 平板</a>
                <div class="children"></div>
              </li>
              <li class="menu-item">
                <a href="javascript:">家电 插线板</a>
                <div class="children"></div>
              </li>
              <li class="menu-item">
                <a href="javascript:">出行 穿戴</a>
                <div class="children"></div>
              </li>
              <li class="menu-item">
                <a href="javascript:">电源 配件</a>
                <div class="children"></div>
              </li>
              <li class="menu-item">
                <a href="javascript:">耳机 音箱</a>
                <div class="children"></div>
              </li>
              <li class="menu-item">
                <a href="javascript:">生活 箱包</a>
                <div class="children"></div>
              </li>
            </ul>
          </div>

          <!-- 轮播图片区 -->
          <swiper  ref = "indexSwiper" :options="swiperOptions">
            <swiper-slide  v-for = "(item, index) in slideList" :key="index">
              <!-- 一定要注意用到指令的话，href里一定要用‘’括起来 -->
              <a :href="'/#/product/'+item.id"><img :src = "item.img" alt = "'picture'+item.id"></a>
            </swiper-slide>
            <!-- 这块应该就是控制器吧，试一下 -->
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev"></div><!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
            <div class="swiper-button-next"></div><!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
          </swiper>
        </div>


        <!-- 广告区 -->
        <div class="ads-box"></div>


        <!-- 大的banner -->
        <div class="banner"></div>


        <!-- 产品缩略区 -->
        <div class="product-box"></div>

      </div>
    </div>
    <service-bar></service-bar>
  </div>
  
</template>

<script>
// 可以在全局引入全部的swiper ，但在组件中按需使用模块化的组件性能最佳
// import VueAwesomeSwiper from "vue-awesome-swiper";
// 注意一定要引入swiper的css，不然会失效
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import ServiceBar from "../components/ServiceBar";
export default {
  name: "index",
  components: {
    Swiper,
    SwiperSlide,
    ServiceBar
  },
  directives: {
    swiper: directive
  },
  data () {
    return {
      swiperOptions:{
        // 自动播放
        autoplay: {
          delay: 2500,//1秒切换一次
        },
        // 开启loop
        // Swiper Animate不适用于loop模式
        loop: true,
        // 开启淡入淡出
        effect : 'fade',
        pagination:{
          el:".swiper-pagination",
          // 加了这个出现图片下面的点导航
          clickable: true,
          // 多余小点动态隐藏
          // dynamicBullets: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      },
      // 其实slideList的数据应该从后端接口动态索取，这里自己手动写死
      // 这里前三张是设置了id可以跳转的，后面的不能跳转
      slideList:[
        {
          id:"42",
          img:"/imgs/slider/slide-1.jpg"
        },
        {
          id:"45",
          img:"/imgs/slider/slide-2.jpg"
        },
        {
          id:"46",
          img:"/imgs/slider/slide-3.jpg"
        },
        {
          id:"",
          img:"/imgs/slider/slide-4.jpg"
        },
        {
          id:"",
          img:"/imgs/slider/slide-5.jpg"
        }
      ]
    }
  },
  computed: {
    swiper(){
      return this.$refs.indexSwiper.$swiper
    }
  },
  mounted () {
    console.log("current swiper instance object 当前swiper",this.swiper)
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/base.scss";
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
// 自定义样式覆盖插件样式
.index{
  .container{
    outline: dashed 1px;
    position: relative;
    --swiper-navigation-color: #edf1ee;/* 设置导航器颜色 */
    --swiper-navigation-opacity: 1;/* 透明度 */
    --swiper-navigation-size: 30px;/* 设置按钮大小 */
    --swiper-pagination-color: #edf1ee;/* 分页器颜色 */
    .nav-menu{
      position: absolute;
      width: 264px;
      height: 460px;
      line-height: 16px;
      font-size: 16px;
      background-color: #55585A;
      z-index: 3;
      @include flex();
        li{
          outline: solid red;
          height: 50px;
          width: 264px;
          @include flex(center，center);
          a{
            outline: dashed blue;
            display: inline-block;
            margin-left: 30px;
            color: #FFFFFF;
        }
      }
    }
    .swiper-box{
      height: 460px;
      .swiper-pagination{
      }
      img{
        // 设置图片宽100%可使图片均匀平铺
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>