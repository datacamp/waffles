import React, { Children, cloneElement, isValidElement } from 'react';
import { mergeProps } from '@react-aria/utils';
import { useFocusRing } from '@react-aria/focus';

import { Text } from '../text';
import { useId } from '../hooks';

import { itemStyle, itemInnerContentStyle, listStyle } from './styles';
import { useSidebar } from './sidebar-context';

import type { PolymorphicRef, PolymorphicComponentProps } from '../helpers';

type SubcategoryBaseProps = {
  /* Subcategory section caption. */
  label: string;
  /* A list of `SideNavigation.Item` components. */
  children: React.ReactNode;
  /* An icon displayed to the left. Could be any [icon](/components/icon) from Waffles or a custom component. Depending on the size use `medium` or `xsmall` icon. */
  iconLeft?: JSX.Element;
  /* An icon displayed to the right. Could be any [icon](/components/icon) from Waffles or a custom component. Depending on the size use `medium` or `xsmall` icon. */
  iconRight?: JSX.Element;
  /* Defines the size of the subcategory header element. In most cases default `medium` size should be used. */
  size?: 'small' | 'medium';
  /* Indicates that subcategory is currently active. */
  isActive?: boolean;
};

export type SubcategoryProps<T extends React.ElementType = 'div'> =
  PolymorphicComponentProps<T, SubcategoryBaseProps>;

function Subcategory<T extends React.ElementType = 'div'>(
  {
    as,
    label,
    children,
    iconLeft,
    iconRight,
    size = 'medium',
    isActive = false,
    onClick,
    ...restProps
  }: SubcategoryProps<T>,
  ref?: PolymorphicRef<T>,
) {
  const Element = as || 'h2';

  const subcategoryId = useId('side-navigation-subcategory');
  const { focusProps, isFocusVisible } = useFocusRing();
  const sidebarState = useSidebar();

  function handleClick(event: React.MouseEvent) {
    if (sidebarState) {
      sidebarState.onClose();
    }
    onClick && onClick(event);
  }

  // Inject isSubcategoryItem prop to every child
  function renderChildren() {
    return Children.map(children, (child) => {
      if (isValidElement(child)) {
        return cloneElement(child, {
          size,
          isSubcategoryItem: true,
        });
      }

      return null;
    });
  }

  return (
    <li>
      <Element
        {...mergeProps(focusProps, restProps)}
        {...(isActive && { 'aria-current': 'page' })}
        onClick={handleClick}
        ref={ref}
        css={itemStyle({ isActive, isFocusVisible })}
        id={subcategoryId}
      >
        {iconLeft}
        <Text
          css={itemInnerContentStyle({
            hasLeftIcon: !!iconLeft,
            hasRightIcon: !!iconRight,
            size,
            isSubcategoryItem: false,
            isActive,
          })}
        >
          {label}
        </Text>
        {iconRight}
      </Element>
      <ul aria-labelledby={subcategoryId} css={listStyle()}>
        {renderChildren()}
      </ul>
    </li>
  );
}

export default Subcategory;
