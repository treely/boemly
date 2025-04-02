import { Box, Flex, FlexProps, Slider, Text, useMediaQuery } from '@chakra-ui/react';
import React, { useEffect, useMemo, useState } from 'react';
import { BoemlyFormControl } from '../BoemlyFormControl';
import { BREAKPOINT_MD_QUERY } from '../../constants/breakpoints';
import CustomSliderThumb from './CustomSliderThumb';

export interface SliderProps extends Omit<FlexProps, 'onChange'> {
  variant?: 'default' | 'boundary';
  defaultValue?: number;
  value?: number;
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
  value,
  ariaLabel,
  min = 0,
  max = 100,
  onChange,
  unit = '',
  lowerBoundText = '',
  upperBoundText = '',
  ...styleProps
}: SliderProps) => {
  const [isMobile] = useMediaQuery([BREAKPOINT_MD_QUERY], {
    fallback: [false],
  });
  const initialValue = useMemo(
    () => value ?? defaultValue ?? min + (max - min) / 2,
    [defaultValue, min, max, value]
  );

  const [sliderValue, setSliderValue] = useState(initialValue);
  const [inputValue, setInputValue] = useState(initialValue.toString());

  const sliderHeight = 6;

  // Update internal sliderValue when the external value prop changes
  useEffect(() => {
    if (value !== undefined) {
      setSliderValue(value);
      setInputValue(value.toString());
    }
  }, [value]);

  const sliderOnChange = (details: { value: number[] }) => {
    const newValue = details.value[0];
    setSliderValue(newValue);
    setInputValue(newValue.toString());
    onChange(newValue);
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
          <Box
            height={`${sliderHeight}px`}
            width="10%"
            mr={2}
            backgroundColor="gray.200"
            borderRadius="full"
          />

          <Slider.Root
            aria-label={[ariaLabel]}
            defaultValue={defaultValue ? [defaultValue] : undefined}
            onValueChange={(details) => sliderOnChange(details)}
            value={[sliderValue]}
            min={min}
            max={max}
            width="80%"
            size="sm"
          >
            <Slider.Control>
              <Slider.Track backgroundColor="primary.200">
                <Slider.Range backgroundColor="primary.500" />
              </Slider.Track>
              <CustomSliderThumb sliderValue={sliderValue} unit={unit} showTooltip={true} />
            </Slider.Control>
          </Slider.Root>

          <Box
            height={`${sliderHeight}px`}
            width="10%"
            ml={2}
            backgroundColor="gray.200"
            borderRadius="full"
          />
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
      <Flex flexDir="row" justifyContent="flex-end">
        <Box>
          <BoemlyFormControl
            id={`slider-input-${ariaLabel}`}
            rightAddonsOrElements={unit ? [unit] : []}
            size="sm"
            inputProps={{
              type: 'number',
              value: inputValue,
              onChange: inputOnChange,
              width: '16',
              minWidth: '16',
            }}
          />
        </Box>
      </Flex>

      <Flex flexDir="row">
        <Slider.Root
          aria-label={[ariaLabel]}
          defaultValue={defaultValue ? [defaultValue] : undefined}
          onValueChange={(details) => sliderOnChange(details)}
          value={[sliderValue]}
          min={min}
          max={max}
          width="full"
        >
          <Slider.Control>
            <Slider.Track backgroundColor="primary.200">
              <Slider.Range backgroundColor="primary.500" />
            </Slider.Track>
            <CustomSliderThumb sliderValue={sliderValue} />
          </Slider.Control>
        </Slider.Root>
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
      <Slider.Root
        defaultValue={defaultValue ? [defaultValue] : undefined}
        onValueChange={(details) => sliderOnChange(details)}
        value={[sliderValue]}
        min={min}
        max={max}
        width="full"
        size="sm"
      >
        <Slider.Control>
          <Slider.Track backgroundColor="primary.200">
            <Slider.Range backgroundColor="primary.500" />
          </Slider.Track>
          <CustomSliderThumb sliderValue={sliderValue} />
        </Slider.Control>
      </Slider.Root>
      <Text size="xsLowNormal" ml="4" flexShrink={0} mr="4">
        {max} {unit}
      </Text>
      <Box>
        <BoemlyFormControl
          id={`slider-input-${ariaLabel}`}
          rightAddonsOrElements={unit ? [unit] : []}
          size="sm"
          inputProps={{
            type: 'number',
            value: inputValue,
            onChange: inputOnChange,
            width: '16',
            minWidth: '16',
          }}
          ml="4"
        />
      </Box>
    </Flex>
  );
};
