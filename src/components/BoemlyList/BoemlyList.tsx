import TextSize from '../../types/TextSize';
import { Box, Flex, List, ListRootProps, Text } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

export interface BoemlyListStyleProps extends ListRootProps {
  icon?: ReactNode;
  textColor?: string;
  textSize?: TextSize;
}

export interface BoemlyListProps extends BoemlyListStyleProps {
  listItems: {
    id: number | string;
    text: string;
  }[];
  ordered?: boolean;
}

export const BoemlyList: React.FC<BoemlyListProps> = ({
  listItems,
  icon = <Box width="1.5" height="1.5" borderRadius="full" bg="black" />,
  ordered = false,
  textColor = 'black',
  textSize = 'mdRegularNormal',
  ...props
}: BoemlyListProps) => {
  return (
    <List.Root gap="4" as={ordered ? 'ol' : 'ul'} {...props}>
      {listItems.map(({ id, text }, index) => (
        <List.Item key={id} display="flex" alignItems="baseline">
          <Flex alignItems="center" position="relative">
            {/* Insert a zero-width character so that `align-items: baseline` 
                aligns the icon to the first line of the text */}
            <Text size={textSize} as="span">
              &zwnj;
            </Text>

            <List.Indicator>
              {ordered ? (
                <Text size="xsLowBold" color="black">
                  {index + 1}
                </Text>
              ) : (
                icon
              )}
            </List.Indicator>
          </Flex>

          <Text size={textSize} color={textColor}>
            {text}
          </Text>
        </List.Item>
      ))}
    </List.Root>
  );
};
