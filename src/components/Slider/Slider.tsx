import { StyleProps, useMediaQuery } from '@chakra-ui/react';
import React, { useMemo, useState } from 'react';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  InputRightAddon,
  Flex,
  Text,
} from '@chakra-ui/react';
import { BoemlyFormControl } from '../BoemlyFormControl';
import { BREAKPOINT_MD_QUERY } from '../../constants/breakpoints';
import CustomSliderThumb from './CustomSliderThumb';

export interface SliderProps extends StyleProps {
  variant?: 'default' | 'boundary';
  defaultValue?: number;
  ariaLabel: string;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
  unit?: string;
  lowerBoundText?: string;
  upperBoundText?: string;
}

export const BoemlySlider: React.FC<SliderProps> = ({
  variant = 'default',
  defaultValue,
  ariaLabel,
  min = 0,
  max = 100,
  onChange,
  unit = '',
  lowerBoundText = '',
  upperBoundText = '',
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

  if (variant === 'boundary') {
    return (
      <Flex
        flexDir="column"
        {...styleProps}
        minW="full"
        alignItems="center"
        justifyContent="center"
        mt="8"
      >
        <Flex flexDir="row" alignItems="center" justifyContent="center" width="full">
          <Slider role="slider" width="10%" mr={2} cursor="default">
            <SliderTrack backgroundColor="gray.200">
              <SliderFilledTrack backgroundColor="gray.200" />
            </SliderTrack>
          </Slider>

          <Slider
            aria-label={ariaLabel}
            defaultValue={defaultValue}
            value={sliderValue}
            onChange={sliderOnChange}
            focusThumbOnChange={false}
            min={min}
            max={max}
            width="80%"
          >
            <SliderTrack backgroundColor="primary.200">
              <SliderFilledTrack backgroundColor="primary.500" />
            </SliderTrack>
            <CustomSliderThumb sliderValue={sliderValue} unit={unit} showTooltip={true} />
          </Slider>

          <Slider role="slider" width="10%" ml={2} cursor="default">
            <SliderTrack backgroundColor="gray.200">
              <SliderFilledTrack backgroundColor="gray.200" />
            </SliderTrack>
          </Slider>
        </Flex>

        <Flex flexDir="row" width="full" justifyContent="space-between">
          <Flex flexDir="column" alignItems="center" ml="6%">
            <Text fontSize="xs" color="gray.500">
              {lowerBoundText}
            </Text>
            <Text fontSize="xs" as="b" color="black">
              {min} {unit}
            </Text>
          </Flex>

          <Flex flexDir="column" alignItems="center" mr="6%">
            <Text fontSize="xs" color="gray.500">
              {upperBoundText}
            </Text>
            <Text fontSize="xs" as="b" color="black">
              {max} {unit}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    );
  }

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
          <CustomSliderThumb sliderValue={sliderValue} />
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
        <CustomSliderThumb sliderValue={sliderValue} />
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
