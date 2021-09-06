import axios from "axios";

const instance = axios.create({    //创建axios实例，在这里可以设置请求的默认配置
    timeout: 10000, // 设置超时时间10s
})

/** 请求拦截器 **/
instance.interceptors.request.use(config => {
    return config
}, error => {
    // 对请求错误做些什么
    return error
})

/** 响应拦截器  **/
instance.interceptors.response.use(response => {
    return Promise.resolve(response)
}, error => {
    return Promise.reject('请求错误');
})
/** 请求  **/
export function get({ url, method, params,data }) {
    return new Promise((resolve, reject) => {
        instance({
            method: method,
            url,
            params,
            data
        }).then(response => {
            resolve(response)
        }).catch(error => {
            reject(error)
        })
    })
}