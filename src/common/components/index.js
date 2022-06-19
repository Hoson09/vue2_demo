const components = {
  tableComponent: () => import("./tableCus/tableComponent.vue"),
};
export default {
  install: (Vue) => {
    Object.keys(components).forEach((k) => {
      Vue.component(k, components[k]);
    });
  },
};
