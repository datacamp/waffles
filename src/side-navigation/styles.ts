import { css } from '@emotion/react';

import { tokens } from '../tokens';
import { hexToRgba } from '../helpers';
import Item from './item';

const sizeMap = {
  small: {
    sizing: '28px',
    spacing: tokens.spacing.xsmall,
    fontSize: tokens.fontSizes.small,
  },
  medium: {
    sizing: tokens.sizing.medium,
    spacing: tokens.spacing.small,
    fontSize: tokens.fontSizes.medium,
  },
} as const;

export function listStyle() {
  return css`
    margin: 0;
    padding: 0;
    list-style: none;
  `;
}

export function sidebarStyle() {
  return css`
    display: grid;
    grid-template-rows: 1fr auto;
    width: 230px;
    min-width: 230px;
    height: 100%;
    background-color: ${tokens.colors.navy};
  `;
}

export function categoryDividerStyle() {
  return css`
    height: 1px;
    background-color: ${hexToRgba(tokens.colors.white, 0.2)};
    margin-top: ${tokens.spacing.small};
    margin-bottom: ${tokens.spacing.small};
    margin-left: ${tokens.spacing.medium};
    margin-right: ${tokens.spacing.medium};
  `;
}

export function categoryLabelStyle() {
  return css`
    color: ${tokens.colors.white};
    user-select: none;
    padding-top: ${tokens.spacing.small};
    padding-bottom: ${tokens.spacing.small};
    padding-left: ${tokens.spacing.medium};
    padding-right: ${tokens.spacing.medium};
  `;
}

const itemBaseStyle = css`
  display: flex;
  align-items: center;
  color: ${tokens.colors.white};
  background-color: transparent;
  border: 0;
  text-decoration: none;
  padding-top: 0;
  padding-bottom: 0;
  padding-left: ${tokens.spacing.medium};
  padding-right: ${tokens.spacing.medium};
  opacity: 0.8;
  outline: 0;
  width: 100%;
  transition: background-color 75ms ease-out, color 75ms ease-out,
    box-shadow 125ms ease-out;
  cursor: default;
  user-select: none;

  & svg {
    flex-shrink: 0;
  }

  &:where(a, button) {
    cursor: pointer;
  }

  &:where(a, button):hover {
    opacity: 1;
    background-color: ${hexToRgba(tokens.colors.white, tokens.opacity.low)};
  }
`;

type ItemStyleOptions = {
  isActive: boolean;
  isFocusVisible: boolean;
};

export function itemStyle({ isActive, isFocusVisible }: ItemStyleOptions) {
  return css`
    ${itemBaseStyle}
    ${isFocusVisible &&
    `box-shadow: inset 0 0 0 2px ${tokens.colors.blueDark};`}
    ${isActive && `opacity: 1;`}
  `;
}

type ItemInnerContentStyleOptions = {
  hasLeftIcon: boolean;
  hasRightIcon: boolean;
  size: NonNullable<React.ComponentProps<typeof Item>['size']>;
  isSubcategoryItem: boolean;
  isActive: boolean;
};

const itemInnerContentBaseStyle = css`
  display: flex;
  align-items: center;
  text-align: left;
  color: ${tokens.colors.white};
  line-height: ${tokens.lineHeights.default};
  flex-grow: 1;
`;

export function itemInnerContentStyle({
  hasLeftIcon,
  hasRightIcon,
  size,
  isSubcategoryItem,
  isActive,
}: ItemInnerContentStyleOptions) {
  return css`
    ${itemInnerContentBaseStyle}

    font-size: ${sizeMap[size].fontSize};
    min-height: ${sizeMap[size].sizing};
    padding-top: ${sizeMap[size].spacing};
    padding-bottom: ${sizeMap[size].spacing};

    ${hasLeftIcon && `margin-left: ${tokens.spacing.small};`}
    ${hasRightIcon && `margin-right: ${tokens.spacing.small};`}

    ${isSubcategoryItem &&
    css`
      margin-left: 7px;
      padding-left: ${tokens.spacing.medium};
      border-left: ${tokens.borderWidth.medium} solid
        ${hexToRgba(tokens.colors.white, tokens.opacity.medium)};
    `}

    ${isActive &&
    css`
      border-left-color: ${tokens.colors.white};
      font-weight: ${tokens.fontWeights.bold};
    `}
  `;
}

export function badgeStyle() {
  return css`
    background-color: ${tokens.colors.green};
    color: ${tokens.colors.navy};
    font-family: ${tokens.fontFamilies.sansSerif};
    font-size: ${tokens.fontSizes.small};
    font-weight: ${tokens.fontWeights.bold};
    line-height: ${tokens.lineHeights.relaxed};
    text-transform: uppercase;
    margin-left: ${tokens.spacing.small};
    border-radius: ${tokens.borderRadius.medium};
    padding-left: ${tokens.spacing.xsmall};
    padding-right: ${tokens.spacing.xsmall};
    letter-spacing: 0.5px;
  `;
}
