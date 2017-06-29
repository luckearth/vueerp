import * as types from './mutation-types'

export default {
    // 用户登录
    [types.USER_LOGIN](state, params) {
        state.token = params.token;
        localStorage.token = params.token;
    },
    // 用户退出
    [types.USER_LOGOUT](state) {
        localStorage.removeItem('token');
        state.token = null;
    },
    // 用户注册
    [types.USER_REGISTER](state, params) {
        state.userProfile = params;
        state.token = params.token;
        localStorage.token = params.token;
    }
};