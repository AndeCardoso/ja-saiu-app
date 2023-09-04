import React from 'react';
import { Layout } from '@components/layout';
import { HeaderHome } from './header';
import { FabGroup } from '@components/fabGroup';
import { useAuth } from 'app/hooks/useAuth';

export const HomeLayout = () => {
  const { userActionList } = useAuth();
  return (
    <Layout header={<HeaderHome />} fabGroup={userActionList} scrollView>
      <></>
    </Layout>
  );
};
