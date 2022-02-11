import { Text } from '@chakra-ui/react';
import { Circle } from 'phosphor-react';
import { ReactNode } from 'react';
import { ListItemContainer, IconContainer } from './styles';

export interface ListProps {
  listItems: {
    id: number;
    text: string;
  }[];
  icon?: ReactNode;
  ordered?: boolean;
  textColor?: string;
}

export const List: React.FC<ListProps> = ({
  listItems,
  icon = <Circle weight="fill" size={6} />,
  ordered = false,
  textColor = 'black',
}: ListProps) => (
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
