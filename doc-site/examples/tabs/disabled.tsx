import React, { useState } from 'react';

import { Tabs } from '@datacamp/waffles/tabs';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { Code } from '@datacamp/waffles/code';

function Example() {
  const [activeTabIndex, setActiveTabIndex] = useState<React.Key>(0);

  return (
    <Tabs
      activeTab={activeTabIndex}
      onChange={(activeTab) => {
        setActiveTabIndex(activeTab);
      }}
    >
      <Tabs.Tab label="First">
        <Paragraph>
          To disable a <Code>Tab</Code> just pass <Code>disabled</Code> prop
          directly. When navigating between tabs with arrow keys disabled ones
          are skipped.
        </Paragraph>
      </Tabs.Tab>
      <Tabs.Tab label="Second Disabled" disabled>
        <Paragraph>Second tab content.</Paragraph>
      </Tabs.Tab>
      <Tabs.Tab label="Third Disabled" disabled>
        <Paragraph>Third tab content.</Paragraph>
      </Tabs.Tab>
      <Tabs.Tab label="Fourth">
        <Paragraph>Fourth tab content.</Paragraph>
      </Tabs.Tab>
    </Tabs>
  );
}

export default Example;
