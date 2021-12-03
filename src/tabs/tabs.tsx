import React from 'react';
import Tab from './tab';

import { tabsStyle } from './styles';

type TabsProps = {
  children: React.ReactNode;
};

function Tabs({ children }: TabsProps) {
  return (
    <div role="tablist" aria-orientation="horizontal" css={tabsStyle()}>
      {children}
    </div>
  );
}

Tabs.Tab = Tab;

export default Tabs;
