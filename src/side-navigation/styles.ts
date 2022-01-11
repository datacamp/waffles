import { css } from '@emotion/react';

import { tokens } from '../tokens';
import { hexToRgba, mediaQuery } from '../helpers';
import Item from './item';
import {
  sidebarSlideIn,
  sidebarSlideOut,
  overlayFadeIn,
  overlayFadeOut,
  buttonSlideIn,
  buttonSlideOut,
} from './keyframes';

// Various side nav Item properties based on viewport size
const sizeMap = {
  belowSmallBreakpoint: {
    small: {
      sizing: tokens.sizing.medium,
      spacing: tokens.spacing.xsmall,
      fontSize: tokens.fontSizes.medium,
    },
    medium: {
      sizing: '42px',
      spacing: tokens.spacing.small,
      fontSize: tokens.fontSizes.large,
    },
  },
  aboveSmallBreakpoint: {
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
    width: 230px;
    min-width: 230px;
    height: 100%;
    background-color: ${tokens.colors.navy};
  `;
}

type AnimatedSidebarStyleOptions = {
  isVisible: boolean;
};

// Mobile sidebar (displayed below small breakpoint)
export function animatedSidebarStyle({
  isVisible,
}: AnimatedSidebarStyleOptions) {
  return css`
    background-color: ${tokens.colors.navy};
    position: fixed;
    width: 300px;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: ${tokens.zIndex.modal};
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
      width: 0;
      height: 0;
    }
    // Animation
    transform: translateX(-300px);
    animation: ${isVisible ? sidebarSlideIn : sidebarSlideOut} 200ms ease-out
      forwards;
  `;
}

type OverlayStyleOptions = {
  isVisible: boolean;
};

export function overlayStyle({ isVisible }: OverlayStyleOptions) {
  return css`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${hexToRgba(tokens.colors.navy, tokens.opacity.high)};
    z-index: ${tokens.zIndex.overlay};
    touch-action: none;
    // Animation
    opacity: 0;
    animation: ${isVisible ? overlayFadeIn : overlayFadeOut} 200ms ease-out
      forwards;
  `;
}

export function navStyle() {
  return css`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100%;
    padding-top: ${tokens.spacing.medium};
    padding-bottom: ${tokens.spacing.medium};
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
    font-family: ${tokens.fontFamilies.sansSerif};
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
  margin: 0;
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

  ${mediaQuery.small} {
    &:where(a, button):hover {
      opacity: 1;
      background-color: ${hexToRgba(tokens.colors.white, tokens.opacity.low)};
    }
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

    font-size: ${sizeMap.belowSmallBreakpoint[size].fontSize};
    min-height: ${sizeMap.belowSmallBreakpoint[size].sizing};
    padding-top: ${sizeMap.belowSmallBreakpoint[size].spacing};
    padding-bottom: ${sizeMap.belowSmallBreakpoint[size].spacing};

    ${mediaQuery.small} {
      font-size: ${sizeMap.aboveSmallBreakpoint[size].fontSize};
      min-height: ${sizeMap.aboveSmallBreakpoint[size].sizing};
      padding-top: ${sizeMap.aboveSmallBreakpoint[size].spacing};
      padding-bottom: ${sizeMap.aboveSmallBreakpoint[size].spacing};
    }

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

type ButtonStyleOptions = {
  isVisible: boolean;
};

export function closeButtonStyle({ isVisible }: ButtonStyleOptions) {
  return css`
    position: fixed;
    bottom: ${tokens.spacing.medium};
    left: 308px;
    z-index: ${tokens.zIndex.modal};
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${tokens.sizing.large};
    height: ${tokens.sizing.large};
    border: 0;
    outline: 0;
    border-radius: ${tokens.borderRadius.circle};
    box-shadow: ${tokens.boxShadow.thick};
    background-color: ${tokens.colors.navy};
    color: ${tokens.colors.white};
    cursor: pointer;
    // Animation
    opacity: 0;
    transform: translateX(-100px);
    animation: ${isVisible ? buttonSlideIn : buttonSlideOut} 250ms ease-out
      forwards;
  `;
}
