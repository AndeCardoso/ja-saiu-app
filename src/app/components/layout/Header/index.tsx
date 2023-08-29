import { ReactNode } from 'react';
import { HeaderContainer } from './styles';
import { IconButton, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface IHeaderProps {
  children: ReactNode;
  goBack?: () => void;
  showGoBackButton?: boolean;
  hasInputSearch?: boolean;
}

export const Header = ({ children, goBack, showGoBackButton, hasInputSearch }: IHeaderProps) => {
  const theme = useTheme();
  const { top } = useSafeAreaInsets();

  return (
    <HeaderContainer theme={theme} hasInputSearch={hasInputSearch} topInsect={top}>
      {showGoBackButton && (
        <IconButton icon={'chevron-left'} size={30} iconColor={theme.colors.background} onPress={goBack} />
      )}
      {children}
    </HeaderContainer>
  );
};
