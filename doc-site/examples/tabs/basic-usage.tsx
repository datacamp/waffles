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
          By default, to controll <Code>Tabs</Code> set an index of the active
          tab—its position on the list, starting from 0. To focus an active{' '}
          <Code>Tab</Code> press a tab key. To navigate between them use left
          and right arrow keys.
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
