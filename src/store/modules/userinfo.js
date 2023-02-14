export default {
    namespaced: true,
    state: {
        uInfo: (localStorage.getItem('userInfo') && JSON.parse(localStorage.getItem('userInfo')) )|| {}
    },
    mutations: {
        setUserInfo(state, uInfo) {
            state.uInfo = uInfo
        }
    }
}