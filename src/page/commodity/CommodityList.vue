<template>
  <section class="commodity" v-if="!DataLoading">
    <BaseCard>
      <ul v-if="!error">
        <commodity-item
          v-for="commodity in commodities"
          :key="commodity.id"
          :imgLink="commodity.img"
          :des="commodity.des"
          :name="commodity.name"
          :id="commodity.id"
        ></commodity-item>
      </ul>

      <p v-if="error" @click="returnEvent">没有搜索结果， 点击返回</p>
      <!-- 分页区域 -->
    </BaseCard>
  </section>

  <!-- 加载动画 -->
  <Teleport to="body" v-else>
    <LoadingSpinner></LoadingSpinner>
  </Teleport>
</template>

<script>
import CommodityItem from "./CommodityItem.vue";

export default {
  data() {
    return {
      page: 1,
      limit: 5,
    };
  },
  components: {
    CommodityItem,
  },
  computed: {
    searchCommodity() {
      return this.$store.getters["commodity/searchCommodity"];
    },
    commodities() {
      if (this.searchCommodity.length === 0) {
        return this.$store.getters["commodity/commodity"];
      } else {
        return this.$store.getters["commodity/searchCommodity"];
      }
    },
    error() {
      return this.$store.getters["commodity/error"];
    },
    DataLoading() {
      return this.$store.getters["commodity/isLoading"];
    },
  },
  methods: {
    returnEvent() {
      location.reload();
    },
  },
  beforeRouteEnter(_, _1, next) {
    next((vm) => {
      vm.$store.dispatch("commodity/getCommodity");
    });
  },
};
</script>

<style scoped>
section.commodity {
  margin: 10rem auto;
  width: 60rem;
}

ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2.3rem;
}
</style>
