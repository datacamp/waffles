import React from 'react';
import { useFocusRing } from '@react-aria/focus';

import { Text } from '../text';
import { useMenu } from './menu-context';
import { itemStyle, itemInnerContentStyle } from './styles';

type ItemProps = {
  index?: number;
  children: React.ReactNode;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'>;

function Item({
  index = 0,
  onClick,
  children,
  iconLeft,
  iconRight,
  ...restProps
}: ItemProps) {
  const { focusProps, isFocusVisible } = useFocusRing();
  const { listRef, setIsOpen, getItemProps, triggerRef } = useMenu();

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    onClick?.(event);
    setIsOpen(false);
    // @ts-expect-error: focus() not recognized
    triggerRef.current?.focus();
  }

  return (
    <button
      {...getItemProps({
        onClick: handleClick,
        ...focusProps,
        ...restProps,
      })}
      ref={(node) => (listRef.current[index] = node)}
      role="menuitem"
      css={itemStyle({ isFocusVisible })}
    >
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
    </button>
  );
}

export default Item;
