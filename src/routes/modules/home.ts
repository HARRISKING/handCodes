export default {
  path: 'a',
  name: '设备管理',
  icon: 'EntranceOutlined',
  routes: [
    {
      path: 'a',
      name: 'a-a',
      icon: 'EntranceOutlined',
      routes: [
        {
          path: 'a',
          name: 'a-a-a',
          component: '@/pages/index',
          icon: 'EntranceOutlined',
        },
        {
          path: 'b',
          name: 'a-a-b',
          component: '@/pages/index',
          icon: 'EntranceOutlined',
        },
      ],
    },
    {
      path: 'b',
      name: 'a-b',
      icon: 'EntranceOutlined',
      routes: [
        {
          path: 'a',
          name: 'a-b-a',
          component: '@/pages/index',
          icon: 'EntranceOutlined',
        },
        {
          path: 'b',
          name: 'a-b-b',
          component: '@/pages/index',
          icon: 'EntranceOutlined',
        },
      ],
    },
  ],
};
