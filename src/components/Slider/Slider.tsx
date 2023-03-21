import { StyleProps, useMediaQuery } from '@chakra-ui/react';
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
import { BREAKPOINT_MD_QUERY } from '../../constants/breakpoints';

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
  const [isMobile] = useMediaQuery(BREAKPOINT_MD_QUERY);

  const initialValue = useMemo(
    () => defaultValue ?? min + (max - min) / 2,
    [defaultValue, min, max]
  );
  const [sliderValue, setSliderValue] = useState(initialValue);
  const [inputValue, setInputValue] = useState(initialValue.toString());

  const sliderOnChange = (value: number) => {
    setSliderValue(value);
    setInputValue(value.toString());
    onChange(value);
  };

  const inputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (event.target.value) {
      const value: number = parseInt(event.target.value);
      const outputValue: number = value > max ? max : value < min ? min : value;
      setSliderValue(outputValue);
      onChange(outputValue);
    }
    setInputValue(event.target.value);
  };

  return isMobile ? (
    <Flex flexDir="column" gap="2" {...styleProps} minW="full">
      <Flex flexDir="row" justifyContent="right">
        <BoemlyFormControl
          id={`slider-input-${ariaLabel}`}
          rightAddonsOrElements={unit ? [<InputRightAddon key="unit">{unit}</InputRightAddon>] : []}
          size="sm"
          width="auto"
          inputProps={{
            type: 'number',
            value: inputValue,
            onChange: inputOnChange,
            width: '16',
            minWidth: '16',
          }}
        />
      </Flex>

      <Flex flexDir="row">
        <Slider
          aria-label={ariaLabel}
          defaultValue={defaultValue}
          value={sliderValue}
          onChange={sliderOnChange}
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
      </Flex>

      <Flex flexDir="row" justifyContent="space-between">
        <Text size="xsLowNormal" mr="4">
          {min} {unit}
        </Text>
        <Text size="xsLowNormal" ml="4">
          {max} {unit}
        </Text>
      </Flex>
    </Flex>
  ) : (
    <Flex flexDir="row" alignItems="center" {...styleProps} minW="full">
      <Text size="xsLowNormal" mr="4" flexShrink={0}>
        {min} {unit}
      </Text>
      <Slider
        aria-label={ariaLabel}
        defaultValue={defaultValue}
        value={sliderValue}
        onChange={sliderOnChange}
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
      <Text size="xsLowNormal" ml="4" flexShrink={0}>
        {max} {unit}
      </Text>
      <BoemlyFormControl
        id={`slider-input-${ariaLabel}`}
        rightAddonsOrElements={unit ? [<InputRightAddon key="unit">{unit}</InputRightAddon>] : []}
        size="sm"
        width="auto"
        inputProps={{
          type: 'number',
          value: inputValue,
          onChange: inputOnChange,
          width: '16',
          minWidth: '16',
        }}
        ml="4"
      />
    </Flex>
  );
};
