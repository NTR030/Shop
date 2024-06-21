<template>
  <the-header></the-header>

  <router-view v-if="!isLoading"></router-view>

  <!-- 加载动画 -->
  <Teleport to="body">
    <LoadingSpinner v-if="isLoading"></LoadingSpinner>
  </Teleport>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
  computed: {
    isLoading() {
      return this.$store.getters.isLoading;
    },
  },
};
</script>

<style>
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
  font-size: 62.5%;
}

body {
  background-color: #fff;
  color: black;
  font-weight: 400;
  font-size: 1.6rem;

  position: relative;
}

#app {
  height: 100vh;
  width: 100vw;
}

a {
  text-decoration: none;
}
</style>
