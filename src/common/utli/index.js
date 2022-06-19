import * as utlizeFun from "./utlizeFun";
export default {
  install: (Vue) => {
    Vue.prototype.$utlizeFun = utlizeFun;
  },
};
