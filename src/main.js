"use strict";

import { createApp, defineAsyncComponent } from "vue";

import App from "./App.vue";
import store from "./store/store";
import router from "./router/router";

//导入通用组件
import BaseCard from "./components/ui/BaseCard.vue";
const LoadingSpinner = defineAsyncComponent(() =>
  import("./components/ui/LoadingSpinner.vue")
);

const app = createApp(App);

app.use(store);
app.use(router);
app.component("BaseCard", BaseCard);
app.component("LoadingSpinner", LoadingSpinner);
app.mount("#app");
