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

interface ILayoutProps {
  verticalCenter?: boolean;
  scrollView?: boolean;
  children: ReactNode;
  header?: ReactElement;
  footer?: ReactElement;
}

export const Layout = ({ verticalCenter, scrollView, children, header, footer }: ILayoutProps) => {
  const theme = useTheme();
  return (
    <ScrollViewContainer>
      <Container verticalCenter={verticalCenter} theme={theme}>
        {header && <HeaderContainer theme={theme}>{header}</HeaderContainer>}
        {scrollView ? (
          <ScrollContainer theme={theme}>{children}</ScrollContainer>
        ) : (
          <StaticContainer theme={theme}>{children}</StaticContainer>
        )}

        {footer && <FooterContainer theme={theme}>{footer}</FooterContainer>}
      </Container>
    </ScrollViewContainer>
  );
};
