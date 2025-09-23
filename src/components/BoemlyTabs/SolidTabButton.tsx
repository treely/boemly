import { Box, Button } from '@chakra-ui/react';
import React from 'react';

interface SolidTabButtonProps {
  onClick: () => void;
  title: string;
  isActive?: boolean;
  icon?: React.ReactElement;
  size?: 'sm' | 'md';
}

const SolidTabButton = ({
  onClick,
  title,
  isActive = false,
  icon,
  size = 'md',
}: SolidTabButtonProps): JSX.Element => {
  const sizeStyles = {
    sm: {
      padding: '1',
      fontSize: 'xs',
      borderRadius: 'md',
    },
    md: {
      padding: '2',
      fontSize: 'sm',
      borderRadius: 'lg',
    },
  };

  const currentSizeStyle = sizeStyles[size];

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
        {...(icon && { leftIcon: icon })}
        p={currentSizeStyle.padding}
        fontSize={currentSizeStyle.fontSize}
        backgroundColor={isActive ? 'gray.100' : 'transparent'}
        borderRadius={currentSizeStyle.borderRadius}
        _hover={{
          backgroundColor: isActive ? undefined : 'gray.50',
        }}
        w="full"
        h="full"
      >
        {title}
      </Button>
    </Box>
  );
};

export default SolidTabButton;
