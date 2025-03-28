import { createSystem, defaultConfig } from '@chakra-ui/react';
import {
  accordionRecipe,
  alertRecipe,
  avatarRecipe,
  buttonRecipe,
  checkboxRecipe,
  headingRecipe,
  inputRecipe,
  linkRecipe,
  listRecipe,
  numberInputRecipe,
  pinInputRecipe,
  progressRecipe,
  selectRecipe,
  tableRecipe,
  textareaRecipe,
  textRecipe,
  tooltipRecipe,
} from './constants/componentCustomizations';
import {
  BREAKPOINTS,
  COLORS,
  FONTS,
  FONT_SIZES,
  LINE_HEIGHTS,
  RADII,
  SIZES,
  SPACE,
  Z_INDICES,
} from './constants/customizations';
import BorderRadiiCustomization from './types/BorderRadiiCustomization';
import FontsCustomization from './types/FontsCustomization';

interface Options {
  customColors: Record<string, string>;
  customFonts: FontsCustomization;
  customRadii: BorderRadiiCustomization;
}

export const getSystem = ({
  customColors = {},
  customFonts = {},
  customRadii = {},
}: Partial<Options> = {}) => {
  return createSystem(defaultConfig, {
    cssVarsPrefix: 'boemly',
    theme: {
      tokens: {
        colors: { ...COLORS, ...(customColors || {}) },
        breakpoints: BREAKPOINTS,
        fonts: { ...FONTS, ...(customFonts || {}) },
        fontSizes: FONT_SIZES,
        lineHeights: LINE_HEIGHTS,
        radii: { ...RADII, ...(customRadii || {}) },
        sizes: SIZES,
        spacing: SPACE,
        zIndex: Z_INDICES,
      },
      semanticTokens: {
        colors: {
          primary: {
            solid: { value: '{colors.primary.500}' },
            contrast: { value: '{colors.primary.100}' },
            fg: { value: '{colors.primary.700}' },
            muted: { value: '{colors.primary.100}' },
            subtle: { value: '{colors.primary.200}' },
            emphasized: { value: '{colors.primary.300}' },
            focusRing: { value: '{colors.primary.500}' },
          },
        },
      },
      recipes: {
        button: buttonRecipe,
        heading: headingRecipe,
        input: inputRecipe,
        link: linkRecipe,
        numberInput: numberInputRecipe,
        pinInput: pinInputRecipe,
        select: selectRecipe,
        text: textRecipe,
        textarea: textareaRecipe,
        tooltip: tooltipRecipe,
      },
      slotRecipes: {
        accordion: accordionRecipe,
        alert: alertRecipe,
        avatar: avatarRecipe,
        checkbox: checkboxRecipe,
        list: listRecipe,
        progress: progressRecipe,
        table: tableRecipe,
      },
    },
    // TODO: Fix passing of color scheme
    // https://www.chakra-ui.com/docs/get-started/migration#colorscheme-prop
  });
};

// Create a default theme with empty customizations
const defaultTheme = getSystem();

// Export the default theme for the Chakra CLI to use
export default defaultTheme;
