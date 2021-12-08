import { css } from '@emotion/react';

import { tokens } from '../tokens';
import { hexToRgba } from '../helpers';

type TabListStyleOptions = {
  inverted: boolean;
};

export function tabListStyle({ inverted }: TabListStyleOptions) {
  return css`
    display: flex;
    width: 100%;
    border-bottom: ${tokens.borderWidth.medium} solid
      ${hexToRgba(inverted ? tokens.colors.white : tokens.colors.navy, 0.15)};
    margin-bottom: ${tokens.spacing.medium};
  `;
}

const tabBaseStyle = css`
  display: flex;
  background-color: transparent;
  font-family: ${tokens.fontFamilies.sansSerif};
  font-size: ${tokens.fontSizes.small};
  font-weight: ${tokens.fontWeights.regular};
  line-height: ${tokens.lineHeights.tight};
  letter-spacing: ${tokens.letterSpacing.relaxed};
  text-transform: uppercase;
  cursor: pointer;
  outline: 0;
  border: 0;
  border-bottom: ${tokens.borderWidth.medium} solid transparent;
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 10px;
  padding-top: ${tokens.spacing.xsmall};
  margin-bottom: -${tokens.borderWidth.medium};
  margin-right: ${tokens.spacing.large};
  user-select: none;
  transition: border-color 125ms ease-out, box-shadow 125ms ease-out;

  &:last-of-type {
    margin-right: 0;
  }

  &:disabled {
    cursor: default;
    opacity: ${tokens.opacity.high};
  }
`;

type TabStyleOptions = {
  isActive: boolean;
  isFocusVisible: boolean;
  inverted: boolean;
};

export function tabStyle({
  isActive,
  isFocusVisible,
  inverted,
}: TabStyleOptions) {
  const mainColor = inverted ? tokens.colors.white : tokens.colors.navy;

  return css`
    ${tabBaseStyle}
    color: ${inverted
      ? tokens.colors.navySubtleTextOnDark
      : tokens.colors.navySubtleTextOnLight};

    ${isActive
      ? css`
          &:not(:disabled) {
            color: ${mainColor};
            font-weight: ${tokens.fontWeights.bold};
            border-bottom-color: ${mainColor};
          }
        `
      : css`
          &:hover:not(:disabled) {
            color: ${hexToRgba(mainColor, 0.8)};
            border-bottom-color: ${hexToRgba(mainColor, tokens.opacity.medium)};
          }
        `}

    ${isFocusVisible &&
    css`
      box-shadow: 0 0 0 2px ${tokens.colors.blueDark};
    `}
  `;
}

type InnerContentStyleOptions = {
  hasIcon: boolean;
};

export function tabInnerContentStyle({ hasIcon }: InnerContentStyleOptions) {
  return css`
    display: block;
    margin-bottom: -1px;

    ${hasIcon &&
    css`
      margin-left: ${tokens.spacing.small};
    `}
  `;
}

// Prevent content shifts caused by font weight change between active and regular state
export function tabFauxContenStyle() {
  return css`
    display: block;
    font-weight: ${tokens.fontWeights.bold};
    color: transparent;
    clip: rect(0 0 0 0);
    height: 1px;
    padding: 0;
    border: 0;
    overflow: hidden;
    white-space: nowrap;
    word-wrap: normal;
  `;
}
