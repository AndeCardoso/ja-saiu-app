import React from 'react';
import { Layout } from '@components/layout';
import { HeaderFavorites } from './header';

export const FavoritesLayout = () => {
  return (
    <Layout header={<HeaderFavorites></HeaderFavorites>} scrollView>
      <></>
    </Layout>
  );
};
