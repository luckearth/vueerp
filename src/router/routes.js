const routes = [
    {
        path: '/',
        name: '首页',
        icon: 'fa fa-home',
        component: resolve => require(['../page/layout/index.vue'], resolve),
        redirect: '/welcome',
        children: [
            {
                path: '/welcome',
                name: '欢迎页',
                icon: 'fa fa-bullhorn',
                component: resolve => require(['../page/home.vue'], resolve)
            }
        ]
    },
    {
        path: '/article',
        name: '文章管理',
        icon: 'fa fa-folder-open-o',
        component: resolve => require(['../page/layout/index.vue'], resolve),
        redirect: '/article/index',
        children: [
            {
                path: '/article/index',
                name: '文章列表',
                icon: 'fa fa-folder-open-o',
                component: resolve => require(['../page/article/index.vue'], resolve)
            },
            {
                path: '/article/create',
                name: '创建文章',
                icon: 'fa fa-pencil-square-o',
                component: resolve => require(['../page/article/create.vue'], resolve)
            },
        ]
    },
    {
        path: '/category',
        name: '文章类别管理',
        icon: 'fa fa-folder-open-o',
        component: resolve => require(['../page/layout/index.vue'], resolve),
        redirect: '/category/index',
        children: [
            {
                path: '/category/index',
                name: '文章类别',
                icon: 'fa fa-folder-open-o',
                component: resolve => require(['../page/category/index.vue'], resolve)
            },
            {
                path: '/category/create',
                name: '创建类别',
                icon: 'fa fa-pencil-square-o',
                component: resolve => require(['../page/category/create.vue'], resolve)
            },
        ]
    },
    {
        path: '/user',
        name: '用户管理',
        icon: 'fa fa-user',
        component: resolve => require(['../page/layout/index.vue'], resolve),
        redirect: '/user/index',
        children: [
            {
                path: '/user/index',
                name: '用户列表',
                icon: 'fa fa-user',
                component: resolve => require(['../page/user/index.vue'], resolve)
            },
            {
                path: '/user/create',
                name: '创建用户',
                icon: 'fa fa-pencil-square-o',
                component: resolve => require(['../page/user/create.vue'], resolve)
            },
        ]
    },
    {
        path: '/login',
        name: '登录',
        component: resolve => require(['../page/login.vue'], resolve),
        meta: { auth: false },  // 添加该字段，表示进入这个路由不需要验证
        hidden: true
    },
    {
        path: '/404',
        name: '错误页面',
        component: resolve => require(['../page/404.vue'], resolve),
        meta: { auth: false },  // 添加该字段，表示进入这个路由不需要验证
        hidden: true
    },
    // 没有找到路由进入404页面
    {
        path: '*',
        redirect: '/404',
        meta: { auth: false },
        hidden: true
    }
]

export default routes