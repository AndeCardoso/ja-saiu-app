import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignedInScreens } from './screens';
import { HomeLayout } from '@pages/home/index';

const SignedIn = createStackNavigator();

export const SignedInNavigator = () => {
  return (
    <SignedIn.Navigator>
      <SignedIn.Screen
        name={SignedInScreens.HOME}
        component={HomeLayout}
        options={{
          headerShown: false,
        }}
      />
    </SignedIn.Navigator>
  );
};
