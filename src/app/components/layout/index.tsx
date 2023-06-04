import { ReactElement, ReactNode } from 'react';
import {
  Container,
  FooterContainer,
  HeaderContainer,
  ScrollContainer,
  ScrollViewContainer,
  StaticContainer,
} from './styles';
import { useTheme } from 'react-native-paper';
import { Header } from './Header';
import { useNavigation } from '@react-navigation/native';

interface ILayoutProps {
  verticalCenter?: boolean;
  scrollView?: boolean;
  children: ReactNode;
  header?: ReactElement;
  footer?: ReactElement;
  showGoBackButton?: boolean;
}

export const Layout = ({ verticalCenter, scrollView, children, header, footer, showGoBackButton }: ILayoutProps) => {
  const { canGoBack, goBack } = useNavigation();
  const theme = useTheme();
  const handleGoBack = () => {
    canGoBack() && goBack();
  };
  return (
    <ScrollViewContainer>
      <Container theme={theme}>
        {header && (
          <Header goBack={handleGoBack} showGoBackButton={showGoBackButton}>
            {header}
          </Header>
        )}
        {scrollView ? (
          <ScrollContainer verticalCenter={verticalCenter} theme={theme}>
            {children}
          </ScrollContainer>
        ) : (
          <StaticContainer verticalCenter={verticalCenter} theme={theme}>
            {children}
          </StaticContainer>
        )}

        {footer && <FooterContainer theme={theme}>{footer}</FooterContainer>}
      </Container>
    </ScrollViewContainer>
  );
};
