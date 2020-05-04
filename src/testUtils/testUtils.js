export const findTestByAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};
