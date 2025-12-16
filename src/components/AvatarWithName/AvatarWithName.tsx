import React from 'react';
import { Avatar, Flex, Text } from '@chakra-ui/react';

export interface AvatarWithNameProps {
  name: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  imageObjectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  orientation?: 'vertical' | 'horizontal';
  size?: 'sm' | 'md' | 'lg' | 'xl';
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
  imageSrc,
  imageAlt,
  imageObjectFit = 'cover',
  orientation = 'horizontal',
  size = 'md',
}: AvatarWithNameProps) => {
  return (
    <Flex
      flexDir={flexProps[orientation].direction}
      alignItems="center"
      data-testid={`avatar-with-name-${orientation}`}
    >
      <Avatar.Root shape="square" size={size}>
        <Avatar.Fallback name={name} />
        <Avatar.Image src={imageSrc} alt={imageAlt} style={{ objectFit: imageObjectFit }} />
      </Avatar.Root>

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
