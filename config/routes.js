export default [
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      { path: '/', redirect: '/index' },

      {
        path: '/index',
        title: '客户管理1',
        component: './index',
      },
      // { component: './404' },
    ],
  },
]
