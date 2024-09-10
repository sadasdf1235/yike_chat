"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_tm_avatar2 = common_vendor.resolveComponent("tm-avatar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_tm_navbar2 = common_vendor.resolveComponent("tm-navbar");
  const _easycom_z_paging2 = common_vendor.resolveComponent("z-paging");
  (_easycom_tm_avatar2 + _easycom_uni_icons2 + _easycom_tm_navbar2 + _easycom_z_paging2)();
}
const _easycom_tm_avatar = () => "../../tmui/components/tm-avatar/tm-avatar.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_tm_navbar = () => "../../tmui/components/tm-navbar/tm-navbar.js";
const _easycom_z_paging = () => "../../uni_modules/z-paging/components/z-paging/z-paging.js";
if (!Math) {
  (_easycom_tm_avatar + _easycom_uni_icons + _easycom_tm_navbar + _easycom_z_paging)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "chat",
  setup(__props) {
    const dataList = [];
    const queryList = () => {
    };
    const intoSearch = () => {
      common_vendor.index.navigateTo({
        url: "/pages/search/search"
      });
    };
    const intoAddFriend = () => {
    };
    const intoMessage = (chat) => {
      console.log(chat);
      common_vendor.index.navigateTo({
        url: "/pages/message/message"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          size: 70,
          img: "https://ts2.cn.mm.bing.net/th?id=ORMS.35c9466342ed96c647c73579400fb9e2&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.25&p=0"
        }),
        b: common_assets._imports_0,
        c: common_vendor.o(intoSearch),
        d: common_vendor.p({
          type: "search",
          size: "26"
        }),
        e: common_vendor.o(intoAddFriend),
        f: common_vendor.p({
          type: "plusempty",
          size: "26"
        }),
        g: common_vendor.p({
          hideHome: true,
          padding: [32, 0]
        }),
        h: common_vendor.f(10, (chat, k0, i0) => {
          return {
            a: "0a633310-5-" + i0 + ",0a633310-0",
            b: chat,
            c: common_vendor.o(($event) => intoMessage(chat), chat)
          };
        }),
        i: common_vendor.p({
          size: 96,
          round: 4,
          img: "https://ts2.cn.mm.bing.net/th?id=ORMS.3eb85da3993ccf02c1d5f09582891300&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.25&p=0"
        }),
        j: common_vendor.sr("paging", "0a633310-0"),
        k: common_vendor.o(queryList),
        l: common_vendor.o(($event) => dataList = $event),
        m: common_vendor.p({
          modelValue: dataList
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0a633310"]]);
wx.createPage(MiniProgramPage);
