const routes = [
    {
        path: '/',
        name: '首页',
        redirect: '/home',
        children: [
            {
                path: 'home',
                name: '首页',
                icon: 'el-icon-document',
                component: resolve => require(['../page/home.vue'], resolve)
            },
            {
                path: 'test',
                name: 'test',
                icon: 'el-icon-document',
                component: resolve => require(['../page/layout/index.vue'], resolve)
            },
        ]
    },
    {
        path: '/login',
        name: '登录',
        component: resolve => require(['../page/login.vue'], resolve),
        meta: { auth: false }  // 添加该字段，表示进入这个路由不需要验证
    },
    {
        path: '/logout',
        name: '退出',
        component: resolve => require(['../page/logout.vue'], resolve),
    },
    {
        path: '/404',
        name: '错误页面',
        component: resolve => require(['../page/404.vue'], resolve),
        meta: { auth: false }  // 添加该字段，表示进入这个路由不需要验证
    },
    {
        path: '/article',
        name: '文章列表',
        icon: 'el-icon-document',
        component: resolve => require(['../page/article/index.vue'], resolve),
        children: [
            {
                path: 'create',
                name: '创建文章',
                icon: 'el-icon-document',
                component: resolve => require(['../page/article/create.vue'], resolve)
            },
        ]
    },
    {
        path: '/category',
        name: '文章类别',
        icon: 'el-icon-document',
        component: resolve => require(['../page/category/index.vue'], resolve),
        children: [
            {
                path: 'create',
                name: '创建类别',
                icon: 'el-icon-document',
                component: resolve => require(['../page/category/create.vue'], resolve)
            },
        ]
    },
    {
        path: '/user',
        name: '用户列表',
        icon: 'el-icon-document',
        component: resolve => require(['../page/user/index.vue'], resolve),
        children: [
            {
                path: 'create',
                name: '创建用户',
                icon: 'el-icon-document',
                component: resolve => require(['../page/user/create.vue'], resolve)
            },
        ]
    },
    // 没有找到路由进入404页面
    {
        path: '*',
        redirect: '/404',
        meta: { auth: false }
    }
]

export default routes