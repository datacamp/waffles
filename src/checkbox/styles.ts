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

const checkmarkBaseStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 18px;
  width: 18px;
  color: ${tokens.colors.white};
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
    border-radius: 4px;
    pointer-events: none;
    transition: box-shadow 125ms ease-out;
  }
`;

export function contentStyle() {
  return css`
    line-height: ${tokens.lineHeights.default};
    padding-top: 1px;
    padding-left: 26px;
    user-select: none;
  `;
}

type CheckmarkStyleOptions = {
  checked: boolean;
  isFocusVisible: boolean;
};

export function checkmarkStyle({
  checked,
  isFocusVisible,
}: CheckmarkStyleOptions) {
  return css`
    ${checkmarkBaseStyle}
    background-color: ${checked ? tokens.colors.blueDark : tokens.colors.white};
    border-width: ${tokens.borderWidth.thin};
    border-style: solid;
    border-color: ${checked ? tokens.colors.blueDark : tokens.colors.greyDark};

    ${isFocusVisible &&
    css`
      &::after {
        box-shadow: 0 0 0 2px ${tokens.colors.blueDark};
      }
    `}
  `;
}
