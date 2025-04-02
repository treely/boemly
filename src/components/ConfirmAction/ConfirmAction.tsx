import React, { ReactNode } from 'react';
import { BoemlyModal } from '../BoemlyModal';
import { Button, Dialog, Flex, Text } from '@chakra-ui/react';

export interface ConfirmActionProps {
  trigger: ReactNode;
  cancelButton: string;
  confirmButton: string;
  onConfirm: () => void;
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
  confirmColorPalette = 'primary',
  confirmLoading = false,
}: ConfirmActionProps) => (
  <BoemlyModal
    title={title}
    size="lg"
    content={<Text>{text}</Text>}
    trigger={trigger}
    footer={
      <Flex gap="2">
        <Dialog.ActionTrigger>
          <Button variant="ghost">{cancelButton}</Button>
        </Dialog.ActionTrigger>
        <Button colorPalette={confirmColorPalette} loading={confirmLoading} onClick={onConfirm}>
          {confirmButton}
        </Button>
      </Flex>
    }
  />
);
