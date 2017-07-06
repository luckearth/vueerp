import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import { routerMode } from '../api/env'
Vue.use(Router)
/**
 * mode: 'history',
 * 在创建的 router 对象中，如果不配置 mode，就会使用默认的 hash 模式，该模式下会将路径格式化为 #! 开头。
 * 添加 mode: 'history' 之后将使用 HTML5 history 模式，该模式下没有 # 前缀，而且可以使用 pushState 和 replaceState 来管理记录。
 * 关于 HTML5 history 模式的更多内容，可以参考官方文档：https://router.vuejs.org/zh-cn/essentials/history-mode.html
 */
const router = new Router({
  //base: '/',
  linkActiveClass: 'is-active',
  mode: routerMode,
  routes: routes
})

export default router