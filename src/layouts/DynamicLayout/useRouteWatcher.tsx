import { Route } from '@ant-design/pro-layout/lib/typings';
import { useEffect } from 'react';
import { history, useLocation } from 'umi';
import { findFirstLeafNode, findNode } from 'uniubi-utils';

interface IProps {
  menuList: Route[];
}

const useRouteWatcher = ({ menuList }: IProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    matchRoute(pathname);
  }, [pathname, menuList]);

  // 匹配非叶子节点路由做重定向
  const matchRoute = (url: string) => {
    const node = findNode(menuList, url, {
      key: 'path',
      childrenKey: 'routes',
    });
    if (node?.routes?.length) {
      const leafNode = findFirstLeafNode(menuList, url, {
        key: 'path',
        childrenKey: 'routes',
      });
      history.replace(leafNode?.path);
    }
  };
};

export default useRouteWatcher;
