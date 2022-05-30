import React, { cloneElement } from 'react';
import { mergeProps } from '@react-aria/utils';
import { useFocusRing } from '@react-aria/focus';

import { Button } from '../button';

import { enhancerStyle } from './styles';

type EnhancerProps = {
  /* The content of the enhancer. In general, an [icon](/components/icon) from Waffles (of the default `medium` size) should be used.  */
  children: JSX.Element;
  /* [skip docs] */
  size?: NonNullable<React.ComponentProps<typeof Button>['size']>;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Enhancer({ children, size = 'medium', ...restProps }: EnhancerProps) {
  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <button
      type="button"
      {...mergeProps(focusProps, restProps)}
      css={enhancerStyle({ isFocusVisible })}
    >
      {children && children.props.size
        ? children
        : cloneElement(children, {
            // Handle large buttons having medium sized icons by default
            size: size === 'large' ? 'medium' : size,
          })}
    </button>
  );
}

export default Enhancer;
