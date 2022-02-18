import React, { ReactNode } from 'react';
import { Box, Heading, HeadingProps, Link, Text, TextProps } from '@chakra-ui/react';
import { ImageContainer } from './styles';
import Markdown from 'markdown-to-jsx';
import { BoemlyList } from '../BoemlyList';

export interface RichTextProps {
  content: string;
  headingProps?: HeadingProps;
  textProps?: TextProps;
}

interface ComponentProps {
  children: ReactNode;
}

type ListChildren = { key: string; props: { children: string } }[];
interface ListComponentProps {
  children: ListChildren;
}

interface LinkComponentProps extends ComponentProps {
  href?: string;
}

interface ImageComponentProps {
  alt?: string;
  src?: string;
}

const getListItems = (children: ListChildren) => {
  return children ? children.map((child) => ({ id: child.key, text: child.props.children })) : [];
};

export const RichText: React.FC<RichTextProps> = ({
  content,
  headingProps = {},
  textProps = {},
}: RichTextProps) => (
  <Markdown
    options={{
      overrides: {
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
        span: ({ children }: ComponentProps) => (
          <Text size="mdRegularNormal" color="gray.800" {...textProps}>
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
        ul: ({ children }: ListComponentProps) => <BoemlyList listItems={getListItems(children)} />,
        ol: ({ children }: ListComponentProps) => (
          <BoemlyList listItems={getListItems(children)} ordered />
        ),
        a: ({ children, href }: LinkComponentProps) => (
          <Link size="md" href={href}>
            {children}
          </Link>
        ),
        img: ({ src, alt }: ImageComponentProps) => <ImageContainer src={src} alt={alt} />,
      },
    }}
  >
    {content}
  </Markdown>
);
