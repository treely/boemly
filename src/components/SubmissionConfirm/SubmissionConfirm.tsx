import {
  Button,
  Flex,
  Heading,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
} from '@chakra-ui/react';
import React from 'react';

export interface SubmissionConfirmProps {
  trigger: JSX.Element;
  title: string;
  text?: string;
  submissionText: string;
  cancelText: string;
  confirmColor?: string;
  cancelColor?: string;
  isOpen: boolean;
  onCancel: () => void;
  onSubmit: () => void;
}

export const SubmissionConfirm: React.FC<SubmissionConfirmProps> = ({
  trigger,
  title,
  text,
  submissionText,
  cancelText,
  confirmColor = 'green',
  cancelColor = 'gray',
  isOpen,
  onCancel,
  onSubmit,
}: SubmissionConfirmProps) => (
  <Popover placement="bottom-start" onClose={onCancel} isOpen={isOpen}>
    <PopoverTrigger>{trigger}</PopoverTrigger>
    <PopoverContent px="6" py="5">
      <PopoverBody padding="0">
        <Heading size="sm">{title}</Heading>
        {text && (
          <Text size="smRegularNormal" mt="3">
            {text}
          </Text>
        )}
        <Flex flexDir="row" justifyContent="flex-end" mt="5">
          <Button size="sm" onClick={onCancel} colorScheme={cancelColor} mr="5">
            {cancelText}
          </Button>
          <Button size="sm" onClick={onSubmit} colorScheme={confirmColor}>
            {submissionText}
          </Button>
        </Flex>
      </PopoverBody>
    </PopoverContent>
  </Popover>
);
