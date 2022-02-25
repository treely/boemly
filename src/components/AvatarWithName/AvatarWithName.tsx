import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { css } from '@emotion/react';

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
  <Flex flexDir="row" alignItems="center" data-testid="avatar-with-name">
    <Box
      position="relative"
      minWidth={['12', null, '14']}
      width={['12', null, '14']}
      height={['12', null, '14']}
      borderRadius="xl"
      mr="6"
      css={css`
        & span,
        div,
        img {
          border-radius: var(--boemly-radii-xl);
        }
      `}
    >
      {image}
    </Box>
    <Text size="smRegularNormal">
      {name}
      <br />
      {description}
    </Text>
  </Flex>
);
