import React, { ReactNode } from 'react';
import { BoemlyModal } from '../BoemlyModal';
import { Button, Flex, Text } from '@chakra-ui/react';

export interface ConfirmActionProps {
  trigger: ReactNode;
  cancelButton: string;
  confirmButton: string;
  onConfirm: () => void;
  onClose: () => void;
  isOpen: boolean;
  title?: string;
  text?: string;
  confirmColorScheme?: 'primary' | 'red';
  confirmLoading?: boolean;
}
export const ConfirmAction: React.FC<ConfirmActionProps> = ({
  trigger,
  cancelButton,
  confirmButton,
  onClose,
  isOpen,
  title,
  text,
  onConfirm,
  confirmColorScheme = 'primary',
  confirmLoading = false,
}: ConfirmActionProps) => (
  <BoemlyModal
    title={title}
    size="lg"
    content={<Text>{text}</Text>}
    onClose={onClose}
    isOpen={isOpen}
    trigger={trigger}
    footer={
      <Flex gap="2">
        <Button variant="ghost" onClick={onClose}>
          {cancelButton}
        </Button>
        <Button colorScheme={confirmColorScheme} isLoading={confirmLoading} onClick={onConfirm}>
          {confirmButton}
        </Button>
      </Flex>
    }
  />
);
