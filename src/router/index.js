import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/tableComponent",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/vueI18n",
    name: "vueI18n",
    component: () => import("@/views/vueI18n.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
