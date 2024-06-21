<template>
  <li>
    <img :src="imgLink" :alt="name" />
    <div class="content">
      <h3>{{ name }}</h3>
      <p>
        {{ des }}
      </p>
    </div>
    <div class="operation" v-if="isLogin">
      <!-- 减少按钮 -->
      <button @click="reduce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
        </svg>
      </button>
      <!-- 数量输入框 -->
      <input type="number" v-model="num" min="0" readonly />
      <!-- 添加按钮 -->
      <button @click="add">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  </li>
</template>

<script>
export default {
  data() {
    return {
      num: 0,
    };
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    imgLink: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    des: {
      type: String,
      required: true,
    },
  },
  computed: {
    isLogin() {
      console.log(this.$store.getters["user/isLogin"]);
      return this.$store.getters["user/isLogin"];
    },
  },
  methods: {
    add() {
      this.num++;
      this.$store.commit("commodity/cartCommodity", { id: this.id, num: 1 });
    },
    reduce() {
      this.num--;
      if (this.num < 0) this.num = 0;
      this.$store.commit("commodity/cartCommodity", { id: this.id, num: -1 });
    },
  },
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

.content {
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  /* align-items: center; */
  gap: 1.2rem;

  width: 30rem;
}

.content h3 {
  width: 15rem;
  font-size: 2rem;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.content p {
  font-size: 1.4rem;
  line-height: 1.68rem;
  height: 3.36rem;

  margin-top: -0.5rem;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2; /* 控制显示的行数 */
}

.operation {
  margin-left: 5.5rem;
  margin-top: 3rem;
  height: 3rem;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.operation button {
  width: 3rem;
  height: 3rem;
  padding: 0.4rem 0.6rem;
  cursor: pointer;

  background-color: #fff;
  /* border: 1px solid #fa5252; */
  border: 0;
}

input::-webkit-inner-spin-button,
input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input {
  -webkit-appearance: textfield; /* Webkit 内核浏览器前缀 */
  -moz-appearance: textfield; /* Firefox 浏览器前缀 */
  appearance: textfield; /* 标准属性 */
  cursor: default;
  border: 0;
  width: 3.5rem;
  font-size: 1.7rem;
  text-align: center;
}

input:focus {
  outline: none;
}
</style>
