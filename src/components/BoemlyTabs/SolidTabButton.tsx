import { Box, Button } from '@chakra-ui/react';
import React from 'react';

interface SolidTabButtonProps {
  onClick: () => void;
  title: string;
  isActive?: boolean;
  icon?: React.ReactElement;
}

const SolidTabButton = ({
  onClick,
  title,
  isActive = false,
  icon,
}: SolidTabButtonProps): JSX.Element => {
  return (
    <Box data-testid="solidTabButtonBox">
      <Button
        data-testid="solidTabButtonIndicator"
        variant="link"
        color={isActive ? 'black' : 'gray.600'}
        fontWeight="bold"
        m="0"
        onClick={onClick}
        cursor="pointer"
        w="full"
        h="full"
        p="2"
        backgroundColor={isActive ? 'gray.100' : 'transparent'}
        borderRadius="lg"
        _hover={{
          backgroundColor: isActive ? undefined : 'gray.50',
        }}
      >
        {icon} {title}
      </Button>
    </Box>
  );
};

export default SolidTabButton;
