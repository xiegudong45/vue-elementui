module.exports = {
  devServer: {
    port: 3333,
    open: true
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/_variable.scss";` // @表示相对路径
      }
    }
  }
}
