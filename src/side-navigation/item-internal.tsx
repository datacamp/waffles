import React from 'react';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';

import type { PolymorphicRef, PolymorphicComponentProps } from '../helpers';
import { Text } from '../text';
import { itemStyle, itemInnerContentStyle } from './styles';

type ItemBaseProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  isActive?: boolean;
  isSubcategoryItem?: boolean;
};

export type ItemProps<T extends React.ElementType = 'a'> =
  PolymorphicComponentProps<T, ItemBaseProps>;

function Item<T extends React.ElementType = 'a'>(
  {
    as,
    children,
    icon,
    isActive = false,
    isSubcategoryItem = false,
    ...restProps
  }: ItemProps<T>,
  ref?: PolymorphicRef<T>,
) {
  const Element = as || 'a';

  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <li>
      <Element
        {...mergeProps(focusProps, restProps)}
        ref={ref}
        css={itemStyle({ isActive, isFocusVisible })}
      >
        {!isSubcategoryItem && icon}
        <Text
          css={itemInnerContentStyle({
            hasIcon: !!icon,
            isSubcategoryItem,
            isActive,
          })}
        >
          {children}
        </Text>
      </Element>
    </li>
  );
}

export default Item;
