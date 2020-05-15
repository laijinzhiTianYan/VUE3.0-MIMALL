<template>
  <div>
    这是index.vue的视图层
    <!-- 这里就是首页的全部内容 -->
    <div class="index">

      <div class="container">

        <!-- 轮播区 -->
        <div class="swiper-box">
          <swiper  ref="mySwiper" :options="swiperOption">
            <swiper-slide  v-for = "(item, index) in slideList" :key="index">
              <!-- 一定要注意用到指令的话，href里一定要用‘’括起来 -->
              <a :href="'/#/product/'+item.id"><img :src="item.img" alt=""></a>
            </swiper-slide>
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
      swiperOption:{

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
  }
};
</script>

<style lang="scss" scoped>
// 自定义样式覆盖插件样式
.index{
  .container{
    .swiper-box{
      height: 451px;
      img{
        // 设置图片宽100%可使图片均匀平铺
        width: 100%;
        // height: 100%;
      }
    }
  }
}
</style>