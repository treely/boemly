import { Button, CloseButton, Dialog, Portal } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

export interface BoemlyModalProps {
  title: string | ReactNode;
  content: ReactNode;
  trigger: ReactNode;
  footer?: ReactNode;
  // TODO: Align size prop with Chakra UI Dialog size prop
  // size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | 'full';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
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
}: BoemlyModalProps) => {
  return (
    <>
      <Dialog.Root size={size}>
        <Dialog.Trigger>{trigger}</Dialog.Trigger>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>{title}</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body>{content}</Dialog.Body>
              {footer && (
                <Dialog.Footer>
                  {/* Only wrap footer in Button if it does NOT already contain a Button */}
                  {containsButton(footer) ? footer : <Button>{footer}</Button>}
                </Dialog.Footer>
              )}
              <Dialog.CloseTrigger>
                <CloseButton size="sm" />
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </>
  );
};
