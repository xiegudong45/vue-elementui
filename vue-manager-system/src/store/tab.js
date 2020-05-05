export default {
  state: {
    menu: [],
    currentMenu: null
  },
  mutations: {
    selectMenu(state, val) {
      state.currentMenu = val.name === 'home' ? null : val
    }
  },
  actions: {}
}
