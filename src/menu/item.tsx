import React from 'react';
import { useFocusRing } from '@react-aria/focus';

import type { PolymorphicComponentProps } from '../helpers';
import { Text } from '../text';
import { useMenu } from './menu-context';
import AlertDot from './alert-dot';
import {
  itemStyle,
  itemInnerContentStyle,
  itemLabelStyle,
  itemDescriptionStyle,
} from './styles';

type ItemBaseProps = {
  label: React.ReactNode;
  index?: number;
  description?: React.ReactNode;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  showAlert?: boolean;
  isActive?: boolean;
};

type ItemProps<T extends React.ElementType = 'button'> =
  PolymorphicComponentProps<T, ItemBaseProps>;

function Item<T extends React.ElementType = 'button'>({
  as,
  label,
  index = 0,
  description,
  iconLeft,
  iconRight,
  showAlert = false,
  isActive = false,
  onClick,
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
      <span
        css={itemInnerContentStyle({
          hasLeftIcon: !!iconLeft,
          hasRightIcon: !!iconRight,
        })}
      >
        <Text css={itemLabelStyle({ isActive })}>{label}</Text>
        {description && (
          <Text css={itemDescriptionStyle({ inverted })}>{description}</Text>
        )}
      </span>
      {iconRight}
    </Element>
  );
}

export default Item;
