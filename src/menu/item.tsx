import React from 'react';
import { useFocusRing } from '@react-aria/focus';

import type { PolymorphicComponentProps } from '../helpers';
import { Text } from '../text';
import { useMenu } from './menu-context';
import AlertDot from './alert-dot';
import { itemStyle, itemInnerContentStyle } from './styles';

type ItemBaseProps = {
  index?: number;
  children: React.ReactNode;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  showAlert?: boolean;
  isActive?: boolean;
};

type ItemProps<T extends React.ElementType = 'button'> =
  PolymorphicComponentProps<T, ItemBaseProps>;

function Item<T extends React.ElementType = 'button'>({
  as,
  index = 0,
  onClick,
  children,
  iconLeft,
  iconRight,
  showAlert = false,
  isActive = false,
  ...restProps
}: ItemProps<T>) {
  const Element = as || 'button';

  const { focusProps, isFocusVisible } = useFocusRing();
  const { listRef, setIsOpen, getItemProps, triggerRef, inverted } = useMenu();

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    onClick?.(event);
    setIsOpen(false);
    // @ts-expect-error: focus() not recognized
    triggerRef.current?.focus();
  }

  return (
    <Element
      {...getItemProps({
        onClick: handleClick,
        ...focusProps,
        ...restProps,
      })}
      ref={(node) => (listRef.current[index] = node)}
      role="menuitem"
      css={itemStyle({ isFocusVisible, isActive, inverted })}
    >
      {showAlert && <AlertDot />}
      {iconLeft}
      <Text
        css={itemInnerContentStyle({
          hasLeftIcon: !!iconLeft,
          hasRightIcon: !!iconRight,
        })}
      >
        {children}
      </Text>
      {iconRight}
    </Element>
  );
}

export default Item;
