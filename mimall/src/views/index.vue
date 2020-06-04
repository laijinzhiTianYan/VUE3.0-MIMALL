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
                <div class="children">
                  <ul v-for = "(item, index) in menuList" :key = "index"><!-- 循环6次 -->
                    <li v-for = "(sub,id) in item" :key = "id"><!-- 内循环4次，迭代内部对象，给没有数据的留退路 -->
                      <a :href = " sub ? '/#/product/' + sub.id : '#' ">
                        <img :src="sub['img'] || '/imgs/item-box-1.png' " alt="sub[name]">
                        {{sub.name || "待插入" }}
                      </a>
                    </li>
                  </ul>
                </div>
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
            <swiper-slide  v-for = "(item, index) in slideList" :key = "index">
              <!-- 一定要注意用到指令的话，href里一定要用‘’括起来 -->
              <a :href = "'/#/product/'+item.id"><img :src = "item.img" alt = "'picture'+item.id"></a>
            </swiper-slide>
            <!-- 这块应该就是控制器吧，试一下 -->
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev"></div><!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
            <div class="swiper-button-next"></div><!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
          </swiper>
        </div>


        <!-- 广告区 -->
        <div class="ads-box">
          <a v-for = "(item, index) in adsList" :key = "index" :href="'/#/product/' + item.id "><img :src="item.img" alt="item.id"></a>
        </div>


        <!-- 大的banner -->
        <div class="banner">
          <a href="/#/product/30"><img src="/imgs/banner-1.png" alt="banner-img"></a>
        </div>


        <!-- 产品缩略区 -->
        <div class="product-box">
          <h2>手机</h2>
          <div class="wrapper">
            <div class="banner-left">

            </div>

            <div class="list-box">
              <div class="list">
                <div class="list-item"><!-- 单个产品块 -->
                  <span>新品</span>
                  <div class="list-item-img">
                    <img src="" alt="">
                  </div>
                  <div class="list-item-info">
                    <h3>小米9</h3>
                    <p>骁龙855，索尼4800万超广角微距</p>
                    <p>2999元</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


<!-- .product-box{
  h2{}
  .wrapper{
    .banner-left{
    }

    .list-box{
      .list{
        .list-item{
          span{}
          .list-item-img{
            img{}
          }
          .list-item-info{
            h3{}
            p{}
          }
        }
      }
    }
  }
} -->



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
      ],
      
      //横向4个，纵向6组
      menuList:[//menuList储存手机，电话卡侧边栏的弹出信息数据
        [//每个里头有四个对象
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米CC9"
          },{
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米8青春版"
          },{
            id: 32,
            img: "/imgs/item-box-3.jpg",
            name: "Redmi K20 pro"
          },{
            id: 33,
            img: "/imgs/item-box-4.jpg",
            name: "移动4G专区"
          }

        ],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
      ],

      adsList:[
        {
          id:33,
          img:"/imgs/ads/ads-1.png"
        },{
          id:48,
          img:"/imgs/ads/ads-2.jpg"
        },{
          id:45,
          img:"/imgs/ads/ads-3.png"
        },{
          id:47,
          img:"/imgs/ads/ads-4.jpg"
        },
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
    .nav-menu{//其实他应该包在swiper-box中的，这边把侧边栏独立出来了
      position: absolute;
      width: 264px;
      height: 460px;
      font-size: 16px;
      background-color: #55585a7a;//用opacity控制透明度的话，子代文字也会透明,因此直接调背景色透明度最佳
      z-index: 3;
      @include flex();
      .menu-wrap{//ul标签
        // @include flex();//上一级设置了flex这里就不需要了，因为效果已经达到了
        // flex-direction: column;
        .menu-item{//li标签
          outline: solid red;
          @include flex(center，center);
          height: 50px;
          width: 264px;
          line-height: 50px;
          a{
            outline: dashed brown;
            display: inline-block;
            position: relative;//因为要定位伪类
            margin-left: 30px;
            color: #FFFFFF;
            &::after{
              content: "";
              @include bgImg(10,15,"/imgs/icon-arrow.png");
              position: absolute;
              left: 194px;
              top: 17px;
            }
          }
          &:hover{
            background-color: $colorA;
            .children{
              visibility: visible;
            }
          }
          .children{
            visibility: hidden;
            width: 962px;
            height: 460px;
            position: absolute;
            left: 264px;
            top: 0;
            background-color: $colorG;
            box-shadow:1px 5px 6px 0px rgba(0, 0, 0, 0.11);
            ul{
              @include flex();
              height: 76.6px;
              li{
                // @include flex(start,center);
                height: 76.6px;
                // width: 40%;
                flex: 1;
                line-height: 76.6px;
                font-size: 14px;
                a{
                  outline: dashed .1px black;
                  display: inline-block;
                  color: $colorB;
                  z-index: 1;
                  img{
                    height: 42px;
                    width: 35px;
                    margin-right: 15px;
                    vertical-align: middle;
                  }
                  &::after{//这里是因为上面也设置了a标签的伪元素样式，所以也跟着显示出来，这里直接去掉即可
                    content: "";
                    display: none;
                  }
                }
              }
            }
          }
        }

      }
    }

    .swiper-box{
      height: 460px;
      .swiper-button-prev{
        left: 278px;
        &:hover{
          background-color: #55585a7a;
        }
      }
      .swiper-button-next{
        &:hover{
          background-color: #55585a7a;
        }
      }
      .swiper-pagination{
        width: 400px;
        left: auto;
        right: 30px;
        bottom: 20px;
        text-align: right;
      }
      img{
        // 设置图片宽100%可使图片均匀平铺
        width: 100%;
        height: 100%;
      }
    }

    .ads-box{
      height: 167px;
      margin-top: 14px;
      margin-bottom: 31px;
      @include flex();
      a{
        display: inline-block;
        img{//其实最好的是给a标签设置宽高，然后图片宽高100%完全填充满，这里是因为图片规整所以都可以
          width: 296px;
          height: 167px;
        }
      }
    }

    .banner{
      margin-bottom: 50px;
      a{
        display: inline-block;
        width: 1226px;
        height:130px;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }

    .product-box{
      h2{}
      .wrapper{
        .banner-left{
        }
    
        .list-box{
          .list{
            .list-item{
              span{}
              .list-item-img{
                img{}
              }
              .list-item-info{
                h3{}
                p{}
              }
            }
          }
        }
      }
}
  }
}
</style>