import { toRaw } from "vue";

const cartModule = {
  namespaced: true,
  state() {
    return {
      cartList: [],
    };
  },
  mutations: {
    postCartList(state, payload) {
      state.cartList = payload;
    },
  },
  actions: {
    getCartList(context) {
      let list = [];
      const arr = toRaw(context.rootState.commodity.commodity);

      arr.forEach((val) => {
        if (val.num !== undefined && val.num > 0) {
          list.push(val);
        }
      });
      context.commit("postCartList", list);
    },
  },
  getters: {
    cartList(state) {
      return state.cartList;
    },
    cartListLength(state) {
      return state.cartList.length;
    },
  },
};

export default cartModule;
