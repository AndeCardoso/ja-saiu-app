import { Provider as PaperProvider } from 'react-native-paper';
import { Main } from './src/pages/main';
import { theme } from './src/global/theme/theme';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Main />
    </PaperProvider>
  );
}
