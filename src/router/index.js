import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/tableComponent",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
