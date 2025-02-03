const userRoutes = [
    {
        path: '/user/',
        children: [
            {
                path: 'userHome',
                name: 'userHome',
                component: () => import('@/views/user/DashBoard.vue'),
                meta: { BreadScrum: 'UserHome' },
            },
            {
                path: 'page1',
                name: 'userPage1',
                component: () => import('@/views/user/PageOne.vue'),
                meta: { BreadScrum: 'User Page 1' },
            },
            {
                path: 'page2',
                name: 'userPage2',
                component: () => import('@/views/user/PageTwo.vue'),
                meta: { BreadScrum: 'User Page 2' },
            },
            {
                path: 'page3',
                name: 'userPage3',
                component: () => import('@/views/user/PageThree.vue'),
                meta: { BreadScrum: 'User Page 3' },
            },
            {
                path: 'page4',
                name: 'userPage4',
                component: () => import('@/views/user/PageFour.vue'),
                meta: { BreadScrum: 'User Page 4' },
            },
            {
                path: 'page5',
                name: 'userPage5',
                component: () => import('@/views/user/PageFive.vue'),
                meta: { BreadScrum: 'User Page 5' },
            },
        ],
        meta: { isAuthRequired: true, isUser: true },
    },
];

export default userRoutes;
