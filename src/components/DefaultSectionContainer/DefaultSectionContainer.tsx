import type { JsxStyleProps } from '@chakra-ui/react';
import React from 'react';
import { Box } from '@chakra-ui/react';
import convertToKebabCase from '../../utils/convertToKebabCase';

export interface DefaultSectionContainerProps extends JsxStyleProps {
  children: JSX.Element | JSX.Element[];
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
    paddingY={backgroundColor ? ['28', null, '64'] : 'unset'}
    marginY={!backgroundColor ? ['12', null, '32'] : 'unset'}
    overflow={backgroundColor ? 'hidden' : 'unset'}
    backgroundColor={backgroundColor}
    id={title ? convertToKebabCase(title) : undefined}
    {...props}
  >
    {children}
  </Box>
);
