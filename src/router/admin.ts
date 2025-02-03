const adminRoutes = [
    {
        path: '/admin/',
        children: [
            {
                path: 'home',
                name: 'adminHome',
                component: () => import('@/views/admin/DashBoard.vue'),
                meta: { BreadScrum: 'AdminHome' },
            },
            {
                path: 'page1',
                name: 'adminPage1',
                component: () => import('@/views/admin/PageOne.vue'),
                meta: { BreadScrum: 'Admin Page 1' },
            },
            {
                path: 'page2',
                name: 'adminPage2',
                component: () => import('@/views/admin/PageTwo.vue'),
                meta: { BreadScrum: 'Admin Page 2' },
            },
            {
                path: 'page3',
                name: 'adminPage3',
                component: () => import('@/views/admin/PageThree.vue'),
                meta: { BreadScrum: 'Admin Page 3' },
            },
            {
                path: 'page4',
                name: 'adminPage4',
                component: () => import('@/views/admin/PageFour.vue'),
                meta: { BreadScrum: 'Admin Page 4' },
            },
            {
                path: 'page5',
                name: 'adminPage5',
                component: () => import('@/views/admin/PageFive.vue'),
                meta: { BreadScrum: 'Admin Page 5' },
            },
        ],
        meta: { isAuthRequired: true, isAdmin: true },
    },
];

export default adminRoutes;