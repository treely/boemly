import React from 'react';
import { ChakraProvider, Colors } from '@chakra-ui/react';
import { IconContext } from 'phosphor-react';
import getTheme from '../../utils/getTheme';
import iconCustomizations from '../../constants/iconCustomizations';
import GLOBAL_STYLE from '../../constants/globalStyle';
import BorderRadiiCustomization from '../../types/BorderRadiiCustomization';
import { Global } from '@emotion/react';

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
    <Global styles={GLOBAL_STYLE} />
    <ChakraProvider theme={getTheme({ customColors: colors, customRadii: radii })}>
      <IconContext.Provider value={iconCustomizations}>{children}</IconContext.Provider>
    </ChakraProvider>
  </>
);
