import {
  Box,
  Center,
  Flex,
  List,
  ListIcon,
  ListItem,
  ListProps,
  Text,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import React, { ReactNode } from 'react';

export interface BoemlyListStyleProps extends ListProps {
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
  const styles = useMultiStyleConfig('List', props);

  return (
    <List spacing="4" as={ordered ? 'ol' : 'ul'} {...props}>
      {listItems.map(({ id, text }, index) => (
        <ListItem key={id} display="flex" alignItems="baseline">
          <Flex alignItems="center" position="relative">
            {/* Insert a zero-width character so that `align-items: baseline` 
                aligns the icon to the first line of the text */}
            <Text size={textSize} as="span">
              &zwnj;
            </Text>

            <ListIcon
              as={() => (
                <Center
                  __css={styles.icon}
                  width="6"
                  height="6"
                  minWidth="6"
                  borderRadius="lg"
                  float="left"
                  mr="4"
                >
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
          </Flex>

          <Text size={textSize} color={textColor}>
            {text}
          </Text>
        </ListItem>
      ))}
    </List>
  );
};
