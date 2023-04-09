import { paperTheme } from '@global/theme/theme';
import React, { PropsWithChildren } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <PaperProvider theme={paperTheme}>
      <SafeAreaProvider>{children}</SafeAreaProvider>
    </PaperProvider>
  );
};
