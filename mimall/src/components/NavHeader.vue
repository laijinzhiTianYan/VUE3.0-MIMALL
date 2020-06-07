<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:">小米商城</a>
          <a href="javascript:">MUI</a>
          <a href="javascript:">云服务</a>
          <a href="javascript:">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:" v-if="username">{{ username }}</a>
          <a href="javascript:" v-if="!username" @click="login">登陆</a>
          <a href="javascript:" v-if="username">我的订单</a>
          <a href="javascript:" class="my-cart" @click="goToCart"
            ><span class="icon-cart"></span>购物车</a
          >
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#index"></a>
        </div>
        <div class="header-menu">
          <!-- 不是单纯的链接，需要额外的内容时，用div不用a -->
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li
                  class="product"
                  v-for="(item, index) in phoneList"
                  :key="index"
                >
                  <!-- 注意这里“”中变量和字符串拼接的写法 -->
                  <!-- 要和router中的路径对上 -->
                  <a :href="'/#/product/' + item.id" target="_blank">
                    <div class="pro-img">
                      <img :src="item.mainImage" :alt="item.name" />
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <!-- 数据过滤器的使用 -->
                    <!-- 函数没有参数就可以简写，如currency()写成currency -->
                    <div class="pro-price">{{ item.price | currency() }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="item-menu">
            <span>红米手机</span>
            <!-- 红米手机没有用数据，也没有动态渲染 -->
            <div class="children">
              <ul>
                <li class="product">
                  <a href="javascript:" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ddffd7562c54f9166fa876c143ff22.png?thumb=1&w=160&h=110&f=webp&q=90"
                        alt="手机图片"
                      />
                    </div>
                    <div class="pro-name">小米手机</div>
                    <div class="pro-price">价格吓死你哦</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ddffd7562c54f9166fa876c143ff22.png?thumb=1&w=160&h=110&f=webp&q=90"
                        alt="手机图片"
                      />
                    </div>
                    <div class="pro-name">小米手机</div>
                    <div class="pro-price">价格吓死你哦</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ddffd7562c54f9166fa876c143ff22.png?thumb=1&w=160&h=110&f=webp&q=90"
                        alt="手机图片"
                      />
                    </div>
                    <div class="pro-name">小米手机</div>
                    <div class="pro-price">价格吓死你哦</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ddffd7562c54f9166fa876c143ff22.png?thumb=1&w=160&h=110&f=webp&q=90"
                        alt="手机图片"
                      />
                    </div>
                    <div class="pro-name">小米手机</div>
                    <div class="pro-price">价格吓死你哦</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ddffd7562c54f9166fa876c143ff22.png?thumb=1&w=160&h=110&f=webp&q=90"
                        alt="手机图片"
                      />
                    </div>
                    <div class="pro-name">小米手机</div>
                    <div class="pro-price">价格吓死你哦</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ddffd7562c54f9166fa876c143ff22.png?thumb=1&w=160&h=110&f=webp&q=90"
                        alt="手机图片"
                      />
                    </div>
                    <div class="pro-name">小米手机</div>
                    <div class="pro-price">价格吓死你哦</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="item-menu">
            <span>小米电视</span>
            <!-- 小米电视这块手动引入的资料，没有用v-for渲染 -->
            <div class="children">
              <ul>
                <li class="product">
                  <a href="javascript:" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-1.webp" alt="手机图片" />
                    </div>
                    <div class="pro-name">Redmi 智能电视 MAX 98"</div>
                    <div class="pro-price">19999</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-2.jpg" alt="手机图片" />
                    </div>
                    <div class="pro-name">小米全面屏电视 55英寸</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-3.png" alt="手机图片" />
                    </div>
                    <div class="pro-name">小米电视4A 32英寸</div>
                    <div class="pro-price">699元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-4.jpg" alt="手机图片" />
                    </div>
                    <div class="pro-name">小米电视4A 55英寸</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-5.webp" alt="手机图片" />
                    </div>
                    <div class="pro-name">Redmi 红米电视 70英寸</div>
                    <div class="pro-price">3099元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-6.png" alt="手机图片" />
                    </div>
                    <div class="pro-name">小米壁画电视 65英寸</div>
                    <div class="pro-price">6999元</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wapper">
            <input type="text" name="keyword" />
            <a href="javascript:"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-header",
  data() {
    return {
      username: "",
      phoneList: []
    };
  },
  mounted() {
    this.getProductList();
  },
  methods: {
    getProductList() {
      // 注意get传参要用params
      this.axios
        .get("/products", {
          params: {
            // 后台要求的请求结构和识别码
            categoryId: "100012",
            // 请求加上pageSize即让服务端返回设置的条数，去掉以后即服务端发送全部数据
            pageSize: 6
          }
        })
        .then(res => {
          if (res.list.length >= 6) {
            this.phoneList = res.list.slice(0, 6);
          }
        });
    },
    login() {
      this.router.push("/login");
    },
    goToCart() {
      // 常见面试题，怎么跳转路由，用this.$router.push()
      // 动态路由就是router文件中借助：id这种形式，如/product/：id
      // 路由取参数方法，使用router.params 或者router.query取参
      this.$router.push("/cart");
    }
  },
  // 数据过滤器，vue3.0可能有变动，注意一下
  filters: {
    currency(val) {
      if (!val) return "0.00";
      return "￥" + val.toFixed(1) + "元";
    }
  }
};
</script>

<style lang="scss">
// 注意这是引入到style标签中的
@import "../assets/scss/base.scss";
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
.header {
  .nav-topbar {
    height: 40px;
    line-height: 40px;
    background-color: #333333;
    color: #b0b0b0;
    //  container实现flex的基础
    .container {
      @include flex();
      //  虽然上面设置了color但是a标签依然需要覆盖一下
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 18px;
      }
      .my-cart {
        width: 110px;
        text-align: center;
        background-color: #ff6600;
        color: #fff;
        .icon-cart {
          @include bgImg(16, 12, "/imgs/icon-cart-checked.png");
          margin-right: 6px;
        }
      }
    }
  }
  .nav-header {
    .container {
      outline: dashed 0.1px gray;
      height: 112px;
      @include flex();
      position: relative;
      .header-logo {
        display: inline-block;
        width: 55px;
        height: 55px;
        background-color: #ff6600;
        a {
          display: inline-block;
          width: 110px;
          height: 55px;
          &::before {
            content: "";
            @include bgImg(55, 55, "/imgs/mi-logo.png");
            //  为了使变换协调，也要定义一个
            transition: margin 0.4s;
          }
          &::after {
            content: "";
            margin-left: -110px;
            @include bgImg(55, 55, "/imgs/mi-home.png");
          }
          &:hover::before {
            //  注意上面不能写成&:hover :before 不能带空格
            //  不能设太大，容器a本来就110，
            //  太大:before移动时会带跑:after
            //  margin-left:-55px;
            //  只在这里定义transition的话，只会在:hover时变换
            //  为了前后协调，在:hover结束后变回初始状态的before时也要定义一个
            margin-left: 55px;
            transition: margin 0.4s;
          }
        }
      }
      .header-menu {
        outline: dashed 0.1px red;
        display: inline-block;
        width: 643px;
        height: 112px;
        padding-left: 209px;
        .item-menu {
          outline: dashed 0.1px blue;
          display: inline-block;
          color: #333;
          margin: 0 20px 0 20px;
          height: 112px;
          font-size: 16px;
          font-weight: bold;
          // line-height的设置需要考虑下
          line-height: 112px;
          span {
            outline: auto;
            cursor: pointer;
          }
          // 下拉菜单部分
          &:hover {
            color: $colorA;
            .children {
              height: 220px;
              opacity: 1;
            }
          }
          // 如果想实现现在小米商城children栏融入背景效果，就要从html级把children单个独立出去和container一个等级
          .children {
            // 如果不给他的父级加relative，就会相对根定位，不好控制
            position: absolute;
            top: 112px;
            left: 0px;
            width: 100%;
            // 不设置height也可以，因为子元素内容会撑开
            // 而且要实现鼠标覆盖才会弹出的效果
            border-top: 1px solid #e5e5e5;
            box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.11);
            border-radius: 5px 5px 10px 10px;
            // 防止由于层级关系被遮住
            z-index: 4;
            // 初始状态
            height: 0;
            opacity: 0;
            // 加了overflow以后,就不会出现鼠标放在隐形的children上也能唤醒这种情况
            // overflow加在item-menu上就不行，我想大概是因为children也属于item-menu吧
            overflow: hidden;
            // 如果不加背景色就会出现透明背景，导致内容镂空
            background-color: $colorG;
            ul {
              width: 1226px;
              display: flex;
              justify-content: space-around;
              .product {
                // 也可以直接设置百分比宽度，这样就不用设置url的宽和flex相关布局了
                // 使用flex布局有个问题，就是图片和伪类before的丨杠离得太近了，
                // 解决方法就是在子元素上使用flex-basis
                // width: 16.6%;
                flex-basis: 16.6%;
                height: 220px;
                float: left;
                // 文字的高度和居中一般设置下面这两个
                font-size: 12px;
                text-align: center;
                line-height: 12px;
                position: relative;
                a {
                  // a标签本身是行内标签，规定不可以包含块级标签
                  // 所以要把他转成行内块，撑开高度
                  display: inline-block;
                  img {
                    // 宽高只定一个，以防不规整图片变形，按需取舍
                    height: 111px;
                    // 定高是因为下面有字，伸缩可能会破坏结构
                    width: auto;
                    margin-top: 26px;
                  }
                  // 作为图片容器还是要限制下高度的
                  .pro-img {
                    height: 156px;
                  }
                  .pro-name {
                    font-weight: bold;
                    margin-bottom: 8px;
                    color: $colorB;
                  }
                  .pro-price {
                    color: $colorA;
                  }
                }
                // 单条线的常用伪类设置
                &::before {
                  content: " ";
                  position: absolute;
                  top: 28px;
                  right: 0;
                  width: 1px;
                  height: 99px;
                  border-left: 1px solid $colorF;
                }
                &:last-child::before {
                  display: none;
                }
              }
            }
          }
        }
      }
      .header-search {
        width: 319px;
        .wapper {
          height: 50px;
          border: 1px solid #e0e0e0;
          @include flex();
          input {
            //  去掉浏览器默认的输入框阴影
            border: none;
            border-right: 1px solid #e0e0e0;
            width: 263px;
            height: 50px;
            font-size: 16px;
            //  设置padding保证输入不会贴边
            padding-left: 14px;
            padding-right: 14px;
          }
          a {
            @include bgImg(55, 50, "/imgs/icon-search.png", 18px);
          }
        }
      }
    }
  }
}
</style>
