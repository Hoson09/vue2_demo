function startsWithFun(value) {
  let bool = false;
  ["http://", "https://"].forEach((v) => {
    if (value.startsWith(v)) {
      bool = true;
    }
  });
  return bool;
}
function valueHandler(value) {
  let valueStr = value.replace(/\s*/g, "");
  if (valueStr && !startsWithFun(valueStr)) {
    return `http://${valueStr}`;
  } else {
    return valueStr;
  }
}
export default {
  name: "inputBlurValue",
  directiveFun: {
    inserted(el, binding) {
      el.__handlerValue__ = (e) => {
        binding.value(valueHandler(e.target.value), binding.arg);
      };
      el.addEventListener("blur", el.__handlerValue__);
    },
    unbind(el) {
      el.removeEventListener("blur", el.__handlerValue__);
    },
  },
};
