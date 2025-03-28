import { Box, Button, Flex, Heading, Popover, Portal, Text } from '@chakra-ui/react';
import React from 'react';
export interface SubmissionConfirmProps {
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
    | 'left-end';
  isOpen: boolean;
  onCancel: () => void;
  onSubmit: () => void;
  triggerTitle: string;
  onTriggerClick: () => void;
}
export const SubmissionConfirm: React.FC<SubmissionConfirmProps> = ({
  triggerTitle,
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
  onTriggerClick,
}: SubmissionConfirmProps) => (
  <Popover.Root positioning={{ placement: placement }} open={isOpen}>
    <Popover.Trigger asChild>
      <Button onClick={onTriggerClick}>{triggerTitle}</Button>
    </Popover.Trigger>
    <Portal>
      <Popover.Positioner>
        <Popover.Content px="6" py="5">
          <Popover.Body asChild padding="0">
            <Box>
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
                  colorPalette={cancelButtonColor}
                  color={cancelButtonTextColor}
                  mr="5"
                >
                  {cancelText}
                </Button>
                <Button
                  size="sm"
                  onClick={onSubmit}
                  colorPalette={confirmButtonColor}
                  color={confirmButtonTextColor}
                >
                  {submissionText}
                </Button>
              </Flex>
            </Box>
          </Popover.Body>
        </Popover.Content>
      </Popover.Positioner>
    </Portal>
  </Popover.Root>
);
