import { LeftOutlined } from '@uniubi/icons-react';
import { Space } from 'antd';
import classnames from 'classnames';
import { useContext, useMemo } from 'react';
import { history, useLocation } from 'umi';
import { findNode } from 'uniubi-utils';

import MenuContext from '@/layouts/BasicLayout/context';

import type { CSSProperties, FC, ReactNode } from 'react';

import './index.less';

interface PageContainerProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  title?: string;
  back?: boolean | string;
  actions?: ReactNode;
}

const prefix = 'm-page-container';

const PageContainer: FC<PageContainerProps> = ({
  className,
  style,
  children,
  title,
  back = false,
  actions,
}) => {
  const { menuList } = useContext(MenuContext);
  const location = useLocation();

  // 点击返回，默认回到上一页，如果 back 为具体路由地址则跳转到传入的地址
  const handleBack = () => {
    if (typeof back === 'string') {
      history.push(back);
      return;
    }
    history.goBack();
  };

  // 页面标题，根据当前路由匹配
  // 如果是动态路由，匹配的是获取到的路由而非 umi 中定义的路由，
  // 如果是静态路由，匹配的是 umi 中定义的路由
  const pageTitle = useMemo(() => {
    if (title) return title;
    const node = findNode(menuList, location.pathname, {
      key: 'path',
      childrenKey: 'routes',
    });
    return node?.name ?? '';
  }, [title, menuList, location]);

  return (
    <div className={classnames(prefix, className)} style={style}>
      <div className={`${prefix}-header`}>
        <Space className={`${prefix}-header-title`}>
          {back && (
            <LeftOutlined
              className={`${prefix}-header-title-back`}
              onClick={handleBack}
            />
          )}
          <span className={`${prefix}-header-title-text`}>{pageTitle}</span>
        </Space>
        <div className={`${prefix}-header-actions`}>{actions}</div>
      </div>
      <div className={`${prefix}-content`}>{children}</div>
    </div>
  );
};

export default PageContainer;
