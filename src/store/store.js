import { createStore } from "vuex";

import commodityModule from "./commodity";
import userModule from "./user";
import cartModule from "./cart";

const store = createStore({
  modules: {
    commodity: commodityModule,
    user: userModule,
    cart: cartModule,
  },
  state() {
    return {
      error: null,
      isLoading: false,
      errorMsg: "",
    };
  },
  mutations: {
    changeLoading(state, payload) {
      state.isLoading = payload;
    },
    changeError(state, payload) {
      state.error = payload;
    },
  },
  actions: {},
  getters: {
    isLoading(state) {
      return state.isLoading;
    },
    isError(state) {
      return state.error;
    },
    errorMsg(state) {
      return state.errorMsg;
    },
  },
});

export default store;
