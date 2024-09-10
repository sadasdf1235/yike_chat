import { defineConfig, uno, variantGroup } from './js_sdk/a-hua-unocss';

/** 
 * 配置项；
 * uno.config.[js|ts]；
 * 注：配置根据自己项目来，不要复制以下整个配置，以下只是所有配置示例；
*/
export default defineConfig({
    /** 
     * 读取 uni.scss 文件内容生成颜色预设值；
     * 正则匹配：/\$[a-z0-9]+((\x20)+)?:((\x20)+)?\#([a-zA-Z0-9]{8|6|4|3})/g；
     * 注：只有 # 后面为 3位 或 6位 才有透明度；
    */
    readUniScssFileGenerateColorPresetValue: true,

    /** 运行环境 */
    mode: "development",

    /** 排出检测原子化 CSS 的目录或文件 */
    exclude: ['uni_modules', 'node_modules'],

    /** 
     * 日志记录: 写法一
     * 最终参数同一化：(filePath: string) => !!options.log
     * 开启后会在项目根目录生成 log.json 文件，记录为匹配到原子化预设规则的 class name
     */
    log: true,

    /** 日志记录: 写法二 */
    // log: (filePath: string) => true,
	

    /** 预设 */
    presets: [
        /** 默认预设规则 */
        uno()
    ],

    /** 变形 */
    transformers: [
        /** 伪类、伪元素 */
        variantGroup()
    ],

    /** 快捷方式；写法一 */
    shortcuts: {
        'btn': 'py-2 px-4',
        'red': 'text-red-100',
        'btn-green': 'text-white bg-green-70'
    },

    /** 快捷方式；写法二 */
    // shortcuts: [
    //     {
    //         btn: 'py-2 px-4',
    //     },

    //     [/^btn-(.*)$/, ([,, c]) => `bg-${c}-40 text-${c}-10 py-2`],
    // ],

    /** 自定义预设 CSS 规则 */
    rules: [
        ['w-1', { width: '0.25rem' }],
        [/^m-(\d+)$/, ([,, d]) => ({ margin: `${d / 4}rem` })],
        [/^p-(\d+)$/, match => ({ padding: `${match[2] / 4}rem` })]
    ]
});