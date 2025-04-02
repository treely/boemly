import React from 'react';
import { Box, Button } from '@chakra-ui/react';

interface LineTabButtonProps {
  onClick: () => void;
  title: string;
  isActive?: boolean;
}

const LineTabButton = ({ onClick, title, isActive = false }: LineTabButtonProps): JSX.Element => {
  return (
    <Box data-testid="lineTabButtonBox">
      <Button
        size="sm"
        variant="link"
        color="primary.800"
        fontWeight="bold"
        pb="2"
        onClick={onClick}
        cursor="pointer"
        padding="unset"
      >
        {title}
      </Button>
      {isActive && (
        <Box
          data-testid="lineTabButtonIndicator"
          backgroundColor="primary.700"
          borderTopRadius="full"
          height="3px"
        />
      )}
    </Box>
  );
};

export default LineTabButton;
