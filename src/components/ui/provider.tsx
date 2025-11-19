'use client';

import { ChakraProvider, SystemContext } from '@chakra-ui/react';
import * as React from 'react';
import defaultTheme from '../../theme';

interface ProviderProps {
  children: React.ReactNode;
  theme?: SystemContext;
}

export function Provider({ children, theme }: ProviderProps) {
  return <ChakraProvider value={theme || defaultTheme}>{children}</ChakraProvider>;
}
