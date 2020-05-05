import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./locale";

import "./styles";
import "./assets/icons";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

import "./components";

Vue.config.productionTip = false;

// 打包生产环境不需要Mock
if (process.env.NODE_ENV !== "production") import("./mock");

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App)
}).$mount("#app");
