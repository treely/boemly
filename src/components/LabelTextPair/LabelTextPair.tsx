import type { StyleProps } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import React from 'react';
import { OverflownText } from '../OverflownText';

export interface LabelTextPairProps extends StyleProps {
  label: string;
  text: string;
  caption?: string;
  size?: 'sm' | 'md' | 'lg';
  isDisabled?: boolean;
}

const sizes = {
  sm: {
    label: 'xsLowNormal',
    text: 'smRegularNormalBold',
    caption: 'xsLowNormal',
  },
  md: {
    label: 'xsLowNormal',
    text: 'mdRegularNormalBold',
    caption: 'xsLowNormal',
  },
  lg: {
    label: 'smLowNormal',
    text: 'lgRegularNormalBold',
    caption: 'xsLowNormal',
  },
};

export const LabelTextPair: React.FC<LabelTextPairProps> = ({
  label,
  text,
  caption,
  size = 'md',
  isDisabled = false,
  ...styleProps
}: LabelTextPairProps) => (
  <Box {...styleProps}>
    <OverflownText size={sizes[size].label} color={isDisabled ? 'gray.400' : 'black'}>
      {label}
    </OverflownText>
    <OverflownText size={sizes[size].text} color={isDisabled ? 'gray.400' : 'black'}>
      {text}
    </OverflownText>
    {caption && (
      <OverflownText size={sizes[size].caption} color={isDisabled ? 'gray.400' : 'black'} mt="1">
        {caption}
      </OverflownText>
    )}
  </Box>
);
