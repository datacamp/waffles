import React from 'react';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';

import { enhancerStyle } from './styles';

type EnhancerProps = {
  /* The content of the enhancer. In general, an [icon](/components/icon) from Waffles (of the default `medium` size) should be used.  */
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Enhancer({ children, ...restProps }: EnhancerProps) {
  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <button
      type="button"
      {...mergeProps(focusProps, restProps)}
      css={enhancerStyle({ isFocusVisible })}
    >
      {children}
    </button>
  );
}

export default Enhancer;
