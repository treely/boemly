import type { JsxStyleProps, TextProps } from '@chakra-ui/react';
import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { OverflownText } from '../OverflownText';

export interface LabelTextPairProps extends JsxStyleProps {
  label: string;
  text: string;
  caption?: string;
  size?: 'sm' | 'md' | 'lg';
  isDisabled?: boolean;
  orientation?: 'vertical' | 'horizontal';
}

const sizes = {
  sm: {
    vertical: {
      label: 'xsLowNormal',
      text: 'smRegularNormalBold',
      caption: 'xsLowNormal',
    },
    horizontal: {
      label: 'xsLowNormal',
      text: 'xsRegularNormalBold',
      caption: 'xsLowNormal',
    },
  },
  md: {
    vertical: {
      label: 'xsLowNormal',
      text: 'mdRegularNormalBold',
      caption: 'xsLowNormal',
    },
    horizontal: {
      label: 'smLowNormal',
      text: 'smRegularNormalBold',
      caption: 'xsLowNormal',
    },
  },
  lg: {
    vertical: {
      label: 'smLowNormal',
      text: 'lgRegularNormalBold',
      caption: 'xsLowNormal',
    },
    horizontal: {
      label: 'mdLowNormal',
      text: 'mdRegularNormalBold',
      caption: 'xsLowNormal',
    },
  },
};

export const LabelTextPair: React.FC<LabelTextPairProps> = ({
  label,
  text,
  caption,
  size = 'md',
  isDisabled = false,
  orientation = 'vertical',
  ...styleProps
}: LabelTextPairProps) => (
  <Box {...styleProps}>
    <Flex
      flexDir={orientation === 'vertical' ? 'column' : 'row'}
      alignItems={orientation === 'vertical' ? 'flex-start' : 'center'}
      justifyContent={orientation === 'vertical' ? 'flex-start' : 'space-between'}
    >
      <OverflownText
        size={sizes[size][orientation].label as TextProps['size']}
        color={isDisabled ? 'gray.400' : 'black'}
      >
        {label}
      </OverflownText>
      <OverflownText
        size={sizes[size][orientation].text as TextProps['size']}
        color={isDisabled ? 'gray.400' : 'black'}
      >
        {text}
      </OverflownText>
    </Flex>
    {caption && (
      <OverflownText
        size={sizes[size][orientation].caption as TextProps['size']}
        color={isDisabled ? 'gray.400' : 'black'}
      >
        {caption}
      </OverflownText>
    )}
  </Box>
);
