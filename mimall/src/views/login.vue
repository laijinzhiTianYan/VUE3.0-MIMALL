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
              v-model="username"
            >
            <input
              type="password"
              placeholder="密码"
              v-model="password"
            >
            <button @click="login">登陆</button>
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
  name: "login",
  data () {
    return {
      username:"",
      password:"",
      userId:"",
      res:{}
      // 这里的用户id用来cookie联络前后端辨识用户信息
    }
  },
  methods: {
    login(){
      let {username,password} = this;
      this.axios.post('/user/login',{
        username,
        password
      }).then((res) => {
        this.res = res;
        this.$router.push("/index");
      })
      // 其实在main.js中已经做了错误拦截，所以这里可以不写.catch()
    }
  }
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
        @include flex(center,center);
        margin-top: 40px;
        margin-bottom: 49px;
        font-size: 23px;
        line-height: 23px;
        ul {
          outline: solid .1px brown;
          @include flex(space-around,center);
          width: 348px;
          li {
            outline: dashed .1px green;
          }
        }
      }
      .login-body-form-input {
      input {
        width: 348px;
        height: 50px;
        margin-bottom: 20px;
        text-indent: 23px;
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
