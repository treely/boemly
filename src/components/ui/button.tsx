import {
  Button as ChakraButton,
  type ButtonProps as ChakraButtonProps,
  RecipeVariantProps,
} from '@chakra-ui/react';
import { buttonRecipe } from '../../constants/componentCustomizations';

// Auto-inferred from the recipe!
type ButtonVariantProps = RecipeVariantProps<typeof buttonRecipe>;

export type ButtonProps = Omit<ChakraButtonProps, 'variant' | 'size'> & ButtonVariantProps;

export const Button = ChakraButton as React.FC<ButtonProps & { as?: React.ElementType }>;
