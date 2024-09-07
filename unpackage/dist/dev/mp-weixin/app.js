"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const tmui_index = require("./tmui/index.js");
const config_index = require("./config/index.js");
if (!Math) {
  "./pages/chat/chat.js";
  "./pages/discover/discover.js";
  "./pages/mine/mine.js";
  "./pages/search/search.js";
  "./pages/message/message.js";
  "./pages/user_detail/user_detail.js";
  "./pages/addFriend/addFriend.js";
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "App",
  setup(__props) {
    common_vendor.onLaunch(() => {
      console.log("App Launch");
    });
    common_vendor.onShow(() => {
      console.log("App Show");
    });
    common_vendor.onHide(() => {
      console.log("App Hide");
    });
    return () => {
    };
  }
});
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  app.use(tmui_index.tmui, { ...config_index.config });
  return {
    app,
    Pinia: common_vendor.Pinia
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
