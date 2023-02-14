import { mypost,myget}from './service'
export const loginApi = data=>{
    return mypost({
        url:'/login',
        data
    })
}

export const userApi = params=>{
    return myget({
        url:'/users',
        params
    })
}

// 获取用户列表
export const userListApi=data=>{ 
    return myget({
        url:"/users",
        data
    })
} 

// 新增用户列表
export const userAddApi=data=>{ 
    return post({
        url:"/users",
        data
    })
} 
//  用户列表更改状态
export const userChangeStateApi=data=>{ 
    return put({
        url:`users/${data.id}/state/${data.mg_state}`,
        data
    })
} 
// 更改用户信息
export const userChangeInfoApi=data=>{ 
    return put({
        url:`users/${data.id}`,
        data
    })
} 
// 删除用户


export const userDeleteApi=data=>{ 
    return del({
        url:`users/${data.id}`
    })
} 

// 获取角色