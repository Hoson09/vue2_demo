import cnLocal from "./cnLocal";
import enLocal from "./enLocal";
import koLocal from "./koLocal";
import jpLocal from "./jpLocal";
import esLocal from "./esLocal";
import frLocal from "./frLocal";
import VueI18n from "vue-i18n";
import Vue from "vue";
Vue.use(VueI18n);
const messages = {
  cn: cnLocal,
  en: enLocal,
  ko: koLocal,
  jp: jpLocal,
  es: esLocal,
  fr: frLocal,
};
export const i18n = new VueI18n({
  locale: "cn",
  fallbackLocale: "cn",
  messages,
});
