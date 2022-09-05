import {createRouter, createWebHistory} from 'vue-router'
import localStorageCache from "../common/localStorage"

const routes = [
    {
        path: '/',
        component: () => import('../components/layout/Index.vue'),
        // 重定向
        redirect: {name: 'Home'},
        // 子路由
        children: [
            {
                path: '/home',
                name: 'Home',
                component: () => import('../views/Home.vue'),
            },
            {
                path: '/user/index',
                name: 'User',
                component: () => import('../views/user/Index.vue'),
            },
        ],
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

router.beforeEach((to, from, next) => {
    let token = localStorageCache.get('x-token')
    if ((!token || !token.token) && !to.path.includes("login")) {
        next({
            path: '/login'
        })
        return
    }
    next()
})

export default router
