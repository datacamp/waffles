import React, { Children, cloneElement, isValidElement } from 'react';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';

import type { PolymorphicRef, PolymorphicComponentProps } from '../helpers';
import { Text } from '../text';
import { itemStyle, itemInnerContentStyle, listStyle } from './styles';

type SubcategoryBaseProps = {
  label: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  isActive?: boolean;
};

export type SubcategoryProps<T extends React.ElementType = 'div'> =
  PolymorphicComponentProps<T, SubcategoryBaseProps>;

function Subcategory<T extends React.ElementType = 'div'>(
  {
    as,
    label,
    children,
    icon,
    isActive = false,
    ...restProps
  }: SubcategoryProps<T>,
  ref?: PolymorphicRef<T>,
) {
  const Element = as || 'div';

  const { focusProps, isFocusVisible } = useFocusRing();

  // Inject isSubcategoryItem prop to every child
  function renderChildren() {
    return Children.map(children, (child) => {
      if (isValidElement(child)) {
        return cloneElement(child, {
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
      >
        {icon}
        <Text
          css={itemInnerContentStyle({
            hasIcon: !!icon,
            isSubcategoryItem: false,
            isActive,
          })}
        >
          {label}
        </Text>
      </Element>
      <ul css={listStyle()}>{renderChildren()}</ul>
    </li>
  );
}

export default Subcategory;
