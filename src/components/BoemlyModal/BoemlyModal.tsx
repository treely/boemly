import { Dialog } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

export interface BoemlyModalProps {
  title: string | ReactNode;
  content: ReactNode;
  onClose: () => void;
  isOpen: boolean;
  trigger: ReactNode;
  footer?: ReactNode;
  // TODO: Align size prop with Chakra UI Dialog size prop
  // size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | 'full';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export const BoemlyModal: React.FC<BoemlyModalProps> = ({
  title,
  content,
  onClose,
  isOpen,
  trigger,
  footer,
  size = 'xl',
}: BoemlyModalProps) => {
  return (
    <>
      {trigger}

      <Dialog.Root isOpen={isOpen} onClose={onClose} size={size}>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>{title}</Dialog.Header>
            <Dialog.CloseTrigger />
            <Dialog.Body>{content}</Dialog.Body>
            <Dialog.Footer>{footer}</Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    </>
  );
};
