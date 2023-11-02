import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import React, { ReactNode } from 'react';

export interface BoemlyModalProps {
  title: string | ReactNode;
  content: ReactNode;
  onClose: () => void;
  isOpen: boolean;
  trigger: ReactNode;
  footer?: ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | 'full';
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

      <Modal isOpen={isOpen} onClose={onClose} size={size}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{content}</ModalBody>
          <ModalFooter>{footer}</ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
