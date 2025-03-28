import React from 'react';
import { Box, Button, Separator, Heading, Text } from '@chakra-ui/react';
import { ArrowRight } from '@phosphor-icons/react';
import { AvatarWithName, AvatarWithNameProps } from '../AvatarWithName/AvatarWithName';
import { Container } from '../Container';

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
    <Separator mt="12" display={['none', null, null, null, 'block']} />
    <Heading size="lg" mt={['40', null, null, null, '10']}>
      {title}
    </Heading>
    <Text size="mdRegularNormal" mt="3" mb="6">
      {text}
    </Text>

    <Container>
      <Box
        display="flex"
        height="full"
        flexDir={['column', null, null, 'row']}
        alignItems={['flex-start', null, null, 'center']}
        justifyContent="space-between"
      >
        <AvatarWithName name={avatar.name} description={avatar.description} image={avatar.image} />
        <Button
          mt={['6', null, null, '0']}
          colorPalette="whiteAlpha"
          variant="outline"
          onClick={link.onClick}
        >
          {link.text} <ArrowRight />
        </Button>
      </Box>
    </Container>
  </>
);
