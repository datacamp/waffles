import { css } from '@emotion/react';

import { tokens } from '../tokens';
import { hexToRgba } from '../helpers';

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

export function subCategoryStyle() {
  return css`
    display: flex;
    align-items: center;
    padding-left: ${tokens.spacing.medium};
    height: ${tokens.sizing.medium};
    color: ${tokens.colors.white};
    opacity: 0.8;
    user-select: none;
  `;
}

type SubCategoryLabelStyleOptions = {
  hasIcon: boolean;
};

export function subCategoryLabelStyle({
  hasIcon,
}: SubCategoryLabelStyleOptions) {
  return css`
    color: ${tokens.colors.white};

    ${hasIcon &&
    css`
      padding-left: ${tokens.spacing.small};
    `}
  `;
}

const itemBaseStyle = css`
  display: flex;
  align-items: center;
  color: ${tokens.colors.white};
  text-decoration: none;
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

  &:where(a) {
    cursor: pointer;
  }

  &:where(a):hover {
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
    css`
      box-shadow: inset 0 0 0 2px ${tokens.colors.blueDark};
    `}

    ${isActive &&
    css`
      opacity: 1;
    `}
  `;
}

type ItemInnerContentStyleOptions = {
  hasIcon: boolean;
  isSubcategoryItem: boolean;
  isActive: boolean;
};

export function itemInnerContentStyle({
  hasIcon,
  isSubcategoryItem,
  isActive,
}: ItemInnerContentStyleOptions) {
  return css`
    display: flex;
    align-items: center;
    color: ${tokens.colors.white};
    line-height: ${tokens.lineHeights.default};
    min-height: ${tokens.sizing.medium};
    padding-top: ${tokens.spacing.small};
    padding-bottom: ${tokens.spacing.small};

    ${hasIcon &&
    css`
      margin-left: ${tokens.spacing.small};
    `}

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
