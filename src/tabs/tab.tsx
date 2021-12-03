import React from 'react';
import { useFocusRing } from '@react-aria/focus';

import { tabStyle, innerContentStyle } from './styles';

type TabProps = {
  children: string;
  icon?: React.ReactNode;
  isActive?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Tab({ children, icon, isActive = false, ...restProps }: TabProps) {
  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <button
      {...focusProps}
      {...restProps}
      css={tabStyle({ isActive, isFocusVisible })}
    >
      {icon}
      <span css={innerContentStyle({ hasIcon: !!icon, content: children })}>
        {children}
      </span>
    </button>
  );
}

export default Tab;
