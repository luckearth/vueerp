const routes = [
    {
        path: '/',
        name: 'home',
        component: resolve => require(['../page/home.vue'], resolve)
    },
    {
        path: '/login',
        name: 'login',
        component: resolve => require(['../page/login.vue'], resolve)
    },
    {
        path: '/main',
        name: 'main',
        component: resolve => require(['../page/main.vue'], resolve)
    },
    {
        path: '/list',
        name: 'list',
        component: resolve => require(['../page/list.vue'], resolve),
        meta: {
            auth: true,  // 添加该字段，表示进入这个路由是需要登录的
        },
    }
]

export default routes