import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

export interface AvatarWithNameProps {
  name: string;
  description: string;
  image: ReactNode;
  orientation?: 'vertical' | 'horizontal';
}

type FlexProps = {
  vertical: {
    direction?: 'column' | 'row';
  };
  horizontal: {
    direction?: 'column' | 'row';
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

type AvatarTextProps = {
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

const textProps: AvatarTextProps = {
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
}: AvatarWithNameProps) => {
  return (
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
        css={{
          '& span, div, img': {
            borderRadius: 'var(--boemly-radii-xl)',
          },
        }}
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
};
