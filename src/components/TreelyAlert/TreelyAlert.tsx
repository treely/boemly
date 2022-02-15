import { ReactNode } from 'react';
import { Alert, CloseButton, Flex, Text, useToken } from '@chakra-ui/react';
import { CheckCircle, Info, WarningCircle, WarningOctagon } from 'phosphor-react';

export interface TreelyAlertProps {
  status?: 'success' | 'error' | 'warning' | 'info';
  title?: ReactNode;
  text: ReactNode;
  isClosable?: boolean;
  onClose?: () => void;
}

const iconSize = '1.5rem';
export const TreelyAlert: React.FC<TreelyAlertProps> = ({
  status,
  title,
  text,
  isClosable = false,
  onClose,
}: TreelyAlertProps) => {
  const [red500, primary500, orange500, blue500] = useToken('colors', [
    'red.500',
    'green.500',
    'orange.500',
    'blue.500',
  ]);

  const renderIcon = () => {
    switch (status) {
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
    <Alert status={status}>
      {renderIcon()}
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
    </Alert>
  );
};
