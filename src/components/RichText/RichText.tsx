import React from 'react';
import { Box, Heading, HeadingProps, Link, Text, TextProps } from '@chakra-ui/react';
import { ImageContainer } from './styles';
import Markdown from 'markdown-to-jsx';
import { BoemlyList } from '../BoemlyList';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript';
import bash from 'react-syntax-highlighter/dist/cjs/languages/hljs/bash';
import python from 'react-syntax-highlighter/dist/cjs/languages/hljs/python';
import yaml from 'react-syntax-highlighter/dist/cjs/languages/hljs/yaml';
import xml from 'react-syntax-highlighter/dist/cjs/languages/hljs/xml';
import docco from 'react-syntax-highlighter/dist/cjs/styles/hljs/docco';
import { BoemlyListStyleProps } from '../BoemlyList/BoemlyList';

SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('yaml', yaml);
SyntaxHighlighter.registerLanguage('xml', xml);

export interface RichTextProps {
  content: string;
  headingProps?: HeadingProps;
  textProps?: TextProps;
  listProps?: BoemlyListStyleProps;
  options?: {
    forceBlock?: boolean;
    forceInline?: boolean;
  };
}

interface ComponentProps {
  children: string | string[];
}

type ListChildren = { key: string; props: { children: string } }[];
interface ListComponentProps {
  children: ListChildren;
}

interface LinkComponentProps extends ComponentProps {
  href?: string;
}

interface CodeComponentProps extends ComponentProps {
  className: string;
}

interface ImageComponentProps {
  alt?: string;
  src?: string;
}

const getListItems = (children: ListChildren) => {
  return children ? children.map((child) => ({ id: child.key, text: child.props.children })) : [];
};

const SHOULD_RENDER_AS_BLOCK_R = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/;

export const RichText: React.FC<RichTextProps> = ({
  content,
  options = {},
  headingProps = {},
  textProps = {},
  listProps = {},
}: RichTextProps) => {
  let renderInline = false;

  // From https://github.com/probablyup/markdown-to-jsx/blob/7460ee6141fa2449c1b80425c62508af56347268/index.tsx#L1178C47-L1178C47
  if (options.forceInline) {
    renderInline = true;
  } else if (!options.forceBlock) {
    renderInline = SHOULD_RENDER_AS_BLOCK_R.test(content) === false;
  }

  return (
    <Markdown
      options={{
        wrapper: ({ children }: ComponentProps) =>
          renderInline ? (
            <Text
              size="mdRegularNormal"
              color="gray.800"
              {...textProps}
              as="span"
              data-testid="rt-wrapper-span"
            >
              {children}
            </Text>
          ) : (
            <Box {...textProps} as="div" data-testid="rt-wrapper-div">
              {children}
            </Box>
          ),
        forceWrapper: true,
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
            <Text size="mdRegularNormal" color="gray.800" {...textProps} as="span">
              {children}
            </Text>
          ),
          code: ({ className, children }: CodeComponentProps) => {
            const language = className ? className.split('-')[1] : 'js';
            return (
              <Box backgroundColor="primary.50" borderRadius="lg" padding="2" mb="12">
                <SyntaxHighlighter
                  language={language}
                  style={docco}
                  customStyle={{ background: 'unset' }}
                >
                  {children}
                </SyntaxHighlighter>
              </Box>
            );
          },
          blockquote: ({ children }: ComponentProps) => (
            <Box mb="12" pl="4" borderLeft="solid" borderLeftWidth="medium">
              {children}
            </Box>
          ),
          ul: ({ children }: ListComponentProps) => (
            <BoemlyList listItems={getListItems(children)} mb="12" {...listProps} />
          ),
          ol: ({ children }: ListComponentProps) => (
            <BoemlyList listItems={getListItems(children)} ordered mb="12" {...listProps} />
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
};
