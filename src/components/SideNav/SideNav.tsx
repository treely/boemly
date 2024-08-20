import { Circle, Flex, Tag, Text } from '@chakra-ui/react';
import { Check } from '@phosphor-icons/react';
import React from 'react';

export enum SideNavItemState {
  Done = 'done',
  InProgress = 'inProgress',
  Open = 'open',
}

interface SideNavProps {
  activeItem: number;
  items: {
    text: string;
    state: SideNavItemState;
    onClick: () => void;
    isDisabled?: boolean;
  }[];
  inProgressText: string;
}

export const SideNav = ({ items, activeItem, inProgressText }: SideNavProps) => {
  return (
    <Flex
      direction="column"
      width="2xs"
      background="white"
      padding="2"
      gap="2"
      border="1px"
      borderColor="gray.200"
      borderRadius="xl"
    >
      {items.map((item, index) => {
        const isActiveItem = index === activeItem;

        const NumberedCirlce = () => (
          <Circle background={isActiveItem ? 'black' : 'primary.200'} size="5">
            <Text color={isActiveItem ? 'white' : 'primary.800'} size="smMonoUppercase">
              {index + 1}
            </Text>
          </Circle>
        );

        const Checkmark = () => (
          <Circle background={isActiveItem ? 'black' : 'primary.500'} size="5">
            <Check size="12" color="white" weight="bold" />
          </Circle>
        );

        return (
          <Flex
            as="button"
            direction="column"
            key={item.text}
            justifyContent="center"
            alignItems="start"
            paddingX="3"
            paddingY="4"
            gap="3"
            color="gray.600"
            background={isActiveItem ? 'gray.100' : 'transparent'}
            borderRadius="xl"
            cursor={item.isDisabled ? 'not-allowed' : 'pointer'}
            _hover={{
              background: 'gray.50',
              color: 'black',
            }}
            onClick={() => !item.isDisabled && item.onClick()}
          >
            <Flex gap="3" alignItems="center">
              {item.state === 'done' ? <Checkmark /> : <NumberedCirlce />}

              {item.state === 'inProgress' && (
                <Tag colorScheme="blue" fontWeight="bold" height="4" fontSize="sm">
                  {inProgressText}
                </Tag>
              )}
            </Flex>

            <Text size="smLowBold" color={isActiveItem ? 'black' : 'unset'}>
              {item.text}
            </Text>
          </Flex>
        );
      })}
    </Flex>
  );
};
