import React from 'react';
import { Box, Button } from '@chakra-ui/react';

interface LineTabButtonProps {
  onClick: () => void;
  title: string;
  isActive?: boolean;
  size?: 'sm' | 'md';
}

const LineTabButton = ({
  onClick,
  title,
  isActive = false,
  size = 'md',
}: LineTabButtonProps): JSX.Element => {
  const sizeStyles = {
    sm: {
      fontSize: 'xs',
      pb: '1',
      indicatorHeight: '2px',
    },
    md: {
      fontSize: 'sm',
      pb: '2',
      indicatorHeight: '3px',
    },
  };

  const currentSizeStyle = sizeStyles[size];

  return (
    <Box data-testid="lineTabButtonBox">
      <Button
        size="sm"
        variant="link"
        color="primary.800"
        fontWeight="bold"
        pb={currentSizeStyle.pb}
        fontSize={currentSizeStyle.fontSize}
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
          height={currentSizeStyle.indicatorHeight}
        />
      )}
    </Box>
  );
};

export default LineTabButton;
