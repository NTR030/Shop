<template>
  <section class="cart">
    <BaseCard>
      <ul>
        <CartItem
          v-for="cart in cartList"
          :key="cart.id"
          :img="cart.img"
          :name="cart.name"
          :num="cart.num"
        ></CartItem>
      </ul>
    </BaseCard>
  </section>
</template>

<script>
import CartItem from "./CartItem.vue";
import store from "../../store/store.js";
export default {
  components: {
    CartItem,
  },
  computed: {
    cartList() {
      console.log(this.$store.getters["cart/cartList"]);
      return this.$store.getters["cart/cartList"];
    },
  },
  beforeCreate() {
    this.$store.dispatch("cart/getCartList");
  },
  beforeRouteEnter(_, _1, next) {
    const user = store.getters["user/isLogin"];
    if (user) {
      console.log("已登录，合法访问");
      next();
    } else {
      console.log("未登录，重定向到login页面");
      next({ path: "/login" });
    }
  },
};
</script>

<style scoped>
section.cart {
  margin: 10rem auto;
  width: 60rem;
}

ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2.3rem;
}
</style>
