import React from 'react';
import { css } from '@emotion/react';
import { transparentize } from 'polished';

import { tokens } from '../tokens';

const sizeMap = {
  small: tokens.sizing.small,
  medium: tokens.sizing.medium,
  large: tokens.sizing.large,
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
  font-family: ${tokens.fontFamilies.sansSerif};
  font-weight: ${tokens.fontWeights.bold};
  font-size: ${tokens.fontSizes.medium};
  line-height: ${tokens.lineHeights.tight};
  outline: 0;
  border-radius: ${tokens.borderRadius.medium};
  border-width: ${tokens.borderWidth.medium};
  cursor: pointer;
  transition: background-color 125ms ease-out;
`;

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'plain' | 'destructive';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({
  variant = 'primary',
  size = 'medium',
  children,
  ...restProps
}: ButtonProps) {
  return (
    <button
      css={css`
        ${buttonStyle}
        height: ${sizeMap[size]};
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
      {children}
    </button>
  );
}

export default Button;
