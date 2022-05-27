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
  inverted: boolean;
  size: NonNullable<React.ComponentProps<typeof FormField>['size']>;
};

export function labelStyle({ inverted, size }: LabelStyleOptions) {
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
  inverted: boolean;
};

export function requiredIndicatorStyle({ inverted }: RequiredStyleOptions) {
  return css`
    font-size: ${tokens.fontSizes.small};
    color: ${inverted
      ? tokens.colors.navySubtleTextOnDark
      : tokens.colors.navySubtleTextOnLight};
    flex-grow: 1;
    text-align: right;
    user-select: none;
  `;
}

type RequiredBulletStyleOptions = {
  inverted: boolean;
};

export function requiredMarkerStyle({ inverted }: RequiredBulletStyleOptions) {
  return css`
    font-size: ${tokens.fontSizes.medium};
    color: ${inverted ? tokens.colors.red : tokens.colors.redDark};
    margin-right: 4px;
  `;
}

type ErrorStyleOptions = {
  inverted: boolean;
  size: NonNullable<React.ComponentProps<typeof FormField>['size']>;
};

export function errorStyle({ inverted, size }: ErrorStyleOptions) {
  return css`
    margin-top: ${tokens.spacing.small};
    color: ${inverted ? tokens.colors.red : tokens.colors.redDarkText};
    font-size: ${sizeMap[size].fontSize};
    line-height: ${tokens.lineHeights.default};
  `;
}
