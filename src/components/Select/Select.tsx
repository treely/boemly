import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import {
  Box,
  Input,
  IconButton,
  VStack,
  Checkbox,
  Text,
  Flex,
  Button,
  InputGroup,
  InputLeftElement,
  SelectProps,
  useToken,
} from '@chakra-ui/react';
import { CaretDown, CaretUp, MagnifyingGlass, Check } from '@phosphor-icons/react';
import { Badge } from '../..';
import { CustomizedSelect } from '../../constants/componentCustomizations';

interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface BoemlySelectProps extends Omit<SelectProps, 'onChange' | 'value'> {
  borderColor?: string;
  backgroundColor?: string;
  color?: string;
  clearAllText?: string;
  placeholder?: string;
  searchPlaceholder?: string;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isFullWidth?: boolean;
  isSearchable?: boolean;
  isMultiple?: boolean;
  selectAllText?: string;
  value?: string[];
  size?: 'xs' | 'sm' | 'md' | 'lg';
  variant?: 'filled' | 'unstyled' | 'flushed' | 'outline';
  onChange?: (value: string[]) => void;
  options: Option[];
}

export const BoemlySelect: React.FC<BoemlySelectProps> = ({
  color = 'black',
  placeholder = 'Select an option',
  searchPlaceholder = placeholder,
  clearAllText = 'Clear All',
  isDisabled = false,
  isInvalid = false,
  isFullWidth = true,
  isSearchable = false,
  isMultiple = false,
  selectAllText = 'Select All',
  size = 'md',
  variant = 'outline',
  borderColor = CustomizedSelect.variants[variant].borderColor,
  backgroundColor = CustomizedSelect.variants[variant].backgroundColor,
  value,
  onChange,
  options,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [focusedOptionIndex, setFocusedOptionIndex] = useState<number>(0);
  const selectRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [primary500] = useToken('colors', ['primary.500']);
  const [space3, space0] = useToken('space', ['3', '0']);

  useEffect(() => {
    setSelectedOptions(value || []);

    const firstSelectedIndex = options.findIndex((opt) => opt.value === (value && value[0]));
    setFocusedOptionIndex(firstSelectedIndex !== -1 ? firstSelectedIndex : 0);
  }, [value, options]);

  const filteredOptions = useMemo(() => {
    if (isSearchable && searchTerm) {
      return options.filter((option) =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return options;
  }, [options, searchTerm, isSearchable]);

  // Close dropdown if user clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = useCallback(() => {
    if (!isDisabled) {
      setIsOpen((prev) => !prev);
    }
  }, [isDisabled]);

  useEffect(() => {
    if (isOpen && isSearchable && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isSearchable]);

  useEffect(() => {
    if (!isOpen && isMultiple) {
      setFocusedOptionIndex(0); // set focus to first element when closing dropdown, for multiple
    }
  }, [isOpen, isMultiple]);

  // Handle selecting an option
  const handleOptionSelect = useCallback(
    (optionValue: string, isOptionDisabled: boolean) => {
      if (isOptionDisabled) return;

      setSelectedOptions((prevSelectedOptions) => {
        let newSelectedOptions: string[];
        if (isMultiple) {
          const isAlreadySelected = prevSelectedOptions.includes(optionValue);
          newSelectedOptions = isAlreadySelected
            ? prevSelectedOptions.filter((val) => val !== optionValue)
            : [...prevSelectedOptions, optionValue];
        } else {
          newSelectedOptions = [optionValue];
          setIsOpen(false); // Close dropdown for single select
        }

        if (onChange) onChange(newSelectedOptions);
        return newSelectedOptions;
      });

      setSearchTerm(''); // Clear search term after selection
    },
    [isMultiple, onChange]
  );

  const onSelectAll = useCallback(() => {
    const enabledFilteredOptions = filteredOptions
      .filter((option) => !option.disabled)
      .map((option) => option.value);

    setSelectedOptions(enabledFilteredOptions);
    onChange && onChange(enabledFilteredOptions);
  }, [filteredOptions, onChange]);

  const onClearAll = useCallback(() => {
    setSelectedOptions([]);
    onChange && onChange([]);
  }, [onChange]);

  const handleArrowDown = useCallback(
    (event: KeyboardEvent, optionsLength: number) => {
      event.preventDefault();
      // Move focus between buttons and options
      if (focusedOptionIndex === -1) {
        const clearAllButton = document.getElementById('clear-all-button');
        if (clearAllButton) clearAllButton.focus();
        setFocusedOptionIndex(-2);
      } else if (focusedOptionIndex === -2) {
        setFocusedOptionIndex(0);
      } else {
        setFocusedOptionIndex((prevIndex) => (prevIndex === optionsLength - 1 ? 0 : prevIndex + 1));
      }
    },
    [focusedOptionIndex]
  );

  const handleArrowUp = useCallback(
    (event: KeyboardEvent, optionsLength: number) => {
      event.preventDefault();
      // Move focus between buttons and options
      if (focusedOptionIndex === 0) {
        const clearAllButton = document.getElementById('clear-all-button');
        if (clearAllButton) clearAllButton.focus();
        setFocusedOptionIndex(-2);
      } else if (focusedOptionIndex === -2) {
        const selectAllButton = document.getElementById('select-all-button');
        if (selectAllButton) selectAllButton.focus();
        setFocusedOptionIndex(-1);
      } else {
        setFocusedOptionIndex((prevIndex) => (prevIndex === 0 ? optionsLength - 1 : prevIndex - 1));
      }
    },
    [focusedOptionIndex]
  );

  const handleEnterPressed = useCallback(
    (event: KeyboardEvent, optionsLength: number) => {
      event.preventDefault();
      if (focusedOptionIndex === -1) {
        onSelectAll();
      } else if (focusedOptionIndex === -2) {
        onClearAll();
      } else if (focusedOptionIndex >= 0 && focusedOptionIndex < optionsLength) {
        const selectedOption = filteredOptions[focusedOptionIndex];
        handleOptionSelect(selectedOption.value, selectedOption.disabled || false);
      }
    },
    [filteredOptions, focusedOptionIndex, handleOptionSelect, onClearAll, onSelectAll]
  );

  const handleSpaceKeyPressed = useCallback(
    (event: KeyboardEvent, optionsLength: number) => {
      event.preventDefault();
      if (isMultiple) {
        if (focusedOptionIndex >= 0 && focusedOptionIndex < optionsLength) {
          const selectedOption = filteredOptions[focusedOptionIndex];
          handleOptionSelect(selectedOption.value, selectedOption.disabled || false);
        }
      } else if (focusedOptionIndex >= 0 && focusedOptionIndex < optionsLength) {
        const selectedOption = filteredOptions[focusedOptionIndex];
        handleOptionSelect(selectedOption.value, selectedOption.disabled || false);
        setIsOpen(false); // For single-select, close dropdown
      }
    },
    [focusedOptionIndex, filteredOptions, handleOptionSelect, isMultiple]
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      // Prevent handling keyboard navigation when typing in the search input
      if (inputRef.current && inputRef.current === document.activeElement) {
        return;
      }

      if (!isOpen) return;

      const optionsLength = filteredOptions.length;

      if (event.key === 'ArrowDown') {
        handleArrowDown(event, optionsLength);
      } else if (event.key === 'ArrowUp') {
        handleArrowUp(event, optionsLength);
      } else if (event.key === 'Enter') {
        handleEnterPressed(event, optionsLength);
      } else if (event.key === ' ') {
        handleSpaceKeyPressed(event, optionsLength);
      } else if (event.key === 'Escape') {
        setIsOpen(false);
      }
    },
    [
      isOpen,
      filteredOptions,
      handleArrowDown,
      handleArrowUp,
      handleEnterPressed,
      handleSpaceKeyPressed,
    ]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleKeyDown]);

  return (
    <Box position="relative" width={isFullWidth ? '100%' : 'auto'} ref={selectRef}>
      <Flex
        onClick={toggleDropdown}
        border={CustomizedSelect.variants[variant].border}
        borderColor={isInvalid ? 'red' : borderColor}
        borderRadius={CustomizedSelect.variants[variant].borderRadius}
        borderBottomWidth={CustomizedSelect.variants[variant].borderBottomWidth}
        borderBottomStyle={CustomizedSelect.variants[variant].borderBottomStyle}
        p="2"
        height={CustomizedSelect.sizes[size].height}
        align="center"
        cursor={isDisabled ? 'not-allowed' : 'pointer'}
        bg={isDisabled ? 'gray.200' : backgroundColor}
        position="relative"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        role="combobox"
        aria-labelledby="select-label"
      >
        <Text id="select-label" fontSize={CustomizedSelect.sizes[size].fontSize} color={color}>
          {selectedOptions.length > 0 && isMultiple ? (
            <>
              {placeholder}
              <Badge
                colorScheme="primary"
                fontSize={CustomizedSelect.sizes[size].badgeSize}
                borderRadius="md"
                px="1"
                ml="1"
              >
                {selectedOptions.length}
              </Badge>
            </>
          ) : selectedOptions.length > 0 && !isMultiple ? (
            (() => {
              const selectedOption = options.find((opt) => opt.value === selectedOptions[0]);
              return selectedOption ? selectedOption.label : null;
            })()
          ) : (
            placeholder
          )}
        </Text>
        <IconButton
          aria-label="Toggle Dropdown"
          icon={isOpen ? <CaretUp color={color} /> : <CaretDown color={color} />}
          variant="unstyled"
          size="sm"
          ml="auto"
          paddingInline={`${space3} ${space0}`}
          pointerEvents="none"
        />
      </Flex>

      {/* Dropdown options */}
      {isOpen && (
        <>
          <Box
            borderWidth="1px"
            borderColor="gray.100"
            mt="2"
            p="2"
            borderRadius="lg"
            boxShadow="md"
            position="relative"
            maxWidth={isFullWidth ? '100%' : 'auto'}
            role="listbox"
          >
            {isSearchable && (
              <InputGroup mb="4">
                <InputLeftElement pointerEvents="none" alignItems="center" h="100%">
                  <MagnifyingGlass color="gray.500" />
                </InputLeftElement>
                <Input
                  size="md"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder={searchPlaceholder}
                  isDisabled={isDisabled}
                  borderColor="gray.200"
                  focusBorderColor="black"
                  ref={inputRef}
                  aria-label="Search options"
                />
              </InputGroup>
            )}
            {isMultiple && (
              <Flex flexDir="row" justifyContent="flex-end">
                <Button
                  id="select-all-button"
                  size="sm"
                  onClick={onSelectAll}
                  color="blue.500"
                  mr="3"
                  tabIndex={0}
                  variant="unstyled"
                  onFocus={() => setFocusedOptionIndex(-1)}
                >
                  {selectAllText}
                </Button>
                <Button
                  id="clear-all-button"
                  size="sm"
                  onClick={onClearAll}
                  color="blue.500"
                  mr="3"
                  tabIndex={0}
                  variant="unstyled"
                  onFocus={() => setFocusedOptionIndex(-2)}
                >
                  {clearAllText}
                </Button>
              </Flex>
            )}
            <VStack
              position="relative"
              zIndex={10}
              bg="white"
              mt="2"
              mb="2"
              width="100%"
              maxHeight="200px"
              overflowY="auto"
            >
              {filteredOptions.length > 0 ? (
                filteredOptions.map(({ value, label, disabled = false }, index) => {
                  const searchIndex = label.toLowerCase().indexOf(searchTerm.toLowerCase());
                  const isMatch = searchIndex !== -1;

                  let beforeMatch = label.slice(0, searchIndex);
                  let match = label.slice(searchIndex, searchIndex + searchTerm.length);
                  let afterMatch = label.slice(searchIndex + searchTerm.length);

                  return (
                    <Flex
                      key={value}
                      id={`option-${value}`}
                      width="100%"
                      p="2"
                      align="center"
                      justify="space-between"
                      onClick={() => handleOptionSelect(value, disabled)}
                      cursor={disabled ? 'not-allowed' : 'pointer'}
                      _focus={{ outline: 'none', bg: 'gray.100' }}
                      _hover={disabled ? {} : { bg: 'gray.100' }}
                      borderRadius="md"
                      opacity={disabled ? 0.5 : 1}
                      role="option"
                      aria-selected={selectedOptions.includes(value)}
                      bg={index === focusedOptionIndex ? 'gray.100' : 'white'}
                      tabIndex={0}
                      onFocus={() => setFocusedOptionIndex(index)}
                    >
                      <Text fontSize={CustomizedSelect.sizes[size].fontSize}>
                        {isMatch ? (
                          <>
                            {beforeMatch}
                            <Text as="span" fontWeight="600" color="black">
                              {match}
                            </Text>
                            {afterMatch}
                          </>
                        ) : (
                          label
                        )}
                      </Text>
                      {isMultiple ? (
                        <Checkbox
                          isChecked={selectedOptions.includes(value)}
                          pointerEvents="none"
                          iconColor="black"
                          isDisabled={disabled}
                          tabIndex={-1}
                        />
                      ) : (
                        selectedOptions.includes(value) && <Check color={primary500} size={16} />
                      )}
                    </Flex>
                  );
                })
              ) : (
                <Text p="2">No options available</Text>
              )}
            </VStack>
          </Box>
        </>
      )}
    </Box>
  );
};
