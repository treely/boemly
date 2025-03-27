'use client';

import { ChakraProvider, SystemContext } from '@chakra-ui/react';
import * as React from 'react';
import defaultTheme from '../../theme';
import { ThemeProvider } from 'next-themes';

interface ProviderProps {
  children: React.ReactNode;
  theme?: SystemContext;
}

export function Provider({ children, theme }: ProviderProps) {
  return (
    <ChakraProvider value={theme || defaultTheme}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </ChakraProvider>
  );
}
