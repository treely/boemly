import React from 'react';
import { Flex, Text, useToken, Stack } from '@chakra-ui/react';
import type { ConditionalValue } from '@chakra-ui/react';
import { Check } from '@phosphor-icons/react';
import StepDivider from './StepDivider';

type StackDirection = ConditionalValue<'row' | 'column' | 'row-reverse' | 'column-reverse'>;

export interface BoemlyStepsProps {
  steps: {
    text: string;
    onClick?: () => void;
  }[];
  currentStep: number;
  orientation?: 'vertical' | 'horizontal';
}

type StackProps = {
  vertical: {
    direction?: StackDirection;
    separator?: JSX.Element;
  };
  horizontal: {
    direction?: StackDirection;
    separator?: JSX.Element;
  };
};

const stackProps: StackProps = {
  vertical: {
    direction: 'column',
    separator: undefined,
  },
  horizontal: {
    direction: 'row',
    separator: <StepDivider />,
  },
};

export const BoemlySteps: React.FC<BoemlyStepsProps> = ({
  steps,
  currentStep,
  orientation = 'vertical',
}: BoemlyStepsProps) => {
  const [white] = useToken('color', ['white']);

  return (
    <Stack
      gap="4"
      direction={stackProps[orientation].direction}
      separator={stackProps[orientation].separator}
    >
      {steps.map(({ text, onClick }, index) => {
        const stepNum = index + 1;
        let point: JSX.Element;

        const defaultProps = {
          width: '6',
          height: '6',
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
            flexDir="row"
            alignItems="center"
            cursor={onClick ? 'pointer' : undefined}
            onClick={onClick}
          >
            {point}
            <Text size="smLowNormal" color="black" ml="3">
              {text}
            </Text>
          </Flex>
        );
      })}
    </Stack>
  );
};
