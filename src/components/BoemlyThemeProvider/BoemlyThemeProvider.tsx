import React from 'react';
import { ChakraProvider, Colors } from '@chakra-ui/react';
import { IconContext } from 'phosphor-react';
import getTheme from '../../utils/getTheme';
import iconCustomizations from '../../constants/iconCustomizations';
import GlobalStyle from '../../GlobalStyle';
import BorderRadiiCustomization from '../../types/BorderRadiiCustomization';

interface BoemlyThemeProviderProps {
  children: JSX.Element | JSX.Element[];
  colors?: Colors;
  radii?: BorderRadiiCustomization;
}

export const BoemlyThemeProvider: React.FC<BoemlyThemeProviderProps> = ({
  children,
  colors = {},
  radii = {},
}: BoemlyThemeProviderProps) => (
  <>
    <GlobalStyle />
    <ChakraProvider theme={getTheme({ customColors: colors, customRadii: radii })}>
      <IconContext.Provider value={iconCustomizations}>{children}</IconContext.Provider>
    </ChakraProvider>
  </>
);
