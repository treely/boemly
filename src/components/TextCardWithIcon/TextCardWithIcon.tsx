import { Box, Heading, Text, Flex, Button } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

export interface TextCardWithIconProps {
  title: string;
  text: string;
  icon: ReactNode;
  image?: ReactNode;
  height?: 'full' | 'auto';
  button?: { text: string; onClick: () => void };

  displayAs?: 'row' | 'column';
}

export const TextCardWithIcon: React.FC<TextCardWithIconProps> = ({
  title,
  text,
  icon,
  image,
  height = 'auto',
  displayAs = 'row',
  button,
}: TextCardWithIconProps) => {
  const Icon = (
    <Box
      width={displayAs === 'row' ? '16' : '8'}
      minWidth={displayAs === 'row' ? '16' : '8'}
      height={displayAs === 'row' ? '16' : '8'}
      backgroundColor={displayAs === 'row' ? 'primary.50' : 'transparent'}
      borderRadius={displayAs === 'row' ? 'full' : '0'}
      mr={image ? '0' : '8'}
      mb={displayAs === 'row' || image ? '0' : '6'}
      display="flex"
      alignItems="center"
      justifyContent="space-around"
    >
      <Box
        position="relative"
        width={displayAs === 'row' ? '7' : '8'}
        height={displayAs === 'row' ? '7' : '8'}
      >
        {icon}
      </Box>
    </Box>
  );

  const ButtonElement = button && (
    <Button mt="auto" size="lg" onClick={button.onClick} maxWidth="24">
      {button.text}
    </Button>
  );

  return (
    <Box
      px="6"
      py="8"
      marginBottom="4"
      border="1.5px solid var(--boemly-colors-gray-200)"
      borderRadius="2xl"
      data-testid="text-card-with-icon"
      display="flex"
      alignItems={displayAs === 'row' ? 'center' : 'flex-start'}
      flexDir={displayAs}
      height={height}
      backgroundColor="white"
    >
      {image && displayAs === 'column' && (
        <Box
          position="relative"
          height="36"
          width="full"
          css={{
            '& span, div, img': {
              borderRadius: 'var(--boemly-radii-xl)',
            },
          }}
        >
          {image}
        </Box>
      )}
      {!image && Icon}
      <Flex flexDirection="column">
        <Flex
          alignItems="center"
          justifyContent="flex-start"
          gap="2"
          mb={image ? '2' : '0'}
          mt={image ? '6' : '0'}
        >
          {image && Icon}
          <Heading as="h6" size="xs" mb={image ? '0' : '2'}>
            {title}
          </Heading>
        </Flex>
        <Text size="smRegularNormal" marginBottom="4">
          {text}
        </Text>
        {displayAs === 'row' && ButtonElement}
      </Flex>
      {displayAs === 'column' && ButtonElement}
    </Box>
  );
};
