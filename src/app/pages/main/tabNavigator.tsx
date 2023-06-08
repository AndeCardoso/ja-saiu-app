import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Navigators, SignedInScreens } from '@routes/screens';
import { useTheme } from 'react-native-paper';
import { HomeLayout } from './home';
import { Icon } from '@components/base/icon';
import { DiscoverLayout } from './discover';
import { FavoritesLayout } from './Favorites';

export type TabParams = {
  home: undefined;
  discover: undefined;
  favorites: undefined;
};

export const TabTitles = {
  [SignedInScreens.HOME]: 'Início',
  [SignedInScreens.DISCOVER]: 'Explorar',
  [SignedInScreens.FAVORITES]: 'Favoritos',
};

const icons = {
  [SignedInScreens.HOME]: 'home',
  [SignedInScreens.DISCOVER]: 'compass-outline',
  [SignedInScreens.FAVORITES]: 'star',
};

export const TabNavigator = () => {
  const Tab = createBottomTabNavigator<TabParams>();
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const iconName = icons[route.name];

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarInactiveTintColor: theme.colors.PRIMARY_INACTIVE,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveBackgroundColor: theme.colors.TERTIARY_INACTIVE,
        headerShown: false,
        tabBarItemStyle: {
          padding: 8,
        },
        tabBarStyle: {
          backgroundColor: theme.colors.background,
        },
      })}
    >
      <Tab.Screen
        name={SignedInScreens.HOME}
        component={HomeLayout}
        options={{ tabBarLabel: TabTitles.home, unmountOnBlur: true }}
      />
      <Tab.Screen
        name={SignedInScreens.DISCOVER}
        component={DiscoverLayout}
        options={{ tabBarLabel: TabTitles.discover }}
      />
      <Tab.Screen
        name={SignedInScreens.FAVORITES}
        component={FavoritesLayout}
        options={{ tabBarLabel: TabTitles.favorites }}
      />
    </Tab.Navigator>
  );
};
