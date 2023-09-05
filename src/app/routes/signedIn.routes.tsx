import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Navigators, SignedInScreens } from './screens';
import { TabNavigator } from '@pages/main/tabNavigator';
import { EditPage } from '@pages/user';

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
      <SignedIn.Screen
        name={SignedInScreens.EDIT}
        component={EditPage}
        options={{
          headerShown: false,
        }}
      />
    </SignedIn.Navigator>
  );
};
