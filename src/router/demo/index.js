export default [
  {
    path: "/demo",
    name: "demo",
    component: () => import(/* webpackChunkName: "about" */ "@/views/demo/index.vue")
  }
];
