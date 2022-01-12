import React from 'react';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';

import type { PolymorphicRef, PolymorphicComponentProps } from '../helpers';
import { Text } from '../text';
import Badge from './badge';
import { useSidebar } from './sidebar-context';
import { itemStyle, itemInnerContentStyle } from './styles';

type ItemBaseProps = {
  children: React.ReactNode;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  size?: 'small' | 'medium';
  isActive?: boolean;
  isNew?: boolean;
  isSubcategoryItem?: boolean;
};

export type ItemProps<T extends React.ElementType = 'a'> =
  PolymorphicComponentProps<T, ItemBaseProps>;

function Item<T extends React.ElementType = 'a'>(
  {
    as,
    children,
    iconLeft,
    iconRight,
    size = 'medium',
    isActive = false,
    isNew = false,
    isSubcategoryItem = false,
    onClick,
    ...restProps
  }: ItemProps<T>,
  ref?: PolymorphicRef<T>,
) {
  const Element = as || 'a';

  const { focusProps, isFocusVisible } = useFocusRing();
  const sidebarState = useSidebar();

  function handleClick(event: React.MouseEvent) {
    if (sidebarState && Element === 'a') {
      sidebarState.onClose();
    }
    onClick && onClick(event);
  }

  return (
    <li>
      <Element
        {...mergeProps(focusProps, restProps)}
        {...(Element === 'a' && isActive && { 'aria-current': 'page' })}
        onClick={handleClick}
        ref={ref}
        css={itemStyle({ isActive, isFocusVisible })}
      >
        {!isSubcategoryItem && iconLeft}
        <Text
          css={itemInnerContentStyle({
            hasLeftIcon: !!iconLeft,
            hasRightIcon: !!iconRight,
            size,
            isSubcategoryItem,
            isActive,
          })}
        >
          {children}
          {isNew && <Badge>New</Badge>}
        </Text>
        {iconRight}
      </Element>
    </li>
  );
}

export default Item;
