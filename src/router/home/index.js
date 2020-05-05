export default [
  {
    path: "",
    name: "home",
    component: () => import(/* webpackChunkName: "about" */ "@/views/home/index.vue")
  }
];
