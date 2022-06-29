import React from 'react';
import { Box, Flex, StackDirection, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { css } from '@emotion/react';

export interface AvatarWithNameProps {
  name: string;
  description: string;
  image: ReactNode;
  orientation?: 'vertical' | 'horizontal';
}

type FlexProps = {
  vertical: {
    direction?: StackDirection;
  };
  horizontal: {
    direction?: StackDirection;
  };
};

const flexProps: FlexProps = {
  vertical: {
    direction: 'column',
  },
  horizontal: {
    direction: 'row',
  },
};

type TextProps = {
  vertical: {
    marginTop: string;
    marginLeft: string;
    textAlign: 'center' | 'left';
  };
  horizontal: {
    marginTop: string;
    marginLeft: string;
    textAlign: 'center' | 'left';
  };
};

const textProps: TextProps = {
  vertical: {
    marginTop: '4',
    marginLeft: '0',
    textAlign: 'center',
  },
  horizontal: {
    marginTop: '0',
    marginLeft: '6',
    textAlign: 'left',
  },
};

export const AvatarWithName: React.FC<AvatarWithNameProps> = ({
  name,
  description,
  image,
  orientation = 'horizontal',
}: AvatarWithNameProps) => (
  <Flex
    flexDir={flexProps[orientation].direction}
    alignItems="center"
    data-testid={`avatar-with-name-${orientation}`}
  >
    <Box
      position="relative"
      minWidth={['12', null, '14']}
      width={['12', null, '14']}
      height={['12', null, '14']}
      borderRadius="xl"
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
    <Text
      size="smRegularNormal"
      textAlign={textProps[orientation].textAlign}
      marginTop={textProps[orientation].marginTop}
      marginLeft={textProps[orientation].marginLeft}
    >
      {name}
      <br />
      {description}
    </Text>
  </Flex>
);
