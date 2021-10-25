import { css } from '@emotion/react';

import { tokens } from '../tokens';

export function labelStyle() {
  return css`
    display: block;
    width: 100%;
  `;
}

export function textLabelStyle() {
  return css`
    display: block;
    line-height: ${tokens.lineHeights.default};
    font-weight: ${tokens.fontWeights.bold};
  `;
}

export function textDescriptionStyle() {
  return css`
    display: block;
    line-height: ${tokens.lineHeights.default};
    margin-top: ${tokens.spacing.xsmall};
  `;
}

export function wrapperStyle() {
  return css`
    position: relative;

    &::after {
      content: '';
      display: block;
      position: absolute;
      z-index: ${tokens.zIndex.default};
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: -2px;
      border-radius: 6px;
      pointer-events: none;
      transition: box-shadow 125ms ease-out;
    }

    &:focus-within {
      &::after {
        box-shadow: 0 0 0 2px ${tokens.colors.blueDark};
      }
    }
  `;
}

const inputBaseStyle = css`
  display: flex;
  width: 100%;
  height: ${tokens.sizing.medium};
  color: ${tokens.colors.navy};
  font-family: ${tokens.fontFamilies.sansSerif};
  font-size: ${tokens.fontSizes.medium};
  font-weight: ${tokens.fontWeights.regular};
  line-height: ${tokens.lineHeights.relaxed};
  background-color: ${tokens.colors.white};
  border: ${tokens.borderWidth.thin} solid ${tokens.colors.greyDark};
  border-radius: ${tokens.borderRadius.medium};
  padding-left: 12px;
  padding-right: 12px;
  margin-top: ${tokens.spacing.small};
  outline: 0;
  appearance: none;
  cursor: text;

  &::placeholder {
    color: ${tokens.colors.navySubtleTextOnLight};
  }

  &:disabled {
    opacity: ${tokens.opacity.high};
    cursor: default;
  }
`;

type InputStyleOptions = {
  hasError: boolean;
};

export function inputStyle({ hasError }: InputStyleOptions) {
  return css`
    ${inputBaseStyle}
    ${hasError &&
    css`
      border-color: ${tokens.colors.redDark};
      box-shadow: 0 0 0 1px ${tokens.colors.redDark};
    `};
  `;
}

export function errorStyle() {
  return css`
    position: absolute;
    z-index: ${tokens.zIndex.default};
    bottom: 0;
    left: 0;
    transform: translateY(20px);
    color: ${tokens.colors.redDarkText};
  `;
}
