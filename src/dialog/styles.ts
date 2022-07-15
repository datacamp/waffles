import { css } from '@emotion/react';

import { tokens } from '../tokens';
import { hexToRgba, mediaQuery } from '../helpers';

import { panelEnter, panelExit } from './keyframes';

// Center vertically and horizontally dialog panel
export function panelWrapperStyle() {
  return css`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: ${tokens.zIndex.modal};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${tokens.spacing.medium};
    overflow: hidden;
    pointer-events: none;
  `;
}

type PanelStyleOptions = {
  isVisible: boolean;
};

export function panelStyle({ isVisible }: PanelStyleOptions) {
  return css`
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 180px;
    max-height: 100%;
    min-width: 100%;
    max-width: 600px;
    background-color: ${tokens.colors.white};
    border-radius: ${tokens.borderRadius.medium};
    box-shadow: ${tokens.boxShadow.thick};
    outline: 0;
    overflow: hidden;
    pointer-events: all;
    // Animation
    opacity: 0;
    transform: translateY(12px);
    animation: ${isVisible ? panelEnter() : panelExit()} 200ms
      cubic-bezier(0.2, 0.8, 0.6, 1) forwards;

    ${mediaQuery.aboveSmall} {
      min-width: 400px;
    }
  `;
}

export function closeButtonStyle() {
  return css`
    position: absolute;
    top: ${tokens.spacing.small};
    right: ${tokens.spacing.small};
    z-index: ${tokens.zIndex.default};
    color: ${tokens.colors.navy};
  `;
}

type BodyStyleOptions = {
  showShadowTop: boolean;
  showShadowBottom: boolean;
};

// Show shadows at the top or bottom, indicating user can actually scroll a content
export function bodyStyle({
  showShadowTop,
  showShadowBottom,
}: BodyStyleOptions) {
  return css`
    padding-top: 0;
    padding-right: ${tokens.spacing.large};
    padding-bottom: ${tokens.spacing.small};
    padding-left: ${tokens.spacing.large};
    flex-grow: 1;
    overflow-x: hidden;
    overflow-y: auto;
    box-shadow: ${showShadowTop &&
      'inset 0 12px 12px -12px rgba(5, 25, 45, 0.3)'}${showShadowTop &&
      showShadowBottom &&
      ','}${showShadowBottom && 'inset 0 -12px 12px -12px rgba(5, 25, 45, 0.3)'};
  `;
}

export function headerStyle() {
  return css`
    padding-top: ${tokens.spacing.large};
    padding-right: 48px;
    padding-bottom: ${tokens.spacing.medium};
    padding-left: ${tokens.spacing.large};
    margin: 0;
    flex-shrink: 0;
  `;
}

export function footerStyle() {
  return css`
    padding: ${tokens.spacing.medium} ${tokens.spacing.large};
    border-top: ${tokens.borderWidth.thin} solid
      ${hexToRgba(tokens.colors.navy, 0.15)};
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    gap: ${tokens.spacing.small} 0;

    & div {
      display: flex;
      gap: ${tokens.spacing.small} 0;
    }
  `;
}

export function buttonStyle() {
  return css`
    flex-shrink: 1;

    &:not(:last-child) {
      margin-right: ${tokens.spacing.small};
    }
  `;
}
