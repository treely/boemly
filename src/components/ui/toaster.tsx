import React, { ReactNode } from 'react';
import {
  Toaster as ChakraToaster,
  Portal,
  Spinner,
  Stack,
  Toast,
  createToaster,
} from '@chakra-ui/react';

// Extended toast type with custom render support
interface ToastWithRender {
  meta?: {
    render?: (toast: unknown) => ReactNode;
  };
}

export const toaster = createToaster({
  placement: 'bottom-end',
  pauseOnPageIdle: true,
});

export const Toaster = () => (
  <Portal>
    <ChakraToaster toaster={toaster} insetInline={{ mdDown: '4' }}>
      {(toast) => {
        const toastWithRender = toast as typeof toast & ToastWithRender;

        // Support custom render function via meta - render directly without Toast.Root wrapper
        if (toastWithRender.meta?.render) {
          return toastWithRender.meta.render(toast);
        }

        // Default toast template
        return (
          <Toast.Root width={{ md: 'sm' }}>
            {toast.type === 'loading' ? (
              <Spinner size="sm" color="blue.solid" />
            ) : (
              <Toast.Indicator />
            )}
            <Stack gap="1" flex="1" maxWidth="100%">
              {toast.title && <Toast.Title>{toast.title}</Toast.Title>}
              {toast.description && <Toast.Description>{toast.description}</Toast.Description>}
            </Stack>
            {toast.action && <Toast.ActionTrigger>{toast.action.label}</Toast.ActionTrigger>}
            {toast.closable && <Toast.CloseTrigger />}
          </Toast.Root>
        );
      }}
    </ChakraToaster>
  </Portal>
);
