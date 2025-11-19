import { createSystem, defaultConfig } from '@chakra-ui/react';
import {
  accordionSlotRecipe,
  alertSlotRecipe,
  avatarSlotRecipe,
  buttonRecipe,
  checkboxSlotRecipe,
  fieldSlotRecipe,
  headingRecipe,
  inputAddonRecipe,
  inputRecipe,
  linkRecipe,
  listSlotRecipe,
  numberInputSlotRecipe,
  menuSlotRecipe,
  pinInputRecipe,
  popoverSlotRecipe,
  progressSlotRecipe,
  radioGroupSlotRecipe,
  selectRecipe,
  tableSlotRecipe,
  tagSlotRecipe,
  textareaRecipe,
  textRecipe,
  tooltipSlotRecipe,
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
import ColorsCustomization from './types/ColorsCustomization';
import FontsCustomization from './types/FontsCustomization';

interface Options {
  customColors: ColorsCustomization;
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
    globalCss: {
      html: {
        colorPalette: 'primary',
      },
    },
    theme: {
      tokens: {
        colors: { ...COLORS, ...customColors } as typeof COLORS,
        breakpoints: BREAKPOINTS,
        fonts: { ...FONTS, ...customFonts } as typeof FONTS,
        fontSizes: FONT_SIZES,
        lineHeights: LINE_HEIGHTS,
        radii: { ...RADII, ...customRadii } as typeof RADII,
        sizes: SIZES,
        spacing: SPACE,
        zIndex: Z_INDICES,
      },
      semanticTokens: {
        colors: {
          primary: {
            solid: { value: '{colors.primary.500}' },
            contrast: { value: 'white' },
            fg: { value: '{colors.primary.700}' },
            muted: { value: '{colors.primary.100}' },
            subtle: { value: '{colors.primary.100}' },
            emphasized: { value: '{colors.primary.300}' },
            focusRing: { value: '{colors.primary.500}' },
          },
          gray: {
            solid: { value: '{colors.gray.100}' },
            contrast: { value: 'white' },
            fg: { value: '{colors.gray.700}' },
            muted: { value: '{colors.gray.100}' },
            subtle: { value: '{colors.gray.100}' },
            emphasized: { value: '{colors.gray.300}' },
            focusRing: { value: '{colors.gray.500}' },
          },
          red: {
            solid: { value: '{colors.red.500}' },
            contrast: { value: 'white' },
            fg: { value: '{colors.red.700}' },
            muted: { value: '{colors.red.100}' },
            subtle: { value: '{colors.red.100}' },
            emphasized: { value: '{colors.red.300}' },
            focusRing: { value: '{colors.red.500}' },
          },
          blue: {
            solid: { value: '{colors.blue.500}' },
            contrast: { value: 'white' },
            fg: { value: '{colors.blue.700}' },
            muted: { value: '{colors.blue.100}' },
            subtle: { value: '{colors.blue.100}' },
            emphasized: { value: '{colors.blue.300}' },
            focusRing: { value: '{colors.blue.500}' },
          },
          whiteAlpha: {
            solid: { value: '{colors.whiteAlpha.500}' },
            contrast: { value: '{colors.black}' },
            fg: { value: '{colors.whiteAlpha.700}' },
            muted: { value: '{colors.whiteAlpha.100}' },
            subtle: { value: '{colors.whiteAlpha.100}' },
            emphasized: { value: '{colors.whiteAlpha.300}' },
            focusRing: { value: '{colors.whiteAlpha.500}' },
          },
          blackAlpha: {
            solid: { value: '{colors.blackAlpha.500}' },
            contrast: { value: 'white' },
            fg: { value: '{colors.blackAlpha.700}' },
            muted: { value: '{colors.blackAlpha.100}' },
            subtle: { value: '{colors.blackAlpha.100}' },
            emphasized: { value: '{colors.blackAlpha.300}' },
            focusRing: { value: '{colors.blackAlpha.500}' },
          },
        },
      },
      recipes: {
        button: buttonRecipe,
        heading: headingRecipe,
        input: inputRecipe,
        inputAddon: inputAddonRecipe,
        link: linkRecipe,
        pinInput: pinInputRecipe,
        select: selectRecipe,
        text: textRecipe,
        textarea: textareaRecipe,
      },
      slotRecipes: {
        accordion: accordionSlotRecipe,
        alert: alertSlotRecipe,
        avatar: avatarSlotRecipe,
        checkbox: checkboxSlotRecipe,
        field: fieldSlotRecipe,
        list: listSlotRecipe,
        menu: menuSlotRecipe,
        numberInput: numberInputSlotRecipe,
        popover: popoverSlotRecipe,
        progress: progressSlotRecipe,
        radioGroup: radioGroupSlotRecipe,
        table: tableSlotRecipe,
        tag: tagSlotRecipe,
        tooltip: tooltipSlotRecipe,
      },
    },
  });
};

// Create a default theme with empty customizations
const defaultTheme = getSystem();

// Export the default theme for the Chakra CLI to use
export default defaultTheme;
