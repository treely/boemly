import React from 'react';
import { Button, Divider, Heading, Text } from '@chakra-ui/react';
import { ArrowRight } from 'phosphor-react';
import { AvatarWithName, AvatarWithNameProps } from '../AvatarWithName/AvatarWithName';
import { ContactCardContainer } from './styles';

export interface ContactAreaProps {
  title: string;
  text: string;
  avatar: AvatarWithNameProps;
  link: { onClick: () => void; text: string };
}

export const ContactArea: React.FC<ContactAreaProps> = ({
  title,
  text,
  avatar,
  link,
}: ContactAreaProps) => (
  <>
    <Divider mt="12" display={['none', null, null, null, 'block']} />
    <Heading size="lg" mt={['40', null, null, null, '10']}>
      {title}
    </Heading>
    <Text size="mdRegularNormal" mt="3" mb="6">
      {text}
    </Text>

    <ContactCardContainer>
      <AvatarWithName name={avatar.name} description={avatar.description} image={avatar.image} />
      <Button
        colorScheme="whiteAlpha"
        variant="outline"
        rightIcon={<ArrowRight />}
        onClick={link.onClick}
      >
        {link.text}
      </Button>
    </ContactCardContainer>
  </>
);
