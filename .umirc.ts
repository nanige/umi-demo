import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    // { exact: true, path: '/', redirect: '/list' },
    { path: '/login', component: '@/pages/login', exact: true },
    {
      exact: true,
      component: '@/layouts/index',
      routes: [{ path: '/list', component: '@/pages/list', exact: true }],
    },
  ],
  fastRefresh: {},
});
