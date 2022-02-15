import { extendTheme } from '@chakra-ui/react';
import {
  CustomizedAccordion,
  CustomizedAlert,
  CustomizedAvatar,
  CustomizedButton,
  CustomizedCheckbox,
  CustomizedHeading,
  CustomizedInput,
  CustomizedLink,
  CustomizedNumberInput,
  CustomizedPinInput,
  CustomizedSelect,
  CustomizedTable,
  CustomizedText,
  CustomizedTooltip,
} from './chakraCustomComponents';
import {
  BREAKPOINTS,
  COLORS,
  FONTS,
  FONT_SIZES,
  LINE_HEIGHTS,
  RADII,
  SPACE,
  Z_INDICES,
} from './chakraCustomizations';

const theme = extendTheme({
  colors: COLORS,
  breakpoints: BREAKPOINTS,
  fonts: FONTS,
  fontSizes: FONT_SIZES,
  lineHeights: LINE_HEIGHTS,
  radii: RADII,
  zIndices: Z_INDICES,
  space: SPACE,

  components: {
    Accordion: CustomizedAccordion,
    Alert: CustomizedAlert,
    Avatar: CustomizedAvatar,
    Button: CustomizedButton,
    Checkbox: CustomizedCheckbox,
    Heading: CustomizedHeading,
    Input: CustomizedInput,
    Link: CustomizedLink,
    NumberInput: CustomizedNumberInput,
    PinInput: CustomizedPinInput,
    Select: CustomizedSelect,
    Table: CustomizedTable,
    Text: CustomizedText,
    Tooltip: CustomizedTooltip,
  },
});

export default theme;
