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

const checkmarkBaseStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 18px;
  width: 18px;
  border-radius: ${tokens.borderRadius.medium};
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
    margin: -2px;
    border-radius: 5px;
    pointer-events: none;
    transition: box-shadow 125ms ease-out;
  }
`;

type CheckmarkStyleOptions = {
  inverted: boolean;
  checked: boolean;
  isFocusVisible: boolean;
  hasError: boolean;
};

function checkmarkBackgroundColor(inverted: boolean, checked: boolean) {
  if (inverted) {
    return checked ? tokens.colors.blue : tokens.colors.navyLight;
  }
  return checked ? tokens.colors.blueDark : tokens.colors.white;
}

function checkmarkBorderColor(inverted: boolean, checked: boolean) {
  if (inverted) {
    return checked ? tokens.colors.blue : tokens.colors.greyDark;
  }
  return checked ? tokens.colors.blueDark : tokens.colors.greyDark;
}

export function checkmarkStyle({
  inverted,
  checked,
  isFocusVisible,
  hasError,
}: CheckmarkStyleOptions) {
  return css`
    ${checkmarkBaseStyle}
    color: ${inverted ? tokens.colors.navy : tokens.colors.white};
    background-color: ${checkmarkBackgroundColor(inverted, checked)};
    border-width: ${tokens.borderWidth.thin};
    border-style: solid;
    border-color: ${checkmarkBorderColor(inverted, checked)};

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
