import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignedOffScreens } from './screens';
import { LoginPage } from '@pages/login';

const SignedOff = createStackNavigator();

export const SignedOffNavigator = () => {
  return (
    <SignedOff.Navigator>
      <SignedOff.Screen
        name={SignedOffScreens.LOGIN}
        component={LoginPage}
        options={{
          headerShown: false,
        }}
      />
    </SignedOff.Navigator>
  );
};
