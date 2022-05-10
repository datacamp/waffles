import React, { useState } from 'react';
import { Tabs } from '@datacamp/waffles/tabs';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { Code } from '@datacamp/waffles/code';

function Example() {
  const [activeTabIndex, setActiveTabIndex] = useState<React.Key>(0);

  return (
    <Tabs
      inverted
      activeTab={activeTabIndex}
      onChange={(activeTab) => {
        setActiveTabIndex(activeTab);
      }}
    >
      <Tabs.Tab label="First Inverted">
        <Paragraph inverted>
          It is enough to set <Code inverted>inverted</Code> on{' '}
          <Code inverted>Tabs</Code> component and not on each individual{' '}
          <Code inverted>Tab</Code>.
        </Paragraph>
      </Tabs.Tab>
      <Tabs.Tab label="Second Inverted">
        <Paragraph inverted>Second tab content.</Paragraph>
      </Tabs.Tab>
      <Tabs.Tab disabled label="Third Inverted Disabled">
        <Paragraph inverted>Third tab content.</Paragraph>
      </Tabs.Tab>
    </Tabs>
  );
}

export default Example;
