import React from 'react';
import { Box } from '@chakra-ui/react';

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}
export const Wrapper: React.FC<WrapperProps> = ({ children }: WrapperProps) => (
  <Box
    maxWidth="7xl"
    marginX="auto"
    paddingX={['6', null, '8']}
    position="relative"
    data-testid="wrapper"
  >
    {children}
  </Box>
);
