export default {
    namespaced: true,
    state: {
        uInfo: (localStorage.getItem('userInfo') && JSON.parse(localStorage.getItem('userInfo')) )|| {}
    },
    mutations: {
        setUserInfo(state, uInfo) {
            console.log('setUserInfo',uInfo)
            state.uInfo = uInfo
        }
    }
}