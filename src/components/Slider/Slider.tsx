import type { StyleProps } from '@chakra-ui/react';
import React, { useMemo, useState } from 'react';
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
  const initialValue = useMemo(() => defaultValue || (max - min) / 2, [defaultValue, min, max]);
  const [sliderValue, setSliderValue] = useState(initialValue);
  const [inputValue, setInputValue] = useState(initialValue.toString());

  return (
    <Flex flexDir="row" alignItems="center" {...styleProps}>
      <Text size="xsLowNormal" mr="4" flexShrink="0">
        {min} {unit}
      </Text>
      <Slider
        aria-label={ariaLabel}
        defaultValue={defaultValue}
        value={sliderValue}
        onChange={(value: number) => {
          setSliderValue(value);
          setInputValue(value.toString());
          onChange(value);
        }}
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
        width="28"
        minWidth="28"
        inputProps={{
          type: 'number',
          value: inputValue,
          onChange: (event) => {
            event.preventDefault();
            if (event.target.value) {
              setSliderValue(parseInt(event.target.value));
              onChange(parseInt(event.target.value));
            }
            setInputValue(event.target.value);
          },
        }}
        ml="4"
      />
    </Flex>
  );
};
