import { css } from '@emotion/react';

import { tokens } from '../tokens';

export function inputStyle() {
  return css`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    margin: 0;
    padding: 0;
    overflow: hidden;
  `;
}

type LabelStyleOptions = {
  disabled: boolean;
};

export function labelStyle({ disabled }: LabelStyleOptions) {
  return css`
    display: flex;
    position: relative;
    cursor: ${disabled ? 'default' : 'pointer'};
    opacity: ${disabled ? tokens.opacity.high : 1};
  `;
}

type ContentStyleOptions = {
  inverted: boolean;
};

export function contentStyle({ inverted }: ContentStyleOptions) {
  return css`
    line-height: ${tokens.lineHeights.default};
    padding-top: 1px;
    padding-left: 26px;
    user-select: none;
    color: ${inverted ? tokens.colors.white : tokens.colors.navy};
  `;
}

const radiomarkBaseStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 18px;
  width: 18px;
  border-radius: ${tokens.borderRadius.circle};
  transition: background-color 75ms ease-out, border-color 75ms ease-out;

  &::after {
    content: '';
    display: block;
    position: absolute;
    z-index: ${tokens.zIndex.default};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: -3px;
    border-radius: ${tokens.borderRadius.circle};
    pointer-events: none;
    transition: box-shadow 125ms ease-out;
  }
`;

type RadiomarkStyleOptions = {
  inverted: boolean;
  checked: boolean;
  isFocusVisible: boolean;
  hasError: boolean;
};

function radiomarkBorderColor(inverted: boolean, checked: boolean) {
  if (inverted) {
    return checked ? tokens.colors.white : tokens.colors.greyDark;
  }
  return checked ? tokens.colors.navy : tokens.colors.greyDark;
}

export function radiomarkStyle({
  inverted,
  checked,
  isFocusVisible,
  hasError,
}: RadiomarkStyleOptions) {
  return css`
    ${radiomarkBaseStyle}
    background-color: ${inverted
      ? tokens.colors.navyLight
      : tokens.colors.white};
    border-width: ${tokens.borderWidth.thin};
    border-style: solid;
    border-color: ${radiomarkBorderColor(inverted, checked)};

    ${isFocusVisible &&
    css`
      &::after {
        box-shadow: 0 0 0 2px ${tokens.colors.blueDark};
      }
    `}

    ${hasError &&
    css`
      border-color: ${tokens.colors.redDark};
      box-shadow: 0 0 0 1px ${tokens.colors.redDark};
    `};
  `;
}

type RadioIconStyleOptions = {
  inverted: boolean;
};

export function radioIconStyle({ inverted }: RadioIconStyleOptions) {
  return css`
    display: block;
    width: 8px;
    height: 8px;
    background-color: ${inverted ? tokens.colors.blue : tokens.colors.blueDark};
    border-radius: ${tokens.borderRadius.circle};
  `;
}
