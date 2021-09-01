/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';
import { useFocusRing } from '@react-aria/focus';

import { buttonStyle, innerContentStyle } from './styles';

type ElementRef<T extends React.ElementType> =
  React.ComponentPropsWithRef<T>['ref'];

type MergeElementPropsWithRef<
  T extends React.ElementType,
  P extends Record<string, unknown>,
> = Omit<React.ComponentPropsWithoutRef<T>, keyof P> &
  P & { ref?: ElementRef<T> };

type ButtonBaseProps = {
  variant?: 'primary' | 'secondary' | 'plain' | 'destructive';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  inverted?: boolean;
};

type ButtonIconOnlyProps = {
  icon: React.ReactNode;
  children?: never;
  iconLeft?: never;
  iconRight?: never;
  'aria-label': string;
} & ButtonBaseProps;

type ButtonNoIconProps = {
  icon?: never;
  children: React.ReactNode;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  'aria-label'?: string;
} & ButtonBaseProps;

type ButtonProps<T extends React.ElementType = 'button'> = {
  as?: T;
} & MergeElementPropsWithRef<T, ButtonNoIconProps | ButtonIconOnlyProps>;

type ButtonComponent = <T extends React.ElementType = 'button'>(
  props: ButtonProps<T>,
) => JSX.Element | null;

function ButtonBase<T extends React.ElementType = 'button'>(
  {
    as,
    variant = 'primary',
    size = 'medium',
    fullWidth = false,
    inverted = false,
    icon,
    iconLeft,
    iconRight,
    children,
    ...restProps
  }: ButtonProps<T>,
  ref?: ElementRef<T>,
) {
  const Element = as || 'button';

  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <Element
      ref={ref}
      css={buttonStyle({
        size,
        variant,
        inverted,
        fullWidth,
        hasIcon: !!icon,
        isFocusVisible,
      })}
      {...restProps}
      {...focusProps}
    >
      {icon}
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
    </Element>
  );
}

const Button = forwardRef(ButtonBase) as ButtonComponent;

export default Button;
