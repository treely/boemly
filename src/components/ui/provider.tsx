'use client';

import { ChakraProvider } from '@chakra-ui/react';
import * as React from 'react';
import { ColorModeProvider, type ColorModeProviderProps } from './color-mode';
import defaultTheme from '@/theme';

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={defaultTheme}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
