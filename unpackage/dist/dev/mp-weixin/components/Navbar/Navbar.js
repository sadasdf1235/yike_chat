"use strict";
const common_vendor = require("../../common/vendor.js");
const hooks_useSystemInfo = require("../../hooks/useSystemInfo.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "Navbar",
  props: {
    showBack: {
      type: Boolean,
      default: true
    },
    iconSize: {
      type: Number,
      default: 30
    },
    title: {
      type: String,
      default: "标题"
    }
  },
  setup(__props) {
    const {
      status,
      navHeight,
      menuButtonInfo
    } = hooks_useSystemInfo.useSystemInfo();
    const statusStyle = common_vendor.computed(() => {
      return {
        height: status.value + "rpx"
      };
    });
    const navStyle = common_vendor.computed(() => {
      return {
        height: navHeight.value + "rpx"
      };
    });
    const rightStyle = common_vendor.computed(() => {
      var _a, _b;
      const menuButtonWidth = ((_a = menuButtonInfo.value) == null ? void 0 : _a.width) ? ((_b = menuButtonInfo.value) == null ? void 0 : _b.width) + 24 : 0;
      return {
        marginRight: menuButtonWidth * 2 + "rpx"
      };
    });
    const back = () => {
      common_vendor.index.navigateBack();
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.s(statusStyle.value),
        b: __props.showBack
      }, __props.showBack ? {
        c: common_vendor.o(back),
        d: common_vendor.p({
          type: "left",
          size: __props.iconSize
        })
      } : {}, {
        e: common_vendor.t(__props.title),
        f: common_vendor.s(rightStyle.value),
        g: common_vendor.s(navStyle.value)
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-05f6b923"]]);
wx.createComponent(Component);
