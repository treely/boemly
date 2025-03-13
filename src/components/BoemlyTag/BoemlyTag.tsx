import React, { useState } from 'react';
import { Tag, TagRootProps } from '@chakra-ui/react';

export interface BoemlyTagProps extends TagRootProps {
  isClosable?: boolean;
  onClose?: () => void;
}

export const BoemlyTag = ({
  isClosable = false,
  onClose,
  children,
  ...props
}: BoemlyTagProps): JSX.Element => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      onClose();
    }
  };

  if (!isVisible) return <></>;

  return (
    <Tag.Root {...props}>
      <Tag.Label>{children}</Tag.Label>
      {isClosable && <Tag.CloseTrigger onClick={handleClose} />}
    </Tag.Root>
  );
};
