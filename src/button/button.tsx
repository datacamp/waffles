import React from 'react';
import { useFocusRing } from '@react-aria/focus';

import { buttonStyle, innerContentStyle } from './styles';

type MergeElementProps<
  T extends React.ElementType,
  P extends Record<string, unknown>,
> = Omit<React.ComponentPropsWithoutRef<T>, keyof P> & P;

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

type ButtonProps<P extends React.ElementType = 'button'> = {
  as?: P;
} & MergeElementProps<P, ButtonNoIconProps | ButtonIconOnlyProps>;

function Button<T extends React.ElementType = 'button'>({
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
}: ButtonProps<T>) {
  const Element = as || 'button';

  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <Element
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

export default Button;
