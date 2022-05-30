import React from 'react';

import { Button } from '../button';

import { buttonStyle } from './styles';
import { useMenu } from './menu-context';

import type { PolymorphicComponentProps } from '../helpers';

type MenuButtonBaseProps = {
  /* Defines the variant of the button. */
  variant?: 'primary' | 'secondary' | 'plain' | 'destructive' | 'upgrade';
  /* An icon displayed to the left. Could be any [icon](/components/icon) from Waffles (use default `medium` size) or a custom component. */
  iconLeft?: JSX.Element;
  /* An icon displayed to the right. Could be any [icon](/components/icon) from Waffles (use default `medium` size) or a custom component. */
  iconRight?: JSX.Element;
  /* The content inside the button. Most of the time should be a plain text. */
  children: React.ReactNode;
  /* [skip docs] */
  inverted?: boolean;
  /* [skip docs] */
  index?: number;
};

type MenuButtonProps<T extends React.ElementType = 'button'> =
  PolymorphicComponentProps<T, MenuButtonBaseProps>;

function MenuButton<T extends React.ElementType = 'button'>({
  index = 0,
  onClick,
  ...restProps
}: MenuButtonProps<T>) {
  const { listRef, setIsOpen, getItemProps, triggerRef, inverted } = useMenu();

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    onClick?.(event);
    setIsOpen(false);
    // @ts-expect-error: focus() not recognized
    triggerRef.current?.focus();
  }

  return (
    // @ts-expect-error: spread props out of sync
    <Button
      {...getItemProps({
        onClick: handleClick,
        ...restProps,
      })}
      ref={(node) => (listRef.current[index] = node)}
      role="menuitem"
      inverted={inverted}
      css={buttonStyle()}
    />
  );
}

export default MenuButton;
