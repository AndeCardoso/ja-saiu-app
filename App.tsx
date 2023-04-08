import { Provider as PaperProvider } from 'react-native-paper';
import { Main } from './src/app/pages/main';
import { theme } from './src/app/global/theme/theme';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Main />
    </PaperProvider>
  );
}
