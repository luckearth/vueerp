import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
    token: null,
    userProfile: {}
}

export default new Vuex.Store({
    //strict: process.env.NODE_ENV !== 'production',// 严格模式
    state,
    getters,
    actions,
    mutations
})