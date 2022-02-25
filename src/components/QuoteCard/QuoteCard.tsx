import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { AvatarWithName, AvatarWithNameProps } from '../AvatarWithName/AvatarWithName';

export interface QuoteCardProps {
  text: string;
  avatar: AvatarWithNameProps;
}

export const QuoteCard: React.FC<QuoteCardProps> = ({ text, avatar }: QuoteCardProps) => (
  <Box
    borderRadius="2xl"
    borderStyle="solid"
    borderWidth="thin"
    borderColor="gray.200"
    padding="10"
    backgroundColor="white"
  >
    <Text size="mdRegularNormalBold" color="black" mb="8">
      {text}
    </Text>
    <AvatarWithName image={avatar.image} name={avatar.name} description={avatar.description} />
  </Box>
);
