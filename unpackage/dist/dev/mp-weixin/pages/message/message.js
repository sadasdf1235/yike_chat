"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_tm_navbar2 = common_vendor.resolveComponent("tm-navbar");
  const _easycom_tm_app2 = common_vendor.resolveComponent("tm-app");
  (_easycom_tm_navbar2 + _easycom_tm_app2)();
}
const _easycom_tm_navbar = () => "../../tmui/components/tm-navbar/tm-navbar.js";
const _easycom_tm_app = () => "../../tmui/components/tm-app/tm-app.js";
if (!Math) {
  (_easycom_tm_navbar + _easycom_tm_app)();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      title: "name",
      hideHome: true
    }),
    b: common_vendor.f(10, (item, index, i0) => {
      return {
        a: common_vendor.n(index % 2 == 0 ? ["mr-0 ml-20"] : ""),
        b: common_vendor.n(index % 2 == 0 ? ["bg-FFE431-color", "accept_content"] : ""),
        c: common_vendor.n(index % 2 == 0 ? ["flex-row-reverse"] : "")
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4c1b26cf"]]);
wx.createPage(MiniProgramPage);
