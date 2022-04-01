import axios from "axios"
import store from "../store"
import {baseURL} from "../config"

const CancelToken = axios.CancelToken // axios重复请求方法


class HttpRequest {
  constructor(baseURL) {
    this.baseURL = baseURL
    this.pending = {}

  }

  getInsideConfig() {
    return {
      baseURL: this.baseURL,
      timeout: 60000,
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    }
  }

  /**
   *第一次请求的时候, this.pending里面是什么都没有的
   在请求拦截里面 执行this.removePending(key, true)方法
   this.pending[key]不为真,所以执行delete this.pending[key]清空里面的key
   *在config.cancelToken = new CancelToken中 赋值了this.pending[key] = c
   *所以没有响应回来前再次请求时 this.removePending(key, true)方法中this.pending[key]和isRequest就都为真了
   就会触发this.pending[key]('取消重复请求')
   *在数据响应回来后 执行this.removePending(key) 因为isRequest为false, 所以执行delete this.pending[key]清空里面的key
   */

  removePending(key, isRequest = false) {
    if (this.pending[key] && isRequest) {
      this.pending[key]('正在加载中,请不要重复点击')
    }
    delete this.pending[key]
  }

  // 拦截器
  interceptors(instance) {
    // 请求拦截
    instance.interceptors.request.use((config) => {
      // console.log('config:' + JSON.stringify(config, null, 2))
      // console.log(config)

      // 配置哪些请求需要带上token,哪些不需要
      let isPublic = false
      const token = store.getState().userReducer.token
      console.log(' %c 🐱‍🏍 token: ', 'font-size:20px;background-color: #42b983;color:#fff;', token)
      // const token = store.state.token

      // publicPath.map((path) => {
      //   isPublic = isPublic || path.test(config.url) // 过滤当前url请求是否为需要带上token的
      // })
      if (!isPublic && token) {
        config.headers.Authorization = 'Bearer ' + token
      }

      // 重复请求拦截
      const key = config.url + '&' + config.method
      this.removePending(key, true)
      config.cancelToken = new CancelToken((c) => {
        this.pending[key] = c
      })
      return config
    }, err => {
      return Promise.reject(err)
    })
    // 响应拦截
    instance.interceptors.response.use(
      response => {
        const key = response.config.url + '&' + response.config.method
        this.removePending(key)
        return response
      },
      error => {
        return Promise.reject(error)
      }
    )
  }


  request(options) {
    const instance = axios.create()
    const newOptions = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance)
    return instance(newOptions)
  }

  get(url, config) {
    const instance = Object.assign({
      method: 'get',
      url
    }, config)
    // const instance = Object.assign({method: 'get', url}, config)
    return this.request(instance)
  }

  post(url, data) {
    return this.request({
      method: 'post',
      url,
      data
    })
  }
}

const Axios = new HttpRequest(baseURL)
export default Axios
