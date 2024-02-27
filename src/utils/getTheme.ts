import { Colors, extendTheme } from '@chakra-ui/react';
import {
  CustomizedAccordion,
  CustomizedAlert,
  CustomizedAvatar,
  CustomizedButton,
  CustomizedCheckbox,
  CustomizedHeading,
  CustomizedInput,
  CustomizedLink,
  CustomizedList,
  CustomizedNumberInput,
  CustomizedPinInput,
  CustomizedProgress,
  CustomizedSelect,
  CustomizedTable,
  CustomizedText,
  CustomizedTextarea,
  CustomizedTooltip,
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
  customColors: Colors;
  customFonts: FontsCustomization;
  customRadii: BorderRadiiCustomization;
}

const getTheme = ({ customColors, customFonts, customRadii }: Options) => {
  return extendTheme({
    config: { cssVarPrefix: 'boemly' },
    colors: { ...COLORS, ...customColors },
    breakpoints: BREAKPOINTS,
    fonts: { ...FONTS, ...customFonts },
    fontSizes: FONT_SIZES,
    lineHeights: LINE_HEIGHTS,
    radii: { ...RADII, ...customRadii },
    sizes: SIZES,
    space: SPACE,
    zIndices: Z_INDICES,

    components: {
      Accordion: CustomizedAccordion,
      Alert: CustomizedAlert,
      Avatar: CustomizedAvatar,
      Button: CustomizedButton,
      Checkbox: CustomizedCheckbox,
      Heading: CustomizedHeading,
      Input: CustomizedInput,
      Link: CustomizedLink,
      List: CustomizedList,
      NumberInput: CustomizedNumberInput,
      PinInput: CustomizedPinInput,
      Progress: CustomizedProgress,
      Select: CustomizedSelect,
      Table: CustomizedTable,
      Text: CustomizedText,
      Textarea: CustomizedTextarea,
      Tooltip: CustomizedTooltip,
    },
  });
};

export default getTheme;
