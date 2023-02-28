import { Button } from 'antd';
import { useRequest } from 'umi';

import { getUserInfo } from '@/api';
import PageContainer from '@/components/PageContainer';

import styles from './index.less';

export default () => {
  const fetchProjectInfo = async () => {
    try {
      const res = await getUserInfo();
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  const { loading, data, run } = useRequest(fetchProjectInfo, {
    manual: true,
  });

  return (
    <PageContainer back>
      <h1 className={styles.title}>{data}</h1>
      <Button onClick={run} loading={loading}>
        Button
      </Button>
    </PageContainer>
  );
};
