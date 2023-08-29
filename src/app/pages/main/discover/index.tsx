import React from 'react';
import { Layout } from '@components/layout';
import { HeaderDiscover } from './header';
import { useDiscoverScreen } from './useDiscoverScreen';

export const DiscoverLayout = () => {
  const { control, handleSubmit } = useDiscoverScreen();
  return (
    <Layout scrollView header={<HeaderDiscover control={control}></HeaderDiscover>} hasInputSearchHeader>
      <></>
    </Layout>
  );
};
