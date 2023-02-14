import axios from 'axios'
import { ElLoading } from 'element-plus'
import { ElMessage } from 'element-plus'

let loadingObj = null
const Service = axios.create({
    timeout: 5000,
    baseURL: 'http://127.0.0.1:8888/api/private/v1/',
    headers: {
        "Content-Type": "application/json;charset=utf-8"
    }
})
//请求拦截，统一处理，增加loading
Service.interceptors.request.use(config => {
    loadingObj = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
    })
    return config
})

//响应拦截，对返回统一处理
Service.interceptors.response.use(response => {
    loadingObj.close()
    console.log(response)
    if (!response.data.data) {
        // ElMessage({
        //     message: response.data.meta.msg||"网络错误",
        //     type: 'error',
        // })
        ElMessage.error(response.data.meta.msg||"网络错误")
        return response.data
    }
    return response.data
}, err => {
    loadingObj.close()
    ElMessage({
        message: '服务器错误',
        type: 'error',
    })
})

//post请求
export const mypost = config => {
    return Service({
        ...config,
        method: 'post',
        data: config.data
    })
}
//get请求
export const myget = config => {
    return Service({
        ...config,
        method: 'get',
        data: config.data
    })
}

