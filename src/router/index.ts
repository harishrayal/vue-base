import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '@/views/code/404.vue'
import userRoutes from '@/router/user'
import adminRoutes from '@/router/admin'
import { homePages } from '@/interface/homeRoutes'

const baseRoutes = [
    ...adminRoutes,
    ...userRoutes,
    {
        path: '/not-found',
        name: 'notFound',
        component: NotFound,
        meta: {
            isAuthRequired: false,
        },
    },
    {
        path: '/',
        name: 'Login',
        component: () => import('../views/admin/authentication/LoginPage.vue'),
        meta: {
            isAuthRequired: false,
        },
    },
    {
        path: '/forgot-password',
        name: 'ForgetPassword',
        component: import('../views/admin/authentication/ForgetPassword.vue'),
        meta: {
            isAuthRequired: false,
        },
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: baseRoutes,
})

router.beforeEach((to, from, next) => {
    const access_token = localStorage.getItem('access_token')?.trim()
    const role = localStorage.getItem('role')?.trim()

    // check there is no authorization required open login page
    if (!to.meta.isAuthRequired && (!access_token || !role)) {
        return next()
    }

    // if route is not found to display the not found page
    if (to.name == 'notFound') {
        return next()
    }

    // check for the authorization is granted
    if (to.meta.isAuthRequired) {
        //check the access token and role
        if (!access_token || !role) {
            return next({ name: 'Login' })
        }
        // check the role and authorization
        if (to.meta.isAdmin && role === 'admin') {
            return next()
        }
        if (to.meta.isUser && role === 'user') {
            return next()
        }
        if (to.meta.isModerator && role === 'moderator') {
            return next()
        }
    }

    // if the user is log in and attempting to access the "Login" or forget password  page through the browser back button
    // if they have a valid access_token and role.
    // the user is redirected to their respective home page based on their role.
    if (
        !to.meta.isAuthRequired &&
        access_token &&
        role &&
        to.matched.length > 0
    ) {
        return next({ name: homePages[role] })
    }

    next({ name: 'notFound' })
})

export default router
