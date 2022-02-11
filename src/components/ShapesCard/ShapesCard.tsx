import { Box, Button, Heading, Text, useToken } from '@chakra-ui/react';
import Link from 'next/link';
import RichText from '../RichText';
import { ShapesCardContainer } from './styles';
import { Shape } from '../Shape/Shape';
import ILink from '../../models/components/ILink';
import IImage from '../../models/components/IImage';

export interface ShapesCardProps {
  tagline?: string;
  title: string;
  text?: string;
  button?: ILink;
  shapes?: IImage[];
}

export const ShapesCard: React.FC<ShapesCardProps> = ({
  tagline,
  title,
  text,
  button,
  shapes,
}: ShapesCardProps) => {
  const [space8, space16] = useToken('space', ['8', '16']);
  const [zIndexBase] = useToken('zIndices', ['base']);

  return (
    <ShapesCardContainer>
      {shapes && shapes.length > 1 && (
        <>
          <Shape
            shape={shapes[0]}
            left={`calc(${space8} * -1)`}
            bottom={`calc(${space8} * -1)`}
            zIndex={zIndexBase}
            radius="top-right"
          />
          <Shape
            shape={shapes[1]}
            right={`calc(${space16} * -1)`}
            top={`calc(${space16} * -1)`}
            zIndex={zIndexBase}
            radius="bottom-right"
          />
        </>
      )}
      {tagline && (
        <Text
          color="primary.500"
          size="mdMonoUppercase"
          textAlign="center"
          maxW="lg"
          marginX="auto"
          mb="4"
        >
          {tagline}
        </Text>
      )}
      <Heading as="h3" size="2xl" textAlign="center" maxW="lg" marginX="auto">
        {title}
      </Heading>
      {text && (
        <Box mt="4" textAlign="center" maxW="lg" marginX="auto">
          <RichText content={text} />
        </Box>
      )}
      {button && (
        <Link href={button.href} passHref>
          <Button size="lg" mt="10">
            {button.text}
          </Button>
        </Link>
      )}
    </ShapesCardContainer>
  );
};
