import { Providers } from '@providers/index';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { AppRoutes } from '@routes/index.routes';
import './src/app/i18n/i18n.config';
import { useRef } from 'react';

export default function App() {
  const routeNameRef = useRef<any>();
  const navigationRef = useNavigationContainerRef();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          routeNameRef.current = navigationRef.getCurrentRoute()?.name;
        }}
      >
        <Providers>
          <AppRoutes />
        </Providers>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
