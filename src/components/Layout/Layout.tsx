'use client';

import { Box } from '@chakra-ui/react';
import { useWindowScroll } from '@reactuses/core';
import React, { ReactNode, useEffect, useState } from 'react';

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
  banner,
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
        <Box width="full" zIndex="docked">
          {banner}
        </Box>
      )}
      <Box
        as="header"
        position="sticky"
        top="0"
        left="0"
        width="full"
        height={headerExtended ? 'var(--extended-header-height)' : 'var(--header-height)'}
        backgroundColor={headerExtended ? 'transparent' : 'white'}
        color={theme === 'dark' ? 'white' : 'black'}
        zIndex="docked"
        boxShadow={headerExtended ? 'unset' : 'lg'}
        css={{
          transition:
            'var(--default-ease) var(--medium-transition-duration) height, ' +
            'var(--default-ease) var(--medium-transition-duration) background-color, ' +
            'var(--default-ease) var(--medium-transition-duration) color',
        }}
      >
        {header}
      </Box>
      <Box
        as="main"
        position="relative"
        marginTop={
          headerExtended
            ? 'calc(-1 * var(--extended-header-height))'
            : 'calc(-1 * var(--header-height))'
        }
        css={{
          transition: 'var(--default-ease) var(--medium-transition-duration) margin-top',
        }}
      >
        {body}
      </Box>
      {!hideFooter && <footer>{footer}</footer>}
    </>
  );
};
