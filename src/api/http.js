import axios from 'axios'

const HTTPSUCCESS = ['0000']
const baseURL = process.env.VUE_APP_BASE_API || ''
const http = axios.create({
  timeout: 30000,
  baseURL
})
// 请求拦截器
http.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// 响应拦截器
http.interceptors.response.use(
  res => {
    const status = res.status
    const code = res.data.code
    let statusok = false
    let codeok = false
    if ((status >= 200 && status < 300) || status === 304) {
      statusok = true
    }
    if (statusok && HTTPSUCCESS.includes(code)) {
      codeok = true
    }

    if (statusok && codeok) {
      return Promise.resolve(res.data.data)
    } else {
      return Promise.reject(res.data || res)
    }
  },
  error => {
    if (error.response) {
      const status = error.response.status
      switch (status) {
        case 401:
          // todo to login
          router.replace({
            path: '/login',
            query: {
              redirect: router.currentRoute.fullPath
            }
          })
          break
        case 404:
          console.error('网络请求不存在')
          break
        default:
          console.error(error.response.data.message)
      }
    } else {
      // 请求超时或者网络有问题
      if (error.message.includes('timeout')) {
        console.error('请求超时!请检查网络是否正常')
      } else {
        console.error('请求失败!请检查网络是否已连接')
      }
    }
    return Promise.reject(error)
  }
)

export function post(url, params) {
  return http.post(url, params)
}
export function get(url, params) {
  return http.get(url, {
    params
  })
}
export default http
