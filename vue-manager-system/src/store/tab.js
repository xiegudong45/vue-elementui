export default {
  state: {
    isCollapse: false,
    currentMenu: null,
    menu: [],
    tabList: [
      {
        path: '/',
        name: 'home',
        label: '首页',
        icon: 'home'
      }
    ]
  },
  mutations: {
    selectMenu(state, val) {
      // state.currentMenu = val.name === 'home' ? null : val
      if (val.name !== 'home') {
        state.currentMenu = val
        // debugger
        let idx = state.tabList.findIndex(item => item.name === val.name)
        if (idx === -1) {
          state.tabList.push(val)
        }
      } else {
        state.currentMenu = null
      }
    },
    closeTab(state, val) {
      let idx = state.tabList.findIndex(item => item.name === val.name)
      state.tabList.splice(idx, 1)
    },
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse
    }
  },
  actions: {}
}
