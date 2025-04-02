import React from 'react';
import { Box, Separator } from '@chakra-ui/react';

const StepDivider = () => (
  <Box position="relative" width="8" marginX="4">
    <Separator
      position="absolute"
      top="50%"
      width="full"
      borderColor="blackAlpha.400"
      data-testid="step-divider"
    />
  </Box>
);

export default StepDivider;
