import { Box } from '@chakra-ui/react';
import { css } from '@emotion/react';
import React, { ReactNode, useEffect, useState } from 'react';
import { useWindowScroll } from 'react-use';

export interface LayoutProps {
  header: ReactNode;
  extendableHeader: boolean;
  theme: 'light' | 'dark';
  body: ReactNode;
  footer: ReactNode;
  hideFooter?: boolean;
  banner?: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({
  header,
  extendableHeader,
  theme,
  body,
  footer,
  hideFooter,
  banner = '',
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
      {banner && (
        <Box
          width="full"
          position="fixed"
          top="0"
          left="0"
          height="var(--banner-height)"
          zIndex="docked"
        >
          {banner}
        </Box>
      )}
      <Box
        as="header"
        position="fixed"
        top={banner ? 'var(--banner-height)' : '0'}
        left="0"
        width="full"
        height={[
          'var(--header-height)',
          null,
          headerExtended ? 'var(--extended-header-height)' : 'var(--header-height)',
        ]}
        backgroundColor={headerExtended ? 'transparent' : 'white'}
        color={theme === 'dark' ? 'white' : 'black'}
        zIndex="docked"
        boxShadow={headerExtended ? 'unset' : 'lg'}
        css={css`
          transition: var(--default-ease) var(--medium-transition-duration) height,
            var(--default-ease) var(--medium-transition-duration) background-color,
            var(--default-ease) var(--medium-transition-duration) color;
        `}
      >
        {header}
      </Box>
      <Box as="main" position="relative" marginTop={banner ? 'var(--banner-height)' : '0'}>
        {body}
      </Box>
      {!hideFooter && <footer>{footer}</footer>}
    </>
  );
};
