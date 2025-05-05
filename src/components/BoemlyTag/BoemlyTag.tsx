import React, { useState } from 'react';
import { Tag, TagCloseButton, TagLabel, TagProps } from '@chakra-ui/react';

export interface BoemlyTagProps extends TagProps {
  isClosable?: boolean;
  onClose?: () => void;
}

export const BoemlyTag = ({
  isClosable = false,
  onClose,
  children,
  ...props
}: BoemlyTagProps): React.JSX.Element => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      onClose();
    }
  };

  if (!isVisible) return <></>;

  return (
    <Tag {...props}>
      <TagLabel>{children}</TagLabel>
      {isClosable && <TagCloseButton onClick={handleClose} />}
    </Tag>
  );
};
