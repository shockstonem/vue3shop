<template>
    <div class="login-wrap">
        <div class="form-wrap">
            <el-form model="loginForm">
                <el-form-item label="用户名" label-width="80">
                    <el-input type="text" v-model="loginForm.username" />
                </el-form-item>
                <el-form-item label="密码" label-width="80">
                    <el-input type="password" v-model="loginForm.password" />
                </el-form-item>
            </el-form>
            <p>{{ num }}</p>
            <el-button type="primary" class="submit-btn" @click="submit">登录</el-button>
        </div>
    </div>
</template>
<script>
import { reactive, toRefs } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'
import router1 from '@/router'
import { loginApi } from '@/utils/request';
export default {
    setup() {
        const store = useStore()
        const router = useRouter()
        const count = store.state.number.num
        const data = reactive({
            loginForm: {
                username: '',
                password: ''
            },
            num: count,
        })
        console.log('更新前', store.getters['number/countStatue'])


        const submit = () => {
            //登录接口
            console.log(router === router1)
            loginApi(data.loginForm).then(res => {
                console.log("等苦返回", res.data)
                if (res.data) {
                    store.commit('uInfo/setUserInfo',res.data)//提交一次setUserInfo，从localstorage取一次信息
                    localStorage.setItem('userInfo',JSON.stringify(res.data))
                    console.log(data.loginForm)
                    router.push({
                        path:'/'
                    })
                }
            })
            //无接口时账号密码存在本地
            // store.commit('uInfo/setUserInfo',data.loginForm)
            // localStorage.setItem('userInfo',JSON.stringify(data.loginForm))
            // console.log(data.loginForm)
            // router.push({
            //     path:'/user'
            // })
        }


        //store的使用
        // const submit = ()=>{
        //     // store.commit('number/setCount',100)同步更改
        //     store.dispatch('number/setCountPromise',88).then(res=>{//异步更改
        //         alert('修改成功')
        //     }).catch(err=>{
        //         alert(err)
        //     })
        //     console.log(store.state.number.num)
        //     console.log("改变之后的",store.getters['number/countStatue'])
        // }
        return {
            ...toRefs(data),
            submit
        }
    }
}
</script>

<style>
.login-wrap {
    width: 100%;
    height: 100vh;
    position: relative;
    background-color: rgb(56, 86, 139);
}

.form-wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
}

.submit-btn {
    display: block;
    margin: auto;
}
</style>