import type { JsxStyleProps, TextProps } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import React from 'react';
import { OverflownText } from '../OverflownText';

export interface LabelTextPairProps extends JsxStyleProps {
  label: string;
  text: string;
  caption?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizes: Record<
  'sm' | 'md' | 'lg',
  {
    label: TextProps['size'];
    text: TextProps['size'];
    caption: TextProps['size'];
  }
> = {
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
  ...styleProps
}: LabelTextPairProps) => (
  <Box {...styleProps}>
    <OverflownText size={sizes[size].label} color="black">
      {label}
    </OverflownText>
    <OverflownText size={sizes[size].text} color="black">
      {text}
    </OverflownText>
    {caption && (
      <OverflownText size={sizes[size].caption} color="gray.500" mt="1">
        {caption}
      </OverflownText>
    )}
  </Box>
);
