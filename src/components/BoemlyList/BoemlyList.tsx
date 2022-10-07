import { Box, Center, List, ListIcon, ListItem, ListProps, Text } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

export interface BoemlyListProps extends ListProps {
  listItems: {
    id: number | string;
    text: string;
  }[];
  icon?: ReactNode;
  ordered?: boolean;
  textColor?: string;
  textSize?: TextSize;
}

export const BoemlyList: React.FC<BoemlyListProps> = ({
  listItems,
  icon = <Box width="1.5" height="1.5" borderRadius="full" bg="black" />,
  ordered = false,
  textColor = 'black',
  textSize = 'mdRegularNormal',
  ...props
}: BoemlyListProps) => (
  <List spacing="4" as={ordered ? 'ol' : 'ul'} {...props}>
    {listItems.map(({ id, text }, index) => (
      <ListItem key={id} display="flex" alignItems="center">
        <ListIcon
          as={() => (
            <Center width="6" height="6" bg="primary.50" borderRadius="lg" float="left" mr="4">
              {ordered ? (
                <Text size="xsLowBold" color="black">
                  {index + 1}
                </Text>
              ) : (
                icon
              )}
            </Center>
          )}
        />

        <Text size={textSize} color={textColor}>
          {text}
        </Text>
      </ListItem>
    ))}
  </List>
);
