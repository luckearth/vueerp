import * as types from './mutation-types'

export default {
    // 用户登录
    [types.USER_LOGIN](state, params) {
        state.token = params.token;
        sessionStorage.setItem('user', JSON.stringify(params));
    },
    // 用户退出
    [types.USER_LOGOUT](state) {
        state.token = null;
        sessionStorage.removeItem('user');
    },
    // 用户注册
    [types.USER_REGISTER](state, params) {
        state.token = params.token;
        sessionStorage.removeItem('user');
    }
};