import React from 'react';
import { Flex, Text } from '@chakra-ui/layout';
import { useToken } from '@chakra-ui/system';
import { Check } from 'phosphor-react';

export interface BoemlyStepsProps {
  steps: {
    text: string;
    onClick: () => void;
  }[];
  currentStep: number;
}

export const BoemlySteps: React.FC<BoemlyStepsProps> = ({
  steps,
  currentStep,
}: BoemlyStepsProps) => {
  const [white] = useToken('color', ['white']);

  return (
    <Flex flexDir="column">
      {steps.map(({ text, onClick }, index) => {
        const stepNum = index + 1;
        let point: JSX.Element;

        const defaultProps = {
          width: '1.5rem',
          height: '1.5rem',
          borderRadius: 'full',
          justifyContent: 'center',
          alignItems: 'center',
        };
        if (stepNum < currentStep) {
          point = (
            <Flex {...defaultProps} backgroundColor="green.500">
              <Check color={white} size={12} data-testid="check-icon" />
            </Flex>
          );
        } else if (stepNum === currentStep) {
          point = (
            <Flex {...defaultProps} backgroundColor="black">
              <Text size="xsMonoNormal" color="white">
                {stepNum}
              </Text>
            </Flex>
          );
        } else {
          point = (
            <Flex
              {...defaultProps}
              backgroundColor="white"
              borderColor="gray.200"
              borderWidth="1px"
            >
              <Text size="xsMonoNormal" color="black">
                {stepNum}
              </Text>
            </Flex>
          );
        }

        return (
          <Flex
            key={stepNum}
            mt="4"
            flexDir="row"
            alignItems="center"
            cursor="pointer"
            onClick={onClick}
          >
            {point}
            <Text size="smLowNormal" color="black" ml="3">
              {text}
            </Text>
          </Flex>
        );
      })}
    </Flex>
  );
};
