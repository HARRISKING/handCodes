import ProLayout, { MenuDataItem } from '@ant-design/pro-layout';
import * as iconMap from '@uniubi/icons-react';
import classnames from 'classnames';
import { history, Link } from 'umi';

import User from '@/components/User';

import MenuContext from './context';

import type { BasicLayoutProps as AntdBasicLayoutProps } from '@ant-design/pro-layout';
import type { Route } from '@ant-design/pro-layout/lib/typings';
import type { MenuTheme } from 'antd/lib/menu/MenuContext';
import type { FC } from 'react';

import './index.less';

export type BasicLayoutProps = AntdBasicLayoutProps & Route;

const BasicLayout: FC<BasicLayoutProps> = ({
  children,
  className,
  route,
  ...restProps
}) => {
  const MODE: MenuTheme = 'dark';
  // 渲染 icon
  const renderIcon = (name: string) => {
    if (!name) return null;
    const Icon = iconMap[name];
    return <Icon />;
  };

  // 带子菜单的一级导航
  const renderSubMenuItem = (itemProps: MenuDataItem): React.ReactNode => {
    return (
      <>
        {renderIcon(itemProps.icon as string)}
        <span>{itemProps.name}</span>
      </>
    );
  };

  // 不带子菜单的导航
  const renderMenuItem = (itemProps: MenuDataItem): React.ReactNode => {
    return itemProps.isUrl || !itemProps.path ? (
      <>
        {renderIcon(itemProps.icon as string)}
        <span>{itemProps.name}</span>
      </>
    ) : (
      <Link to={itemProps.path}>
        {itemProps.icon && renderIcon(itemProps.icon as string)}
        <span>{itemProps.name}</span>
      </Link>
    );
  };

  // 用户信息
  const renderUserAvatar = () => <User />;

  return (
    <MenuContext.Provider value={{ menuList: route?.routes ?? [] }}>
      <ProLayout
        className={classnames(
          'g-basic-layout',
          `g-basic-layout-${MODE}`,
          className,
        )}
        logo="https://fe-cloud.uni-ubi.com/image/1625038486292-logo-r.png?x-oss-process=img/q/80"
        title="Uni-Ubi"
        layout="mix"
        headerTheme={MODE}
        navTheme={MODE}
        siderWidth={180}
        headerHeight={56}
        onMenuHeaderClick={() => {
          history.push('/');
        }}
        fixedHeader
        fixSiderbar
        splitMenus // 路由超过3级时打开
        disableMobile
        subMenuItemRender={renderSubMenuItem}
        menuItemRender={renderMenuItem}
        rightContentRender={renderUserAvatar}
        route={route}
        {...restProps}
      >
        {children}
      </ProLayout>
    </MenuContext.Provider>
  );
};

export default BasicLayout;
