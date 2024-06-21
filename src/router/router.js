import { createRouter, createWebHistory } from "vue-router";

import store from "../store/store";

const CommodityList = () => import("../page/commodity/CommodityList.vue");
const LoginRegister = () => import("../page/login/LoginRegister.vue");
const CartList = () => import("../page/cart/CartList.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/commodities",
      alias: "/",
      name: "commodities",
      component: CommodityList,
    },
    {
      path: "/login",
      name: "login",
      component: LoginRegister,
    },
    {
      path: "/cart",
      name: " cart",
      component: CartList,
    },
  ],
});

router.beforeEach((to, _1, next) => {
  store.commit("changeLoading", true);
  next();
});

router.afterEach(() => {
  store.commit("changeLoading", false);
});

export default router;
