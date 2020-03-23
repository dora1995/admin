const getters = {
  // 导航栏开闭情况
  sideBar_opened: state => {
    if (state.layout.sideBarOpened === 'false') {
      return false
    } else if (state.layout.sideBarOpened === 'true') {
      return true
    }
  },
  // 返回能访问的路由
  routes: state => {
    return state.app.routes
  }
}

export default getters
