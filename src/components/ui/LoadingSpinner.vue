<template>
  <section>
    <div></div>
  </section>
</template>

<style scoped>
section {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;
}

div {
  width: 12rem;
  height: 12rem;
  border: 10px solid #ccc;
  border-top: 10px solid #339af0;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
