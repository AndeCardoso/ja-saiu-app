import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SignedInScreens } from '@routes/screens';
import { useTheme } from 'react-native-paper';
import { Icon } from '@components/base/icon';
import { HomeLayout } from './home';
import { DiscoverLayout } from './discovery';
import { FavoritesLayout } from './favorites';
import { Platform } from 'react-native';
import i18next from 'i18next';

const isIOS = Platform.OS === 'ios';

export type TabParams = {
  home: undefined;
  discovery: undefined;
  favorites: undefined;
};

export const TabTitles = {
  [SignedInScreens.HOME]: i18next.t('TAB_NAVIGATION.HOME'),
  [SignedInScreens.DISCOVERY]: i18next.t('TAB_NAVIGATION.DISCOVERY'),
  [SignedInScreens.FAVORITES]: i18next.t('TAB_NAVIGATION.FAVORITE'),
};

const icons = {
  [SignedInScreens.HOME]: 'home',
  [SignedInScreens.DISCOVERY]: 'compass-outline',
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
          marginBottom: isIOS ? -16 : 0,
          borderTopColor: theme.colors.secondary,
        },
      })}
    >
      <Tab.Screen
        name={SignedInScreens.HOME}
        component={HomeLayout}
        options={{ tabBarLabel: TabTitles[SignedInScreens.HOME], unmountOnBlur: true }}
      />
      <Tab.Screen
        name={SignedInScreens.DISCOVERY}
        component={DiscoverLayout}
        options={{ tabBarLabel: TabTitles[SignedInScreens.DISCOVERY] }}
      />
      <Tab.Screen
        name={SignedInScreens.FAVORITES}
        component={FavoritesLayout}
        options={{ tabBarLabel: TabTitles[SignedInScreens.FAVORITES] }}
      />
    </Tab.Navigator>
  );
};
