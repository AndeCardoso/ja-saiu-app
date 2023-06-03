import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { SignedOffScreens } from './screens';
import { LoginPage } from '@pages/login';
import { RegisterPage } from '@pages/register';

const SignedOff = createStackNavigator();

export const SignedOffNavigator = () => {
  return (
    <SignedOff.Navigator>
      <SignedOff.Group
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <SignedOff.Screen
          name={SignedOffScreens.LOGIN}
          component={LoginPage}
          options={{
            headerShown: false,
          }}
        />
        <SignedOff.Screen
          name={SignedOffScreens.REGISTER}
          component={RegisterPage}
          options={{
            headerShown: false,
          }}
        />
      </SignedOff.Group>
    </SignedOff.Navigator>
  );
};
