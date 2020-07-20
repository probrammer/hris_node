import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state: {
        email: null
    },
    mutations: {
        setEmail (state, email) {
            state.email = email
        }
    },
    actions: {
        setEmail ({commit}, email) {
            commit('setEmail', email)
        }
    }
})