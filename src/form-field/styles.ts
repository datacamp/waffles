import { css } from '@emotion/react';

import { tokens } from '../tokens';

import FormField from './form-field';

export function wrapperStyle() {
  return css`
    position: relative;
    width: 100%;
  `;
}

// Mappings between form field's sizes and variants, and design tokens

const sizeMap = {
  small: {
    fontSize: tokens.fontSizes.small,
  },
  medium: {
    fontSize: tokens.fontSizes.medium,
  },
  large: {
    fontSize: tokens.fontSizes.medium,
  },
};

type LabelStyleOptions = {
  size: NonNullable<React.ComponentProps<typeof FormField>['size']>;
  inverted: boolean;
};

export function labelStyle({ size, inverted }: LabelStyleOptions) {
  return css`
    display: flex;
    line-height: ${tokens.lineHeights.default};
    font-size: ${sizeMap[size].fontSize};
    font-weight: ${tokens.fontWeights.bold};
    color: ${inverted ? tokens.colors.white : tokens.colors.navy};
    margin-bottom: ${tokens.spacing.small};
  `;
}

type DescriptionStyleOptions = {
  size: NonNullable<React.ComponentProps<typeof FormField>['size']>;
};

export function descriptionStyle({ size }: DescriptionStyleOptions) {
  return css`
    line-height: ${tokens.lineHeights.default};
    font-size: ${sizeMap[size].fontSize};
    margin-top: -${tokens.spacing.xsmall};
  `;
}

type RequiredStyleOptions = {
  size: NonNullable<React.ComponentProps<typeof FormField>['size']>;
  inverted: boolean;
};

export function requiredIndicatorStyle({
  size,
  inverted,
}: RequiredStyleOptions) {
  return css`
    display: flex;
    // Set required indicator to xsmall if the font size is small
    font-size: ${size === 'small'
      ? tokens.fontSizes.xsmall
      : tokens.fontSizes.small};
    color: ${inverted
      ? tokens.colors.navySubtleTextOnDark
      : tokens.colors.navySubtleTextOnLight};
    flex-grow: 1;
    text-align: right;
    justify-content: end;
    align-items: center;
    user-select: none;
  `;
}

type RequiredDotStyleOptions = {
  size: NonNullable<React.ComponentProps<typeof FormField>['size']>;
  inverted: boolean;
};

export function requiredDotStyle({ size, inverted }: RequiredDotStyleOptions) {
  return css`
    display: inline-block;
    flex-shrink: 0;
    width: ${size === 'small' ? 4 : 6}px;
    height: ${size === 'small' ? 4 : 6}px;
    border-radius: ${tokens.borderRadius.circle};
    background-color: ${inverted ? tokens.colors.red : tokens.colors.redDark};
    margin-right: 4px;
  `;
}

type ErrorStyleOptions = {
  size: NonNullable<React.ComponentProps<typeof FormField>['size']>;
  inverted: boolean;
};

export function errorStyle({ size, inverted }: ErrorStyleOptions) {
  return css`
    margin-top: ${tokens.spacing.small};
    color: ${inverted ? tokens.colors.red : tokens.colors.redDarkText};
    font-size: ${sizeMap[size].fontSize};
    line-height: ${tokens.lineHeights.default};
  `;
}
