import React, { useRef, useState, useEffect } from 'react';
import type { TextProps } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import { Tooltip } from '@chakra-ui/tooltip';

export const OverflownText: React.FC<TextProps> = ({ children, ...props }: TextProps) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const [isOverflown, setIsOverflown] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (element) {
      setIsOverflown(
        element.scrollWidth > element.clientWidth || element.scrollHeight > element.clientHeight
      );
    }
  }, []);

  return (
    <Tooltip label={children} isDisabled={!isOverflown}>
      <Text position="relative" noOfLines={1} ref={ref} {...props}>
        {children}
      </Text>
    </Tooltip>
  );
};
