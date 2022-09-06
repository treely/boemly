import { Divider, StyleProps } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import React from 'react';

export interface ContainerProps extends StyleProps {
  children: JSX.Element | JSX.Element[];
  elevation?: 'none' | 'sm' | 'lg';
  padding?: 'md' | 'lg';
  fullWidth?: boolean;
  header?: JSX.Element | JSX.Element[];
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
  header,
  ...styleProps
}: ContainerProps) => (
  <Box
    borderWidth="thin"
    borderColor="gray.200"
    borderRadius="xl"
    backgroundColor="white"
    borderStyle="solid"
    boxShadow={elevations[elevation].boxShadow}
    display={fullWidth ? 'block' : 'inline-block'}
    {...styleProps}
  >
    {header && (
      <>
        <Box paddingX={paddings[padding].paddingX} paddingY={paddings[padding].paddingY}>
          {header}
        </Box>
        <Divider />
      </>
    )}
    <Box
      height="full"
      paddingX={paddings[padding].paddingX}
      paddingY={paddings[padding].paddingY}
      {...styleProps}
    >
      {children}
    </Box>
  </Box>
);
