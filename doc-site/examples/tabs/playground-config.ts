import { useState } from 'react';

import { Tabs } from '@datacamp/waffles/tabs';
import { Paragraph } from '@datacamp/waffles/paragraph';

import type { PlaygroundConfig } from '../../types';

const initialCode = `
import { useState } from 'react';

import { Tabs } from '@datacamp/waffles/tabs';
import { Paragraph } from '@datacamp/waffles/paragraph';

function Playground() {
  const [activeTabIndex, setActiveTabIndex] = useState<React.Key>(1);

  return (
    <Tabs
      activeTab={activeTabIndex}
      onChange={(activeTab) => {
        setActiveTabIndex(activeTab);
      }}
    >
      <Tabs.Tab label="First">
        <Paragraph>First tab content.</Paragraph>
      </Tabs.Tab>
      <Tabs.Tab label="Second">
        <Paragraph>Second tab content.</Paragraph>
      </Tabs.Tab>
    </Tabs>
  );
}
`;

const playgroundConfig: PlaygroundConfig = {
  initialCode,
  scope: {
    useState,
    Tabs,
    Paragraph,
  },
};

export default playgroundConfig;
