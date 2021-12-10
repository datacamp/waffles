import React from 'react';

import { tabListStyle, tabsWrapper } from './styles';

type TabListProps = {
  inverted: boolean;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function TabList({ inverted, children, ...restProps }: TabListProps) {
  return (
    <div role="tablist" aria-orientation="horizontal" css={tabListStyle()}>
      <div css={tabsWrapper({ inverted })} {...restProps}>
        {children}
      </div>
    </div>
  );
}

export default TabList;
