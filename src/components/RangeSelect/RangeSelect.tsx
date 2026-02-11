'use client';

import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { Box, Input, Text, Flex, Button, Popover, useToken } from '@chakra-ui/react';
import { CaretDownIcon, CaretUpIcon, WarningOctagonIcon } from '@phosphor-icons/react';
import { selectRecipe } from '../../constants/componentCustomizations';

export interface RangeSelectProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'color'> {
  borderColor?: string;
  backgroundColor?: string;
  color?: string;
  clearText?: string;
  placeholder?: string;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isFullWidth?: boolean;
  rangeFromLabel?: string;
  rangeToLabel?: string;
  rangeFromError?: string;
  rangeToError?: string;
  value?: string[];
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  dropdownWidth?: '3xs' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'filled' | 'unstyled' | 'flushed' | 'outline';
  onChange?: (value: string[]) => void;
  onClose?: () => void;
}

export const RangeSelect: React.FC<RangeSelectProps> = ({
  color = 'black',
  placeholder = 'Select a range',
  clearText = 'Clear',
  isDisabled = false,
  isInvalid = false,
  isFullWidth = true,
  rangeFromLabel = 'From',
  rangeToLabel = 'To',
  rangeFromError,
  rangeToError,
  size = 'md',
  dropdownWidth,
  variant = 'outline',
  borderColor = selectRecipe.variants?.visual[variant]?.borderColor,
  backgroundColor = selectRecipe.variants?.visual[variant]?.backgroundColor,
  value,
  onChange,
  onClose,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [internalSelectedOptions, setInternalSelectedOptions] = useState<string[]>(value ?? []);
  const [menuWidth, setMenuWidth] = useState<string>('auto');
  const menuButtonRef = useRef<HTMLDivElement>(null);
  const [red500] = useToken('colors', ['red.500']);
  const [space3] = useToken('space', ['3']);

  // Sync internal state when value prop changes from outside
  const prevValueRef = useRef(value);
  useEffect(() => {
    if (value !== undefined && value !== prevValueRef.current) {
      setInternalSelectedOptions(value);
      prevValueRef.current = value;
    }
  }, [value]);

  const selectedOptions = internalSelectedOptions;

  useEffect(() => {
    if (!menuButtonRef.current) return;
    const observer = new ResizeObserver(() => {
      if (menuButtonRef.current) {
        setMenuWidth(`${menuButtonRef.current.offsetWidth}px`);
      }
    });
    observer.observe(menuButtonRef.current);
    return () => observer.disconnect();
  }, []);

  const handleRangeChange = useCallback(
    (index: number, inputValue: string) => {
      const newValue = [...selectedOptions];
      while (newValue.length < 2) newValue.push('');
      newValue[index] = inputValue;

      setInternalSelectedOptions(newValue);
      if (onChange) {
        onChange(newValue);
      }
    },
    [selectedOptions, onChange]
  );

  const onClear = useCallback(() => {
    setInternalSelectedOptions([]);
    if (onChange) {
      onChange([]);
    }
  }, [onChange]);

  const displayText = useMemo(() => {
    if (selectedOptions[0] || selectedOptions[1]) {
      return `${selectedOptions[0] || '...'} – ${selectedOptions[1] || '...'}`;
    }
    return placeholder;
  }, [selectedOptions, placeholder]);

  return (
    <Box display={isFullWidth ? 'block' : 'inline-block'} width={isFullWidth ? '100%' : 'auto'}>
      <Popover.Root
        open={isDisabled ? false : isOpen}
        onOpenChange={(details) => {
          setIsOpen(details.open);
          if (!details.open && onClose) {
            onClose();
          }
        }}
        positioning={{ placement: 'bottom-start', flip: false, sameWidth: false }}
      >
        {/* Trigger */}
        <Popover.Trigger asChild>
          <Flex
            ref={menuButtonRef}
            role="combobox"
            border={selectRecipe.variants?.visual[variant]?.border}
            borderColor={isInvalid ? red500 : borderColor}
            borderRadius={selectRecipe.variants?.visual[variant]?.borderRadius}
            borderBottomWidth={selectRecipe.variants?.visual[variant]?.borderBottomWidth}
            borderBottomStyle={selectRecipe.variants?.visual[variant]?.borderBottomStyle}
            pl="2"
            height={selectRecipe.variants?.size[size]?.height}
            align="center"
            cursor={isDisabled ? 'not-allowed' : 'pointer'}
            bg={isDisabled ? 'gray.200' : backgroundColor}
            position="relative"
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            width={isFullWidth ? '100%' : 'auto'}
            tabIndex={isDisabled ? -1 : 0}
            alignItems="center"
            justifyContent="space-between"
            _focusVisible={{ outline: 'none', boxShadow: 'none' }}
            {...rest}
          >
            <Text
              id="range-select-label"
              fontSize={selectRecipe.variants?.size[size]?.fontSize}
              color={color}
              truncate
              whiteSpace="nowrap"
              overflow="hidden"
              textOverflow="ellipsis"
              flexShrink={1}
            >
              {displayText}
            </Text>
            <Box ml="auto" px={space3} display="flex" alignItems="center" pointerEvents="none">
              {isOpen ? <CaretUpIcon color={color} /> : <CaretDownIcon color={color} />}
            </Box>
          </Flex>
        </Popover.Trigger>

        <Popover.Positioner>
          <Popover.Content
            mt="2"
            p="2"
            borderRadius="lg"
            maxHeight="72"
            overflowY="auto"
            zIndex="popover"
            width={dropdownWidth || 'auto'}
            minWidth={menuWidth}
          >
            <Flex direction="column" gap="4" p="2">
              <Flex flexDir="row" justifyContent="flex-end">
                <Button
                  id="clear-button"
                  size="sm"
                  onClick={onClear}
                  color="blue.500"
                  variant="ghost"
                >
                  {clearText}
                </Button>
              </Flex>
              <Flex gap="3">
                <Box flex="1">
                  <Text fontSize="sm" mb="1" fontWeight="medium">
                    {rangeFromLabel}
                  </Text>
                  <Input
                    type="number"
                    size="md"
                    value={selectedOptions[0] || ''}
                    onChange={(e) => handleRangeChange(0, e.target.value)}
                    borderRadius="md"
                    borderColor={rangeFromError ? red500 : 'gray.200'}
                    borderWidth={rangeFromError ? '2px' : '1px'}
                    _focus={{
                      borderWidth: '2px',
                      borderColor: rangeFromError ? red500 : 'black',
                    }}
                  />
                  {rangeFromError && (
                    <Flex align="center" mt="1" gap="1">
                      <WarningOctagonIcon color={red500} size={12} />
                      <Text fontSize="xs" color={red500}>
                        {rangeFromError}
                      </Text>
                    </Flex>
                  )}
                </Box>
                <Box flex="1">
                  <Text fontSize="sm" mb="1" fontWeight="medium">
                    {rangeToLabel}
                  </Text>
                  <Input
                    type="number"
                    size="md"
                    value={selectedOptions[1] || ''}
                    onChange={(e) => handleRangeChange(1, e.target.value)}
                    borderRadius="md"
                    borderColor={rangeToError ? red500 : 'gray.200'}
                    borderWidth={rangeToError ? '2px' : '1px'}
                    _focus={{
                      borderWidth: '2px',
                      borderColor: rangeToError ? red500 : 'black',
                    }}
                  />
                  {rangeToError && (
                    <Flex align="center" mt="1" gap="1">
                      <WarningOctagonIcon color={red500} size={12} />
                      <Text fontSize="xs" color={red500}>
                        {rangeToError}
                      </Text>
                    </Flex>
                  )}
                </Box>
              </Flex>
            </Flex>
          </Popover.Content>
        </Popover.Positioner>
      </Popover.Root>
    </Box>
  );
};
