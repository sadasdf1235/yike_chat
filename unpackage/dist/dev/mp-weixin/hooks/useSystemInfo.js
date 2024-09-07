"use strict";
const common_vendor = require("../common/vendor.js");
const useSystemInfo = () => {
  const status = common_vendor.ref(0);
  const navHeight = common_vendor.ref(0);
  const menuButtonInfo = common_vendor.ref(null);
  common_vendor.onBeforeMount(() => {
    const {
      system,
      statusBarHeight
    } = common_vendor.index.getSystemInfoSync();
    if (common_vendor.index.getMenuButtonBoundingClientRect) {
      menuButtonInfo.value = common_vendor.index.getMenuButtonBoundingClientRect();
    }
    const isIOS = system.indexOf("iOS") > -1;
    navHeight.value = !isIOS ? 96 : 88;
    status.value = statusBarHeight * 2;
  });
  return {
    status,
    navHeight,
    menuButtonInfo
  };
};
exports.useSystemInfo = useSystemInfo;
