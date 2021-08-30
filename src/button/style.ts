import { css } from '@emotion/react';
import React from 'react';

import { tokens } from '../tokens';
import { hexToRgba } from '../utils';
import Button from './button';

// Mappings between button's sizes and variants, and design tokens

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

const regularVariantMap = {
  primary: {
    color: tokens.colors.navy,
    backgroundColor: tokens.colors.green,
    hoverColor: tokens.colors.greenLight,
    borderColor: 'transparent',
  },
  secondary: {
    color: tokens.colors.navy,
    backgroundColor: 'transparent',
    hoverColor: hexToRgba(tokens.colors.navy, tokens.opacity.low),
    borderColor: hexToRgba(tokens.colors.navy, tokens.opacity.high),
  },
  plain: {
    color: tokens.colors.blueDarkText,
    backgroundColor: 'transparent',
    hoverColor: hexToRgba(tokens.colors.navy, tokens.opacity.low),
    borderColor: 'transparent',
  },
  destructive: {
    color: tokens.colors.navy,
    backgroundColor: tokens.colors.red,
    hoverColor: tokens.colors.redLight,
    borderColor: 'transparent',
  },
};

const invertedVariantMap = {
  ...regularVariantMap,
  secondary: {
    color: tokens.colors.white,
    backgroundColor: 'transparent',
    hoverColor: hexToRgba(tokens.colors.white, tokens.opacity.low),
    borderColor: hexToRgba(tokens.colors.white, tokens.opacity.high),
  },
  plain: {
    color: tokens.colors.blueDark,
    backgroundColor: 'transparent',
    hoverColor: hexToRgba(tokens.colors.white, tokens.opacity.low),
    borderColor: 'transparent',
  },
};

// Baseline button style

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

// Generate button element style based on various options

type ButtonStyleOptions = {
  size: NonNullable<React.ComponentProps<typeof Button>['size']>;
  variant: NonNullable<React.ComponentProps<typeof Button>['variant']>;
  inverted: boolean;
  fullWidth: boolean;
  hasIcon: boolean;
  isFocusVisible: boolean;
};

export function buttonStyle({
  size,
  variant,
  inverted,
  fullWidth,
  hasIcon,
  isFocusVisible,
}: ButtonStyleOptions) {
  const variantMap = inverted ? invertedVariantMap : regularVariantMap;

  return css`
    ${buttonBaseStyle}
    height: ${sizeMap[size].sizing};
    min-width: ${sizeMap[size].sizing};
    width: ${fullWidth ? '100%' : 'auto'};
    padding-left: ${!hasIcon && sizeMap[size].spacing};
    padding-right: ${!hasIcon && sizeMap[size].spacing};
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
  `;
}

// Generate button inner wrapper style based on provided options

type InnerContentStyleOptions = {
  hasLeftIcon: boolean;
  hasRightIcon: boolean;
};

export function innerContentStyle({
  hasLeftIcon,
  hasRightIcon,
}: InnerContentStyleOptions) {
  return css`
    ${hasLeftIcon && `padding-left: ${tokens.spacing.small};`}
    ${hasRightIcon && `padding-right: ${tokens.spacing.small};`}
  `;
}
