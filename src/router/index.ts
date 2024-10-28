import { createRouter, createWebHistory } from 'vue-router'
import { constantRoute } from './routes'

console.log(import.meta.env.BASE_URL,constantRoute);


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: constantRoute,
    scrollBehavior(_to, _from, savedPosition) {
        if (savedPosition) {
            return savedPosition        //浏览器点击前进后退时上一个页面的位置
        } else {
            return {
                top: 0,     // 始终滚动到顶部
                behavior: 'smooth',     //平滑滚动
            }
        }
    },
})
export default router