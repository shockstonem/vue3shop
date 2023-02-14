<template>
    <div class="common-layout">
        <el-container>

            <el-header class="flex-float">
                <div class="flex" @click="toIndex">
                    <img class="logo" src="../../assets/logo.png" alt="">
                    <h1 class="title">后台管理系统</h1>
                </div>
                <el-button type="danger" @click="loginOut">退出</el-button>
            </el-header>

            <el-container>
                <el-aside width="200px">
                    <el-menu :router="true" background-color="none" text-color="#fff">
                        <el-sub-menu index="1">
                            <template #title>
                                <el-icon><User /></el-icon>
                                <span>账号管理</span>
                            </template>
                            <el-menu-item-group >
                                <el-menu-item index="/user">用户列表</el-menu-item>
                            </el-menu-item-group>
                        </el-sub-menu>
                        <el-sub-menu index="2">
                            <template #title>
                                <el-icon><SetUp /></el-icon>
                                <span>角色管理</span>
                            </template>
                            <el-menu-item-group >
                                <el-menu-item index="/roles">角色列表</el-menu-item>
                            </el-menu-item-group>
                        </el-sub-menu>
                        <el-sub-menu index="3">
                            <template #title>
                                <el-icon><Coordinate /></el-icon>
                                <span>商品管理</span>
                            </template>
                            <el-menu-item-group >
                                <el-menu-item index="/goods">商品列表</el-menu-item>
                            </el-menu-item-group>
                        </el-sub-menu>
                    </el-menu>
                </el-aside>

                <el-main>
                    <router-view></router-view>
                </el-main>

            </el-container>
        </el-container>
    </div>
</template>

<script>
import router from '@/router'
import store from '@/store'
import { reactive, toRefs } from 'vue'
export default {
    setup() {
        const data = reactive({
            name: 'zs'
        })

        const loginOut = ()=>{
            localStorage.removeItem('userInfo')
            store.commit('uInfo/setUserInfo',{})
            router.push({
                path:'/login'
            })
        }

        const toIndex = ()=>{
            router.push('/')
        }

        return {
            ...toRefs(data),
            loginOut,
            toIndex
        }
    }
}
</script>

<style>
.el-container {
    height: 100vh;
    overflow: hidden;
}

.el-header {
    background-color: #312f2f;
}

.el-aside {
    background-color: #4d4848;
}

.el-main {
    background-color: #ccc;
}

/* .el-header {
    display: flex;
    justify-content: space-between;
}
.top{
    display: flex;
} */
.logo {
    width: 60px;
    height: 60px;
}

.title {
    color: #FFF;
}
</style>
