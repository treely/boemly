import { Color, createSystem, defaultConfig } from '@chakra-ui/react';
import {
  buttonRecipe,
  headingRecipe,
  linkRecipe,
  textRecipe,
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
        //   Accordion: CustomizedAccordion,
        //   Alert: CustomizedAlert,
        //   Avatar: CustomizedAvatar,
        Button: buttonRecipe,
        //   Checkbox: CustomizedCheckbox,
        Heading: headingRecipe,
        //   Input: CustomizedInput,
        Link: linkRecipe,
        //   List: CustomizedList,
        //   NumberInput: CustomizedNumberInput,
        //   PinInput: CustomizedPinInput,
        //   Progress: CustomizedProgress,
        //   Table: CustomizedTable,
        Text: textRecipe,
        //   Textarea: CustomizedTextarea,
        //   Tooltip: CustomizedTooltip,
      },
    },

    // TODO: Fix passing of color scheme
    // https://www.chakra-ui.com/docs/get-started/migration#colorscheme-prop

    // components: {
    //   Accordion: CustomizedAccordion,
    //   Alert: CustomizedAlert,
    //   Avatar: CustomizedAvatar,
    //   Button: CustomizedButton,
    //   Checkbox: CustomizedCheckbox,
    //   Heading: CustomizedHeading,
    //   Input: CustomizedInput,
    //   Link: CustomizedLink,
    //   List: CustomizedList,
    //   NumberInput: CustomizedNumberInput,
    //   PinInput: CustomizedPinInput,
    //   Progress: CustomizedProgress,
    //   Table: CustomizedTable,
    //   Text: CustomizedText,
    //   Textarea: CustomizedTextarea,
    //   Tooltip: CustomizedTooltip,
    // },
  });
};

export default getSystem;
