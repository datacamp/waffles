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
    padding-top: 3px;
    padding-right: ${tokens.spacing.small};
    flex-grow: 1;
    user-select: none;
    color: ${inverted ? tokens.colors.white : tokens.colors.navy};
  `;
}

const toggleBaseStyle = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
  height: 22px;
  width: 36px;
  padding: 2px;
  border-radius: 12px;
  transition: background-color 75ms ease-out;

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
    border-radius: 14px;
    pointer-events: none;
    transition: box-shadow 125ms ease-out;
  }
`;

type ToggleStyleOptions = {
  inverted: boolean;
  checked: boolean;
  isFocusVisible: boolean;
  hasError: boolean;
};

export function toggleStyle({
  inverted,
  checked,
  isFocusVisible,
  hasError,
}: ToggleStyleOptions) {
  const invertedCheckedColor = inverted
    ? tokens.colors.blue
    : tokens.colors.blueDark;

  return css`
    ${toggleBaseStyle}
    background-color: ${checked
      ? invertedCheckedColor
      : tokens.colors.greyDark};

    ${isFocusVisible &&
    css`
      &::after {
        box-shadow: 0 0 0 2px ${tokens.colors.blueDark};
      }
    `}

    ${hasError &&
    css`
      background-color: ${tokens.colors.redDark};
    `};
  `;
}

type HandleStyleOptions = {
  inverted: boolean;
  checked: boolean;
};

export function handleStyle({ inverted, checked }: HandleStyleOptions) {
  return css`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${inverted ? tokens.colors.blue : tokens.colors.blueDark};
    background-color: ${inverted ? tokens.colors.navy : tokens.colors.white};
    height: 18px;
    width: 18px;
    border-radius: ${tokens.borderRadius.circle};
    transform: translateX(${checked ? 14 : 0}px);
    transition: transform 75ms ease-out;
  `;
}
