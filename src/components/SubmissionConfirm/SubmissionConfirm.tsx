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
  confirmButtonColor?: string;
  cancelButtonColor?: string;
  confirmButtonTextColor?: string;
  cancelButtonTextColor?: string;
  placement?:
    | 'top-start'
    | 'top-end'
    | 'bottom-start'
    | 'bottom-end'
    | 'right-start'
    | 'right-end'
    | 'left-start'
    | 'left-end'
    | 'auto'
    | 'auto-start'
    | 'auto-end';
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
  confirmButtonColor = 'green',
  cancelButtonColor = 'gray',
  confirmButtonTextColor = 'black',
  cancelButtonTextColor = 'black',
  placement = 'bottom-start',
  isOpen,
  onCancel,
  onSubmit,
}: SubmissionConfirmProps) => (
  <Popover placement={placement} onClose={onCancel} isOpen={isOpen}>
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
          <Button
            size="sm"
            onClick={onCancel}
            colorScheme={cancelButtonColor}
            textColor={cancelButtonTextColor}
            mr="5"
          >
            {cancelText}
          </Button>
          <Button
            size="sm"
            onClick={onSubmit}
            colorScheme={confirmButtonColor}
            textColor={confirmButtonTextColor}
          >
            {submissionText}
          </Button>
        </Flex>
      </PopoverBody>
    </PopoverContent>
  </Popover>
);
