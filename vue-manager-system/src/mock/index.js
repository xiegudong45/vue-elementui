import Mock from 'mockjs'
import HomeApi from './home.js'
// 延时 200 - 1000

Mock.setup({
  timeout: '200-2000'
})

// 首页相关
// 拦截的是/home/getData
Mock.mock(/\/home\/getData/, 'get', HomeApi.getHomeData)
