import { defineRecipe, defineSlotRecipe } from '@chakra-ui/react';
import BorderBottomStyles from '../types/BorderBottomStyles';
import { FONT_SIZES } from './customizations';
import {
  accordionAnatomy,
  alertAnatomy,
  avatarAnatomy,
  checkboxAnatomy,
  fieldAnatomy,
  listAnatomy,
  menuAnatomy,
  numberInputAnatomy,
  popoverAnatomy,
  progressAnatomy,
  radioGroupAnatomy,
  tableAnatomy,
  tagAnatomy,
  tooltipAnatomy,
} from '@chakra-ui/react/anatomy';

export const textRecipe = defineRecipe({
  base: {
    color: 'gray.500',
  },
  variants: {
    size: {
      xlRegularNormal: {
        fontSize: '2xl',
        lineHeight: '8',
      },
      xlRegularNormalBold: {
        fontSize: '2xl',
        lineHeight: '8',
        fontWeight: '600',
      },
      xlLowNormal: {
        fontSize: '2xl',
        lineHeight: '5',
      },
      xlLowBold: {
        fontSize: '2xl',
        lineHeight: '5',
        fontWeight: '600',
      },
      xlMonoNormal: {
        fontSize: '2xl',
        lineHeight: '8',
        fontFamily: 'var(--boemly-fonts-mono)',
      },
      xlMonoUppercase: {
        fontSize: '2xl',
        lineHeight: '8',
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

export const accordionSlotRecipe = defineSlotRecipe({
  className: 'accordion',
  slots: accordionAnatomy.keys(),
  base: {
    root: {
      borderTopWidth: '1px',
      borderTopColor: 'gray.200',
    },
    itemIndicator: {
      fontSize: '1rem',
      borderRadius: 'lg',
      width: '1.5rem',
      height: '1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    itemTrigger: {
      fontWeight: 'semibold',
      borderRadius: 'md',
      paddingX: '0',
      _hover: {
        bg: 'unset',
      },
    },
    item: {
      paddingX: '0',
      paddingTop: '6',
      paddingBottom: '5',
      borderColor: 'gray.200',
    },
    itemContent: {
      paddingX: '0',
      paddingY: '2',
    },
  },

  variants: {
    visual: {
      white: {
        itemIndicator: {
          color: 'primary.700',
          background: 'white',
        },
        root: {
          borderTopColor: 'whiteAlpha.300 !important',
        },
        item: {
          borderColor: 'whiteAlpha.300 !important',
        },
      },
      black: {
        itemIndicator: {
          color: 'white',
          background: 'black',
        },
        itemContent: {
          borderColor: 'gray.300',
        },
      },
    },
  },

  defaultVariants: {
    visual: 'black',
  },
});

export const alertSlotRecipe = defineSlotRecipe({
  slots: alertAnatomy.keys(),
  base: {
    root: {
      borderRadius: 'md',
    },
    indicator: {
      alignSelf: 'center',
    },
    title: {
      ...textRecipe.variants?.size.mdRegularNormalBold,
      color: 'black',
    },
    description: {
      ...textRecipe.variants?.size.mdRegularNormal,
      color: 'gray.700',
      marginTop: '-4px',
    },
  },
});

export const avatarSlotRecipe = defineSlotRecipe({
  slots: avatarAnatomy.keys(),
  base: {
    image: {
      borderRadius: 'xl',
    },
  },

  variants: {
    size: {
      sm: {
        root: {
          w: '2.5rem',
          h: '2.5rem',
        },
      },
      md: {
        root: {
          w: '3.5rem',
          h: '3.5rem',
        },
      },
      lg: {
        root: {
          w: '4.5rem',
          h: '4.5rem',
        },
      },
      xl: {
        root: {
          w: '5.5rem',
          h: '5.5rem',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
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

export const checkboxSlotRecipe = defineSlotRecipe({
  slots: checkboxAnatomy.keys(),
  base: {
    root: {
      display: 'inline-flex',
      gap: '2',
      alignItems: 'center',
      verticalAlign: 'top',
      position: 'relative',
    },

    control: {
      backgroundColor: 'white',
    },
  },

  variants: {
    size: {
      sm: {
        label: {
          ...textRecipe.variants?.size.smLowNormal,
        },
        icon: {
          w: '4',
          h: '4',
        },
        control: {
          w: '4',
          h: '4',
        },
      },
      md: {
        icon: {
          w: '5',
          h: '5',
        },
        control: {
          w: '5',
          h: '5',
        },
        label: {
          ...textRecipe.variants?.size.mdLowNormal,
        },
      },
      lg: {
        icon: {
          w: '6',
          h: '6',
        },
        control: {
          w: '6',
          h: '6',
        },
        label: {
          ...textRecipe.variants?.size.lgLowNormal,
        },
      },
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
          ...textRecipe.variants?.size.xlLowNormal,
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export const fieldSlotRecipe = defineSlotRecipe({
  slots: fieldAnatomy.keys(),
  base: {
    label: {
      ...textRecipe.variants?.size.smRegularNormal,
      color: 'gray.800',
    },
    helperText: {
      ...textRecipe.variants?.size.smRegularNormal,
      color: 'gray.600',
    },
    errorText: {
      ...textRecipe.variants?.size.smRegularNormal,
    },
  },
});

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

export const inputRecipe = defineRecipe({
  base: {
    width: '100%',
    borderRadius: 'md',
    '--focus-color': 'black',
    _invalid: {
      borderWidth: '2px',
      focusRingColor: 'black',
      focusRingWidth: '0px',
    },
    _readOnly: {
      _focus: {
        focusRingWidth: '0px',
      },
    },
  },
  variants: {
    size: {
      sm: {
        ...textRecipe.variants?.size.smLowNormal,
        '--input-height': 'sizes.8',
      },
      md: {
        ...textRecipe.variants?.size.smLowNormal,
        '--input-height': 'sizes.10',
      },
      lg: {
        ...textRecipe.variants?.size.smLowNormal,
        '--input-height': 'sizes.12',
      },
      xl: {
        ...textRecipe.variants?.size.mdLowNormal,
        '--input-height': 'sizes.16',
        borderRadius: 'xl',
      },
    },
  },

  defaultVariants: {
    size: 'lg',
  },
});

export const inputAddonRecipe = defineRecipe({
  base: {
    borderRadius: 'md',
  },
});

export const linkRecipe = defineRecipe({
  base: {
    transition: 'opacity ease var(--medium-transition-duration)',
    textDecoration: 'underline',

    _hover: {
      opacity: '0.8',
    },
    _focus: {
      focusRingWidth: '0',
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

export const listSlotRecipe = defineSlotRecipe({
  slots: listAnatomy.keys(),
  base: {
    indicator: {
      backgroundColor: 'primary.50',
      width: '6',
      height: '6',
      borderRadius: 'lg',
      float: 'left',
      mr: '4',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  variants: {
    visual: {
      light: {
        indicator: {
          backgroundColor: 'primary.200',
        },
      },
    },
  },
});

export const menuSlotRecipe = defineSlotRecipe({
  slots: menuAnatomy.keys(),
  base: {
    content: {
      border: '1px solid',
      borderColor: 'gray.100',
      borderRadius: 'var(--boemly-radii-md)',
      boxShadow: 'var(--boemly-shadows-sm)',
      paddingTop: 'var(--boemly-spacing-2)',
      paddingBottom: 'var(--boemly-spacing-2)',
    },
  },
});

export const popoverSlotRecipe = defineSlotRecipe({
  slots: popoverAnatomy.keys(),
  base: {
    content: {
      backgroundColor: 'white',
      border: '0.63px solid',
      borderColor: 'gray.200',
      borderRadius: 'md',
      boxShadow: 'xs',
    },
  },
});

export const numberInputSlotRecipe = defineSlotRecipe({
  slots: numberInputAnatomy.keys(),
  base: {
    root: {
      borderRadius: 'md',
    },
    input: {
      '--focus-color': 'black',
    },
    incrementTrigger: {
      borderTopRightRadius: 'md',
    },
    decrementTrigger: {
      borderBottomRightRadius: 'md',
    },
  },
  variants: {
    size: {
      xl: {
        input: inputsize.xl,
        control: {
          fontSize: 'sm',
          '--stepper-width': 'sizes.6',
        },
      },
      lg: {
        input: inputsize.lg,
        control: {
          fontSize: 'sm',
          '--stepper-width': 'sizes.6',
        },
      },
      md: {
        input: inputsize.md,
        control: {
          fontSize: 'sm',
          '--stepper-width': 'sizes.6',
        },
      },
      sm: {
        input: inputsize.sm,
        control: {
          fontSize: 'xs',
          '--stepper-width': 'sizes.5',
        },
      },
    },
  },

  defaultVariants: {
    size: 'lg',
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
  },
});

export const progressSlotRecipe = defineSlotRecipe({
  slots: progressAnatomy.keys(),
  base: {
    root: {
      borderRadius: 'full',
      overflow: 'hidden', // Workaround because border radius on the track is not working
    },
    range: {
      borderRadius: 'full',
    },
  },
  variants: {
    striped: {
      true: {
        range: {
          backgroundImage:
            'linear-gradient(45deg, rgba(0, 0, 0, 0.1) 25%, transparent 25%, transparent 50%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.1) 75%, transparent 75%, transparent)',
        },
      },
    },
  },
});

export const radioGroupSlotRecipe = defineSlotRecipe({
  slots: radioGroupAnatomy.keys(),
  variants: {
    size: {
      sm: {
        label: {
          ...textRecipe.variants?.size.smLowNormal,
        },
      },
      md: {
        label: {
          ...textRecipe.variants?.size.mdLowNormal,
        },
      },
      lg: {
        label: {
          ...textRecipe.variants?.size.lgLowNormal,
        },
      },
      xl: {
        label: {
          ...textRecipe.variants?.size.xlLowNormal,
        },
      },
    },
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
        height: inputsize.xl.height,
        fontSize: inputsize.xl.fontSize,
        borderRadius: inputsize.xl.borderRadius,
        badgeSize: FONT_SIZES.lg,
      },
    },
    visual: {
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

export const textareaRecipe = defineRecipe({
  base: {
    _focus: {
      focusRingColor: 'black',
    },
  },
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
  },
});

export const tooltipSlotRecipe = defineSlotRecipe({
  slots: tooltipAnatomy.keys(),
  base: {
    content: {
      borderRadius: 'lg',
      px: '4',
      py: '2',
      backgroundColor: 'gray.900',
      fontSize: 'sm',
    },
  },
});

export const tableSlotRecipe = defineSlotRecipe({
  className: 'table',
  slots: tableAnatomy.keys(),
  base: {
    columnHeader: {
      color: 'gray.500',
      textTransform: 'unset',
      letterSpacing: 'unset',
    },
    cell: {
      color: 'black',
    },
  },
  variants: {
    striped: {
      true: {
        row: {
          background: 'unset',
          '&:nth-of-type(odd) td': {
            bg: 'gray.100',
          },
        },
      },
    },
    variant: {
      line: {
        row: {
          bg: 'transparent',
        },
      },
    },
    size: {
      sm: {
        columnHeader: {
          ...textRecipe.variants?.size.smRegularNormalBold,
        },
        cell: {
          ...textRecipe.variants?.size.smRegularNormal,
        },
        caption: {
          ...textRecipe.variants?.size.smRegularNormal,
        },
      },
      md: {
        columnHeader: {
          ...textRecipe.variants?.size.smRegularNormalBold,
        },
        cell: {
          ...textRecipe.variants?.size.smRegularNormal,
        },
        caption: {
          ...textRecipe.variants?.size.smRegularNormal,
        },
      },
      lg: {
        columnHeader: {
          ...textRecipe.variants?.size.lgRegularNormalBold,
        },
        cell: {
          ...textRecipe.variants?.size.lgRegularNormal,
        },
        caption: {
          ...textRecipe.variants?.size.lgRegularNormal,
        },
      },
    },
    visual: {
      minimal: {
        root: {
          backgroundColor: 'transparent',
        },
        columnHeader: {
          paddingX: '0',
          paddingY: '2',
          letterSpacing: 'normal',
        },
        cell: {
          paddingX: '0',
          paddingY: '2',
        },
      },
    },
  },
});

export const tagSlotRecipe = defineSlotRecipe({
  slots: tagAnatomy.keys(),
  base: {
    root: {
      borderRadius: 'md',
      paddingX: '4px',
      paddingY: '1px',
    },
    label: {
      fontWeight: 'medium',
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
