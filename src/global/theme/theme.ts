import { MD3DarkTheme as DefaultTheme } from 'react-native-paper';
import { colors } from '../styles/colors';

export const theme = {
  ...DefaultTheme,
  myOwnProperty: true,
  colors: {
    ...DefaultTheme.colors,
    ...colors,
  },
};
