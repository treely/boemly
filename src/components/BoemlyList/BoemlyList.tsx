import TextSize from '@/types/TextSize';
import { Box, Center, Flex, List, ListRootProps, Text, useRecipe } from '@chakra-ui/react';
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
  // https://www.chakra-ui.com/docs/theming/recipes#splitvariantprops
  const recipe = useRecipe({ key: 'list' });
  const [recipeProps] = recipe.splitVariantProps(props);
  const styles = recipe(recipeProps);

  return (
    <List.Root
      // display="flex"
      // flexDirection="column"
      gap="4"
      as={ordered ? 'ol' : 'ul'}
      {...props}
    >
      {listItems.map(({ id, text }, index) => (
        <List.Item key={id} display="flex" alignItems="baseline">
          <Flex alignItems="center" position="relative">
            {/* Insert a zero-width character so that `align-items: baseline` 
                aligns the icon to the first line of the text */}
            <Text size={textSize} as="span">
              &zwnj;
            </Text>

            <List.Indicator
              as={() => (
                <Center
                  css={styles}
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
        </List.Item>
      ))}
    </List.Root>
  );
};
