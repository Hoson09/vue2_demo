import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import myUtli from "@/common/utli";
import myDiriveective from "@/common/directive";
import myComponents from "@/common/components";
import { i18n } from "@/common/lang";
Vue.config.productionTip = false;
Vue.use(myUtli);
Vue.use(myDiriveective);
Vue.use(myComponents);
new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
