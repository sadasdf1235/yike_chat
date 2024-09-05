"use strict";
const common_vendor = require("../../../common/vendor.js");
const tmui_tool_lib_minxs = require("../../tool/lib/minxs.js");
if (!Math) {
  (tmIcon + tmText + tmSheet)();
}
const tmSheet = () => "../tm-sheet/tm-sheet.js";
const tmText = () => "../tm-text/tm-text.js";
const tmIcon = () => "../tm-icon/tm-icon.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "tm-avatar",
  props: {
    ...tmui_tool_lib_minxs.custom_props,
    size: {
      type: [Number],
      default: 90
    },
    //是否开启交互，在pc端有用，鼠标移上去变成手型
    trigger: {
      type: [Boolean, String],
      default: false
    },
    triggerColor: {
      type: [String],
      default: ""
    },
    iconColor: {
      type: [String],
      default: ""
    },
    triggerIcon: {
      type: [String],
      default: ""
    },
    triggerStyle: {
      type: [String],
      default: ""
    },
    round: {
      type: [Number],
      default: 6
    },
    border: {
      type: [Number],
      default: 0
    },
    margin: {
      type: Array,
      default: () => [0, 0]
    },
    padding: {
      type: Array,
      default: () => [0, 0]
    },
    transprent: {
      type: [Boolean, String],
      default: false
    },
    label: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    img: {
      type: String,
      default: ""
    },
    /**
     * 当img出错时的占位图片
     */
    errorImg: {
      type: String,
      default: ""
    },
    //自动匹配字体大小。
    fontSize: {
      type: [Number],
      default: 0
    },
    unit: {
      type: String,
      default: "rpx"
    }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const props = __props;
    const imgLoadError = common_vendor.ref(false);
    const _margin = common_vendor.computed(() => {
      if (props.margin.length == 1)
        return [props.margin[0], props.margin[0], props.margin[0], props.margin[0]];
      if (props.margin.length == 2)
        return [props.margin[0], props.margin[1], props.margin[0], props.margin[1]];
      if (props.margin.length == 3)
        return [props.margin[0], props.margin[1], props.margin[2], 0];
      if (props.margin.length == 4)
        return [props.margin[0], props.margin[1], props.margin[2], props.margin[3]];
      return [0, 0, 0, 0];
    });
    const _padding = common_vendor.computed(() => {
      if (props.padding.length == 1)
        return [props.padding[0], props.padding[0], props.padding[0], props.padding[0]];
      if (props.padding.length == 2)
        return [props.padding[0], props.padding[1], props.padding[0], props.padding[1]];
      if (props.padding.length == 3)
        return [props.padding[0], props.padding[1], props.padding[2], 0];
      if (props.padding.length == 4)
        return [props.padding[0], props.padding[1], props.padding[2], props.padding[3]];
      return [0, 0, 0, 0];
    });
    const customCSSStyle = common_vendor.computed(() => tmui_tool_lib_minxs.computedStyle(props));
    const customClass = common_vendor.computed(() => tmui_tool_lib_minxs.computedClass(props));
    const width = common_vendor.computed(() => props.size ?? 90);
    const height = common_vendor.computed(() => props.size ?? 90);
    const fontSize = common_vendor.computed(() => {
      if (props.fontSize)
        return props.fontSize;
      if (props.label)
        return parseInt(String(width.value)) * 0.4;
      if (props.icon)
        return parseInt(String(width.value)) * 0.7;
      return props.size ?? 90;
    });
    const imgsize = common_vendor.computed(() => {
      return common_vendor.index.upx2px(fontSize.value - 4) + "px";
    });
    const triggSize = common_vendor.computed(() => {
      let wh = width.value / 3 + 6;
      wh = wh >= 64 ? 64 : wh;
      return {
        size: wh,
        fontSize: wh * 0.5
      };
    });
    const imgOnError = () => {
      imgLoadError.value = true;
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: props.img
      }, props.img ? {
        b: imgLoadError.value ? props.errorImg : props.img,
        c: imgsize.value,
        d: imgsize.value,
        e: common_vendor.n("round-" + props.round),
        f: common_vendor.o(imgOnError)
      } : props.icon ? {
        h: common_vendor.p({
          color: props.iconColor,
          userInteractionEnabled: false,
          name: props.icon,
          ["font-size"]: fontSize.value,
          unit: props.unit
        })
      } : {
        j: common_vendor.p({
          userInteractionEnabled: false,
          label: props.label,
          ["font-size"]: fontSize.value,
          unit: props.unit
        })
      }, {
        g: props.icon,
        i: props.label,
        k: common_vendor.o(($event) => emits("click", $event)),
        l: common_vendor.p({
          color: props.color,
          _class: [customClass.value, "flex-center flex-col"],
          _style: [customCSSStyle.value, {
            flexShrink: 1
          }],
          followTheme: props.followTheme,
          dark: props.dark,
          round: props.round,
          shadow: props.shadow,
          outlined: props.outlined,
          border: props.border,
          borderStyle: props.borderStyle,
          borderDirection: props.borderDirection,
          text: props.text,
          transprent: props.img ? true : props.transprent,
          linear: props.linear,
          linearDeep: props.linearDeep,
          width: width.value,
          height: height.value,
          margin: [0],
          padding: [0],
          unit: props.unit
        }),
        m: props.triggerIcon
      }, props.triggerIcon ? {
        n: common_vendor.p({
          name: props.triggerIcon,
          ["font-size"]: triggSize.value.fontSize,
          unit: props.unit,
          color: props.iconColor
        }),
        o: common_vendor.p({
          userInteractionEnabled: false,
          width: triggSize.value.size,
          height: triggSize.value.size,
          _style: props.triggerStyle,
          text: props.img ? false : !props.text,
          color: props.triggerColor || props.color,
          transprent: false,
          dark: props.dark,
          _class: "flex-center ",
          margin: [0, 0],
          padding: [0, 0],
          round: 24,
          unit: props.unit
        }),
        p: common_vendor.o(($event) => emits("click", $event)),
        q: `${width.value}${props.unit}`
      } : {}, {
        r: common_vendor.n(__props.trigger ? "trigger" : ""),
        s: common_vendor.n(`mx-${props.margin[0]} my-${props.margin[1]}`),
        t: common_vendor.s({
          width: width.value + props.unit,
          height: height.value + props.unit
        }),
        v: common_vendor.s({
          marginLeft: _margin.value[0] + "rpx",
          marginTop: _margin.value[1] + "rpx",
          marginRight: _margin.value[2] + "rpx",
          marginBottom: _margin.value[3] + "rpx",
          paddingLeft: _padding.value[0] + "rpx",
          paddingTop: _padding.value[1] + "rpx",
          paddingRight: _padding.value[2] + "rpx",
          paddingBottom: _padding.value[3] + "rpx"
        })
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f3745e15"]]);
wx.createComponent(Component);
