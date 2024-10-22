const config = {
  pro: {
    baseURL: 'http://192.168.3.6:19000',
    wsURL: '', // ws地址
    noAuthCode: 401,
    successCode: 0,
    lang: 'zh-CN' // 默认语言
  },
  dev: {
    baseUrl: 'http://192.168.3.6:19000',
    wsURL: '', // ws地址
    noAuthCode: 401, // 未登录返回码
    successCode: 0, // 请求成功返回码
    lang: 'zh-CN' // 默认语言
  },
  test: {
    baseURL: 'http://192.168.3.6:19000',
    wsURL: '', // ws地址
    noAuthCode: 401,
    successCode: 0,
    lang: 'zh-CN' // 默认语言
  }
}
export default config.dev
