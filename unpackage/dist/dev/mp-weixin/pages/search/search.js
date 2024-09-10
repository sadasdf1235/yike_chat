"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_tm_input2 = common_vendor.resolveComponent("tm-input");
  const _easycom_tm_navbar2 = common_vendor.resolveComponent("tm-navbar");
  const _easycom_tm_app2 = common_vendor.resolveComponent("tm-app");
  (_easycom_tm_input2 + _easycom_tm_navbar2 + _easycom_tm_app2)();
}
const _easycom_tm_input = () => "../../tmui/components/tm-input/tm-input.js";
const _easycom_tm_navbar = () => "../../tmui/components/tm-navbar/tm-navbar.js";
const _easycom_tm_app = () => "../../tmui/components/tm-app/tm-app.js";
if (!Math) {
  (_easycom_tm_input + _easycom_tm_navbar + _easycom_tm_app)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "search",
  setup(__props) {
    const keyword = common_vendor.ref("");
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
        a: common_vendor.o(($event) => keyword.value = $event),
        b: common_vendor.p({
          margin: [16, 0],
          suffix: "tmicon-search",
          placeholder: "ID/昵称/群",
          modelValue: keyword.value
        }),
        c: common_vendor.o(back),
        d: common_vendor.p({
          hideHome: true,
          hideBack: true,
          title: "",
          leftWidth: 500
        }),
        e: common_vendor.o(($event) => handleClick($event)),
        f: common_vendor.o(intoDetail)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c10c040c"]]);
wx.createPage(MiniProgramPage);
