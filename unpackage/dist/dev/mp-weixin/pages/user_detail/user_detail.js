"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "user_detail",
  setup(__props) {
    const intoAddFriend = () => {
      common_vendor.index.navigateTo({
        url: "/pages/addFriend/addFriend"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(intoAddFriend)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6c6fd421"]]);
wx.createPage(MiniProgramPage);
