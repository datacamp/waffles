import { css } from '@emotion/react';

import { tokens } from '../tokens';

export function wrapperStyle() {
  return css`
    position: relative;
    width: 100%;
  `;
}

type LabelStyleOptions = {
  inverted: boolean;
};

export function labelStyle({ inverted }: LabelStyleOptions) {
  return css`
    display: flex;
    line-height: ${tokens.lineHeights.default};
    font-weight: ${tokens.fontWeights.bold};
    color: ${inverted ? tokens.colors.white : tokens.colors.navy};
    margin-bottom: ${tokens.spacing.small};
  `;
}

export function descriptionStyle() {
  return css`
    line-height: ${tokens.lineHeights.default};
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
};

export function errorStyle({ inverted }: ErrorStyleOptions) {
  return css`
    margin-top: ${tokens.spacing.small};
    color: ${inverted ? tokens.colors.red : tokens.colors.redDarkText};
    line-height: ${tokens.lineHeights.default};
  `;
}
