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

export interface DeleteConfirmProps {
  trigger: JSX.Element;
  title: string;
  text?: string;
  deleteText: string;
  cancelText: string;
  isOpen: boolean;
  onCancel: () => void;
  onDelete: () => void;
}

export const DeleteConfirm: React.FC<DeleteConfirmProps> = ({
  trigger,
  title,
  text,
  deleteText,
  cancelText,
  isOpen,
  onCancel,
  onDelete,
}: DeleteConfirmProps) => (
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
          <Button size="sm" onClick={onCancel} colorScheme="gray" mr="5">
            {cancelText}
          </Button>
          <Button size="sm" onClick={onDelete} colorScheme="red">
            {deleteText}
          </Button>
        </Flex>
      </PopoverBody>
    </PopoverContent>
  </Popover>
);
