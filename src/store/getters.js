const getters = {
  sideBar_opened: state => {
    if (state.layout.sideBarOpened === 'false') {
      return false
    } else if (state.layout.sideBarOpened === 'true') {
      return true
    }
  }
}

export default getters
