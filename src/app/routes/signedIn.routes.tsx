import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Navigators } from './screens';
import { TabNavigator } from '@pages/main/tabNavigator';

const SignedIn = createStackNavigator();

export const SignedInNavigator = () => {
  return (
    <SignedIn.Navigator>
      <SignedIn.Screen
        name={Navigators.TAB_NAVIGATOR}
        options={{
          headerShown: false,
        }}
      >
        {(props) => <TabNavigator {...props} />}
      </SignedIn.Screen>
    </SignedIn.Navigator>
  );
};
