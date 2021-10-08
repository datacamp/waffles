import React from 'react';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';

import type { PolymorphicRef, PolymorphicComponentProps } from '../helpers';
import { buttonStyle, innerContentStyle } from './styles';

type ButtonBaseProps = {
  /* Defines the variant of a button. */
  variant?: 'primary' | 'secondary' | 'plain' | 'destructive';
  /* Defines the size of the button. In most cases default `medium` size should be used. */
  size?: 'small' | 'medium' | 'large';
  /* Allows button to grow to the width of its container. */
  fullWidth?: boolean;
  /* Sets the style of the button suitable for dark backrounds. */
  inverted?: boolean;
};

type ButtonIconOnlyProps = {
  /* An icon displayed as the only content of the button. Because of that `aria-label` attribute must be specified. Could be any [icon](/components/icon) from Waffles of default `medium` size, or custom component. */
  icon: React.ReactNode;
  children?: never;
  iconLeft?: never;
  iconRight?: never;
  'aria-label': string;
} & ButtonBaseProps;

type ButtonNoIconProps = {
  icon?: never;
  /* The content inside the button. Most of the time should be a plain text. */
  children: React.ReactNode;
  /* An icon displayed to the left. Could be any [icon](/components/icon) from Waffles of default `medium` size, or custom component. */
  iconLeft?: React.ReactNode;
  /* An icon displayed to the right. Could be any [icon](/components/icon) from Waffles of default `medium` size, or custom component. */
  iconRight?: React.ReactNode;
  'aria-label'?: string;
} & ButtonBaseProps;

export type ButtonProps<T extends React.ElementType = 'button'> =
  PolymorphicComponentProps<T, ButtonNoIconProps | ButtonIconOnlyProps>;

function ButtonInternal<T extends React.ElementType = 'button'>(
  {
    as,
    variant = 'primary',
    size = 'medium',
    inverted = false,
    fullWidth = false,
    icon,
    iconLeft,
    iconRight,
    children,
    ...restProps
  }: ButtonProps<T>,
  ref?: PolymorphicRef<T>,
) {
  const Element = as || 'button';

  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <Element
      {...mergeProps(focusProps, restProps)}
      ref={ref}
      css={buttonStyle({
        variant,
        size,
        inverted,
        fullWidth,
        hasIcon: !!icon,
        isFocusVisible,
      })}
    >
      {icon ? (
        icon
      ) : (
        <>
          {iconLeft}
          {children && (
            <span
              css={innerContentStyle({
                hasLeftIcon: !!iconLeft,
                hasRightIcon: !!iconRight,
              })}
            >
              {children}
            </span>
          )}
          {iconRight}
        </>
      )}
    </Element>
  );
}

export default ButtonInternal;
