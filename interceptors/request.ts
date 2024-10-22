import { http, toast } from 'uview-plus'
import { useUserStore } from '@/stores/user'
import { router, Routes } from '@/router'
import globalConfig from '@/config'
import { RefreshTokenWayEnum } from '@/enum'

// 是否正在刷新的标记
let isRefreshing = false
// 重试队列，每一项将是一个待执行的函数形式
let requests: Function[] = []

const requestInterceptors = () => {
  /**
   * 请求拦截
   * @param {Object} http
   */
  http.interceptors.request.use(
    async (config: any) => {
      // 初始化请求拦截器时，会执行此方法，此时data为undefined，赋予默认{}
      config.data = config.data || {}

      if (config.custom.loading) {
        uni.showLoading()
      }

      if (config.custom.auth) {
        const token = useUserStore().accessToken
        if (!token) {
          console.error('Token不存在，取消请求')
          uni.hideLoading()
          return Promise.reject(config)
        }
        config.header.Authorization = 'Bearer ' + token
      }

      if (!config.custom.intercept) return config

      const handleTokenRefresh = async (config: any) => {
        if (isRefreshing) {
          return await retryOriginalRequest(config)
        }

        isRefreshing = true
        console.log('刷新token')

        const token = useUserStore().refreshTokenForRequestInterceptors()
        if (token) {
          isRefreshing = false
          console.log('刷新token成功，执行队列', requests)
          requests.forEach(cb => cb(token))
          requests = []
        } else {
          console.error('刷新token失败')
          isRefreshing = false
          return Promise.reject(config)
        }

        return config
      }

      const retryOriginalRequest = (config: any) => {
        return new Promise(resolve => {
          requests.push((token: string) => {
            config.header.Authorization = 'Bearer ' + token
            resolve(config)
          })
        })
      }
      if (globalConfig.refreshTokenWay === RefreshTokenWayEnum.REQUEST) {
        return handleTokenRefresh(config)
      }

      return config
    },
    (error: any) => Promise.reject(error)
  )
}

const responseInterceptors = () => {
  /**
   * 响应拦截
   * @param {Object} http
   */
  http.interceptors.response.use(
    async (response: any) => {
      const custom = response.config?.custom
      uni.hideLoading()

      if (custom.download) return response

      const data = response.data

      if (data.code !== globalConfig.successCode) {
        if (custom.toast !== false) {
          toast(data.msg ?? '请求失败')
        }

        const handleNoAuth = async (config: any) => {
          if (globalConfig.refreshTokenWay === RefreshTokenWayEnum.RESPONSE) {
            if (!isRefreshing) {
              isRefreshing = true

              try {
                const token =
                  useUserStore().refreshTokenForResponseInterceptors()
                config.header.Authorization = 'Bearer ' + token
                config.baseURL = ''

                requests.forEach(cb => cb(token))
                requests = []

                return http.request(config)
              } catch (e) {
                console.error('refresh token error =>', e)
                useUserStore().clearProfile()
                router({
                  type: 'redirect',
                  url: Routes.LOGIN
                })
              } finally {
                isRefreshing = false
              }
            } else {
              return new Promise(resolve => {
                requests.push((token: string) => {
                  config.baseURL = ''
                  config.header.Authorization = 'Bearer ' + token
                  resolve(http.request(config))
                })
              })
            }
          } else {
            useUserStore().clearProfile()
            router({
              type: 'redirect',
              url: Routes.LOGIN
            })
          }
        }
        if (data.code === globalConfig.noAuthCode) {
          return handleNoAuth(response.config)
        }

        if (custom.catch) {
          return Promise.reject(data)
        } else {
          return new Promise(() => {})
        }
      }

      return data.data || {}
    },
    (error: unknown) => {
      /* 对响应错误做点什么 （statusCode !== 200）*/
      return Promise.reject(error)
    }
  )
}

export { requestInterceptors, responseInterceptors }
