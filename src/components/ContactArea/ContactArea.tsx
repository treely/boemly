import { Button, Divider, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { ArrowRight } from 'phosphor-react';
import React from 'react';
import ILink from '../../models/components/ILink';
import AvatarWithName from '../AvatarWithName';
import { AvatarWithNameProps } from '../AvatarWithName/AvatarWithName';
import { ContactCardContainer } from './styles';

export interface ContactAreaProps {
  title: string;
  text: string;
  avatar: AvatarWithNameProps;
  link: ILink;
}

export const ContactArea: React.FC<ContactAreaProps> = ({
  title,
  text,
  avatar,
  link,
}: ContactAreaProps) => (
  <>
    <Divider mt="12" display={['none', null, null, null, 'block']} />
    <Heading size="lg" mt={['40', null, null, null, '10']} data-testid="contact-area">
      {title}
    </Heading>
    <Text size="mdRegularNormal" mt="3" mb="6">
      {text}
    </Text>

    <ContactCardContainer>
      <AvatarWithName name={avatar.name} description={avatar.description} image={avatar.image} />
      <Link href={link.href} passHref>
        <Button colorScheme="whiteAlpha" variant="outline" rightIcon={<ArrowRight />}>
          {link.text}
        </Button>
      </Link>
    </ContactCardContainer>
  </>
);
