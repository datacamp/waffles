import React, { forwardRef } from 'react';
import { useFocusRing } from '@react-aria/focus';

import type { PolymorphicRef, PolymorphicComponentProps } from '../utils';
import { linkStyle, innerContentStyle } from './styles';

type LinkBaseProps = {
  children: React.ReactNode;
  inverted?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
};

type LinkProps<T extends React.ElementType = 'a'> = PolymorphicComponentProps<
  T,
  LinkBaseProps
>;

type LinkComponent = <T extends React.ElementType = 'a'>(
  props: LinkProps<T>,
) => JSX.Element | null;

function LinkBase<T extends React.ElementType = 'a'>(
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
      ref={ref}
      css={linkStyle({
        inverted,
        isFocusVisible,
      })}
      {...restProps}
      {...focusProps}
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

const Link: LinkComponent = forwardRef(LinkBase);

export default Link;
