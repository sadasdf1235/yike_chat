"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "addFriend",
  setup(__props) {
    const signature = common_vendor.ref("亲爱的，快点来到我这里～");
    const cancel = () => {
      signature.value = "";
      common_vendor.index.navigateBack();
    };
    const send = () => {
    };
    return (_ctx, _cache) => {
      return {
        a: signature.value,
        b: common_vendor.o(($event) => signature.value = $event.detail.value),
        c: common_vendor.o(cancel),
        d: common_vendor.o(send)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-51ba3ded"]]);
wx.createPage(MiniProgramPage);
