import React from 'react';
import { Box, useToken } from '@chakra-ui/react';

export const Gradient: React.FC = () => {
  const [blackAlpha500] = useToken('colors', ['blackAlpha.500']);
  return (
    <Box
      position="absolute"
      top="0"
      left="0"
      width="full"
      height="full"
      bgGradient={`linear-gradient(0deg, ${blackAlpha500}, ${blackAlpha500})`}
    />
  );
};
