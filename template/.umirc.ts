import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  locale: { antd: true },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/member/login', component: '@/pages/member/login' },
  ],
  fastRefresh: {},
});
