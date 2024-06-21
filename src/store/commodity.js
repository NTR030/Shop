const url = `https://shopping-lijie-default-rtdb.asia-southeast1.firebasedatabase.app/commodity.json`;

const commodityModule = {
  namespaced: true,
  state() {
    return {
      commodity: [],
      isLoading: false,
      searchCommodity: [],
      error: false,
    };
  },
  mutations: {
    setLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    postCommodity(state, payload) {
      state.commodity = payload;
    },
    //用于form表单搜索
    searchCommodity(state, payload) {
      console.log(`搜索词为${payload}`);
      //payload应该是一个字符串

      let arr = [];
      //搜索匹配方法
      state.commodity.forEach((val) => {
        //商品标题是否包含指定词，全部进行小写转换后检查
        if (val.name.toLowerCase().includes(payload.toLowerCase())) {
          arr.push(val);
        }
      });
      state.searchCommodity = arr;
      console.log(arr.length);
      if (arr.length === 0) {
        state.error = true;
      }
    },
    cartCommodity(state, payload) {
      const { id, num } = payload;
      state.commodity.forEach((val) => {
        if (val.id === id) {
          if (val.num !== undefined) {
            val.num = Math.max(val.num + num, 0);
          } else {
            val.num = 1;
          }
        }
      });
    },
  },
  actions: {
    async getCommodity(context) {
      context.commit("setLoading", true);
      try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        context.commit("postCommodity", data);
      } catch (err) {
        console.log(err);
        context.rootState.error = err;
      } finally {
        context.commit("setLoading", false);
      }
    },
  },
  getters: {
    commodity(state) {
      return state.commodity;
    },
    isLoading(state) {
      return state.isLoading;
    },
    searchCommodity(state) {
      return state.searchCommodity;
    },
    error(state) {
      return state.error;
    },
  },
};

export default commodityModule;
