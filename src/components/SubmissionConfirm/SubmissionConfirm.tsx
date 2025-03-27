import { Box, Button, Flex, Heading, Popover, Text } from '@chakra-ui/react';
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
    | 'left-end';
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
  <Popover.Root positioning={{ placement: placement }} onOpenChange={onCancel} open={isOpen}>
    <Popover.Trigger asChild>{trigger}</Popover.Trigger>
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
                colorScheme={cancelButtonColor}
                color={cancelButtonTextColor}
                mr="5"
              >
                {cancelText}
              </Button>
              <Button
                size="sm"
                onClick={onSubmit}
                colorScheme={confirmButtonColor}
                color={confirmButtonTextColor}
              >
                {submissionText}
              </Button>
            </Flex>
          </Box>
        </Popover.Body>
      </Popover.Content>
    </Popover.Positioner>
  </Popover.Root>
);
