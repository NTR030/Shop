<template>
  <section class="dialog">
    <dialog open>
      <h3>Error</h3>
      <p>{{ msg }}</p>
      <button @click="closeDialog">×</button>
    </dialog>
  </section>
</template>

<script>
export default {
  props: ["err", "msg"],
  emits: ["closeDialog"],
  methods: {
    closeDialog() {
      this.$emit("closeDialog", false);
    },
  },
};
</script>

<style scoped>
section.dialog {
  width: 30rem;
  height: 10rem;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

dialog {
  width: 100%;
  height: 10rem;
  padding: 1rem 1.2rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

dialog button {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0.4rem 0.6rem;
  background-color: #fff;
  border: 0;
  cursor: pointer;
  font-size: 2rem;
}
</style>
