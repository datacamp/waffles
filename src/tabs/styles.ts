import { css } from '@emotion/react';

import { tokens } from '../tokens';
import { hexToRgba } from '../helpers';

export function tabsStyle() {
  return css`
    display: flex;
    width: 100%;
    border-bottom: ${tokens.borderWidth.medium} solid
      ${hexToRgba(tokens.colors.navy, 0.15)};
  `;
}

type TabStyleOptions = {
  isActive: boolean;
  isFocusVisible: boolean;
};

export function tabStyle({ isActive, isFocusVisible }: TabStyleOptions) {
  return css`
    display: flex;
    background-color: transparent;
    color: ${tokens.colors.navySubtleTextOnLight};
    font-size: ${tokens.fontSizes.small};
    font-weight: ${tokens.fontWeights.regular};
    line-height: ${tokens.lineHeights.default};
    letter-spacing: ${tokens.letterSpacing.relaxed};
    text-transform: uppercase;
    cursor: pointer;
    outline: 0;
    border: 0;
    border-bottom: ${tokens.borderWidth.medium} solid transparent;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: ${tokens.spacing.small};
    padding-top: ${tokens.spacing.xsmall};
    margin-bottom: -${tokens.borderWidth.medium};
    margin-right: ${tokens.spacing.large};

    &:last-of-type {
      margin-right: 0;
    }

    ${isActive &&
    css`
      color: ${tokens.colors.navy};
      font-weight: ${tokens.fontWeights.bold};
      border-bottom-color: ${tokens.colors.navy};
    `}

    ${isFocusVisible &&
    css`
      box-shadow: 0 0 0 2px ${tokens.colors.blueDark};
    `}
  `;
}
