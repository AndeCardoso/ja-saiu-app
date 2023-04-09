import { MD3DarkTheme as DefaultTheme } from 'react-native-paper';
import { colors } from '../styles/colors';

export const paperTheme = {
  ...DefaultTheme,
  // fonts: configureFonts(fontConfig),
  title: 'dark',
  colors: {
    primary: colors.PRIMARY,
    secondary: colors.SECONDARY,
    tertiary: colors.TERTIARY,
    background: colors.TERTIARY,
    outline: colors.PRIMARY,

    WHITE: colors.WHITE,
    BLACK: colors.BLACK,
    BUTTON_PRIMARY: colors.PRIMARY,
    BUTTON_OUTLINE_BLUE: colors.PRIMARY,
  },
};
