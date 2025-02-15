import { defineConfig, loadEnv } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import unocss from './js_sdk/a-hua-unocss/vite';
import vueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from 'unplugin-auto-import/vite'
import { resolve } from "path"
import path from 'node:path'
import { visualizer } from 'rollup-plugin-visualizer'
import ViteRestart from 'vite-plugin-restart'
import dayjs from 'dayjs'
// import Components from 'unplugin-vue-components/vite'

export default async ({ command, mode } : { command : string, mode : string }) => {
	console.log('command, mode -> ', command, mode)

	const { UNI_PLATFORM } = process.env
	console.log('UNI_PLATFORM -> ', UNI_PLATFORM) // 得到 mp-weixin, h5, app 等

	const env = loadEnv(mode, path.resolve(process.cwd(), 'env'))
	const {
		VITE_APP_PORT,
		VITE_SERVER_BASEURL,
		VITE_DELETE_CONSOLE,
		VITE_SHOW_SOURCEMAP,
		VITE_APP_PROXY,
		VITE_APP_PROXY_PREFIX
	} = env
	console.log('环境变量 env -> ', env)

	return defineConfig({
		envDir: './env', // 自定义env目录
		resolve: {
			alias: [
				{
					find: "@",
					replacement: resolve(__dirname, './')
				}
			]
		},
		plugins: [
			uni(),
			vueJsx(),
			unocss(),
			AutoImport({
				imports: ['vue', 'uni-app', 'pinia'],
				dts: './typings/auto-import.d.ts',
				// dirs: ['src/stores'],
				eslintrc: {
					enabled: true
				},
				vueTemplate: true
			}),
			ViteRestart({
				// 通过这个插件，在修改vite.config.js文件则不需要重新运行也生效配置
				restart: ['vite.config.js']
			}),
			// h5环境增加编译时间
			UNI_PLATFORM === 'h5' && {
				name: 'html-transform',
				transformIndexHtml(html) {
					return html.replace(
						'%BUILD_DATE%',
						dayjs().format('YYYY-MM-DD HH:mm:ss')
					)
				}
			},
			// 打包分析插件，h5 + 生产环境才弹出
			UNI_PLATFORM === 'h5' &&
			mode === 'production' &&
			visualizer({
				filename: './node_modules/.cache/visualizer/stats.html',
				open: true,
				gzipSize: true,
				brotliSize: true
			})
		],
		define: {
			__UNI_PLATFORM__: JSON.stringify(UNI_PLATFORM),
			__VITE_APP_PROXY__: JSON.stringify(VITE_APP_PROXY)
		},
		css: {
			postcss: {
				plugins: []
			}
		},
		server: {
			host: '0.0.0.0',
			hmr: true,
			port: Number.parseInt(VITE_APP_PORT, 10),
			// 仅 H5 端生效，其他端不生效（其他端走build，不走devServer)
			proxy: VITE_APP_PROXY
				? {
					[VITE_APP_PROXY_PREFIX]: {
						target: VITE_SERVER_BASEURL,
						changeOrigin: true,
						rewrite: path =>
							path.replace(new RegExp(`^${VITE_APP_PROXY_PREFIX}`), '')
					}
				}
				: undefined
		},
		build: {
			// 方便非h5端调试
			sourcemap: VITE_SHOW_SOURCEMAP === 'true', // 默认是false
			target: 'es6',
			// 开发环境不用压缩
			minify: mode === 'development' ? false : 'terser',
			terserOptions: {
				compress: {
					drop_console: VITE_DELETE_CONSOLE === 'true',
					drop_debugger: true
				}
			}
		}
	});
}