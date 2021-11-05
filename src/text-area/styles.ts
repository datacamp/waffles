import { css } from '@emotion/react';

import { tokens } from '../tokens';

type TextAreaWrapperStyleOptions = {
  isFocused: boolean;
  autoGrow: boolean;
};

export function textAreaWrapper({
  isFocused,
  autoGrow,
}: TextAreaWrapperStyleOptions) {
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

    ${isFocused &&
    css`
      &::after {
        box-shadow: 0 0 0 2px ${tokens.colors.blueDark};
      }
    `}

    ${autoGrow &&
    css`
      grid-area: 1 / 1 / 2 / 2;
    `}
  `;
}

const textAreaBaseStyle = css`
  display: block;
  width: 100%;
  height: 100%;
  resize: none;
  padding: ${tokens.spacing.small} 12px;
  color: ${tokens.colors.navy};
  background-color: ${tokens.colors.white};
  font-family: ${tokens.fontFamilies.sansSerif};
  font-size: ${tokens.fontSizes.medium};
  font-weight: ${tokens.fontWeights.regular};
  line-height: ${tokens.lineHeights.relaxed};
  border: ${tokens.borderWidth.thin} solid ${tokens.colors.greyDark};
  border-radius: ${tokens.borderRadius.medium};
  outline: 0;

  &:disabled {
    cursor: default;
    opacity: ${tokens.opacity.high};
  }
`;

type TextAreaStyleOptions = {
  hasError: boolean;
  inverted: boolean;
};

export function textAreaStyle({ hasError, inverted }: TextAreaStyleOptions) {
  return css`
    ${textAreaBaseStyle}
    color: ${inverted ? tokens.colors.white : tokens.colors.navy};
    background-color: ${inverted
      ? tokens.colors.navyLight
      : tokens.colors.white};

    &::placeholder {
      opacity: 1;
      color: ${inverted
        ? tokens.colors.navySubtleTextOnDark
        : tokens.colors.navySubtleTextOnLight};
    }

    ${hasError &&
    css`
      border-color: ${tokens.colors.redDark};
      box-shadow: 0 0 0 1px ${tokens.colors.redDark};
    `};
  `;
}

export function growWrapperStyle() {
  return css`
    display: grid;
  `;
}

export function fauxGrowElementStyle() {
  return css`
    ${textAreaBaseStyle}
    grid-area: 1 / 1 / 2 / 2;
    visibility: hidden;
    white-space: pre-wrap;
  `;
}
