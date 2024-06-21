const url = `https://shopping-lijie-default-rtdb.asia-southeast1.firebasedatabase.app/user.json`;

const userModule = {
  namespaced: true,
  state() {
    return {
      user: "",
    };
  },
  mutations: {
    postUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    async getUser(context, payload) {
      //每次登录前清空根state相关状态，防止缓存
      context.rootState.error = null;
      context.rootState.errorMsg = "";
      const { email } = payload;
      const { password } = payload;
      try {
        const res = await fetch(url);
        const users = await res.json();
        //判断email和password是否全部一致
        if (users.some((u) => u.email === email && u.password === password)) {
          context.commit("postUser", payload);
        } else {
          throw new Error(`${email}邮箱不存在或密码不对`);
        }
      } catch (error) {
        //传递错误
        context.rootState.error = true;
        context.rootState.errorMsg = error;
      }
    },
  },
  getters: {
    isLogin(state) {
      return state.user ? true : false;
    },
  },
};

export default userModule;
