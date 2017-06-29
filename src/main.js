import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueMaterial from 'vue-material'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI, VueMaterial)
Vue.config.productionTip = false

router.beforeEach(({ meta, path }, from, next) => {
    const { auth = false } = meta   //auth 设置默认不要验证就可以进入下一个页面 meta代表的是to中的meta对象，path代表的是to中的path对象
    var token = localStorage.getItem('token');  // true用户已登录， false用户未登录　
    if (auth && !token && path !== '/login') {  // auth 代表需要通过用户身份验证，默认为true，代表需要被验证， false为不用检验
        return next({ path: '/login' })  // 跳转到login页面
    }
    next()  // 进行下一个钩子函数
})
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');