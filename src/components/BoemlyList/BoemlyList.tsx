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
}

export const BoemlyList: React.FC<BoemlyListProps> = ({
  listItems,
  icon = <Box width="1.5" height="1.5" borderRadius="full" bg="black" />,
  ordered = false,
  textColor = 'black',
  ...props
}: BoemlyListProps) => (
  <List spacing="4" as={ordered ? 'ol' : 'ul'} {...props}>
    {listItems.map(({ id, text }, index) => (
      <ListItem key={id}>
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

        <Text size="mdRegularNormal" color={textColor}>
          {text}
        </Text>
      </ListItem>
    ))}
  </List>
);
