import { Route } from '@ant-design/pro-layout/lib/typings';
import React from 'react';

interface IMenuContext {
  menuList: Route[];
}

export const defaultContext: IMenuContext = {
  menuList: [],
};

const MenuContext = React.createContext(defaultContext);

export default MenuContext;
/**
 * 存一份菜单数据用于页面标题匹配（不是标签页的标题，是原面包屑位置的标题）
 * 为什么不用 dva 中来记录菜单数据，主要是考虑数据的局限性，这里存储的菜单不是全量菜单
 * 只是使用 BasicLayout 或 DynamicLayout 布局组件部分的菜单
 */
