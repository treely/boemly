import type { StyleProps } from '@chakra-ui/react';
import React from 'react';
import { Box } from '@chakra-ui/react';

export interface DefaultSectionContainerProps extends StyleProps {
  children: JSX.Element | JSX.Element[];
}

export const DefaultSectionContainer: React.FC<DefaultSectionContainerProps> = ({
  children,
  backgroundColor,
  ...props
}: DefaultSectionContainerProps) => (
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
