import { css } from '@emotion/react';

import { tokens } from '../tokens';
import { hexToRgba } from '../helpers';

import Item from './item';

const dropdownBaseStyle = css`
  position: absolute; // Use absolute position, expected by float-ui default strategy
  z-index: ${tokens.zIndex.dropdown};
  margin: 0;
  padding: ${tokens.spacing.small} 0;
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
  width: calc(100% - 16px);
  min-height: ${tokens.sizing.medium};
  padding-right: 12px;
  padding-left: 12px;
  margin-left: ${tokens.spacing.small};
  margin-right: ${tokens.spacing.small};
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

// Mappings between item's variants, and design tokens

const regularVariantMap = {
  primary: {
    color: tokens.colors.navy,
    hoverBackgroundColor: hexToRgba(tokens.colors.navy, tokens.opacity.low),
    activeBackgroundColor: tokens.colors.greySubtle,
  },
  destructive: {
    color: tokens.colors.redDarkText,
    hoverBackgroundColor: hexToRgba(
      tokens.colors.redDarkText,
      tokens.opacity.low,
    ),
    activeBackgroundColor: tokens.colors.greySubtle,
  },
};

const invertedVariantMap = {
  primary: {
    color: tokens.colors.white,
    hoverBackgroundColor: hexToRgba(tokens.colors.white, tokens.opacity.low),
    activeBackgroundColor: hexToRgba(tokens.colors.white, 0.05),
  },
  destructive: {
    color: tokens.colors.redLight,
    hoverBackgroundColor: hexToRgba(tokens.colors.redLight, 0.15),
    activeBackgroundColor: hexToRgba(tokens.colors.white, 0.05),
  },
};

type ItemStyleOptions = {
  variant: NonNullable<React.ComponentProps<typeof Item>['variant']>;
  isFocusVisible: boolean;
  isActive: boolean;
  inverted: boolean;
};

export function itemStyle({
  variant,
  isFocusVisible,
  isActive,
  inverted,
}: ItemStyleOptions) {
  const variantMap = inverted ? invertedVariantMap : regularVariantMap;

  return css`
    ${itemBaseStyle}
    color: ${variantMap[variant].color};
    background: ${isActive
      ? variantMap[variant].activeBackgroundColor
      : 'transparent'};

    &:hover:not(:disabled) {
      background-color: ${variantMap[variant].hoverBackgroundColor};
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
    overflow: hidden;
    padding-top: ${tokens.spacing.small};
    padding-bottom: ${tokens.spacing.small};
    flex-grow: 1;
    ${hasLeftIcon && `padding-left: ${tokens.spacing.small};`}
    ${hasRightIcon && `padding-right: ${tokens.spacing.small};`}
  `;
}

const textBaseStyle = css`
  display: block;
  text-align: left;
  line-height: ${tokens.lineHeights.relaxed};
`;

type ItemLabelStyleOptions = {
  isActive: boolean;
};

// Inherits text color to keep it in sync with icon color in case of custom style overrides
export function itemLabelStyle({ isActive }: ItemLabelStyleOptions) {
  return css`
    ${textBaseStyle}
    color: inherit;
    font-weight: ${isActive
      ? tokens.fontWeights.bold
      : tokens.fontWeights.regular};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `;
}

type ItemDescriptionStyleOptions = {
  inverted: boolean;
};

export function itemDescriptionStyle({
  inverted,
}: ItemDescriptionStyleOptions) {
  return css`
    ${textBaseStyle}
    color: ${inverted
      ? tokens.colors.navySubtleTextOnDark
      : tokens.colors.navySubtleTextOnLight};
    font-size: ${tokens.fontSizes.small};
    margin-top: 2px;
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
    margin-right: ${tokens.spacing.small};
    margin-left: ${tokens.spacing.small};
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
    font-size: ${tokens.fontSizes.xsmall};
    font-weight: ${tokens.fontWeights.bold};
    line-height: ${tokens.lineHeights.default};
    letter-spacing: ${tokens.letterSpacing.relaxed};
    text-transform: uppercase;
    user-select: none;
    padding: ${tokens.spacing.small} ${tokens.spacing.medium};
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

export function notificationDotStyle() {
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
