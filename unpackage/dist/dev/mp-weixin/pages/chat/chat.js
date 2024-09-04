"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_Navbar2 = common_vendor.resolveComponent("Navbar");
  const _easycom_z_paging2 = common_vendor.resolveComponent("z-paging");
  (_easycom_uni_icons2 + _easycom_Navbar2 + _easycom_z_paging2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_Navbar = () => "../../components/Navbar/Navbar.js";
const _easycom_z_paging = () => "../../uni_modules/z-paging/components/z-paging/z-paging.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_Navbar + _easycom_z_paging)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "chat",
  setup(__props) {
    const intoSearch = () => {
      common_vendor.index.navigateTo({
        url: "/pages/search/search"
      });
    };
    const intoAddFriend = () => {
    };
    const intoMessage = () => {
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
        }),
        g: common_vendor.sr("paging", "0a633310-0"),
        h: common_vendor.o(_ctx.queryList),
        i: common_vendor.o(($event) => _ctx.dataList = $event),
        j: common_vendor.p({
          modelValue: _ctx.dataList
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0a633310"]]);
wx.createPage(MiniProgramPage);
