import { defineConfig } from 'umi';

import routes from '../src/routes';

export default defineConfig({
  favicon: 'https://fe-cloud.uni-ubi.com/other/1622427550983-favicon.ico',
  // TODO: 修改生产环境静态资源地址，如 https://uniubi-front.oss-cn-hangzhou.aliyuncs.com/prod/uniubi-react-template
  publicPath: process.env.UMI_ENV === 'production' ? '/' : '/',
  hash: true,
  dva: {
    immer: true,
    hmr: false,
  },
  webpack5: {},
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  define: {
    'process.env.BASE_API': '/api',
  },
  proxy: {
    '/api': {
      target: 'http://mock.com',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  theme: {},
  routes,
  locale: {},
  ignoreMomentLocale: true,
  targets: {
    ie: 10,
  },
});
