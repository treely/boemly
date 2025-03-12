import { Color, createSystem, defaultConfig } from '@chakra-ui/react';
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
} from '../constants/componentCustomizations';
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
} from '../constants/customizations';
import BorderRadiiCustomization from '../types/BorderRadiiCustomization';
import FontsCustomization from '../types/FontsCustomization';

interface Options {
  customColors: Color;
  customFonts: FontsCustomization;
  customRadii: BorderRadiiCustomization;
}

const getSystem = ({ customColors, customFonts, customRadii }: Options) => {
  return createSystem(defaultConfig, {
    cssVarsPrefix: 'boemly',
    theme: {
      tokens: {
        colors: { ...COLORS, ...customColors },
        breakpoints: BREAKPOINTS,
        fonts: { ...FONTS, ...customFonts },
        fontSizes: FONT_SIZES,
        lineHeights: LINE_HEIGHTS,
        radii: { ...RADII, ...customRadii },
        sizes: SIZES,
        spacing: SPACE,
        zIndex: Z_INDICES,
      },
      recipes: {
        Button: buttonRecipe,
        Heading: headingRecipe,
        Input: inputRecipe,
        Link: linkRecipe,
        NumberInput: numberInputRecipe,
        PinInput: pinInputRecipe,
        Select: selectRecipe,
        Text: textRecipe,
        Textarea: textareaRecipe,
        Tooltip: tooltipRecipe,
      },
      slotRecipes: {
        Accordion: accordionRecipe,
        Alert: alertRecipe,
        Avatar: avatarRecipe,
        Checkbox: checkboxRecipe,
        List: listRecipe,
        Progress: progressRecipe,
        Table: tableRecipe,
      },
    },

    // TODO: Fix passing of color scheme
    // https://www.chakra-ui.com/docs/get-started/migration#colorscheme-prop
  });
};

export default getSystem;
