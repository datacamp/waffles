import React, { forwardRef } from 'react';

import TabInternal from './tab-internal';

import type { TabProps } from './tab-internal';

type TabComponent = <T extends React.ElementType = 'button'>(
  props: TabProps<T>,
) => JSX.Element | null;

const Tab: TabComponent = forwardRef(TabInternal);

export default Tab;
