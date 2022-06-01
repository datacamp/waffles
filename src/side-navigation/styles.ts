import { css } from '@emotion/react';

import { tokens } from '../tokens';
import { hexToRgba, mediaQuery } from '../helpers';

import {
  sidebarEnter,
  sidebarExit,
  closeButtonEnter,
  closeButtonExit,
} from './keyframes';
import Item from './item';

// Various side nav Item properties based on viewport size
const sizeMap = {
  belowMediumBreakpoint: {
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
  aboveMediumBreakpoint: {
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

const SIDEBAR_MAX_WIDTH_BELOW_MEDIUM_BREAKPOINT = 356;
const SIDEBAR_WIDTH_ABOVE_MEDIUM_BREAKPOINT = 230;

// Regular sidebar (displayed above medium breakpoint)
export function sidebarStyle() {
  return css`
    width: ${SIDEBAR_WIDTH_ABOVE_MEDIUM_BREAKPOINT}px;
    min-width: ${SIDEBAR_WIDTH_ABOVE_MEDIUM_BREAKPOINT}px;
    min-height: 100%;
    background-color: ${tokens.colors.navy};
    display: flex;
    flex-direction: column;
  `;
}

type AnimatedSidebarStyleOptions = {
  isVisible: boolean;
};

// Mobile sidebar (displayed below medium breakpoint)

function baseAnimatedSidebarStyle({ isVisible }: AnimatedSidebarStyleOptions) {
  return css`
    position: fixed;
    width: calc(100vw - ${tokens.spacing.xxlarge});
    max-width: ${SIDEBAR_MAX_WIDTH_BELOW_MEDIUM_BREAKPOINT}px;
    top: 0;
    left: 0;
    // Animation
    transform: translateX(-${SIDEBAR_MAX_WIDTH_BELOW_MEDIUM_BREAKPOINT}px);
    animation: ${isVisible
        ? sidebarEnter({ offset: SIDEBAR_MAX_WIDTH_BELOW_MEDIUM_BREAKPOINT })
        : sidebarExit({ offset: SIDEBAR_MAX_WIDTH_BELOW_MEDIUM_BREAKPOINT })}
      200ms ease-out forwards;
  `;
}

export function animatedSidebarStyle({
  isVisible,
}: AnimatedSidebarStyleOptions) {
  return css`
    ${baseAnimatedSidebarStyle({ isVisible })}
    z-index: ${tokens.zIndex.modal};
    height: 100vh;
    background-color: ${tokens.colors.navy};
    border-right: ${tokens.borderWidth.thin} solid
      ${hexToRgba(tokens.colors.white, 0.2)};
    overflow: hidden;
  `;
}

export function animatedSidebarContentStyle({
  isVisible,
}: AnimatedSidebarStyleOptions) {
  return css`
    ${baseAnimatedSidebarStyle({ isVisible })}
    z-index: ${tokens.zIndex.modal + 10};
    display: flex;
    flex-direction: column;
    bottom: 0; // Position bottom of sidebar just above browser bar on iOS
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
      width: 0;
      height: 0;
    }
  `;
}

export function navStyle() {
  return css`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 100%;
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

    ${mediaQuery.aboveMedium} {
      font-size: ${tokens.fontSizes.xsmall};
    }
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

  ${mediaQuery.aboveMedium} {
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

    font-size: ${sizeMap.belowMediumBreakpoint[size].fontSize};
    min-height: ${sizeMap.belowMediumBreakpoint[size].sizing};
    padding-top: ${sizeMap.belowMediumBreakpoint[size].spacing};
    padding-bottom: ${sizeMap.belowMediumBreakpoint[size].spacing};

    ${mediaQuery.aboveMedium} {
      font-size: ${sizeMap.aboveMediumBreakpoint[size].fontSize};
      min-height: ${sizeMap.aboveMediumBreakpoint[size].sizing};
      padding-top: ${sizeMap.aboveMediumBreakpoint[size].spacing};
      padding-bottom: ${sizeMap.aboveMediumBreakpoint[size].spacing};
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
    margin-left: ${tokens.spacing.small};
  `;
}

type ButtonStyleOptions = {
  isVisible: boolean;
};

export function closeButtonStyle({ isVisible }: ButtonStyleOptions) {
  return css`
    position: fixed;
    bottom: ${tokens.spacing.medium};
    // Calculate button position next to sidebar depending on display size
    left: min(
      calc(100vw - ${tokens.spacing.xxlarge} + ${tokens.spacing.small}),
      calc(
        ${SIDEBAR_MAX_WIDTH_BELOW_MEDIUM_BREAKPOINT}px + ${tokens.spacing.small}
      )
    );
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
    border: ${tokens.borderWidth.thin} solid
      ${hexToRgba(tokens.colors.white, 0.2)};
    color: ${tokens.colors.white};
    cursor: pointer;
    // Animation
    opacity: 0;
    transform: translateX(-100px);
    animation: ${isVisible ? closeButtonEnter() : closeButtonExit()} 250ms
      ease-out forwards;
  `;
}
