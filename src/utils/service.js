import axios from 'axios'
import { ElLoading } from 'element-plus'
import { ElMessage } from 'element-plus'

let loadingObj = null
const Service = axios.create({
    timeout: 5000,
    baseURL: 'http://xxx',
    headers: {
        "Content-Type": "application/json;charset=utf-8"
    }
})

Service.interceptors.request.use(config => {
    loadingObj = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
    })
    return config
})


Service.interceptors.response.use(response => {
    loadingObj.close()
    return response.data
}, err => {
    loadingObj.close()
    ElMessage({
        message: '服务器错误',
        type: 'error',
    })
})