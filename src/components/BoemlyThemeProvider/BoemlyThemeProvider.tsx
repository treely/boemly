import React, { ReactNode } from 'react';
import { SystemContext } from '@chakra-ui/react';
import { IconContext } from '@phosphor-icons/react';
import { Global } from '@emotion/react';
import iconCustomizations from '../../constants/iconCustomizations';
import GLOBAL_STYLE from '../../constants/globalStyle';
import BorderRadiiCustomization from '../../types/BorderRadiiCustomization';
import FontsCustomization from '../../types/FontsCustomization';
import getDefaultFontImports from '../../utils/getDefaultFontImports';
import { getSystem } from '../../theme';
import { Provider } from '../ui/provider';

interface BoemlyThemeProviderProps {
  children: ReactNode | ReactNode[];
  colors?: Record<string, string>;
  fonts?: FontsCustomization;
  radii?: BorderRadiiCustomization;
}

export const BoemlyThemeProvider: React.FC<BoemlyThemeProviderProps> = ({
  children,
  colors = {},
  fonts = {},
  radii = {},
}: BoemlyThemeProviderProps) => {
  const customTheme: SystemContext = getSystem({
    customColors: colors,
    customFonts: fonts,
    customRadii: radii,
  });

  return (
    <>
      <Global styles={[GLOBAL_STYLE, ...getDefaultFontImports(fonts)]} />
      <Provider theme={customTheme}>
        <IconContext.Provider value={iconCustomizations}>{children}</IconContext.Provider>
      </Provider>
    </>
  );
};

// TODO Icon customization does not seem to be working (e.g. Check Button with icons in storybook)
