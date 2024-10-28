import home from '@/views/home/index.vue'

export const constantRoute = [
    {
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '/404',
        name: '404',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/404/index.vue')
    },
    // 将匹配所有内容并将其放在 `route.params.pathMatch` 下
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../views/404/index.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login/index.vue')
    }
]
