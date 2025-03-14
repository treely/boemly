import React from 'react';
import { Box } from '@chakra-ui/react';

interface WrapperProps {
  children: React.JSX.Element | React.JSX.Element[];
}
export const Wrapper: React.FC<WrapperProps> = ({ children }: WrapperProps) => (
  <Box maxWidth="7xl" marginX="auto" paddingX={['6', null, '8']} position="relative">
    {children}
  </Box>
);
