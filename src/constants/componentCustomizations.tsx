import React from 'react';
import { CaretDown } from 'phosphor-react';

export const CustomizedHeading = {
  baseStyle: {
    fontWeight: 'semibold',
    color: 'black',
  },
  sizes: {
    '4xl': {
      fontSize: ['5xl', null, null, '7xl'],
      lineHeight: ['9', null, null, '11'],
      fontFamily: 'var(--boemly-fonts-display)',
      fontWeight: 'bold',
    },
    '3xl': {
      fontSize: ['3xl', null, null, '6xl'],
      lineHeight: ['9', null, null, '10'],
      fontFamily: 'var(--boemly-fonts-display)',
      fontWeight: 'bold',
    },
    '2xl': {
      fontSize: '4xl',
      lineHeight: '9',
    },
    '2xlMono': {
      fontSize: '4xl',
      lineHeight: '9',
      fontFamily: 'var(--boemly-fonts-mono)',
    },
    xl: { fontSize: '2xl', lineHeight: '7' },
    lg: { fontSize: 'xl', lineHeight: '5' },
    md: { fontSize: 'lg', lineHeight: '4' },
    sm: { fontSize: 'md', lineHeight: '3' },
    xs: { fontSize: 'sm', lineHeight: '1' },
  },
};

export const CustomizedText = {
  baseStyle: {
    color: 'gray.500',
  },
  sizes: {
    xlRegularNormal: {
      fontSize: ['xl', null, null, '4xl'],
      lineHeight: ['8', null, null, '10'],
    },
    xlRegularNormalBold: {
      fontSize: ['xl', null, null, '4xl'],
      lineHeight: ['8', null, null, '10'],
      fontWeight: '600',
    },
    xlLowNormal: {
      fontSize: ['xl', null, null, '4xl'],
      lineHeight: ['5', null, null, '9'],
    },
    xlLowBold: {
      fontSize: ['xl', null, null, '4xl'],
      lineHeight: ['5', null, null, '9'],
      fontWeight: '600',
    },
    xlMonoNormal: {
      fontSize: ['xl', null, null, '4xl'],
      lineHeight: ['8', null, null, '10'],
      fontFamily: 'var(--boemly-fonts-mono)',
    },
    xlMonoUppercase: {
      fontSize: ['xl', null, null, '4xl'],
      lineHeight: ['8', null, null, '10'],
      fontFamily: 'var(--boemly-fonts-mono)',
      textTransform: 'uppercase',
    },

    lgRegularNormal: {
      fontSize: 'xl',
      lineHeight: '8',
    },
    lgRegularNormalBold: {
      fontSize: 'xl',
      lineHeight: '8',
      fontWeight: '600',
    },
    lgLowNormal: {
      fontSize: 'xl',
      lineHeight: '5',
    },
    lgLowBold: {
      fontSize: 'xl',
      lineHeight: '5',
      fontWeight: '600',
    },
    lgMonoNormal: {
      fontSize: 'xl',
      lineHeight: '8',
      fontFamily: 'var(--boemly-fonts-mono)',
    },
    lgMonoUppercase: {
      fontSize: 'xl',
      lineHeight: '8',
      fontFamily: 'var(--boemly-fonts-mono)',
      textTransform: 'uppercase',
    },

    mdRegularNormal: {
      fontSize: 'md',
      lineHeight: '6',
    },
    mdRegularNormalBold: {
      fontSize: 'md',
      lineHeight: '6',
      fontWeight: '600',
    },
    mdLowNormal: {
      fontSize: 'md',
      lineHeight: '6',
    },
    mdLowBold: {
      fontSize: 'md',
      lineHeight: '6',
      fontWeight: '600',
    },
    mdMonoNormal: {
      fontSize: 'md',
      lineHeight: '6',
      fontFamily: 'var(--boemly-fonts-mono)',
    },
    mdMonoUppercase: {
      fontSize: 'md',
      lineHeight: '6',
      fontFamily: 'var(--boemly-fonts-mono)',
      textTransform: 'uppercase',
    },

    smRegularNormal: {
      fontSize: 'sm',
      lineHeight: '4',
    },
    smRegularNormalBold: {
      fontSize: 'sm',
      lineHeight: '4',
      fontWeight: '600',
    },
    smLowNormal: {
      fontSize: 'sm',
      lineHeight: '1',
    },
    smLowBold: {
      fontSize: 'sm',
      lineHeight: '1',
      fontWeight: '600',
    },
    smMonoNormal: {
      fontSize: 'sm',
      lineHeight: '4',
      fontFamily: 'var(--boemly-fonts-mono)',
    },
    smMonoUppercase: {
      fontSize: 'sm',
      lineHeight: '4',
      fontFamily: 'var(--boemly-fonts-mono)',
      textTransform: 'uppercase',
    },

    xsRegularNormal: {
      fontSize: 'xs',
      lineHeight: '2',
    },
    xsRegularNormalBold: {
      fontSize: 'xs',
      lineHeight: '2',
      fontWeight: '600',
    },
    xsLowNormal: {
      fontSize: 'xs',
      lineHeight: '0',
    },
    xsLowBold: {
      fontSize: 'xs',
      lineHeight: '0',
      fontWeight: '600',
    },
    xsMonoNormal: {
      fontSize: 'xs',
      lineHeight: '2',
      fontFamily: 'var(--boemly-fonts-mono)',
    },
    xsMonoUppercase: {
      fontSize: 'xs',
      lineHeight: '2',
      fontFamily: 'var(--boemly-fonts-mono)',
      textTransform: 'uppercase',
    },
  },
};

export const CustomizedButton = {
  baseStyle: {
    borderRadius: 'xl',
    whiteSpace: 'normal',
    wordWrap: 'break-word',
  },
  variants: {
    solid: {
      color: 'black',
    },
    link: {
      color: 'black',
      textDecoration: 'none',
      _hover: {
        opacity: '0.8',
        textDecoration: 'none',
      },
    },
    outline: {
      color: 'black',
      borderColor: 'gray.200',
      borderWidth: '1px',
      borderStyle: 'solid',
      background: 'white',
      _hover: {
        background: 'gray.50',
      },
      _active: {
        background: 'gray.50',
      },
    },
    outlineWhite: {
      color: 'white',
      borderColor: 'whiteAlpha.400',
      borderWidth: '1px',
      borderStyle: 'solid',
      _hover: {
        background: 'whiteAlpha.200',
        borderColor: 'whiteAlpha.800',
      },
      _active: {
        background: 'whiteAlpha.300',
        borderColor: 'whiteAlpha.800',
      },
    },
    ghost: {
      color: 'black',
      _hover: {
        background: 'primary.50',
      },
      _active: {
        background: 'primary.100',
      },
    },
  },
  sizes: {
    xl: {
      h: 16,
      minW: 12,
      px: 6,
      ...CustomizedText.sizes.smLowBold,
    },
    lg: {
      h: 12,
      minW: 12,
      px: 6,
      ...CustomizedText.sizes.smLowBold,
    },
    md: {
      h: 10,
      minW: 10,
      px: 4,
      ...CustomizedText.sizes.smLowBold,
    },
    sm: {
      h: 8,
      minW: 8,
      borderRadius: 'lg',
      px: 3,
      ...CustomizedText.sizes.smLowBold,
    },
    xs: {
      h: 6,
      minW: 6,
      borderRadius: 'lg',
      px: 2,
      ...CustomizedText.sizes.xsLowBold,
    },
  },
  defaultProps: {
    colorScheme: 'primary',
    variant: 'solid',
  },
};

export const CustomizedLink = {
  baseStyle: {
    transition: 'opacity ease var(--medium-transition-duration)',
    textDecoration: 'underline',

    _hover: {
      opacity: '0.8',
    },
  },
  sizes: {
    lg: {
      fontSize: 'lg',
    },
    md: {
      fontSize: 'md',
    },
    sm: {
      fontSize: 'sm',
    },
    xs: {
      fontSize: 'xs',
    },
  },
  defaultProps: {
    size: 'sm',
  },
};

export const CustomizedAccordion = {
  baseStyle: {
    icon: {
      fontSize: '1rem',
      borderRadius: 'lg',
      width: '1.5rem',
      height: '1.5rem',
    },
    button: {
      fontWeight: 'semibold',
      borderRadius: 'md',
      paddingX: '0',
      _hover: {
        bg: 'unset',
      },
    },
    container: {
      paddingX: '0',
      paddingTop: '6',
      paddingBottom: '5',
    },
    panel: {
      paddingX: '0',
      paddingY: '2',
    },
  },
  variants: {
    white: {
      icon: {
        color: 'primary.700',
        background: 'white',
      },
      container: {
        borderColor: 'whiteAlpha.300',
      },
    },
    black: {
      icon: {
        color: 'white',
        background: 'black',
      },
      container: {
        borderColor: 'gray.300',
      },
    },
  },
  defaultProps: {
    variant: 'black',
  },
};

const inputSizes = {
  xl: {
    ...CustomizedText.sizes.mdLowNormal,
    px: '4',
    h: '16',
    borderRadius: 'xl',
  },
  lg: {
    ...CustomizedText.sizes.smLowNormal,
    px: '4',
    h: '12',
    borderRadius: 'lg',
  },
  md: {
    ...CustomizedText.sizes.smLowNormal,
    px: '4',
    h: '10',
    borderRadius: 'lg',
  },
  sm: {
    ...CustomizedText.sizes.smLowNormal,
    px: '3',
    h: '8',
    borderRadius: 'md',
  },
};

export const CustomizedInput = {
  sizes: {
    xl: {
      field: inputSizes.xl,
      addon: inputSizes.xl,
    },
    lg: {
      field: inputSizes.lg,
      addon: inputSizes.lg,
    },
    md: {
      field: inputSizes.md,
      addon: inputSizes.md,
    },
    sm: {
      field: inputSizes.sm,
      addon: inputSizes.sm,
    },
  },
  defaultProps: {
    size: 'lg',
    focusBorderColor: 'black',
  },
};

export const CustomizedNumberInput = {
  sizes: CustomizedInput.sizes,
  defaultProps: {
    size: 'lg',
    focusBorderColor: 'black',
  },
};

export const CustomizedPinInput = {
  sizes: {
    xl: {
      fontSize: inputSizes.xl.fontSize,
      w: inputSizes.xl.h,
      h: inputSizes.xl.h,
      borderRadius: inputSizes.xl.borderRadius,
    },
    lg: {
      fontSize: inputSizes.lg.fontSize,
      w: inputSizes.lg.h,
      h: inputSizes.lg.h,
      borderRadius: inputSizes.lg.borderRadius,
    },
    md: {
      fontSize: inputSizes.md.fontSize,
      w: inputSizes.md.h,
      h: inputSizes.md.h,
      borderRadius: inputSizes.md.borderRadius,
    },
    sm: {
      fontSize: inputSizes.sm.fontSize,
      w: inputSizes.sm.h,
      h: inputSizes.sm.h,
      borderRadius: inputSizes.sm.borderRadius,
    },
  },
  defaultProps: {
    size: 'lg',
    focusBorderColor: 'black',
  },
};

export const CustomizedTextarea = {
  sizes: {
    xl: {
      ...CustomizedText.sizes.mdRegularNormal,
      py: '2',
      px: '4',
      borderRadius: 'xl',
    },
    lg: {
      ...CustomizedText.sizes.mdLowNormal,
      py: '2',
      px: '4',
      borderRadius: 'lg',
    },
    md: {
      ...CustomizedText.sizes.smRegularNormal,
      py: '2',
      px: '4',
      borderRadius: 'lg',
    },
    sm: {
      ...CustomizedText.sizes.smLowNormal,
      py: '2',
      px: '3',
      borderRadius: 'md',
    },
  },
  defaultProps: {
    size: 'lg',
    focusBorderColor: 'black',
  },
};

export const CustomizedSelect = {
  defaultProps: {
    variant: 'outline',
    icon: <CaretDown size={10} />,
    focusBorderColor: 'black',
  },
  sizes: {
    xl: {
      field: inputSizes.xl,
    },
    lg: {
      field: {
        fontSize: inputSizes.lg.fontSize,
        borderRadius: inputSizes.lg.borderRadius,
      },
    },
    md: {
      field: {
        fontSize: inputSizes.md.fontSize,
        borderRadius: inputSizes.md.borderRadius,
      },
    },
    sm: {
      field: {
        fontSize: inputSizes.sm.fontSize,
        borderRadius: inputSizes.sm.borderRadius,
      },
    },
    xs: {
      field: {
        fontSize: 'xs',
        borderRadius: inputSizes.sm.borderRadius,
      },
    },
  },
};

export const CustomizedAvatar = {
  sizes: {
    '2xs': {
      container: {
        fontWeight: '600',
      },
      label: {
        fontWeight: '600',
      },
    },
    xs: {
      container: {
        fontWeight: '600',
      },
      label: {
        fontWeight: '600',
      },
    },
    sm: {
      container: {
        ...CustomizedText.sizes.xsLowBold,
      },
      label: {
        ...CustomizedText.sizes.xsLowBold,
      },
    },
    md: {
      container: {
        width: '2.5rem',
        height: '2.5rem',
        ...CustomizedText.sizes.mdLowBold,
      },
      excessLabel: {
        width: '2.5rem',
        height: '2.5rem',
      },
      label: {
        ...CustomizedText.sizes.mdLowBold,
      },
    },
    lg: {
      container: {
        width: '3rem',
        height: '3rem',
        ...CustomizedText.sizes.mdLowBold,
      },
      excessLabel: {
        width: '3rem',
        height: '3rem',
      },
      label: {
        ...CustomizedText.sizes.mdLowBold,
      },
    },
    xl: {
      container: {
        width: '4rem',
        height: '4rem',
        ...CustomizedText.sizes.lgLowBold,
      },
      excessLabel: {
        width: '4rem',
        height: '4rem',
      },
      label: {
        ...CustomizedText.sizes.lgLowBold,
      },
    },
    '2xl': {
      container: {
        width: '6rem',
        height: '6rem',
        ...CustomizedHeading.sizes.xl,
      },
      excessLabel: {
        width: '6rem',
        height: '6rem',
      },
      label: {
        ...CustomizedHeading.sizes.xl,
      },
    },
    '3xl': {
      container: {
        width: '8rem',
        height: '8rem',
        ...CustomizedHeading.sizes['2xl'],
      },
      excessLabel: {
        width: '8rem',
        height: '8rem',
      },
      label: {
        ...CustomizedHeading.sizes['2xl'],
      },
    },
  },
};

export const CustomizedAlert = {
  baseStyle: {
    container: {
      borderRadius: 'md',
    },
  },
};

export const CustomizedTooltip = {
  baseStyle: {
    borderRadius: 'lg',
    px: '4',
    py: '2',
  },
};

export const CustomizedCheckbox = {
  defaultProps: {
    colorScheme: 'primary',
  },
  baseStyle: {
    control: {
      backgroundColor: 'white',
    },
  },
  sizes: {
    xl: {
      icon: {
        w: '8',
        h: '8',
      },
      control: {
        w: '8',
        h: '8',
      },
      label: {
        fontSize: 'xl',
      },
    },
  },
};

export const CustomizedTable = {
  baseStyle: {
    th: {
      color: 'gray.500',
      textTransform: 'unset',
    },
    td: {
      color: 'black',
    },
  },
  sizes: {
    sm: {
      th: {
        ...CustomizedText.sizes.smRegularNormalBold,
      },
      td: {
        ...CustomizedText.sizes.smRegularNormal,
      },
      caption: {
        ...CustomizedText.sizes.smRegularNormal,
      },
    },
    md: {
      th: {
        ...CustomizedText.sizes.smRegularNormalBold,
      },
      td: {
        ...CustomizedText.sizes.smRegularNormal,
      },
      caption: {
        ...CustomizedText.sizes.smRegularNormal,
      },
    },
    lg: {
      th: {
        ...CustomizedText.sizes.lgRegularNormalBold,
      },
      td: {
        ...CustomizedText.sizes.lgRegularNormal,
      },
      caption: {
        ...CustomizedText.sizes.lgRegularNormal,
      },
    },
  },
  variants: {
    minimal: {
      table: {
        backgroundColor: 'transparent',
      },
      th: {
        paddingX: '0',
        paddingY: '2',
        letterSpacing: 'normal',
      },
      td: {
        paddingX: '0',
        paddingY: '2',
      },
    },
  },
};

export const CustomizedList = {
  baseStyle: {
    icon: {
      backgroundColor: 'primary.50',
    },
  },
  variants: {
    light: {
      icon: {
        backgroundColor: 'primary.200',
      },
    },
  },
};
