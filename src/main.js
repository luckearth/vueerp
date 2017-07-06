import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueMaterial from 'vue-material'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './styles/css/normalize.css';// normalize.css 样式格式化
import './styles/css/font-awesome.min.css'; // 全局自定义的css样式

Vue.use(ElementUI, VueMaterial)
Vue.config.productionTip = false
//判断页面是否需要验证
router.beforeEach(({ meta, path }, from, next) => {
    const { auth = true } = meta   //路由未设置auth则默认初始化为true, meta代表的是to中的meta对象，path代表的是to中的path对象
    const session = sessionStorage.getItem('user');  // session
    if (auth && !session) {  // 路由中 auth为空 或 auth 为真 并且TOKEN 为空  则需要登录
        return next({ path: '/login' })  // 跳转到login
    }
    next()  // 进行下一个钩子函数
})
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');