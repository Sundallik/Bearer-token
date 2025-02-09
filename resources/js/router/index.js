import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),

    routes: [
        {
            path: '/',
            component: () => import('../components/Post/Index.vue'),
            name: 'posts.index'
        },
        {
            path: '/login',
            component: () => import('../components/User/Login.vue'),
            name: 'user.login'
        },
        {
            path: '/registration',
            component: () => import('../components/User/Registration.vue'),
            name: 'user.registration'
        },
        {
            path: '/personal',
            component: () => import('../components/User/Personal.vue'),
            name: 'user.personal'
        },
        {
            path: '/:catchAll(.*)',
            component: () => import('../components/User/Personal.vue'),
        }
    ]
})

router.beforeEach((to, from, next) => {
    const accessToken = localStorage.getItem('access_token')

    if (!accessToken) {
        if (to.name === 'user.login' || to.name === 'user.registration') {
            return next()
        } else {
            return next({ name: 'user.login' })
        }
    }

    if ((to.name === 'user.login' || to.name === 'user.registration') && accessToken) {
        return next({ name: 'user.personal' })
    }

    next();
})

export default router
