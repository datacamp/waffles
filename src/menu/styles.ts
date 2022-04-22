import { css } from '@emotion/react';

import { tokens } from '../tokens';
import { hexToRgba } from '../helpers';

const dropdownBaseStyle = css`
  position: absolute; // Use absolute position, expected by float-ui default strategy
  z-index: ${tokens.zIndex.dropdown};
  margin: 0;
  padding-top: ${tokens.spacing.small};
  padding-bottom: ${tokens.spacing.small};
  padding-left: 0;
  padding-right: 0;
  outline: 0;
  list-style: none;
  background-color: ${tokens.colors.white};
  border-radius: ${tokens.borderRadius.medium};
  box-shadow: ${tokens.boxShadow.thin}, ${tokens.boxShadow.thick},
    ${tokens.boxShadow.xthick};
  width: 200px;
`;

type DropdownStyleOptions = {
  x: number | null;
  y: number | null;
};

export function dropdownStyle({ x, y }: DropdownStyleOptions) {
  return css`
    ${dropdownBaseStyle}
    top: ${y ? y : 0}px;
    left: ${x ? x : 0}px;
  `;
}

type ItemStyleOptions = {
  isFocusVisible: boolean;
};

export function itemStyle({ isFocusVisible }: ItemStyleOptions) {
  return css`
    display: flex;
    align-items: center;
    width: 100%;
    height: ${tokens.sizing.medium};
    padding-right: ${tokens.spacing.medium};
    padding-left: ${tokens.spacing.medium};
    color: ${tokens.colors.navy};
    background: transparent;
    border: 0;
    border-radius: 0;
    outline: 0;
    transition: background-color 125ms ease-out;
    cursor: pointer;

    &:hover:not(:disabled) {
      background-color: ${hexToRgba(tokens.colors.navy, tokens.opacity.low)};
    }

    &:disabled {
      opacity: ${tokens.opacity.high};
      cursor: default;
    }

    ${isFocusVisible &&
    `box-shadow: inset 0 0 0 2px ${tokens.colors.blueDark};`}
  `;
}

type ItemInnerContentStyleOptions = {
  hasLeftIcon: boolean;
  hasRightIcon: boolean;
};

export function itemInnerContentStyle({
  hasLeftIcon,
  hasRightIcon,
}: ItemInnerContentStyleOptions) {
  return css`
    color: inherit;
    margin-right: auto;
    ${hasLeftIcon && `padding-left: ${tokens.spacing.small};`}
    ${hasRightIcon && `padding-right: ${tokens.spacing.small};`}
  `;
}
