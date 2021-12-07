import React, { forwardRef } from 'react';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';

import { tabStyle, tabInnerContentStyle, tabFauxContenStyle } from './styles';

type TabProps = {
  label: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  isActive?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Tab(
  { label, icon, isActive = false, ...restProps }: TabProps,
  ref?: React.Ref<HTMLButtonElement>,
) {
  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <button
      {...mergeProps(focusProps, restProps)}
      ref={ref}
      role="tab"
      css={tabStyle({ isActive, isFocusVisible })}
    >
      {icon}
      <span css={tabInnerContentStyle({ hasIcon: !!icon })}>
        {label}
        <span css={tabFauxContenStyle()} aria-hidden="true">
          {label}
        </span>
      </span>
    </button>
  );
}

export default forwardRef(Tab);
