import adminRoutes from './modules/admin';
import homeRoutes from './modules/home';
import userRoutes from './modules/user';

// 根据需要选择布局组件，一般 BasicLayout 和 DynamicLayout 不共用
export default [
  { path: '/', exact: true, redirect: '/a/a/a' },
  {
    path: '/window',
    component: '@/layouts/WindowLayout',
    routes: [userRoutes],
  },
  {
    path: '/',
    // component: '@/layouts/DynamicLayout', // 动态路由，后端返回
    component: '@/layouts/BasicLayout', // 静态路由，前端定义
    routes: [homeRoutes, adminRoutes],
  },
];
