import React, { useState } from 'react';

import { Tabs } from '@datacamp/waffles/tabs';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { Code } from '@datacamp/waffles/code';

function Example() {
  const [activeTabIndex, setActiveTabIndex] = useState<React.Key>(0);

  return (
    <Tabs
      autoActivate
      activeTab={activeTabIndex}
      onChange={(activeTab) => {
        setActiveTabIndex(activeTab);
      }}
    >
      <Tabs.Tab label="First">
        <Paragraph>
          If <Code>autoActivate</Code> is enabled, when navigating between tabs
          with arrow keys, focused tab will be activated and corresponding tab
          panel will be shown.
        </Paragraph>
      </Tabs.Tab>
      <Tabs.Tab label="Second">
        <Paragraph>Second tab content.</Paragraph>
      </Tabs.Tab>
      <Tabs.Tab label="Third">
        <Paragraph>Third tab content.</Paragraph>
      </Tabs.Tab>
    </Tabs>
  );
}

export default Example;
