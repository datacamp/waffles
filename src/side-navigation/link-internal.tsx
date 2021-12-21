import React from 'react';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';

import type { PolymorphicRef, PolymorphicComponentProps } from '../helpers';
import { Text } from '../text';
import { linkStyle, linkInnerContentStyle } from './styles';

type LinkBaseProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  isActive?: boolean;
  isSubLink?: boolean;
};

export type LinkProps<T extends React.ElementType = 'a'> =
  PolymorphicComponentProps<T, LinkBaseProps>;

function Link<T extends React.ElementType = 'a'>(
  {
    as,
    children,
    icon,
    isActive = false,
    isSubLink = false,
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
      css={linkStyle({ isActive, isFocusVisible })}
    >
      {!isSubLink && icon}
      <Text
        css={linkInnerContentStyle({ hasIcon: !!icon, isSubLink, isActive })}
      >
        {children}
      </Text>
    </Element>
  );
}

export default Link;
