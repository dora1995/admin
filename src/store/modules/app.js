import { commonRoute } from '@/router'
const state = {
  // superRoot/root/user/tourists
  role: sessionStorage.getItem('app_role')
    ? sessionStorage.getItem('app_role')
    : 'tourists',
  routes: commonRoute,
  addRoutes: []
}
const mutations = {
  SET_ROLE(state, payload) {
    const type = {
      1: 'superRoot',
      2: 'root',
      3: 'user',
      4: 'tourists'
    }
    state.role = type[payload] || type[4]
    sessionStorage.setItem('app_role', state.role)
  },
  SET_ROUTE(state, payload) {
    state.routes = [...commonRoute, ...payload]
    state.addRoutes = payload
  }
}
const actions = {}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
