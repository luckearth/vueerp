import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueMaterial from 'vue-material'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './components/icon-svg/index'; // 封装的svg组件
import './assets/custom-theme/index.css'; // 换肤版本element-ui css https://github.com/PanJiaChen/custom-element-theme
import './styles/normalize.css';// normalize.css 样式格式化
import './styles/index.scss'; // 全局自定义的css样式
Vue.use(ElementUI, VueMaterial)
Vue.config.productionTip = false
//判断页面是否需要验证
router.beforeEach(({ meta, path }, from, next) => {
    const { auth = true } = meta   //路由未设置auth则默认初始化为true, meta代表的是to中的meta对象，path代表的是to中的path对象
    const token = localStorage.getItem('token');  // 管理员TOKEN
    console.log(token);
    if (auth && !token) {  // 路由中 auth为空 或 auth 为真 并且TOKEN 为空  则需要登录
        return next({ path: '/login' })  // 跳转到login
    }
    next()  // 进行下一个钩子函数
})
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');