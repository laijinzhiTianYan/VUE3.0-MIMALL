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
                    <a href="javascript:">登陆</a>
                    <a href="javascript:">注册</a>
                    <a href="javascript:" class="my-cart"><span class="icon-cart"></span>购物车</a>
                </div>
            </div>
        </div>
        <div class="nav-header">
            <div class="container">
                <div class="header-logo">
                    <a href="/#index"></a>
                </div>
                <div class="header-menu"></div>
                <div class="header-search"></div>
            </div>
        </div>
nav-header
    </div>
</template>

<script>
export default {
    name:'nav-header'
}
</script>

<style lang="scss">
@import "../assets/scss/base.scss"
 .header{
     .nav-topbar{
         height: 40px;
         line-height: 40px;
         background-color: #333333;
         color:#B0B0B0;
        //  container实现flex的基础
         .container{
         display: flex;
         justify-content: space-between;
         align-content: center;
        //  虽然上面设置了color但是a标签依然需要覆盖一下
         a{
             display: inline-block;
             color: #B0B0B0;
             margin-right: 18px;
         }
         .my-cart{
             width: 110px;
             text-align: center;
             background-color: #FF6600;
             color: #fff;
             .icon-cart{
                 background:url("/imgs/icon-cart-checked.png") no-repeat center;
                 background-size: contain;
                 display: inline-block;
                 width: 16px;
                 height: 12px;
                 margin-right: 4px;
             }
         }
        }
     }
     .nav-header{
         .container{
             .header-logo{
                 display: inline-block;
                 width: 53px;
                 height: 52px;
                 
             }

         }
     }
}
</style>