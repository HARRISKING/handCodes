# React Template 更新记录

## v1.10.0 (2023.01.29)

- 更新项目依赖
- 配置文件移动至 config 目录下
- 增加包管理工具的脚本检测
- 移除 Poseidon

## v1.6.4 (2021.11.30)

- 更新 antd 版本
- 更新 uniubi-lint 版本
- 增加 Poseidon 默认配置地址

## v1.6.3 (2021.9.8)

- 解决 IE 浏览器无法打开问题

## v1.6.2 (2021.8.17)

- 更新 antd 至内部版本（v100.0.1）
- 删除 chunk 相关打包配置
- 修改 logo

## v1.6.1 (2021.8.10)

- 更新 end-type-to-front-type 版本，更新物料版本
- 移除 uniubi-ui
- 关闭 mfsu（umi 配置 antd 主题与 mfsu 冲突）

## v1.6.0 (2021.8.9)

- 更新 uniubi-lint，增加对 ts 类型规则的限制
- 更新 uniubi-utils、end-type-to-front-type 版本
- 移除 uniubi-lib，修改相关组件引用方式
- 修复打包失败问题，并给打包后文件名增加 hash 后缀
- 开启 mfsu

## v1.5.0 (2021.3.22)

- 重构 BasicLayout 组件，适配 UI 规范
- 新增 WindowLayout 组件
- 将 /src/layouts/SecurityLayout 移动至 /src/wrappers/SecurityWrapper
- 引入 end-type-to-front-type 插件

## v1.4.3 (2021.1.20)

- 修改颜色系统
- 引入 uniubi-ui
- 依赖更新

## v1.4.2 (2021.1.15)

- 修改 eslint 校验配置
- 依赖更新

## v1.4.1 (2020.12.28)

- 修改 eslint 校验配置
- 引入 Poseidon SDK
- 引入 end-type-to-front-type

## v1.4.0 (2020.12.28)

- 修改 antd 主题色
- 增加 eslint 校验配置
- 引入 uniubi-utils
- 更新项目依赖

## v1.3.1 (2020.10.28)

- models 增加 `subscriptions`
- 修改 BasicLayout 中 icon 的引用方式和面包屑的渲染方式
- 更新 uniubi-lib 和 @uniubi/icons-react 包版本

## v1.3.0 (2020.09.07)

- 引入 uniubi-icons
- 修改 BasicLayout 组件
- 修改请求处理错误方式

## v1.2.1 (2020.08.21)

- 修复面包屑问题

## v1.2.0 (2020.07.20)

- 更新 `umi` 版本至 3.2.10
- 修复点击面包屑跳转时会刷新页面的问题
- 引入 `uniubi-lib` 组件库，[查看文档](http://fe.uniubi.com:8000)

## v1.1.0 (2020.07.15)

- 增加 layout 文件
  - BlankLayout: 空布局
  - BasicLayout: 带 header 和 menu 的基础布局，基于 [ant-design-pro-layout](https://prolayout.ant.design/getting-started)
  - SecurityLayout: 权限路由
- 增加项目依赖
  - `classnames`
  - `js-cookie`
- 使用 `ImmerReducer` 代替 `Reducer`，[plugin-dva 插件文档](https://umijs.org/plugins/plugin-dva)
