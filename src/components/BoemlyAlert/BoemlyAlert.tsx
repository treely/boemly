import React, { ReactNode } from 'react';
import { Alert, CloseButton, Spinner, useToken } from '@chakra-ui/react';
import {
  CheckCircleIcon,
  InfoIcon,
  WarningCircleIcon,
  WarningOctagonIcon,
} from '@phosphor-icons/react';

export interface BoemlyAlertProps {
  status?: 'info' | 'warning' | 'success' | 'error' | 'neutral' | 'loading';
  title?: ReactNode;
  text: ReactNode;
  isClosable?: boolean;
  onClose?: () => void;
}

const iconSize = '24px';
export const BoemlyAlert: React.FC<BoemlyAlertProps> = ({
  status,
  title,
  text,
  isClosable = false,
  onClose,
}: BoemlyAlertProps) => {
  const [red500, primary500, orange500, blue500] = useToken('colors', [
    'red.500',
    'green.500',
    'orange.500',
    'blue.500',
  ]);

  const renderIcon = () => {
    switch (status) {
      case 'loading':
        return <Spinner size="sm" color={blue500} data-testid="loading-icon" />;
      case 'success':
        return (
          <CheckCircleIcon
            size={iconSize}
            weight="fill"
            color={primary500}
            data-testid="success-icon"
          />
        );
      case 'error':
        return (
          <WarningOctagonIcon
            size={iconSize}
            weight="fill"
            color={red500}
            data-testid="error-icon"
          />
        );
      case 'warning':
        return (
          <WarningCircleIcon
            size={iconSize}
            weight="fill"
            color={orange500}
            data-testid="warning-icon"
          />
        );
      default:
        return <InfoIcon size={iconSize} weight="fill" color={blue500} data-testid="info-icon" />;
    }
  };

  return (
    <Alert.Root status={status === 'loading' ? 'info' : status}>
      <Alert.Indicator>{renderIcon()}</Alert.Indicator>
      <Alert.Content>
        <Alert.Title>{title}</Alert.Title>
        <Alert.Description>{text}</Alert.Description>
      </Alert.Content>
      {isClosable && (
        <CloseButton
          size="sm"
          alignSelf="center"
          onClick={onClose}
          _hover={{ bg: 'blackAlpha.100' }}
        />
      )}
    </Alert.Root>
  );
};
