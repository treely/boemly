import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { IconContext } from 'phosphor-react';
import chakraTheme from '../../constants/chakraTheme';
import iconCustomizations from '../../constants/iconCustomizations';
import GlobalStyle from '../../GlobalStyle';

interface BoemlyThemeProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const BoemlyThemeProvider: React.FC<BoemlyThemeProviderProps> = ({
  children,
}: BoemlyThemeProviderProps) => (
  <>
    <GlobalStyle />
    <ChakraProvider theme={chakraTheme}>
      <IconContext.Provider value={iconCustomizations}>{children}</IconContext.Provider>
    </ChakraProvider>
  </>
);
