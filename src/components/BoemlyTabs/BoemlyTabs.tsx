import React, { FC, useMemo, useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import TabButton from './TabButton';

export interface BoemlyTabsProps {
  tabs: { key: string; title: string; content: JSX.Element | JSX.Element }[];
  initialTabKey?: string;
  onChange?: (activeTabKey: string) => void;
}

export const BoemlyTabs: FC<BoemlyTabsProps> = ({
  tabs,
  initialTabKey,
  onChange,
}: BoemlyTabsProps) => {
  const [activeTabKey, setActiveTabKey] = useState(initialTabKey ?? tabs[0].key);

  const onClick = (newTabKey: string) => {
    setActiveTabKey(newTabKey);
    onChange && onChange(newTabKey);
  };

  const tab = useMemo(() => tabs.find((tab) => tab.key === activeTabKey), [tabs, activeTabKey]);

  return (
    <Box>
      <Flex width="full" gap="8" overflowX="auto">
        {tabs.map((tab) => (
          <TabButton
            key={tab.key}
            title={tab.title}
            isActive={activeTabKey === tab.key}
            onClick={() => onClick(tab.key)}
          />
        ))}
      </Flex>

      <Box color="gray.200" borderTop="1px" mt="-1px" />

      {tab && <Box mt="2">{tab.content}</Box>}
    </Box>
  );
};
