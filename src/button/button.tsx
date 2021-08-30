import React from 'react';
import { css } from '@emotion/react';
import { useFocusRing } from '@react-aria/focus';

import { tokens } from '../tokens';
import { sizeMap, regularVariantMap, invertedVariantMap } from './mappings';

const buttonBaseStyle = css`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  text-decoration: none;
  font-family: ${tokens.fontFamilies.sansSerif};
  font-weight: ${tokens.fontWeights.bold};
  font-size: ${tokens.fontSizes.medium};
  line-height: ${tokens.lineHeights.tight};
  margin: 0;
  padding: 0;
  outline: 0;
  border-style: solid;
  border-radius: ${tokens.borderRadius.medium};
  border-width: ${tokens.borderWidth.medium};
  user-select: none;
  transition: background-color 125ms ease-out;
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: -4px;
    border-radius: 6px;
    transition: box-shadow 125ms ease-out;
  }
`;

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
  const variantMap = inverted ? invertedVariantMap : regularVariantMap;

  return (
    <Element
      css={css`
        ${buttonBaseStyle}
        height: ${sizeMap[size].sizing};
        min-width: ${sizeMap[size].sizing};
        width: ${fullWidth ? '100%' : 'auto'};
        padding-left: ${!Icon && sizeMap[size].spacing};
        padding-right: ${!Icon && sizeMap[size].spacing};
        color: ${variantMap[variant].color};
        background-color: ${variantMap[variant].backgroundColor};
        border-color: ${variantMap[variant].borderColor};

        &:hover:not(:disabled) {
          background-color: ${variantMap[variant].hoverColor};
        }

        &:active:not(:disabled) {
          background-color: ${variantMap[variant].backgroundColor};
        }

        &:disabled {
          opacity: ${tokens.opacity.high};
          cursor: default;
        }

        ${isFocusVisible &&
        css`
          &::after {
            box-shadow: 0 0 0 2px ${tokens.colors.blueDark};
          }

          &:active:focus {
            background-color: ${variantMap[variant].hoverColor};
          }
        `}
      `}
      {...restProps}
      {...focusProps}
    >
      {Icon && <Icon size="medium" />}
      {IconLeft && <IconLeft size="medium" />}
      {children && (
        <span
          css={css`
            ${IconLeft && `padding-left: ${tokens.spacing.small};`}
            ${IconRight && `padding-right: ${tokens.spacing.small};`}
          `}
        >
          {children}
        </span>
      )}
      {IconRight && <IconRight size="medium" />}
    </Element>
  );
}

export default Button;
