import { Box, SliderThumb } from '@chakra-ui/react';
import React from 'react';
import { Tooltip } from '../ui/tooltip';

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
      index={0}
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
      content={`${sliderValue} ${unit}`}
      positioning={{ placement: 'top' }}
      showArrow
      open={true}
      contentProps={{
        css: {
          color: 'white',
          backgroundColor: 'gray.900',
          fontSize: 'sm',
          mt: '-2',
          position: 'relative',
        },
      }}
    >
      {thumbContent}
    </Tooltip>
  ) : (
    thumbContent
  );
};

export default CustomSliderThumb;
