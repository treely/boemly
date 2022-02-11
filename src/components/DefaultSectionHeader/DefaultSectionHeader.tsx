import { Box, BoxProps, Heading, HeadingProps, Text, TextProps } from '@chakra-ui/react';
import RichText from '../RichText';

export interface DefaultSectionHeaderProps {
  tagline?: string;
  title: string;
  text?: string;
  isHero?: boolean;

  taglineProps?: TextProps;
  titleProps?: HeadingProps;
  textProps?: BoxProps;
}

export const DefaultSectionHeader: React.FC<DefaultSectionHeaderProps> = ({
  tagline,
  title,
  text,

  isHero = false,

  taglineProps = {},
  titleProps = {},
  textProps = {},
}: DefaultSectionHeaderProps) => (
  <>
    {tagline && (
      <Text
        color="primary.500"
        {...taglineProps}
        size="mdMonoUppercase"
        mb={['3', null, null, isHero ? '4' : '6']}
      >
        {tagline}
      </Text>
    )}
    <Heading
      {...titleProps}
      as={isHero ? 'h1' : 'h2'}
      size={isHero ? '4xl' : '3xl'}
      data-testid="default-section-header"
    >
      {title}
    </Heading>
    {text && (
      <Box {...textProps} mt={['3', null, null, isHero ? '4' : '6']}>
        <RichText
          content={text}
          headingProps={{ color: textProps.color || 'gray.500' }}
          textProps={{
            color: textProps.color || 'gray.500',
            size: isHero ? 'lgRegularNormal' : 'mdRegularNormal',
          }}
        />
      </Box>
    )}
  </>
);
