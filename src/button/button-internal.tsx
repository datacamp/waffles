import React, { cloneElement } from 'react';
import { mergeProps } from '@react-aria/utils';
import { useFocusRing } from '@react-aria/focus';

import { buttonStyle, innerContentStyle } from './styles';

import type { PolymorphicRef, PolymorphicComponentProps } from '../helpers';

type ButtonBaseProps = {
  /* Defines the variant of the button. */
  variant?: 'primary' | 'secondary' | 'plain' | 'destructive' | 'upgrade';
  /* Defines the size of the button. In most cases default `medium` size should be used. */
  size?: 'small' | 'medium' | 'large';
  /* Allows button to grow to the width of its container. */
  fullWidth?: boolean;
  /* Sets the style of the button suitable for dark backgrounds. */
  inverted?: boolean;
};

type ButtonIconOnlyProps = {
  /* An icon displayed as the only content of the button. Because of that `aria-label` attribute must be specified. Could be any [icon](/components/icon) from Waffles (use default `medium` size) or a custom component. */
  icon: JSX.Element;
  children?: never;
  iconLeft?: never;
  iconRight?: never;
  'aria-label': string;
} & ButtonBaseProps;

type ButtonNoIconProps = {
  icon?: never;
  /* The content inside the button. Most of the time should be a plain text. */
  children: React.ReactNode;
  /* An icon displayed to the left. Could be any [icon](/components/icon) from Waffles (use default `medium` size) or a custom component. */
  iconLeft?: JSX.Element;
  /* An icon displayed to the right. Could be any [icon](/components/icon) from Waffles (use default `medium` size) or a custom component. */
  iconRight?: JSX.Element;
  /* [skip docs] */
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

  function renderIcon(originalIcon: JSX.Element) {
    // Check if the icon has a provided custom size prop already
    return originalIcon.props.size
      ? originalIcon
      : cloneElement(originalIcon, {
          // Handle large buttons having medium sized icons by default, and small / medium as defined
          size: size === 'large' ? 'medium' : size,
        });
  }

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
        renderIcon(icon)
      ) : (
        <>
          {iconLeft && renderIcon(iconLeft)}
          {children && (
            <span
              css={innerContentStyle({
                hasLeftIcon: !!iconLeft,
                hasRightIcon: !!iconRight,
                size,
              })}
            >
              {children}
            </span>
          )}
          {iconRight && renderIcon(iconRight)}
        </>
      )}
    </Element>
  );
}

export default ButtonInternal;
