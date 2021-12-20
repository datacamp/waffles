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
    padding-bottom: ${tokens.spacing.large};
  `;
}

export function categoryLabelStyle() {
  return css`
    color: ${tokens.colors.white};
    padding-left: ${tokens.spacing.medium};
    padding-right: ${tokens.spacing.medium};
    padding-bottom: ${tokens.spacing.small};
    padding-top: ${tokens.spacing.large};
    user-select: none;
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

const linkBaseStyle = css`
  display: flex;
  align-items: center;
  padding-left: ${tokens.spacing.medium};
  padding-right: ${tokens.spacing.medium};
  height: ${tokens.sizing.medium};
  color: ${tokens.colors.white};
  font-family: ${tokens.fontFamilies.sansSerif};
  font-weight: ${tokens.fontWeights.regular};
  font-size: ${tokens.fontSizes.medium};
  line-height: ${tokens.lineHeights.tight};
  text-decoration: none;
  opacity: 0.8;
  outline: 0;
  width: 100%;
  transition: background-color 75ms ease-out, color 75ms ease-out,
    box-shadow 125ms ease-out;
  cursor: pointer;
  user-select: none;

  &:hover {
    opacity: 1;
    background-color: ${hexToRgba(tokens.colors.white, tokens.opacity.low)};

    span {
      border-left-color: ${hexToRgba(tokens.colors.white, tokens.opacity.high)};
    }
  }
`;

type LinkStyleOptions = {
  isActive: boolean;
  isFocusVisible: boolean;
};

export function linkStyle({ isActive, isFocusVisible }: LinkStyleOptions) {
  return css`
    ${linkBaseStyle}

    ${isFocusVisible &&
    css`
      box-shadow: inset 0 0 0 2px ${tokens.colors.blueDark};
    `}

    ${isActive &&
    css`
      opacity: 1;
      font-weight: ${tokens.fontWeights.bold};

      &:hover span {
        border-left-color: ${tokens.colors.white};
      }
    `}
  `;
}

const subLinkBaseStyle = css`
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 7px;
  padding-left: ${tokens.spacing.medium};
  border-left: ${tokens.borderWidth.medium} solid
    ${hexToRgba(tokens.colors.white, tokens.opacity.medium)};
  transition: border-color 75ms ease-out;
`;

type SubLinkStyleOptions = {
  isActive: boolean;
};

export function subLinkStyle({ isActive }: SubLinkStyleOptions) {
  return css`
    ${subLinkBaseStyle}

    ${isActive &&
    css`
      border-left-color: ${tokens.colors.white};
    `}
  `;
}

export function linkInnerContentStyle() {
  return css`
    margin-left: ${tokens.spacing.small};
  `;
}
