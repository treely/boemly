import {
  Box,
  Flex,
  Heading,
  HeadingProps,
  Link,
  OrderedList,
  Text,
  TextProps,
  UnorderedList,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { ImageContainer, StyledRichText } from './styles';

export interface RichTextProps {
  content: string;
  headingProps?: HeadingProps;
  textProps?: TextProps;
}

interface ComponentProps {
  children: ReactNode;
}

interface ListComponentProps extends ComponentProps {
  ordered: boolean;
  index: number;
}

interface LinkComponentProps extends ComponentProps {
  href?: string;
}

interface ImageComponentProps {
  alt?: string;
  src?: string;
}

export const RichText: React.FC<RichTextProps> = ({
  content,
  headingProps = {},
  textProps = {},
}: RichTextProps) => (
  <StyledRichText
    components={{
      h1: ({ children }: ComponentProps) => (
        <Heading as="h2" size="2xl" mb="6" mt="8" {...headingProps}>
          {children}
        </Heading>
      ),
      h2: ({ children }: ComponentProps) => (
        <Heading as="h3" size="xl" mb="4" mt="6" {...headingProps}>
          {children}
        </Heading>
      ),
      h3: ({ children }: ComponentProps) => (
        <Heading as="h4" size="lg" mb="4" mt="6" {...headingProps}>
          {children}
        </Heading>
      ),
      h4: ({ children }: ComponentProps) => (
        <Heading as="h5" size="md" mb="4" mt="6" {...headingProps}>
          {children}
        </Heading>
      ),
      p: ({ children }: ComponentProps) => (
        <Text size="mdRegularNormal" color="gray.800" mb="12" {...textProps}>
          {children}
        </Text>
      ),
      b: ({ children }: ComponentProps) => (
        <Text size="mdRegularBold" color="gray.800" mb="12" {...textProps}>
          {children}
        </Text>
      ),
      i: ({ children }: ComponentProps) => (
        <Text size="mdRegularNormal" color="gray.800" mb="12" {...textProps}>
          {children}
        </Text>
      ),
      code: ({ children }: ComponentProps) => (
        <Box backgroundColor="black" borderRadius="lg" padding="4" mb="12">
          <Text size="mdMonoNormal" color="white" {...textProps}>
            {children}
          </Text>
        </Box>
      ),
      blockquote: ({ children }: ComponentProps) => (
        <Box mb="12" pl="4" borderLeft="solid" borderLeftWidth="medium">
          {children}
        </Box>
      ),
      ul: ({ children }: ComponentProps) => (
        <UnorderedList ml="0" mb="12">
          {children}
        </UnorderedList>
      ),
      ol: ({ children }: ComponentProps) => (
        <OrderedList ml="0" mb="12">
          {children}
        </OrderedList>
      ),
      // ListItem from ChakraUI can not be used since it needs the context from e.g. the
      // UnorderedList which it does not have here
      li: ({ children, ordered, index }: ListComponentProps) => (
        <li style={{ listStyleType: 'none' }}>
          <Flex mb="4">
            <Flex
              backgroundColor="primary.50"
              borderRadius="lg"
              width="6"
              minWidth="6"
              height="6"
              flexDir="row"
              alignItems="center"
              justifyContent="center"
            >
              {ordered ? (
                <Text size="smLowBold">{index + 1}</Text>
              ) : (
                <Box backgroundColor="black" width="1" height="1" borderRadius="full" />
              )}
            </Flex>
            <Text size="mdRegularBold" color="gray.800" ml="4">
              {children}
            </Text>
          </Flex>
        </li>
      ),
      a: ({ children, href }: LinkComponentProps) => (
        <Link size="md" href={href}>
          {children}
        </Link>
      ),
      img: ({ src, alt }: ImageComponentProps) => <ImageContainer src={src} alt={alt} />,
    }}
  >
    {content}
  </StyledRichText>
);
