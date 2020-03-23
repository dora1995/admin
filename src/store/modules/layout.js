const state = {
  sideBarOpened: sessionStorage.getItem('layout_sideBar_opened')
    ? sessionStorage.getItem('layout_sideBar_opened')
    : 'false',
}
const mutations = {
  SET_SIDEBAR_OPENED(state, payload) {
    state.opened = String(payload)
    sessionStorage.setItem('layout_sideBar_opened', payload)
  }
}
const actions = {

}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
