import { Button, CloseButton, Dialog, Portal } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

export interface BoemlyModalProps {
  title: string | ReactNode;
  content: ReactNode;
  trigger: ReactNode;
  footer?: ReactNode | ((props: { onClose: () => void }) => ReactNode);
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'cover';
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// Helper function to check if a React node contains a Button component
const containsButton = (node: ReactNode): boolean => {
  if (!React.isValidElement(node)) return false;

  // Check if the current node is a Button
  if (node.type === Button) return true;

  // Recursively check children if they exist
  if (node.props?.children) {
    const childrenArray = React.Children.toArray(node.props.children);
    return childrenArray.some(containsButton);
  }

  return false;
};

export const BoemlyModal: React.FC<BoemlyModalProps> = ({
  title,
  content,
  trigger,
  footer,
  size = 'xl',
  open,
  onOpenChange,
}: BoemlyModalProps) => {
  const onClose = () => onOpenChange(false);

  const renderFooter = () => {
    if (!footer) return null;

    // If footer is a function, call it with onClose
    if (typeof footer === 'function') {
      return footer({ onClose });
    }

    // Only wrap footer in Button if it does NOT already contain a Button
    return containsButton(footer) ? footer : <Button variant="plain">{footer}</Button>;
  };

  return (
    <Dialog.Root size={size} open={open} onOpenChange={(e) => onOpenChange(e.open)}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>{title}</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>{content}</Dialog.Body>
            {footer && <Dialog.Footer>{renderFooter()}</Dialog.Footer>}
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
