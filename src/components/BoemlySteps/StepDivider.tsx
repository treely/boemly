import React from 'react';
import { Box } from '@chakra-ui/react';

const StepDivider = () => (
  <Box position="relative" width="8" marginX="4">
    <Box
      position="absolute"
      top="50%"
      width="full"
      borderTop="1px"
      borderColor="blackAlpha.400"
      data-testid="step-divider"
    />
  </Box>
);

export default StepDivider;
