import React from 'react';
import { useFocusRing } from '@react-aria/focus';

import { buttonStyle, innerContentStyle } from './styles';

type IconProps = {
  size?: 'medium' | 'small' | 'xsmall';
};

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
  icon: React.ComponentType<IconProps>;
  children?: never;
  iconLeft?: never;
  iconRight?: never;
  'aria-label': string;
} & ButtonBaseProps;

type ButtonNoIconProps = {
  icon?: never;
  children: React.ReactNode;
  iconLeft?: React.ComponentType<IconProps>;
  iconRight?: React.ComponentType<IconProps>;
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
  icon: Icon,
  iconLeft: IconLeft,
  iconRight: IconRight,
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
        hasIcon: !!Icon,
        isFocusVisible,
      })}
      {...restProps}
      {...focusProps}
    >
      {Icon && <Icon size="medium" />}
      {IconLeft && <IconLeft size="medium" />}
      {children && (
        <span
          css={innerContentStyle({
            hasLeftIcon: !!IconLeft,
            hasRightIcon: !!IconRight,
          })}
        >
          {children}
        </span>
      )}
      {IconRight && <IconRight size="medium" />}
    </Element>
  );
}

export default Button;
