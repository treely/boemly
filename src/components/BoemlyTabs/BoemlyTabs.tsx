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
  onChange?: (activeTabKey: string) => void;
}

const styles = {
  line: {
    gap: '8',
    bg: 'transparent',
    borderColor: 'transparent',
    borderWidth: '0',
    borderRadius: 'none',
    padding: '0',
  },
  solid: {
    gap: '2',
    bg: 'white',
    borderColor: 'gray.200',
    borderWidth: '1px',
    borderRadius: 'lg',
    padding: '2',
  },
};

export const BoemlyTabs = ({
  tabs,
  initialTabKey,
  variant = 'line',
  onChange,
}: BoemlyTabsProps): JSX.Element => {
  const [activeTabKey, setActiveTabKey] = useState(initialTabKey ?? tabs[0].key);

  const onClick = (newTabKey: string) => {
    setActiveTabKey(newTabKey);
    onChange && onChange(newTabKey);
  };

  const tab = useMemo(() => tabs.find((tab) => tab.key === activeTabKey), [tabs, activeTabKey]);

  const style = styles[variant];

  return (
    <Box>
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
            />
          ) : (
            <SolidTabButton
              key={tab.key}
              title={tab.title}
              isActive={activeTabKey === tab.key}
              onClick={() => onClick(tab.key)}
              icon={tab.icon}
            />
          )
        )}
      </Flex>

      {variant === 'line' && <Box color="gray.200" borderWidth="1px" borderTop="1px" mt="-1px" />}

      {tab && <Box mt="2">{tab.content}</Box>}
    </Box>
  );
};
