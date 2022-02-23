import React from 'react';
import { Text } from '@chakra-ui/layout';
import { ReactNode } from 'react';
import { AvatarContainer, AvatarImageContainer } from './styles';

export interface AvatarWithNameProps {
  name: string;
  description: string;
  image: ReactNode;
}

export const AvatarWithName: React.FC<AvatarWithNameProps> = ({
  name,
  description,
  image,
}: AvatarWithNameProps) => (
  <AvatarContainer data-testid="avatar-with-name">
    <AvatarImageContainer>{image}</AvatarImageContainer>
    <Text size="smRegularNormal">
      {name}
      <br />
      {description}
    </Text>
  </AvatarContainer>
);
