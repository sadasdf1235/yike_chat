import { createSSRApp } from "vue";
import { createPersistedState } from 'pinia-plugin-persistedstate'
import tmui from "./tmui"
import App from "./App.vue";
import config from "./config/tm";

// 引入Pinia和持久缓存的设置
const pinia = createPinia().use(
  createPersistedState({
    storage: {
      getItem(key: string) {
        // #ifndef H5
        return uni.getStorageSync(key)
        // #endif
        // #ifdef H5
        return localStorage.getItem(key)
        // #endif
      },
      setItem(key: string, value: string) {
        // #ifndef H5
        return uni.setStorageSync(key, value)
        // #endif
        // #ifdef H5
        return localStorage.setItem(key, value)
        // #endif
      }
    }
  })
)

export function createApp() {
	const app = createSSRApp(App);
	app.use(pinia)
	app.use(tmui, { ...config } as Tmui.tmuiConfig);
	return {
		app
	};
}