import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

export const DefaultSectionContainer: React.FC<BoxProps> = ({
  children,
  backgroundColor,
  ...props
}: BoxProps) => (
  <Box
    position="relative"
    paddingY={backgroundColor ? ['12', null, '28'] : 'unset'}
    marginY={!backgroundColor ? ['8', null, '28'] : 'unset'}
    overflow={backgroundColor ? 'hidden' : 'unset'}
    backgroundColor={backgroundColor}
    {...props}
  >
    {children}
  </Box>
);
