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
  border-radius: ${tokens.borderRadius.medium};
  box-shadow: ${tokens.boxShadow.thin}, ${tokens.boxShadow.medium},
    ${tokens.boxShadow.xthick};
  width: 260px;
`;

type DropdownStyleOptions = {
  x: number | null;
  y: number | null;
  inverted: boolean;
};

export function dropdownStyle({ x, y, inverted }: DropdownStyleOptions) {
  return css`
    ${dropdownBaseStyle}
    top: ${y ? y : 0}px;
    left: ${x ? x : 0}px;
    background-color: ${inverted
      ? tokens.colors.navyLight
      : tokens.colors.white};
  `;
}

const itemBaseStyle = css`
  position: relative;
  display: flex;
  align-items: center;
  width: calc(100% - 8px);
  min-height: ${tokens.sizing.medium};
  padding-right: 12px;
  padding-left: 12px;
  margin-left: ${tokens.spacing.xsmall};
  margin-right: ${tokens.spacing.xsmall};
  text-decoration: none;
  border: 0;
  border-radius: ${tokens.borderRadius.medium};
  outline: 0;
  transition: background-color 125ms ease-out;
  cursor: pointer;

  & svg {
    flex-shrink: 0;
  }

  &:disabled {
    opacity: ${tokens.opacity.high};
    cursor: default;
  }
`;

type ItemStyleOptions = {
  isFocusVisible: boolean;
  isActive: boolean;
  inverted: boolean;
};

export function itemStyle({
  isFocusVisible,
  isActive,
  inverted,
}: ItemStyleOptions) {
  const invertedActiveColor = inverted
    ? hexToRgba(tokens.colors.white, 0.05)
    : tokens.colors.greySubtle;

  return css`
    ${itemBaseStyle}
    color: ${inverted ? tokens.colors.white : tokens.colors.navy};
    background: ${isActive ? invertedActiveColor : 'transparent'};

    &:hover:not(:disabled) {
      background-color: ${hexToRgba(
        inverted ? tokens.colors.white : tokens.colors.navy,
        tokens.opacity.low,
      )};
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
    display: block;
    color: inherit;
    flex-grow: 1;
    line-height: ${tokens.lineHeights.default};
    padding-top: ${tokens.spacing.small};
    padding-bottom: ${tokens.spacing.small};
    text-align: left;
    ${hasLeftIcon && `padding-left: ${tokens.spacing.small};`}
    ${hasRightIcon && `padding-right: ${tokens.spacing.small};`}
  `;
}

type CategoryDividerStyleOptions = {
  inverted: boolean;
};

export function categoryDividerStyle({
  inverted,
}: CategoryDividerStyleOptions) {
  return css`
    height: 1px;
    background-color: ${inverted
      ? hexToRgba(tokens.colors.white, 0.15)
      : hexToRgba(tokens.colors.navy, 0.2)};
    margin-top: ${tokens.spacing.small};
    margin-bottom: ${tokens.spacing.small};
    margin-right: ${tokens.spacing.xsmall};
    margin-left: ${tokens.spacing.xsmall};
  `;
}

type CategoryLabelStyleStyleOptions = {
  inverted: boolean;
};

export function categoryLabelStyle({
  inverted,
}: CategoryLabelStyleStyleOptions) {
  return css`
    color: ${inverted
      ? tokens.colors.navySubtleTextOnDark
      : tokens.colors.navySubtleTextOnLight};
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
