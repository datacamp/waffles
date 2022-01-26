import React from 'react';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';

import { tokens } from '../tokens';
import type { PolymorphicRef, PolymorphicComponentProps } from '../helpers';
import { Text } from '../text';
import { Badge } from '../badge';
import { useSidebar } from './sidebar-context';
import { itemStyle, itemInnerContentStyle, badgeStyle } from './styles';

type ItemBaseProps = {
  /* The content of navigation item. Most of the time should be a plain text. */
  children: React.ReactNode;
  /* An icon displayed to the left. Could be any [icon](/components/icon) from Waffles or a custom component. Depending on the size use `medium` or `xsmall` icon. */
  iconLeft?: React.ReactNode;
  /* An icon displayed to the right. Could be any [icon](/components/icon) from Waffles or a custom component. Depending on the size use `medium` or `xsmall` icon. */
  iconRight?: React.ReactNode;
  /* Defines the size of the item element. In most cases default `medium` size should be used. */
  size?: 'small' | 'medium';
  /* Indicates that the item is currently active. */
  isActive?: boolean;
  /* Useful for highlighting new important positions. */
  isNew?: boolean;
  /* Determines if an item is rendered as a part of the subcategory. In general it's passed automatically. */
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
    if (sidebarState) {
      sidebarState.onClose();
    }
    onClick && onClick(event);
  }

  return (
    <li>
      <Element
        {...mergeProps(focusProps, restProps)}
        {...(isActive && { 'aria-current': 'page' })}
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
          {isNew && (
            <Badge
              css={badgeStyle()}
              color={tokens.colors.green}
              data-testid="new-item-indicator"
            >
              New
            </Badge>
          )}
        </Text>
        {iconRight}
      </Element>
    </li>
  );
}

export default Item;
