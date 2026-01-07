'use client';

import React, { useMemo, useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import LineTabButton from './LineTabButton';
import SolidTabButton from './SolidTabButton';

export interface BoemlyTabsProps {
  tabs: {
    key: string;
    title: string;
    content: JSX.Element | JSX.Element[];
    icon?: JSX.Element;
  }[];
  initialTabKey?: string;
  variant?: 'line' | 'solid';
  size?: 'sm' | 'md';
  isFullWidth?: boolean;
  onChange?: (activeTabKey: string) => void;
}

const styles = {
  line: {
    sm: {
      gap: '6',
      bg: 'transparent',
      borderColor: 'transparent',
      borderWidth: '0',
      borderRadius: 'none',
      padding: '0',
    },
    md: {
      gap: '8',
      bg: 'transparent',
      borderColor: 'transparent',
      borderWidth: '0',
      borderRadius: 'none',
      padding: '0',
    },
  },
  solid: {
    sm: {
      gap: '1',
      bg: 'white',
      borderColor: 'gray.200',
      borderWidth: '1px',
      borderRadius: 'md',
      padding: '1',
    },
    md: {
      gap: '2',
      bg: 'white',
      borderColor: 'gray.200',
      borderWidth: '1px',
      borderRadius: 'lg',
      padding: '2',
    },
  },
};

export const BoemlyTabs = ({
  tabs,
  initialTabKey,
  variant = 'line',
  size = 'md',
  isFullWidth = true,
  onChange,
}: BoemlyTabsProps): JSX.Element => {
  const [activeTabKey, setActiveTabKey] = useState(initialTabKey ?? tabs[0].key);

  const onClick = (newTabKey: string) => {
    setActiveTabKey(newTabKey);
    onChange && onChange(newTabKey);
  };

  const tab = useMemo(() => tabs.find((tab) => tab.key === activeTabKey), [tabs, activeTabKey]);

  const style = styles[variant][size];

  return (
    <Box>
      <Box
        width={isFullWidth ? 'full' : 'fit-content'}
        display={isFullWidth ? 'block' : 'inline-block'}
        data-testid="tabsBoxContainer"
      >
        <Flex
          width="full"
          gap={style.gap}
          overflowX="auto"
          bg={style.bg}
          borderColor={style.borderColor}
          borderWidth={style.borderWidth}
          borderRadius={style.borderRadius}
          padding={style.padding}
        >
          {tabs.map((tab) =>
            variant === 'line' ? (
              <LineTabButton
                key={tab.key}
                title={tab.title}
                isActive={activeTabKey === tab.key}
                onClick={() => onClick(tab.key)}
                size={size}
              />
            ) : (
              <SolidTabButton
                key={tab.key}
                title={tab.title}
                isActive={activeTabKey === tab.key}
                onClick={() => onClick(tab.key)}
                icon={tab.icon}
                size={size}
              />
            )
          )}
        </Flex>

        {variant === 'line' && <Box color="gray.200" borderWidth="1px" borderTop="1px" mt="-1px" />}
      </Box>

      {tab && <Box mt="2">{tab.content}</Box>}
    </Box>
  );
};
