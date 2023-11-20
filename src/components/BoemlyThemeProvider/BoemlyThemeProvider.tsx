import React from 'react';
import { ChakraProvider, Colors } from '@chakra-ui/react';
import { IconContext } from '@phosphor-icons/react';
import { Global } from '@emotion/react';
import getTheme from '../../utils/getTheme';
import iconCustomizations from '../../constants/iconCustomizations';
import GLOBAL_STYLE from '../../constants/globalStyle';
import BorderRadiiCustomization from '../../types/BorderRadiiCustomization';
import FontsCustomization from '../../types/FontsCustomization';
import getDefaultFontImports from '../../utils/getDefaultFontImports';

interface BoemlyThemeProviderProps {
  children: JSX.Element | JSX.Element[];
  colors?: Colors;
  fonts?: FontsCustomization;
  radii?: BorderRadiiCustomization;
}

export const BoemlyThemeProvider: React.FC<BoemlyThemeProviderProps> = ({
  children,
  colors = {},
  fonts = {},
  radii = {},
}: BoemlyThemeProviderProps) => (
  <>
    <Global styles={[GLOBAL_STYLE, ...getDefaultFontImports(fonts)]} />
    <ChakraProvider
      theme={getTheme({ customColors: colors, customFonts: fonts, customRadii: radii })}
    >
      <IconContext.Provider value={iconCustomizations}>{children}</IconContext.Provider>
    </ChakraProvider>
  </>
);
