import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { AvatarWithName, AvatarWithNameProps } from '../AvatarWithName/AvatarWithName';
import { Container } from '../Container';

export interface QuoteCardProps {
  text: string;
  avatar: AvatarWithNameProps;
}

export const QuoteCard: React.FC<QuoteCardProps> = ({ text, avatar }: QuoteCardProps) => (
  <Container borderRadius="2xl" padding="lg">
    <Box height="full" display="flex" flexDir="column" justifyContent="space-between">
      <Text size="mdRegularNormalBold" color="black" mb="8">
        {text}
      </Text>
      <AvatarWithName image={avatar.image} name={avatar.name} description={avatar.description} />
    </Box>
  </Container>
);
