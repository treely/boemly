import { ReactNode, useEffect, useState } from 'react';
import { useWindowScroll } from 'react-use';
import { Header, Main } from './styles';

export interface LayoutProps {
  header: ReactNode;
  extendableHeader: boolean;
  theme: 'light' | 'dark';
  body: ReactNode;
  footer: ReactNode;
  hideFooter?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({
  header,
  extendableHeader,
  theme,
  body,
  footer,
  hideFooter,
}: LayoutProps) => {
  const { y } = useWindowScroll();
  const [headerExtended, setHeaderExtended] = useState(extendableHeader);

  useEffect(() => {
    if (extendableHeader) {
      setHeaderExtended(y < 10);
    } else {
      setHeaderExtended(false);
    }
  }, [y, extendableHeader]);

  return (
    <>
      <Header extended={headerExtended} theme={theme}>
        {header}
      </Header>
      <Main>{body}</Main>
      {!hideFooter && <footer>{footer}</footer>}
    </>
  );
};
