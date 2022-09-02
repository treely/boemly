import React, { FC } from 'react';
import { Box, Button } from '@chakra-ui/react';

interface TabButtonProps {
  onClick: () => void;
  title: string;
  isActive?: boolean;
}

const TabButton: FC<TabButtonProps> = ({ onClick, title, isActive = false }: TabButtonProps) => {
  return (
    <Box data-testid="tabBottonBox">
      <Button
        variant="link"
        color="primary.800"
        fontWeight="bold"
        pb="2"
        onClick={onClick}
        cursor="pointer"
      >
        {title}
      </Button>
      {isActive && (
        <Box
          data-testid="tabBottonIndicator"
          backgroundColor="primary.700"
          borderTopRadius="full"
          height="3px"
        />
      )}
    </Box>
  );
};

export default TabButton;
