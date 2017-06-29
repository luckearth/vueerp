import * as types from './mutation-types'

export default {
    actionUserLogin({ commit }, params) {
        commit(types.USER_LOGIN, params);
    },
    actionUserRegister({ commit }, params) {
        commit(types.USER_REGISTER, params);
    },
};