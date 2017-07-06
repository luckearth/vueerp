import * as types from './mutation-types'

export default {
    actionUserLogin({ commit }, params) {
        commit(types.USER_LOGIN, params);
    },
    actionUserLogout({ commit }) {
        commit(types.USER_LOGOUT);
    },
    actionUserRegister({ commit }, params) {
        commit(types.USER_REGISTER, params);
    },
};