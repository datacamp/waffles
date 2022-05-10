import React, { useState } from 'react';
import { Tabs } from '@datacamp/waffles/tabs';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { Bell, Clock, Heart } from '@datacamp/waffles/icon';
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
      <Tabs.Tab icon={<Heart size="xsmall" />} label="First">
        <Paragraph>
          Use <Code>xsmall</Code> icon size.
        </Paragraph>
      </Tabs.Tab>
      <Tabs.Tab icon={<Clock size="xsmall" />} label="Second">
        <Paragraph>Second tab content.</Paragraph>
      </Tabs.Tab>
      <Tabs.Tab icon={<Bell size="xsmall" />} label="Third">
        <Paragraph>Third tab content.</Paragraph>
      </Tabs.Tab>
    </Tabs>
  );
}

export default Example;
