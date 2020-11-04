import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    alllData: [
      { name: '' },
      { lastname: '' },
      { id: '' },
      { password: '' },
      { age: '' },
      {
        email: '',
      },
      {
        telephone: '',
      },
      {
        address: '',
      },
      {
        district: '',
      },
      {
        province: '',
      },
    ],
    orderData: [],
    log: false,
    typeDuty: 0,
    headers: [
      {
        text: 'Piece',
        align: 'start',
        sortable: false,
        value: 'piece',
      },
    ],
  },

  mutations: {
    setUser(state, { payload }) {
      state.alllData = payload
      state.typeDuty = 1
      state.log = true
    },
    setAdmin(state, { payload }) {
      state.alllData = payload
      state.typeDuty = 2
      state.log = true
    },
    logingOut: (state, { out }) => {
      state.log = false
      state.allData = out
    },
    data(state, val) {
      state.data = val
    },
  },

  actions: {
    setUser({ commit }, payload) {
      commit('setUser', { payload })
    },
    setAdmin({ commit }, payload) {
      commit('setAdmin', { payload })
    },
    logingOut({ commit }, out) {
      commit('logingOut', { out })
    },
  },

  getters: {
    log: (state) => state.log,
    typeDuty: (state) => state.typeDuty,
    data(state) {
      return state.orderData
    },
  },
})
