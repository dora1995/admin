// 该文件放置layout相关的vuex配置，一般情况下不会修改到此文件

const state = {
  sideBarOpened: sessionStorage.getItem('layout_sideBar_opened')
    ? sessionStorage.getItem('layout_sideBar_opened')
    : 'false'
}
const mutations = {
  SET_SIDEBAR_OPENED(state, payload) {
    state.sideBarOpened = String(payload)
    sessionStorage.setItem('layout_sideBar_opened', payload)
  }
}
const actions = {}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
