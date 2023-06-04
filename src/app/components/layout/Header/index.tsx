import { ReactNode } from 'react';
import { HeaderContainer } from './styles';
import { IconButton, useTheme } from 'react-native-paper';

interface IHeaderProps {
  children: ReactNode;
  goBack?: () => void;
  showGoBackButton?: boolean;
}

export const Header = ({ children, showGoBackButton, goBack }: IHeaderProps) => {
  const theme = useTheme();
  return (
    <HeaderContainer theme={theme}>
      {showGoBackButton && (
        <IconButton icon={'chevron-left'} size={30} iconColor={theme.colors.background} onPress={goBack} />
      )}
      {children}
    </HeaderContainer>
  );
};
