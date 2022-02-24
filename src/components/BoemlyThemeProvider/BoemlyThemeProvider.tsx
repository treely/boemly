import React from 'react';
import { ChakraProvider, Colors } from '@chakra-ui/react';
import { IconContext } from 'phosphor-react';
import getTheme from '../../utils/getTheme';
import iconCustomizations from '../../constants/iconCustomizations';
import GlobalStyle from '../../GlobalStyle';

interface BoemlyThemeProviderProps {
  children: JSX.Element | JSX.Element[];
  colors?: Colors;
}

export const BoemlyThemeProvider: React.FC<BoemlyThemeProviderProps> = ({
  children,
  colors = {},
}: BoemlyThemeProviderProps) => (
  <>
    <GlobalStyle />
    <ChakraProvider theme={getTheme(colors)}>
      <IconContext.Provider value={iconCustomizations}>{children}</IconContext.Provider>
    </ChakraProvider>
  </>
);
