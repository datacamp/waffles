import React from 'react';
import { css } from '@emotion/react';

import { tokens } from '../tokens';
import { hexToRgba, hexColorShade } from '../helpers';

import Button from './button';

// Mappings between button's sizes and variants, and design tokens

const sizeMap = {
  small: {
    sizing: tokens.sizing.small,
    fontSize: tokens.fontSizes.small,
    spacing: tokens.spacing.small,
  },
  medium: {
    sizing: tokens.sizing.medium,
    fontSize: tokens.fontSizes.medium,
    spacing: tokens.spacing.medium,
  },
  large: {
    sizing: tokens.sizing.large,
    fontSize: tokens.fontSizes.medium,
    spacing: tokens.spacing.medium,
  },
};

const regularVariantMap = {
  primary: {
    color: tokens.colors.navy,
    backgroundColor: tokens.colors.green,
    hoverBackgroundColor: hexColorShade(
      tokens.colors.green,
      -tokens.opacity.low,
    ),
    borderColor: 'transparent',
  },
  secondary: {
    color: tokens.colors.navy,
    backgroundColor: 'transparent',
    hoverBackgroundColor: hexToRgba(tokens.colors.navy, tokens.opacity.low),
    borderColor: hexToRgba(tokens.colors.navy, tokens.opacity.high),
  },
  plain: {
    color: tokens.colors.blueDarkText,
    backgroundColor: 'transparent',
    hoverBackgroundColor: hexToRgba(tokens.colors.navy, tokens.opacity.low),
    borderColor: 'transparent',
  },
  destructive: {
    color: tokens.colors.navy,
    backgroundColor: tokens.colors.red,
    hoverBackgroundColor: hexColorShade(tokens.colors.red, -tokens.opacity.low),
    borderColor: 'transparent',
  },
  upgrade: {
    color: tokens.colors.white,
    backgroundColor: tokens.colors.purple,
    hoverBackgroundColor: hexColorShade(
      tokens.colors.purple,
      -tokens.opacity.low,
    ),
    borderColor: 'transparent',
  },
};

const invertedVariantMap = {
  primary: {
    ...regularVariantMap.primary,
    hoverBackgroundColor: hexColorShade(
      tokens.colors.green,
      tokens.opacity.low,
    ),
  },
  secondary: {
    color: tokens.colors.white,
    backgroundColor: 'transparent',
    hoverBackgroundColor: hexToRgba(tokens.colors.white, tokens.opacity.low),
    borderColor: hexToRgba(tokens.colors.white, tokens.opacity.high),
  },
  plain: {
    color: tokens.colors.blue,
    backgroundColor: 'transparent',
    hoverBackgroundColor: hexToRgba(tokens.colors.white, tokens.opacity.low),
    borderColor: 'transparent',
  },
  destructive: {
    ...regularVariantMap.destructive,
    hoverBackgroundColor: hexColorShade(tokens.colors.red, tokens.opacity.low),
  },
  upgrade: {
    ...regularVariantMap.upgrade,
    hoverBackgroundColor: hexColorShade(
      tokens.colors.purple,
      tokens.opacity.low,
    ),
  },
};

// Baseline button style

const buttonBaseStyle = css`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  vertical-align: middle;
  text-decoration: none;
  font-family: ${tokens.fontFamilies.sansSerif};
  font-weight: ${tokens.fontWeights.bold};
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
    z-index: ${tokens.zIndex.default};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: -4px;
    border-radius: 6px;
    pointer-events: none;
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
    font-size: ${sizeMap[size].fontSize};
    color: ${variantMap[variant].color};
    background-color: ${variantMap[variant].backgroundColor};
    border-color: ${variantMap[variant].borderColor};

    &:hover:not(:disabled) {
      background-color: ${variantMap[variant].hoverBackgroundColor};
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
        background-color: ${variantMap[variant].hoverBackgroundColor};
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
