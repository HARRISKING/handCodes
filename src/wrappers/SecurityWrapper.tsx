import React, { useEffect } from 'react';
import { Redirect, useLocation, useSelector } from 'umi';

import type { ConnectState } from '@/models/connect';
import type { UserModelState } from '@/models/user';

const SecurityWrapper: React.FC = ({ children }) => {
  useEffect(() => {
    // dispatch?.({ type: 'user/fetchUser' });
  }, []);

  const { token } = useSelector<ConnectState, UserModelState>(
    (state) => state.user,
  );

  const isLogin = !!token;
  const { pathname } = useLocation();

  if (!isLogin && pathname !== '/') {
    return <Redirect to="/" />;
  }
  return <>{children}</>;
};

export default SecurityWrapper;
