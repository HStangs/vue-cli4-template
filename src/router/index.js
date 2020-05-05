import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routerContext = require.context("./", true, /index\.js$/);
const routes = routerContext.keys().reduce((acc, route) => {
  if (route.startsWith("./index")) return acc;
  const routerModule = routerContext(route);
  // 兼容 import export 和 require module.export 两种规范
  return [...acc, ...(routerModule.default || routerModule)];
}, []);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
