import React from 'react';
import { mergeProps } from '@react-aria/utils';
import { useFocusRing } from '@react-aria/focus';

import { linkStyle, innerContentStyle } from './styles';

import type { PolymorphicRef, PolymorphicComponentProps } from '../helpers';

type LinkBaseProps = {
  /* The content of the link.  */
  children: React.ReactNode;
  /* Sets the style of the link suitable for dark backgrounds. */
  inverted?: boolean;
  /* An icon displayed to the left. Could be any [icon](/components/icon) from Waffles (for smaller text sizes use `small` size) or a custom component. */
  iconLeft?: React.ReactNode;
  /* An icon displayed to the right. Could be any [icon](/components/icon) from Waffles (for smaller text sizes use `small` size) or a custom component. */
  iconRight?: React.ReactNode;
};

export type LinkProps<T extends React.ElementType = 'a'> =
  PolymorphicComponentProps<T, LinkBaseProps>;

function LinkInternal<T extends React.ElementType = 'a'>(
  {
    as,
    inverted = false,
    iconLeft,
    iconRight,
    children,
    ...restProps
  }: LinkProps<T>,
  ref?: PolymorphicRef<T>,
) {
  const Element = as || 'a';

  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <Element
      {...mergeProps(focusProps, restProps)}
      ref={ref}
      css={linkStyle({
        inverted,
        isFocusVisible,
      })}
    >
      {iconLeft}
      {
        <span
          css={innerContentStyle({
            hasLeftIcon: !!iconLeft,
            hasRightIcon: !!iconRight,
          })}
        >
          {children}
        </span>
      }
      {iconRight}
    </Element>
  );
}

export default LinkInternal;
