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
  box-shadow: ${tokens.boxShadow.thin}, ${tokens.boxShadow.medium},
    ${tokens.boxShadow.xthick};
  width: 260px;
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
    position: relative;
    display: flex;
    align-items: center;
    width: calc(100% - 8px);
    height: ${tokens.sizing.medium};
    padding-right: 12px;
    padding-left: 12px;
    margin-left: ${tokens.spacing.xsmall};
    margin-right: ${tokens.spacing.xsmall};
    color: ${tokens.colors.navy};
    text-decoration: none;
    background: transparent;
    border: 0;
    border-radius: ${tokens.borderRadius.medium};
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

export function categoryDividerStyle() {
  return css`
    height: 1px;
    background-color: ${hexToRgba(tokens.colors.navy, 0.2)};
    margin-top: ${tokens.spacing.small};
    margin-bottom: ${tokens.spacing.small};
    margin-right: ${tokens.spacing.xsmall};
    margin-left: ${tokens.spacing.xsmall};
  `;
}

export function categoryLabelStyle() {
  return css`
    color: ${tokens.colors.navySubtleTextOnLight};
    font-size: ${tokens.fontSizes.small};
    font-weight: ${tokens.fontWeights.bold};
    line-height: ${tokens.lineHeights.default};
    letter-spacing: ${tokens.letterSpacing.relaxed};
    text-transform: uppercase;
    user-select: none;
    padding-top: ${tokens.spacing.small};
    padding-bottom: ${tokens.spacing.small};
    padding-left: ${tokens.spacing.medium};
    padding-right: ${tokens.spacing.medium};
    margin: 0;
  `;
}

export function buttonStyle() {
  return css`
    width: calc(100% - 16px);
    margin-left: ${tokens.spacing.small};
    margin-right: ${tokens.spacing.small};

    &:not(:last-child) {
      margin-bottom: ${tokens.spacing.small};
    }
  `;
}

export function alertDotStyle() {
  return css`
    position: absolute;
    z-index: ${tokens.zIndex.default};
    top: ${tokens.spacing.xsmall};
    left: ${tokens.spacing.xsmall};
    width: 6px;
    height: 6px;
    background-color: ${tokens.colors.red};
    border-radius: ${tokens.borderRadius.circle};
  `;
}
