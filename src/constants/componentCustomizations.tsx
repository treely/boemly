import { defineRecipe, defineSlotRecipe } from '@chakra-ui/react';
import BorderBottomStyles from '../types/BorderBottomStyles';
import { FONT_SIZES } from './customizations';

export const headingRecipe = defineRecipe({
  base: {
    fontWeight: 'semibold',
    color: 'black',
  },
  variants: {
    size: {
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
  },
});

export const textRecipe = defineRecipe({
  base: {
    color: 'gray.500',
  },
  variants: {
    size: {
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
  },
});

export const buttonRecipe = defineRecipe({
  base: {
    borderRadius: 'xl',
    whiteSpace: 'normal',
    wordWrap: 'break-word',
  },

  variants: {
    variant: {
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
    size: {
      xl: {
        h: 16,
        minW: 12,
        px: 6,
        ...textRecipe.variants?.size.smLowBold,
      },
      lg: {
        h: 12,
        minW: 12,
        px: 6,
        ...textRecipe.variants?.size.smLowBold,
      },
      md: {
        h: 10,
        minW: 10,
        px: 4,
        ...textRecipe.variants?.size.smLowBold,
      },
      sm: {
        h: 8,
        minW: 8,
        borderRadius: 'lg',
        px: 3,
        ...textRecipe.variants?.size.smLowBold,
      },
      xs: {
        h: 6,
        minW: 6,
        borderRadius: 'lg',
        px: 2,
        ...textRecipe.variants?.size.xsLowBold,
      },
    },
  },

  defaultVariants: {
    variant: 'solid',
  },
});

export const linkRecipe = defineRecipe({
  base: {
    transition: 'opacity ease var(--medium-transition-duration)',
    textDecoration: 'underline',

    _hover: {
      opacity: '0.8',
    },
  },

  variants: {
    size: {
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
  },

  defaultVariants: {
    size: 'sm',
  },
});

export const accordionRecipe = defineSlotRecipe({
  slots: ['button', 'container', 'icon', 'panel'],
  base: {
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
    variant: {
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
  },

  defaultVariants: {
    variant: 'black',
  },
});

const inputsize = {
  xl: {
    ...textRecipe.variants?.size.mdLowNormal,
    px: '4',
    height: '16',
    borderRadius: 'xl',
  },
  lg: {
    ...textRecipe.variants?.size.smLowNormal,
    px: '4',
    height: '12',
    borderRadius: 'lg',
  },
  md: {
    ...textRecipe.variants?.size.smLowNormal,
    px: '4',
    height: '10',
    borderRadius: 'lg',
  },
  sm: {
    ...textRecipe.variants?.size.smLowNormal,
    px: '3',
    height: '8',
    borderRadius: 'md',
  },
  xs: {
    ...textRecipe.variants?.size.xsLowNormal,
    px: '2',
    height: '6',
    borderRadius: 'md',
  },
};

export const inputRecipe = defineRecipe({
  variants: {
    size: {
      xl: {
        field: inputsize.xl,
        addon: inputsize.xl,
      },
      lg: {
        field: inputsize.lg,
        addon: inputsize.lg,
      },
      md: {
        field: inputsize.md,
        addon: inputsize.md,
      },
      sm: {
        field: inputsize.sm,
        addon: inputsize.sm,
      },
    },
  },

  defaultVariants: {
    size: 'lg',
    // focusBorderColor: 'black', TODO: Handle focusBorderColor in chakra-ui v3
  },
});

export const numberInputRecipe = defineRecipe({
  variants: {
    size: {
      xl: {
        field: inputsize.xl,
        addon: inputsize.xl,
      },
      lg: {
        field: inputsize.lg,
        addon: inputsize.lg,
      },
      md: {
        field: inputsize.md,
        addon: inputsize.md,
      },
      sm: {
        field: inputsize.sm,
        addon: inputsize.sm,
      },
    },
  },

  defaultVariants: {
    size: 'lg',
    // focusBorderColor: 'black', TODO: Handle focusBorderColor in chakra-ui v3
  },
});

export const pinInputRecipe = defineRecipe({
  variants: {
    size: {
      xl: {
        fontSize: inputsize.xl.fontSize,
        w: inputsize.xl.height,
        h: inputsize.xl.height,
        borderRadius: inputsize.xl.borderRadius,
      },
      lg: {
        fontSize: inputsize.lg.fontSize,
        w: inputsize.lg.height,
        h: inputsize.lg.height,
        borderRadius: inputsize.lg.borderRadius,
      },
      md: {
        fontSize: inputsize.md.fontSize,
        w: inputsize.md.height,
        h: inputsize.md.height,
        borderRadius: inputsize.md.borderRadius,
      },
      sm: {
        fontSize: inputsize.sm.fontSize,
        w: inputsize.sm.height,
        h: inputsize.sm.height,
        borderRadius: inputsize.sm.borderRadius,
      },
    },
  },

  defaultVariants: {
    size: 'lg',
    // focusBorderColor: 'black', TODO: Handle focusBorderColor in chakra-ui v3
  },
});

export const progressRecipe = defineSlotRecipe({
  slots: ['track'],
  base: {
    track: {
      borderRadius: 'full',
    },
  },
});

export const textareaRecipe = defineRecipe({
  variants: {
    size: {
      xl: {
        ...textRecipe.variants?.size.mdRegularNormal,
        py: '2',
        px: '4',
        borderRadius: 'xl',
      },
      lg: {
        ...textRecipe.variants?.size.mdLowNormal,
        py: '2',
        px: '4',
        borderRadius: 'lg',
      },
      md: {
        ...textRecipe.variants?.size.smRegularNormal,
        py: '2',
        px: '4',
        borderRadius: 'lg',
      },
      sm: {
        ...textRecipe.variants?.size.smLowNormal,
        py: '2',
        px: '3',
        borderRadius: 'md',
      },
    },
  },

  defaultVariants: {
    size: 'lg',
    // focusBorderColor: 'black', TODO: Handle focusBorderColor in chakra-ui v3
  },
});

export const selectRecipe = defineRecipe({
  variants: {
    size: {
      xs: {
        height: inputsize.xs.height,
        fontSize: inputsize.xs.fontSize,
        borderRadius: inputsize.xs.borderRadius,
        badgeSize: FONT_SIZES.xs,
      },
      sm: {
        ...textRecipe.variants?.size.smLowNormal,
        height: inputsize.sm.height,
        fontSize: inputsize.sm.fontSize,
        borderRadius: inputsize.sm.borderRadius,
        badgeSize: FONT_SIZES.xs,
      },
      md: {
        ...textRecipe.variants?.size.smRegularNormal,
        height: inputsize.md.height,
        fontSize: inputsize.md.fontSize,
        borderRadius: inputsize.md.borderRadius,
        badgeSize: FONT_SIZES.xs,
      },
      lg: {
        ...textRecipe.variants?.size.mdLowNormal,
        height: inputsize.lg.height,
        fontSize: inputsize.lg.fontSize,
        borderRadius: inputsize.lg.borderRadius,
        badgeSize: FONT_SIZES.sm,
      },
      xl: {
        ...textRecipe.variants?.size.mdLowNormal,
        height: inputsize.lg.height,
        fontSize: inputsize.lg.fontSize,
        borderRadius: inputsize.lg.borderRadius,
        badgeSize: FONT_SIZES.lg,
      },
    },
    variant: {
      filled: {
        backgroundColor: 'gray.100',
        border: '0.063rem',
        borderColor: 'transparent',
        borderRadius: 'md',
        borderBottomWidth: '0.063rem',
        borderBottomStyle: 'solid' as BorderBottomStyles,
      },
      unstyled: {
        backgroundColor: 'transparent',
        border: '0px',
        borderColor: 'white',
        borderRadius: '0px',
        borderBottomWidth: '0px',
        borderBottomStyle: 'solid' as BorderBottomStyles,
      },
      flushed: {
        backgroundColor: 'transparent',
        border: '0px',
        borderColor: 'gray.200',
        borderRadius: '0px',
        borderBottomWidth: '0.063rem',
        borderBottomStyle: 'solid' as BorderBottomStyles,
      },
      outline: {
        backgroundColor: 'transparent',
        border: '0.063rem solid',
        borderColor: 'gray.200',
        borderRadius: 'md',
        borderBottomWidth: '0.063rem',
        borderBottomStyle: 'solid' as BorderBottomStyles,
      },
    },
  },
});

export const avatarRecipe = defineSlotRecipe({
  slots: ['container', 'excessLabel', 'label'],
  variants: {
    size: {
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
          ...textRecipe.variants?.size.xsLowBold,
        },
        label: {
          ...textRecipe.variants?.size.xsLowBold,
        },
      },
      md: {
        container: {
          width: '2.5rem',
          height: '2.5rem',
          ...textRecipe.variants?.size.mdLowBold,
        },
        excessLabel: {
          width: '2.5rem',
          height: '2.5rem',
        },
        label: {
          ...textRecipe.variants?.size.mdLowBold,
        },
      },
      lg: {
        container: {
          width: '3rem',
          height: '3rem',
          ...textRecipe.variants?.size.mdLowBold,
        },
        excessLabel: {
          width: '3rem',
          height: '3rem',
        },
        label: {
          ...textRecipe.variants?.size.mdLowBold,
        },
      },
      xl: {
        container: {
          width: '4rem',
          height: '4rem',
          ...textRecipe.variants?.size.lgLowBold,
        },
        excessLabel: {
          width: '4rem',
          height: '4rem',
        },
        label: {
          ...textRecipe.variants?.size.lgLowBold,
        },
      },
      '2xl': {
        container: {
          width: '6rem',
          height: '6rem',
          ...headingRecipe.variants?.size.xl,
        },
        excessLabel: {
          width: '6rem',
          height: '6rem',
        },
        label: {
          ...headingRecipe.variants?.size.xl,
        },
      },
      '3xl': {
        container: {
          width: '8rem',
          height: '8rem',
          ...headingRecipe.variants?.size['2xl'],
        },
        excessLabel: {
          width: '8rem',
          height: '8rem',
        },
        label: {
          ...headingRecipe.variants?.size['2xl'],
        },
      },
    },
  },
});

export const alertRecipe = defineSlotRecipe({
  slots: ['container'],
  base: {
    container: {
      borderRadius: 'md',
    },
  },
});

export const tooltipRecipe = defineRecipe({
  base: {
    borderRadius: 'lg',
    px: '4',
    py: '2',
  },
});

export const checkboxRecipe = defineSlotRecipe({
  slots: ['control', 'icon', 'label'],
  base: {
    control: {
      backgroundColor: 'white',
    },
  },

  variants: {
    size: {
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
  },
});

export const tableRecipe = defineSlotRecipe({
  slots: ['table', 'thead', 'tbody', 'tr', 'th', 'td', 'caption'],
  base: {
    th: {
      color: 'gray.500',
      textTransform: 'unset',
    },
    td: {
      color: 'black',
    },
  },
  variants: {
    size: {
      sm: {
        th: {
          ...textRecipe.variants?.size.smRegularNormalBold,
        },
        td: {
          ...textRecipe.variants?.size.smRegularNormal,
        },
        caption: {
          ...textRecipe.variants?.size.smRegularNormal,
        },
      },
      md: {
        th: {
          ...textRecipe.variants?.size.smRegularNormalBold,
        },
        td: {
          ...textRecipe.variants?.size.smRegularNormal,
        },
        caption: {
          ...textRecipe.variants?.size.smRegularNormal,
        },
      },
      lg: {
        th: {
          ...textRecipe.variants?.size.lgRegularNormalBold,
        },
        td: {
          ...textRecipe.variants?.size.lgRegularNormal,
        },
        caption: {
          ...textRecipe.variants?.size.lgRegularNormal,
        },
      },
    },
    variant: {
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
  },
});

export const listRecipe = defineSlotRecipe({
  slots: ['icon'],
  base: {
    icon: {
      backgroundColor: 'primary.50',
    },
  },
  variants: {
    variant: {
      light: {
        icon: {
          backgroundColor: 'primary.200',
        },
      },
    },
  },
});

export const tagRecipe = defineSlotRecipe({
  slots: ['root', 'label', 'startElement', 'endElement', 'closeTrigger'],
  base: {
    root: {
      borderRadius: 'md',
    },
  },
  variants: {
    variant: {
      outline: {
        root: {
          borderWidth: '1px',
          borderColor: 'colorPalette.500',
        },
      },
    },
  },
});
