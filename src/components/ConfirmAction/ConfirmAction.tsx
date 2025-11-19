import React, { ReactNode } from 'react';
import { BoemlyModal } from '../BoemlyModal';
import { Button, Flex, Text } from '@chakra-ui/react';

export interface ConfirmActionProps {
  trigger: ReactNode;
  cancelButton: string;
  confirmButton: string;
  onConfirm: () => void;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  text?: string;
  confirmColorPalette?: 'primary' | 'red';
  confirmLoading?: boolean;
}
export const ConfirmAction: React.FC<ConfirmActionProps> = ({
  trigger,
  cancelButton,
  confirmButton,
  title,
  text,
  onConfirm,
  open,
  onOpenChange,
  confirmColorPalette = 'primary',
  confirmLoading = false,
}: ConfirmActionProps) => (
  <BoemlyModal
    title={title}
    size="lg"
    content={<Text>{text}</Text>}
    open={open}
    onOpenChange={onOpenChange}
    trigger={trigger}
    footer={({ onClose }) => (
      <Flex gap="2">
        <Button variant="ghost" onClick={onClose}>
          {cancelButton}
        </Button>
        <Button colorPalette={confirmColorPalette} loading={confirmLoading} onClick={onConfirm}>
          {confirmButton}
        </Button>
      </Flex>
    )}
  />
);
