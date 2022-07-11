import { Variants } from 'framer-motion';

interface GenerateVariantsProps {
  primary500: any;
  primary800: any;
  black: any;
}

export const generateVariants = ({ primary500, primary800, black }: GenerateVariantsProps) => {
  const containerVariants: Variants = {
    default: { opacity: 1 },
    hoverSelected: { opacity: 1 },
    selected: { opacity: 1 },
    hover: { opacity: 1 },
    disabled: { opacity: 0.5 },
  };

  const outlineVariants: Variants = {
    default: { outline: '0px solid', outlineColor: primary500 },
    hoverSelected: { outline: '2.5px solid', outlineColor: primary800 },
    selected: { outline: '2.5px solid', outlineColor: primary500 },
    hover: { outline: '2.5px solid', outlineColor: primary500 },
    disabled: { outline: '0px solid', outlineColor: primary500 },
  };

  const textVariants: Variants = {
    default: { color: black },
    selected: { color: primary800 },
    hover: { color: black },
    hoverSelected: { color: primary800 },
    disabled: { color: black },
  };

  const thumbnailVariants: Variants = {
    default: { scale: 1 },
    selected: { scale: 0.9 },
    hover: { scale: 1 },
    hoverSelected: { scale: 0.9 },
    disabled: { scale: 1 },
  };

  return { containerVariants, outlineVariants, textVariants, thumbnailVariants };
};
