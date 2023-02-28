import { MenuDataItem } from '@ant-design/pro-layout';
import * as iconMap from '@uniubi/icons-react';
import { FC } from 'react';
import { history, useRequest } from 'umi';
import { findFirstLeafNode } from 'uniubi-utils';

import BasicLayout, { BasicLayoutProps } from '@/layouts/BasicLayout';

import routes from './routes.json';
import useRouteWatcher from './useRouteWatcher';

import './index.less';

type DynamicLayoutProps = BasicLayoutProps;

const DynamicLayout: FC<DynamicLayoutProps> = ({
  children,
  route,
  ...restProps
}) => {
  // TODO: 获取路由数据，根据项目获取 -------------------------------------------
  const fetchRoutes = async () => {
    // 如果获取到的路由数据字段名与需要的不符，可以使用 uniubi-utils 中的 deepFormatKey 方法转换
    return {
      success: true,
      data: routes,
    };
  };
  // ------------------------------------------------------------------------
  const { data, loading } = useRequest(fetchRoutes);

  // 监听路由变化，非叶子节点路由做重定向
  useRouteWatcher({ menuList: data });

  // 跳转当前路由下的第一个叶子节点菜单
  const handleLink = (url: string) => {
    const node = findFirstLeafNode(data, url, {
      key: 'path',
      childrenKey: 'routes',
    });
    history.push(node!.path);
  };

  // 点击 logo 跳转第一个叶子节点菜单
  const handleMenuHeaderClick = () => {
    const url = data[0]?.path ?? '/';
    handleLink(url);
  };

  // 渲染 icon
  const renderIcon = (name: string) => {
    if (!name) return null;
    const Icon = iconMap[name];
    return <Icon />;
  };

  // 不带子菜单的导航
  const renderMenuItem = (itemProps: MenuDataItem): React.ReactNode => {
    return itemProps.isUrl || !itemProps.path ? (
      <>
        {renderIcon(itemProps.icon as string)}
        <span>{itemProps.name}</span>
      </>
    ) : (
      <a onClick={() => handleLink(itemProps.path as string)}>
        {renderIcon(itemProps.icon as string)}
        <span>{itemProps.name}</span>
      </a>
    );
  };

  // 引用了 BasicLayout，如果有什么属性需要从动态路由数据中获取再修改，直接在这个组件修改即可，会进行覆盖
  return (
    <BasicLayout
      className="g-dynamic-route-layout"
      loading={loading}
      onMenuHeaderClick={handleMenuHeaderClick}
      route={{ ...route, routes: data }}
      menuItemRender={renderMenuItem}
      {...restProps}
    >
      {children}
    </BasicLayout>
  );
};

export default DynamicLayout;
