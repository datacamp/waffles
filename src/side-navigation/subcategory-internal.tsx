import React, { Children, cloneElement, isValidElement } from 'react';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';

import { useId } from '../hooks';
import type { PolymorphicRef, PolymorphicComponentProps } from '../helpers';
import { Text } from '../text';
import { itemStyle, itemInnerContentStyle, listStyle } from './styles';

type SubcategoryBaseProps = {
  label: string;
  children: React.ReactNode;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  size?: 'small' | 'medium';
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
    ...restProps
  }: SubcategoryProps<T>,
  ref?: PolymorphicRef<T>,
) {
  const Element = as || 'h2';

  const subcategoryId = useId('menu-subcategory');
  const { focusProps, isFocusVisible } = useFocusRing();

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
