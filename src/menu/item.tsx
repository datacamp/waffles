import React from 'react';
import { useFocusRing } from '@react-aria/focus';

import { Text } from '../text';
import { useMenu } from './menu-context';
import { itemStyle } from './styles';

type ItemProps = {
  index?: number;
  children: React.ReactNode;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'>;

function Item({ index = 0, onClick, children, ...restProps }: ItemProps) {
  const { focusProps, isFocusVisible } = useFocusRing();
  const { listRef, setIsOpen, getItemProps, triggerRef } = useMenu();

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    onClick?.(event);
    setIsOpen(false);
    // @ts-expect-error: focus() not recognized
    triggerRef.current?.focus();
  }

  return (
    <li>
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
        <Text>{children}</Text>
      </button>
    </li>
  );
}

export default Item;
