import React from 'react';
import { FlatList } from 'react-native';
import { HeaderDiscover } from './header';
import { useAuth } from 'app/hooks/useAuth';
import { Layout } from '@components/layout';
import Card from '@components/cards/discoverCard';
import { useDiscoverScreen } from './useDiscoverScreen';

export const DiscoverLayout = () => {
  const { control, handleSubmit, onSearch, discoverList } = useDiscoverScreen();
  const { userActionList } = useAuth();
  return (
    <Layout
      header={<HeaderDiscover control={control} onSearch={handleSubmit(onSearch)} />}
      fabGroup={userActionList}
      hasInputSearchHeader
      isFlatList
    >
      <FlatList
        data={discoverList}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 16 }}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
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
