import React from 'react';
import { css } from '@emotion/react';
import { transparentize } from 'polished';

import { tokens } from '../tokens';

const sizeMap = {
  small: {
    sizing: tokens.sizing.small,
    spacing: tokens.spacing.small,
  },
  medium: {
    sizing: tokens.sizing.medium,
    spacing: tokens.spacing.medium,
  },
  large: {
    sizing: tokens.sizing.large,
    spacing: tokens.spacing.medium,
  },
};

const variantMap = {
  primary: {
    color: tokens.colors.navy,
    backgroundColor: tokens.colors.green,
    hoverColor: tokens.colors.greenLight,
    borderColor: 'transparent',
  },
  secondary: {
    color: tokens.colors.navy,
    backgroundColor: 'transparent',
    hoverColor: transparentize(1 - tokens.opacity.low, tokens.colors.navy),
    borderColor: tokens.colors.navy,
  },
  plain: {
    color: tokens.colors.blueDarkText,
    backgroundColor: 'transparent',
    hoverColor: transparentize(1 - tokens.opacity.low, tokens.colors.navy),
    borderColor: 'transparent',
  },
  destructive: {
    color: tokens.colors.navy,
    backgroundColor: tokens.colors.red,
    hoverColor: tokens.colors.redLight,
    borderColor: 'transparent',
  },
};

const buttonStyle = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  font-family: ${tokens.fontFamilies.sansSerif};
  font-weight: ${tokens.fontWeights.bold};
  font-size: ${tokens.fontSizes.medium};
  line-height: ${tokens.lineHeights.tight};
  margin: 0;
  padding: 0;
  outline: 0;
  border-radius: ${tokens.borderRadius.medium};
  border-width: ${tokens.borderWidth.medium};
  cursor: pointer;
  transition: background-color 125ms ease-out;
`;

const wrapperStyle = css`
  padding-left: ${tokens.spacing.small};
  padding-right: ${tokens.spacing.small};
`;

type IconProps = {
  size?: 'medium' | 'small' | 'xsmall';
};

type ButtonIconOnlyProps = {
  children?: never;
  icon: React.ComponentType<IconProps>;
  iconLeft?: never;
  iconRight?: never;
  'aria-label': string;
};

type ButtonRegularProps = {
  children: React.ReactNode;
  icon?: never;
  iconLeft?: React.ComponentType<IconProps>;
  iconRight?: React.ComponentType<IconProps>;
  'aria-label'?: string;
};

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'plain' | 'destructive';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
} & (ButtonIconOnlyProps | ButtonRegularProps) &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  icon: Icon,
  iconLeft: IconLeft,
  iconRight: IconRight,
  children,
  ...restProps
}: ButtonProps) {
  return (
    <button
      css={css`
        ${buttonStyle}
        height: ${sizeMap[size].sizing};
        min-width: ${sizeMap[size].sizing};
        width: ${fullWidth ? '100%' : 'auto'};
        padding-left: ${!Icon && sizeMap[size].spacing};
        padding-right: ${!Icon && sizeMap[size].spacing};
        color: ${variantMap[variant].color};
        background-color: ${variantMap[variant].backgroundColor};
        border-color: ${variantMap[variant].borderColor};

        &:hover {
          background-color: ${variantMap[variant].hoverColor};
        }

        &:active {
          background-color: ${variantMap[variant].backgroundColor};
        }
      `}
      {...restProps}
    >
      {Icon && <Icon size="medium" />}
      {IconLeft && <IconLeft size="medium" />}
      {children && <span css={wrapperStyle}>{children}</span>}
      {IconRight && <IconRight size="medium" />}
    </button>
  );
}

export default Button;
