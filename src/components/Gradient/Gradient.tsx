import React from 'react';
import { Box } from '@chakra-ui/react';
import { css } from '@emotion/react';

export const Gradient: React.FC = () => (
  <Box
    position="absolute"
    top="0"
    left="0"
    width="full"
    height="full"
    css={css`
      background: linear-gradient(
        0deg,
        var(--boemly-colors-blackAlpha-500),
        var(--boemly-colors-blackAlpha-500)
      );
    `}
  />
);
