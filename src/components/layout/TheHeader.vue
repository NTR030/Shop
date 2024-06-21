<template>
  <section>
    <header>
      <h1>
        <router-link to="/">Shop</router-link>
      </h1>

      <form @submit.prevent="searchCommodity">
        <input type="search" maxlength="12" v-model.trim="title" />
        <button type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="#868e96"
            viewBox="0 0 24 24"
            class="svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </form>

      <nav>
        <router-link to="/commodities">Shop List</router-link>
        <router-link to="/login" v-if="!login">Login</router-link>
        <router-link to="/cart" v-else>Cart</router-link>
      </nav>
    </header>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "",
    };
  },
  computed: {
    login() {
      return this.$store.state.user.user ? true : false;
    },
  },
  methods: {
    searchCommodity() {
      this.$store.commit("commodity/searchCommodity", this.title);
      this.$router.push({ path: "/commodities" });
      this.title = "";
    },
  },
};
</script>

<style scoped>
section {
  width: 100vw;
  background-color: #339af0;
  display: flex;
  justify-content: center;
  align-content: center;
}

header {
  width: 128rem;
  height: 12rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  width: 16rem;
  height: 7rem;
  margin-left: 1.2rem;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;
}

h1 a {
  color: #fff;
  font-size: 4.8rem;
}

form {
  display: flex;
  justify-content: center;
  align-items: center;
}

form input {
  border: 0;
  width: 20rem;
  height: 2.5rem;
  padding-left: 0.8rem;
}

form input:focus {
  outline: none;
  padding-left: 0.8rem;
}

form button {
  box-sizing: border-box;
  height: 2.5rem;
  padding: 0.2rem 0.5rem;
  background-color: #fff;
  cursor: pointer;
  border: 0;

  display: flex;
  justify-content: center;
  align-items: center;
}

.svg {
  height: 2.4rem;
}

nav {
  /* width: 30rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

nav a {
  display: inline-block;
  font-size: 1.6rem;
  width: 15rem;
  padding: 1rem 1.2rem;
  color: #fff;
  font-size: 2rem;
  text-align: center;
}

nav .router-link-exact-active {
  border: 2px solid #ff8787;
}
</style>
