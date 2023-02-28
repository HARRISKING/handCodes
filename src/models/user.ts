import { SubscriptionsMapObject } from 'dva';
import { Effect, ImmerReducer } from 'umi';

import { getUserInfo } from '@/api';

export interface UserInfo {
  name?: string;
}

export interface UserModelState {
  token?: string;
  info: UserInfo;
}

export interface UserModelType {
  namespace: 'user';
  state: UserModelState;
  effects: {
    fetchUser: Effect;
  };
  reducers: {
    setUserInfo: ImmerReducer<UserModelState>;
  };
  subscriptions: SubscriptionsMapObject;
}

const UserModel: UserModelType = {
  namespace: 'user',
  state: {
    token: '',
    info: {},
  },
  effects: {
    // 获取用户信息
    *fetchUser(_, { call, put }): any {
      const response = yield call(getUserInfo);
      yield put({
        type: 'setUserInfo',
        payload: response,
      });
    },
  },
  reducers: {
    // 修改用户信息
    setUserInfo(state, { payload }) {
      state.info = payload;
    },
  },
  subscriptions: {},
};

export default UserModel;
