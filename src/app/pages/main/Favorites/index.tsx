import React from 'react';
import { Layout } from '@components/layout';
import { HeaderFavorites } from './header';
import { useAuth } from 'app/hooks/useAuth';

export const FavoritesLayout = () => {
  const { userActionList } = useAuth();
  return (
    <Layout header={<HeaderFavorites />} fabGroup={userActionList} scrollView>
      <></>
    </Layout>
  );
};
