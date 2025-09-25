import type { FlexProps, StyleProps } from '@chakra-ui/react';
import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { OverflownText } from '../OverflownText';

export interface LabelTextPairProps extends StyleProps {
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

const styles: Record<
  NonNullable<LabelTextPairProps['orientation']>,
  Pick<FlexProps, 'flexDir' | 'alignItems' | 'justifyContent'>
> = {
  vertical: {
    flexDir: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  horizontal: {
    flexDir: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
      flexDir={styles[orientation].flexDir}
      alignItems={styles[orientation].alignItems}
      justifyContent={styles[orientation].justifyContent}
    >
      <OverflownText
        size={sizes[size][orientation].label}
        color={isDisabled ? 'gray.400' : 'black'}
      >
        {label}
      </OverflownText>
      <OverflownText size={sizes[size][orientation].text} color={isDisabled ? 'gray.400' : 'black'}>
        {text}
      </OverflownText>
    </Flex>
    {caption && (
      <OverflownText
        size={sizes[size][orientation].caption}
        color={isDisabled ? 'gray.400' : 'black'}
      >
        {caption}
      </OverflownText>
    )}
  </Box>
);
