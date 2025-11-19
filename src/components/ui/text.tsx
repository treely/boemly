import { Text as ChakraText, TextProps as ChakraTextProps } from '@chakra-ui/react';
import TextSize from '../../types/TextSize';
import React from 'react';

export interface TextProps extends Omit<ChakraTextProps, 'size'> {
  size?: TextSize;
}

export const Text: React.FC<TextProps> = (props) => {
  return <ChakraText {...props} />;
};
