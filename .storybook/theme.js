import { create } from '@storybook/theming';
import { COLORS } from '../src/constants/chakraCustomizations';

export default create({
  base: 'light',

  colorPrimary: COLORS.primary[500],
  colorSecondary: COLORS.gray[300],

  brandTitle: 'Boemly - the design system maintained by Tree.ly',
  brandUrl: 'https://boemly.tree.ly',
  brandImage: 'https://cdn.tree.ly/assets/v3/logo_boemly.svg',
});
