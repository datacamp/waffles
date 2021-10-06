import React from 'react';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';

import type { PolymorphicRef, PolymorphicComponentProps } from '../helpers';
import { buttonStyle, innerContentStyle } from './styles';

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

export type ButtonProps<T extends React.ElementType = 'button'> =
  PolymorphicComponentProps<T, ButtonNoIconProps | ButtonIconOnlyProps>;

function ButtonInternal<T extends React.ElementType = 'button'>(
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
  ref?: PolymorphicRef<T>,
) {
  const Element = as || 'button';

  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <Element
      {...mergeProps(focusProps, restProps)}
      ref={ref}
      css={buttonStyle({
        size,
        variant,
        inverted,
        fullWidth,
        hasIcon: !!icon,
        isFocusVisible,
      })}
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

export default ButtonInternal;
