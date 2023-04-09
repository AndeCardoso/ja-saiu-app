import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform, StatusBar } from 'react-native';
import { Navigators } from './screens';
import { SignedOffNavigator } from './signedOff.routes';
import { useTheme } from 'react-native-paper';
import { SignedInNavigator } from './signedIn.routes';

const ios = Platform.OS === 'ios';

const Stack = createStackNavigator();

export const AppRoutes = () => {
  const { colors } = useTheme();
  return (
    <>
      <StatusBar backgroundColor={colors.primary} barStyle={ios ? 'light-content' : 'dark-content'} />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={Navigators.SIGNED_OFF_NAVIGATOR} component={SignedOffNavigator} />
        <Stack.Screen name={Navigators.SIGNED_IN_NAVIGATOR} component={SignedInNavigator} />
      </Stack.Navigator>
    </>
  );
};
