import React, { ReactNode } from 'react';
import { Alert, CloseButton, Flex, Spinner, Text, useToken } from '@chakra-ui/react';
import { CheckCircle, Info, WarningCircle, WarningOctagon } from '@phosphor-icons/react';

export interface BoemlyAlertProps {
  status?: 'success' | 'error' | 'warning' | 'info' | 'loading';
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
          <CheckCircle
            size={iconSize}
            weight="fill"
            color={primary500}
            data-testid="success-icon"
          />
        );
      case 'error':
        return (
          <WarningOctagon size={iconSize} weight="fill" color={red500} data-testid="error-icon" />
        );
      case 'warning':
        return (
          <WarningCircle
            size={iconSize}
            weight="fill"
            color={orange500}
            data-testid="warning-icon"
          />
        );
      default:
        return <Info size={iconSize} weight="fill" color={blue500} data-testid="info-icon" />;
    }
  };

  return (
    <Alert.Root status={status === 'loading' ? 'neutral' : status}>
      <Alert.Indicator>{renderIcon()}</Alert.Indicator>
      <Flex justifyContent="space-between" alignItems="center" width="100%">
        <Flex mx="4" flexDir="column">
          {title && (
            <Text size="mdRegularNormalBold" color="black">
              {title}
            </Text>
          )}
          <Text color="gray.700" size="mdRegularNormal">
            {text}
          </Text>
        </Flex>
        {isClosable && <CloseButton size="sm" onClick={onClose} />}
      </Flex>
    </Alert.Root>
  );
};
