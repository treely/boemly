import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import {
  Box,
  Input,
  IconButton,
  Checkbox,
  Text,
  Flex,
  Button,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  Portal,
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
  noOptionsPlaceholder?: string;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isFullWidth?: boolean;
  isSearchable?: boolean;
  isMultiple?: boolean;
  preventDeselection?: boolean;
  selectAllText?: string;
  value?: string[];
  size?: 'xs' | 'sm' | 'md' | 'lg';
  // dropdownWidth addresses the issue in Firefox browser by preventing  jerky scrolling and items disappearing when there are too many items.
  dropdownWidth?: '3xs' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'filled' | 'unstyled' | 'flushed' | 'outline';
  onChange?: (value: string[]) => void;
  onClose?: () => void;
  options: Option[];
}

export const BoemlySelect: React.FC<BoemlySelectProps> = ({
  color = 'black',
  placeholder = 'Select an option',
  searchPlaceholder = placeholder,
  noOptionsPlaceholder = 'No options available',
  clearAllText = 'Clear All',
  isDisabled = false,
  isInvalid = false,
  isFullWidth = true,
  isSearchable = false,
  isMultiple = false,
  preventDeselection = false,
  selectAllText = 'Select All',
  size = 'md',
  dropdownWidth,
  variant = 'outline',
  borderColor = CustomizedSelect.variants[variant].borderColor,
  backgroundColor = CustomizedSelect.variants[variant].backgroundColor,
  value,
  onChange,
  onClose,
  options,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const menuButtonRef = useRef<HTMLDivElement>(null);
  const [primary500] = useToken('colors', ['primary.500']);
  const [space3, space0] = useToken('space', ['3', '0']);

  useEffect(() => {
    setSelectedOptions(value || []);
  }, [value]);

  const filteredOptions = useMemo(() => {
    if (isSearchable && searchTerm) {
      return options.filter((option) =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return options;
  }, [options, searchTerm, isSearchable]);

  useEffect(() => {
    if (isOpen && isSearchable && inputRef.current) {
      requestAnimationFrame(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      });
    }
  }, [filteredOptions.length, isOpen, isSearchable]);

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
          // If preventDeselection is true, don't allow deselection of the selected option
          if (preventDeselection) {
            if (prevSelectedOptions.length === 0) {
              // If no option is selected, select the clicked option
              newSelectedOptions = [optionValue];
            } else if (prevSelectedOptions[0] === optionValue) {
              // If the clicked option is the same as the current selection, keep the selection and don't deselect
              newSelectedOptions = prevSelectedOptions;
            } else {
              // If a different option is clicked, select the new option
              newSelectedOptions = [optionValue];
            }
          } else {
            const isOptionSelected = prevSelectedOptions.includes(optionValue);
            newSelectedOptions = isOptionSelected ? [] : [optionValue]; // Deselect if selected, otherwise select
          }
          setIsOpen(false); // Close dropdown for single select
        }

        if (onChange) onChange(newSelectedOptions);
        return newSelectedOptions;
      });

      setSearchTerm(''); // Clear search term after selection
    },
    [isMultiple, onChange, preventDeselection]
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

  // max height for the menu options, to show that there are more items to scroll
  const dynamicMaxHeight = useMemo(() => {
    if ((isMultiple && isSearchable) || isSearchable) {
      return '72';
    } else if (isMultiple) {
      return '80';
    }

    return '60';
  }, [isMultiple, isSearchable]);

  return (
    <Menu
      isLazy
      closeOnSelect={!isMultiple}
      initialFocusRef={isSearchable ? inputRef : undefined}
      isOpen={isDisabled ? false : isOpen}
      onOpen={() => !isDisabled && setIsOpen(true)}
      onClose={() => {
        setIsOpen(false);
        if (onClose) onClose();
      }}
      matchWidth
    >
      {({ isOpen }) => (
        <>
          <MenuButton
            ref={menuButtonRef}
            as={Flex}
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
            width={isFullWidth ? '100%' : 'auto'}
            tabIndex={isDisabled ? -1 : 0}
          >
            <Flex alignItems="center" justifyContent="space-between">
              <Text
                id="select-label"
                fontSize={CustomizedSelect.sizes[size].fontSize}
                color={color}
                isTruncated
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
                flexShrink={1}
              >
                {selectedOptions.length > 0 && isMultiple ? (
                  <>
                    {placeholder}
                    <Badge
                      colorScheme="primary"
                      fontSize={CustomizedSelect.sizes[size].badgeSize}
                      borderRadius="md"
                      px="1"
                      ml="1"
                      flexShrink={0}
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
                tabIndex={-1}
              />
            </Flex>
          </MenuButton>

          <Portal>
            <MenuList
              borderWidth="1px"
              borderColor="gray.100"
              mt="2"
              p="2"
              borderRadius="lg"
              role="listbox"
              bg="white"
              maxHeight={dynamicMaxHeight}
              overflowY="auto"
              zIndex="popover"
              width={dropdownWidth}
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
                    variant="unstyled"
                  >
                    {selectAllText}
                  </Button>
                  <Button
                    id="clear-all-button"
                    size="sm"
                    onClick={onClearAll}
                    color="blue.500"
                    mr="3"
                    variant="unstyled"
                  >
                    {clearAllText}
                  </Button>
                </Flex>
              )}

              <Box mt="2" mb="2" display="flex" flexDirection="column" gap="2">
                {filteredOptions.length > 0 ? (
                  filteredOptions.map(({ value, label, disabled = false }) => {
                    const searchIndex = label.toLowerCase().indexOf(searchTerm.toLowerCase());
                    const isMatch = searchIndex !== -1;
                    const isSelected = selectedOptions.includes(value);

                    const beforeMatch = label.slice(0, searchIndex);
                    const match = label.slice(searchIndex, searchIndex + searchTerm.length);
                    const afterMatch = label.slice(searchIndex + searchTerm.length);

                    return (
                      <MenuItemOption
                        key={value}
                        onClick={() => handleOptionSelect(value, disabled)}
                        isDisabled={disabled}
                        borderRadius="md"
                        icon={null}
                        iconSpacing="0"
                        bg={isSelected ? 'primary.100' : 'transparent'}
                      >
                        <Flex justify="space-between" align="center" width="100%">
                          <Text
                            fontSize={CustomizedSelect.sizes[size].fontSize}
                            fontWeight={isSelected ? 'bold' : 'normal'}
                            color="black"
                          >
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
                          {isMultiple && (
                            <Checkbox
                              isChecked={selectedOptions.includes(value)}
                              pointerEvents="none"
                              iconColor="black"
                              isDisabled={disabled}
                              tabIndex={-1}
                            />
                          )}
                          {!isMultiple && isSelected && <Check color={primary500} size={16} />}
                        </Flex>
                      </MenuItemOption>
                    );
                  })
                ) : (
                  <Text p="2"> {noOptionsPlaceholder} </Text>
                )}
              </Box>
            </MenuList>
          </Portal>
        </>
      )}
    </Menu>
  );
};
