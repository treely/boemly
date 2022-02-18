import { Text } from '@chakra-ui/react';
import { Circle } from 'phosphor-react';
import React, { ReactNode } from 'react';
import { ListItemContainer, IconContainer } from './styles';

export interface BoemlyListProps {
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
  icon = <Circle weight="fill" size={6} />,
  ordered = false,
  textColor = 'black',
}: BoemlyListProps) => (
  <div data-testid="list">
    {listItems.map(({ id, text }, index) => (
      <ListItemContainer key={id}>
        <IconContainer>
          {ordered ? (
            <Text size="xsLowBold" color="black">
              {index + 1}
            </Text>
          ) : (
            icon
          )}
        </IconContainer>
        <Text size="mdRegularNormal" color={textColor}>
          {text}
        </Text>
      </ListItemContainer>
    ))}
  </div>
);
