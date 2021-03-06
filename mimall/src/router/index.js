import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home.vue";
import Index from "../views/index.vue";
import Login from "../views/login.vue";
import Product from "../views/product.vue";
import Detail from "../views/detail.vue";
import Cart from "../views/cart.vue";
import Order from "../views/order.vue";
import OrderConfirm from "../views/orderConfirm.vue";
import OrderList from "../views/orderList.vue";
import OrderPay from "../views/orderPay.vue";
import Alipay from "../views/alipay.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    // 默认重定向到index中
    // redirect: "/index",
    // 根目录的子path中 / 可有可无
    children: [
      {
        path: "index",
        name: "index",
        component: Index
      },
      {
        // 动态路由
        path: "product/:id",
        name: "product",
        component: Product
      },
      {
        path: "detail/:id",
        name: "detail",
        component: Detail
      }
    ]
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
  {
    path: "/login",
    name: "login",
    component: Login

  },
  {
    path: "/cart",
    name: "cart",
    component: Cart
  },
  {
    path: "/order",
    name: "order",
    component: Order,
    // 注意子路由里的path就不能加 / 了
    children: [
      {
        path: "confirm",
        name: "order-confirm",
        component: OrderConfirm
      },
      {
        path: "list",
        name: "order-list",
        component: OrderList
      },
      {
        path: "pay",
        name: "order-pay",
        component: OrderPay
      },
      {
        path: "alipay",
        name: "alipay",
        component: Alipay
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
