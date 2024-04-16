import { Box, Heading, Text } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

export interface TextCardWithIconProps {
  title: string;
  text: string;
  icon: ReactNode;
  height: 'full' | 'auto';

  displayAs?: 'row' | 'column';
}

export const TextCardWithIcon: React.FC<TextCardWithIconProps> = ({
  title,
  text,
  icon,
  height = 'auto',
  displayAs = 'row',
}: TextCardWithIconProps) => (
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
    <Box
      width={displayAs === 'row' ? '16' : '8'}
      minWidth={displayAs === 'row' ? '16' : '8'}
      height={displayAs === 'row' ? '16' : '8'}
      backgroundColor={displayAs === 'row' ? 'primary.50' : 'transparent'}
      borderRadius={displayAs === 'row' ? 'full' : '0'}
      mr="8"
      mb={displayAs === 'row' ? '0' : '6'}
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
    <div>
      <Heading as="h6" size="xs" mb="2">
        {title}
      </Heading>
      <Text size="smRegularNormal">{text}</Text>
    </div>
  </Box>
);
