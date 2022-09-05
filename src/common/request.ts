// @ts-ignore
import axios, {AxiosInstance} from 'axios'
import {ElMessage} from 'element-plus'
import {hexMD5} from "./md5"
import localStorageCache from "./localStorage"
import _ from "lodash"

class RequestService {
    private axios: undefined | AxiosInstance;
    private requestList: any;

    constructor() {
        let that = this
        that.requestList = []
        that.axios = axios.create({
            baseURL: import.meta.env.VITE_APP_USE_MOCK ? import.meta.env.VITE_APP_USE_MOCK : import.meta.env.VITE_APP_API, // 所有的请求地址前缀部分
            timeout: 60000, // 请求超时时间毫秒
            withCredentials: false, // 异步请求携带cookie
            headers: {
                "Content-Type": 'application/x-www-form-urlencoded'
            },
            data: {}
        })

        // 请求拦截
        that.axios.interceptors.request.use(
            function (config: any) {
                let token = localStorageCache.get('x-token')
                config.headers["X-Token"] = token ? token.token : ""
                let urlMd5 = hexMD5(config.url)
                if (that.requestList.includes(urlMd5)) {
                    return
                }
                that.requestList.push(urlMd5)
                return config
            },
            function (error: any) {
                that.requestList.splice(that.requestList.indexOf(hexMD5(error.config.url)), 1)
                console.log(error)
                return Promise.reject(error)
            }
        )

        // 响应拦截
        that.axios.interceptors.response.use(
            function (response: any) {
                let res = response.data
                that.requestList.splice(that.requestList.indexOf(hexMD5(response.config.url)), 1)

                if (res.code === 20001) {
                    window.location.href = '/login'
                    return
                }
                if (res.code === 0) {
                    ElMessage({
                        message: res.data.msg,
                        type: 'warning',
                    })
                }
                return res
            },
            function (error: any) {
                console.log(error)
                return Promise.reject(error)
            }
        )
    }

    get(url: string, data?: any) {
        // @ts-ignore
        return this.axios.get(url, {params: data})
    }

    post(url: string, data: any, isHandle?: boolean) {
        isHandle = isHandle || true
        if (isHandle) {
            data = Object.keys(data).map(item => {
                let value = data[item];
                if (_.isArray(value) || _.isObject(value)) {
                    value = JSON.stringify(value)
                }
                return encodeURIComponent(item) + '=' + encodeURIComponent(value)
            }).join('&');
        }
        // @ts-ignore
        return this.axios.post(url, data)
    }

    axiosObj() {
        return this.axios
    }
}

const request = new RequestService()
export default request
