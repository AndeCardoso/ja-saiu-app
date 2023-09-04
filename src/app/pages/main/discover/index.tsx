import React from 'react';
import { Layout } from '@components/layout';
import { HeaderDiscover } from './header';
import { useDiscoverScreen } from './useDiscoverScreen';
import { useAuth } from 'app/hooks/useAuth';

export const DiscoverLayout = () => {
  const { control, handleSubmit } = useDiscoverScreen();
  const { userActionList } = useAuth();
  return (
    <Layout scrollView header={<HeaderDiscover control={control} />} fabGroup={userActionList} hasInputSearchHeader>
      <></>
    </Layout>
  );
};
