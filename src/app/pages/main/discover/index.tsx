import React from 'react';
import { Layout } from '@components/layout';
import { HeaderDiscover } from './header';
import { useDiscoverScreen } from './useDiscoverScreen';
import { useAuth } from 'app/hooks/useAuth';
import { Card } from '@components/cards/discoverCard';
import { FlatList, VirtualizedList } from 'react-native';

export const DiscoverLayout = () => {
  const { control, handleSubmit, onSearch, discoverList } = useDiscoverScreen();
  const { userActionList } = useAuth();
  return (
    <Layout
      header={<HeaderDiscover control={control} onSearch={onSearch} />}
      fabGroup={userActionList}
      hasInputSearchHeader
      isFlatList
    >
      <FlatList
        data={discoverList}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            episode={item.episode}
            season={item.season}
            image={item.image}
            favorited={item.favorited}
          />
        )}
      />
    </Layout>
  );
};
