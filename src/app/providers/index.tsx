import { paperTheme } from '@global/theme/theme';
import React, { PropsWithChildren } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootSiblingParent } from 'react-native-root-siblings';
import { PaperProvider } from 'react-native-paper';

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <PaperProvider theme={paperTheme}>
      <RootSiblingParent>
        <SafeAreaProvider>{children}</SafeAreaProvider>
      </RootSiblingParent>
    </PaperProvider>
  );
};
