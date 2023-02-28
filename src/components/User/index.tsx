import UserAvatar from '@materials/user-avatar';

import './index.less';

const User = () => {
  const items = [
    { key: 'profile', label: '个人中心' },
    { key: 'logout', label: '退出登录' },
  ];

  return <UserAvatar className="m-user" name="admin" menuProps={{ items }} />;
};

export default User;
