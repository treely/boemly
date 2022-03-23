import { Box, StyleProps } from '@chakra-ui/react';
import React from 'react';
import { OverflownText } from '../OverflownText';

export interface LabelNumberPairProps extends StyleProps {
  label: string;
  number: string;
  caption?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizes = {
  sm: {
    label: 'xsLowNormal',
    number: 'smMonoNormal',
    caption: 'xsLowNormal',
  },
  md: {
    label: 'xsLowNormal',
    number: 'mdMonoNormal',
    caption: 'xsLowNormal',
  },
  lg: {
    label: 'smLowNormal',
    number: 'lgMonoNormal',
    caption: 'xsLowNormal',
  },
};

export const LabelNumberPair: React.FC<LabelNumberPairProps> = ({
  label,
  number,
  caption,
  size = 'md',
  ...styleProps
}: LabelNumberPairProps) => (
  <Box {...styleProps}>
    <OverflownText size={sizes[size].label} color="black">
      {label}
    </OverflownText>
    <OverflownText size={sizes[size].number} color="black">
      {number}
    </OverflownText>
    {caption && (
      <OverflownText size={sizes[size].caption} color="gray.500" mt="1">
        {caption}
      </OverflownText>
    )}
  </Box>
);
