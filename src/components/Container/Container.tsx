import React from 'react';
import type { BoxProps } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';

export interface ContainerProps extends BoxProps {
  elevation?: 'none' | 'sm' | 'lg';
  padding?: 'md' | 'lg';
  fullWidth?: boolean;
}

const elevations = {
  none: {
    boxShadow: 'unset',
  },
  sm: {
    boxShadow: 'sm',
  },
  lg: {
    boxShadow: 'lg',
  },
};

const paddings = {
  md: {
    paddingX: '5',
    paddingY: '5',
  },
  lg: {
    paddingX: '6',
    paddingY: '8',
  },
};

export const Container: React.FC<ContainerProps> = ({
  children,
  elevation = 'sm',
  padding = 'md',
  fullWidth = true,
  ...boxProps
}: ContainerProps) => (
  <Box
    borderWidth="thin"
    borderColor="gray.200"
    borderRadius="xl"
    backgroundColor="white"
    borderStyle="solid"
    boxShadow={elevations[elevation].boxShadow}
    paddingX={paddings[padding].paddingX}
    paddingY={paddings[padding].paddingY}
    display={fullWidth ? 'block' : 'inline-block'}
    {...boxProps}
  >
    {children}
  </Box>
);
