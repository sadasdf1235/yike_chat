"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "chat",
  setup(__props) {
    const intoSearch = () => {
      common_vendor.index.navigateTo({
        url: "/pages/search/search"
      });
    };
    const intoAddFriend = () => {
    };
    const intoMessage = (chat) => {
      common_vendor.index.navigateTo({
        url: "/pages/message/message"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.o(intoSearch),
        c: common_vendor.p({
          type: "search",
          size: "26"
        }),
        d: common_vendor.o(intoAddFriend),
        e: common_vendor.p({
          type: "plusempty",
          size: "26"
        }),
        f: common_vendor.f(10, (chat, k0, i0) => {
          return {
            a: chat,
            b: common_vendor.o(($event) => intoMessage(), chat)
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0a633310"]]);
wx.createPage(MiniProgramPage);
