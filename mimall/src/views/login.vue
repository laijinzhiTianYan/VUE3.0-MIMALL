<template>
  <div>
    这是login视图层
    <div class="login">

      <div class="container">
        <div class="login-header-logo">
          <a href="javascript:;"></a>
        </div>
      </div>
      <div class="container">
        <div class="login-body-banner">
          <img
            src="/imgs/login-bg.jpg"
            alt=""
          >
        </div>

      </div>

      <div class="container">
        <div class="login-body-form">

          <div class="login-body-form-title">
            <ul>
              <li>
                账号登陆
              </li>
              <span>丨</span>
              <li>
                扫码登陆
              </li>
            </ul>
          </div>

          <div class="login-body-form-input">
            <input
              type="text"
              placeholder="邮箱/手机号码/小米ID"
            >
            <input
              type="password"
              placeholder="密码"
            >
            <button>登陆</button>
          </div>

          <div class="login-body-form-tips">
            <div class="sms">手机短信登陆/注册</div>
            <div class="reg">立即注册<span>丨</span>忘记密码？</div>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: "login"
};
</script>
<style lang="scss" scoped>
// @import "../assets/scss/base.scss";
@import "../assets/scss/mixin.scss";
.login {
  .container {
    position: relative;
    outline: dashed 0.1px red;
    .login-header-logo {
      a {
        @include bgImg(205, 52, "/imgs/login-logo.png");
      }
    }
  }

  .container {// 如果是同一级同一类名的话，那么他们的属性是共用的，这里也共享relative属性
    .login-body-banner {
      position: absolute;
      width: 1918px;
      height: 558px;
      left: -55.5%;
    }
  }

  .container {
    .login-body-form {
      background-color: #fff;
      position: absolute;
      top: 37px;
      right: 30px;
      width: 410px;
      height: 480px;
      text-align: center;
      .login-body-form-title {
        outline: dashed .1px blue;
        margin-top: 40px;
        margin-bottom: 49px;
        font-size: 23px;
        line-height: 23px;
        ul {
          outline: dashed .1px brown;
          @include flex(space-around,center);
          display: inline-block;
          width: 348px;
          li {
            outline: dashed .1px green;
            display: inline-block;
            // box-sizing: border-box;
            // padding-left: 30px;
            // padding-right: 30px;
          }
        }
      }
      .login-body-form-input {
      input {
        width: 348px;
        height: 50px;
        margin-bottom: 20px;
        text-indent: 28px;
      }
      button {
        width: 348px;
        height: 50px;
        margin-top: 10px;
        background-color: #FF6600;
        color: #fff;
        font-size: 16px;
      }
    }
    .login-body-form-tips{
      outline: dashed .1px red;
      @include flex();
      width: 348px;
      margin-left: 31px;
      margin-top: 14px;
    }
    }
    
  }
}
</style>
