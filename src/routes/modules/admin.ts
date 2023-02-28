export default {
  path: 'b',
  component: '@/pages/index',
  icon: 'EntranceOutlined',
  routes: [
    {
      path: 'a',
      component: '@/pages/index',
      icon: 'EntranceOutlined',
      routes: [
        {
          path: 'a',
          component: '@/pages/index',
          icon: 'EntranceOutlined',
        },
        {
          path: 'b',
          component: '@/pages/index',
          icon: 'EntranceOutlined',
        },
      ],
    },
    {
      path: 'b',
      component: '@/pages/index',
      icon: 'EntranceOutlined',
      routes: [
        {
          path: 'a',
          component: '@/pages/index',
          icon: 'EntranceOutlined',
        },
        {
          path: 'b',
          component: '@/pages/index',
          icon: 'EntranceOutlined',
        },
      ],
    },
  ],
};
