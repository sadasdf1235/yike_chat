"use strict";
const common_vendor = require("../../common/vendor.js");
const hooks_useSystemInfo = require("../../hooks/useSystemInfo.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "search",
  setup(__props) {
    const {
      status,
      navHeight
    } = hooks_useSystemInfo.useSystemInfo();
    const back = () => {
      common_vendor.index.navigateBack();
    };
    const intoDetail = () => {
      common_vendor.index.navigateTo({
        url: "/pages/user_detail/user_detail"
      });
    };
    const handleClick = (event) => {
      event.stopPropagation();
      console.log("点击了按钮");
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(status) + "rpx",
        b: common_vendor.o(back),
        c: common_vendor.unref(navHeight) + "rpx",
        d: common_vendor.o(($event) => handleClick($event)),
        e: common_vendor.o(intoDetail)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c10c040c"]]);
wx.createPage(MiniProgramPage);
