import { Box, SliderThumb, Tooltip } from '@chakra-ui/react';
import React from 'react';

interface CustomSliderThumbProps {
  sliderValue: number;
  unit?: string;
  showTooltip?: boolean;
}

const CustomSliderThumb: React.FC<CustomSliderThumbProps> = ({
  sliderValue,
  unit = '',
  showTooltip = false,
}) => {
  const thumbContent = (
    <SliderThumb
      width="5"
      height="5"
      boxShadow="base"
      borderStyle="solid"
      borderWidth="thin"
      borderColor="gray.200"
    >
      <Box backgroundColor="primary.500" borderRadius="full" width="1.5" height="1.5" />
    </SliderThumb>
  );

  return showTooltip ? (
    <Tooltip
      label={`${sliderValue} ${unit}`}
      placement="top"
      hasArrow
      isOpen={true}
      backgroundColor="gray.900"
      color="white"
      fontSize="sm"
      mt={-2}
    >
      {thumbContent}
    </Tooltip>
  ) : (
    thumbContent
  );
};

export default CustomSliderThumb;
