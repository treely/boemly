import type { StyleProps } from '@chakra-ui/react';
import React from 'react';
import { Box } from '@chakra-ui/react';
import convertToKebabCase from '../../utils/convertToKebabCase';

export interface DefaultSectionContainerProps extends StyleProps {
  children: React.JSX.Element | React.JSX.Element[];
  title?: string;
}

export const DefaultSectionContainer: React.FC<DefaultSectionContainerProps> = ({
  children,
  backgroundColor,
  title,
  ...props
}: DefaultSectionContainerProps) => (
  <Box
    position="relative"
    paddingY={backgroundColor ? ['12', null, '28'] : 'unset'}
    marginY={!backgroundColor ? ['8', null, '28'] : 'unset'}
    overflow={backgroundColor ? 'hidden' : 'unset'}
    backgroundColor={backgroundColor}
    id={title ? convertToKebabCase(title) : undefined}
    {...props}
  >
    {children}
  </Box>
);
