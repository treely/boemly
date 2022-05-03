import type { StyleProps } from '@chakra-ui/react';
import React, { useState } from 'react';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
  InputRightAddon,
  Flex,
  Text,
} from '@chakra-ui/react';
import { BoemlyFormControl } from '../BoemlyFormControl';

export interface SliderProps extends StyleProps {
  defaultValue?: number;
  ariaLabel: string;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
  unit?: string;
}

export const BoemlySlider: React.FC<SliderProps> = ({
  defaultValue,
  ariaLabel,
  min = 0,
  max = 100,
  onChange,
  unit = '',
  ...styleProps
}: SliderProps) => {
  const [currentValue, setCurrentValue] = useState(defaultValue || (max - min) / 2);

  const _onChange = (value: number) => {
    onChange(value);
    setCurrentValue(value);
  };

  return (
    <Flex flexDir="row" alignItems="center" {...styleProps}>
      <Text size="xsLowNormal" mr="4" flexShrink="0">
        {min} {unit}
      </Text>
      <Slider
        aria-label={ariaLabel}
        defaultValue={defaultValue}
        value={currentValue}
        onChange={_onChange}
        focusThumbOnChange={false}
        min={min}
        max={max}
      >
        <SliderTrack backgroundColor="primary.200">
          <SliderFilledTrack backgroundColor="primary.500" />
        </SliderTrack>
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
      </Slider>
      <Text size="xsLowNormal" ml="4" flexShrink="0">
        {max} {unit}
      </Text>

      <BoemlyFormControl
        id={`slider-input-${ariaLabel}`}
        rightAddonsOrElements={unit ? [<InputRightAddon key="unit">{unit}</InputRightAddon>] : []}
        size="sm"
        width="3xs"
        inputProps={{
          type: 'number',
          value: currentValue,
          onChange: (event) => {
            event.preventDefault();
            _onChange(parseInt(event.target.value));
          },
        }}
        ml="4"
      />
    </Flex>
  );
};
