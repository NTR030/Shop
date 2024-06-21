<template>
  <li>
    <img :src="img" :alt="name" />
    <div>
      <h3>{{ name }}</h3>
      <p>{{ num }}</p>
    </div>
  </li>
</template>

<script>
export default {
  props: ["img", "name", "num"],
};
</script>

<style scoped>
li {
  display: flex;
  /* align-items: center; */
  height: 7rem;
}

img {
  width: 7rem;
  height: 7rem;
  border: 1px solid #ffc9c9;
  margin-right: 2.4rem;
  margin-left: 1.2rem;
}
</style>
