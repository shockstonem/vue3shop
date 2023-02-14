import { mypost,myget}from './service'
export const loginApi = data=>{
    return mypost({
        url:'/login',
        data
    })
}