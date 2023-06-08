import { paperTheme } from '@global/theme/theme';
import React, { PropsWithChildren } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootSiblingParent } from 'react-native-root-siblings';

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <PaperProvider theme={paperTheme}>
      <RootSiblingParent>
        <SafeAreaProvider>{children}</SafeAreaProvider>
      </RootSiblingParent>
    </PaperProvider>
  );
};
