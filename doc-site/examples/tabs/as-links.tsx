import { useState, useEffect } from 'react';

import { Tabs } from '@datacamp/waffles/tabs';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { Code } from '@datacamp/waffles/code';

// There are better ways to do it with react-router or in NextJS
// For sake of simplicity keeping it framework-agnostic

const availableTabs = ['#tab1', '#tab2', '#tab3'];

function Example() {
  const [activeTab, setActiveTab] = useState(availableTabs[0]);

  useEffect(() => {
    function handleHashChange() {
      if (['#tab1', '#tab2', '#tab3'].includes(window.location.hash)) {
        setActiveTab(window.location.hash);
      }
    }

    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <Tabs activeTab={activeTab}>
      <Tabs.Tab
        as="a"
        href={availableTabs[0]}
        key={availableTabs[0]}
        label="First"
      >
        <Paragraph>
          For convinience it is possible to specify custom tab index, passed as
          the <Code>key</Code> attribute.
        </Paragraph>
      </Tabs.Tab>
      <Tabs.Tab
        as="a"
        href={availableTabs[1]}
        key={availableTabs[1]}
        label="Second"
      >
        <Paragraph>Second tab content.</Paragraph>
      </Tabs.Tab>
      <Tabs.Tab
        as="a"
        href={availableTabs[2]}
        key={availableTabs[2]}
        label="Third"
      >
        <Paragraph>Third tab content.</Paragraph>
      </Tabs.Tab>
    </Tabs>
  );
}

export default Example;
