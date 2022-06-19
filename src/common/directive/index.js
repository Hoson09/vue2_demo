const directives = [import("./inputBlurValue")];
export default {
  install: (Vue) => {
    directives.forEach((t) => {
      Vue.directive(t.name, t.directiveFun);
    });
  },
};
