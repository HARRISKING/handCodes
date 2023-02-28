# React 项目模版

## 项目介绍

```markdown
uniubi-react-template/
├── .vscode // 编辑器 lint 规则配置文件，配合 uniubi-lint 使用，勿动
├── config // 配置文件目录
│ ├── .config.pre.ts // 预发环境变量配置文件
│ ├── .config.production.ts // 生产环境变量配置文件
│ ├── .config.release.ts // 测试环境变量配置文件
│ ├── .config.test.ts // 开发环境变量配置文件
│ └── .config.ts // 默认环境变量配置文件
├── mock // umi 存储 mock 文件，此目录下所有 js 和 ts 文件会被解析为 mock 文件
├── public // 此目录下所有文件会被 copy 到输出路径
├── src // 项目开发主目录
│ ├── api // 定义接口，可使用 [end-type-to-front-type](http://npm.uniubi.com/-/web/detail/end-type-to-front-type) 生成接口在此目录下
│ ├── assets // 静态资源
│ │ ├── data
│ │ │ ├── code.ts // 定义错误码，一般直接使用后端返回的错误信息
│ │ │ ├── constants.ts // 定义常量
│ │ │ └── enums.ts // 定义枚举
│ │ └── images // 图片资源，一般直接上传 OSS，使用线上地址
│ ├── components // 公共组件
│ │ ├── PageLoading
│ │ └── User
│ ├── interfaces // 公共接口
│ ├── layouts // 布局组件
│ │ ├── BasicLayout // 基础布局组件，带顶部栏和导航
│ │ ├── BlankLayout // 空白布局组件，可用于路由层级过渡
│ │ ├── DynamicLayout // 动态路由布局组件，基于 BasicLayout，根据后端接口返回路由渲染菜单项
│ │ └── WindowLayout // 窗口布局，可用于高度为屏幕高度，中间为内容区的布局
│ ├── locales // 国际化项目语言包目录，无国际化需求项目可忽略
│ ├── models // dva models 目录
│ ├── pages // 页面组件
│ ├── routes // 路由目录
│ │ ├── modules // 路由模块文件夹
│ │ └── index.ts // 路由导出
│ ├── styles // 全局样式目录
│ ├── utils // 公共工具目录
│ └── wrappers // wrapper 组件目录
├── .editorconfig
├── .env
├── .gitignore
├── .prettierignore
├── moonPower.config.ts // [end-type-to-front-type](http://npm.uniubi.com/-/web/detail/end-type-to-front-type) 工具配置文件
├── package.json
├── tsconfig.json
└── typings.d.ts
```

## 部署环境

| 环境     | 指令                     | 服务器地址 | 访问地址                  |
| -------- | ------------------------ | ---------- | ------------------------- |
| 开发环境 | npm run build:test       | 0.0.0.0    | http://example.test       |
| 测试环境 | npm run build:release    | 0.0.0.0    | http://example.release    |
| 预发环境 | npm run build:pre        | 0.0.0.0    | http://example.pre        |
| 生产环境 | npm run build:production | 0.0.0.0    | http://example.production |
