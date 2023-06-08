import React from 'react';
import { Layout } from '@components/layout';
import { HeaderHome } from './header';

export const HomeLayout = () => {
  return (
    <Layout header={<HeaderHome></HeaderHome>} scrollView>
      <></>
    </Layout>
  );
};
