export default {
    namespaced: true,
    //全局状态初始值
    state: {
        num: 1
    },
    //计算属性
    getters: {
        countStatue(state) {
            return state.num <= 1
        }
    },
    //更新状态的方法-更新state的唯一方法：commit mutation
    mutations: {
        setCount(state, count) {
            state.num = count
        }
    },
    //可以异步操作，可以返回promise，更改数据还是传递到mutations去更改
    actions: {
        setCountPromise(context, num) {
            return new Promise((resolve, recject) => {
                if (num > 100) {
                    recject('值不能大于100')
                } else {
                    context.commit('setCount', num)//更改数据还是传递到mutations去更改
                    resolve()
                }
            })
        }
    },
}