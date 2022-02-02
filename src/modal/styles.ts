import { css } from '@emotion/react';

import { tokens } from '../tokens';
import { hexToRgba, mediaQuery } from '../helpers';
import {
  dialogFadeIn,
  dialogFadeOut,
  overlayFadeIn,
  overlayFadeOut,
} from './keyframes';

export function dialogWrapperStyle() {
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

type DialogStyleOptions = {
  isVisible: boolean;
};

export function dialogStyle({ isVisible }: DialogStyleOptions) {
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
    animation: ${isVisible ? dialogFadeIn : dialogFadeOut} 200ms
      cubic-bezier(0.2, 0.8, 0.6, 1) forwards;

    ${mediaQuery.aboveSmall} {
      min-width: 400px;
    }
  `;
}

type OverlayStyleOptions = {
  isVisible: boolean;
};

export function overlayStyle({ isVisible }: OverlayStyleOptions) {
  return css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: ${hexToRgba(tokens.colors.navy, tokens.opacity.high)};
    z-index: ${tokens.zIndex.overlay};
    // Animation
    opacity: 0;
    animation: ${isVisible ? overlayFadeIn : overlayFadeOut} 200ms ease-out
      forwards;
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
    overflow-y: scroll;
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
  `;
}

export function footerStyle() {
  return css`
    padding: ${tokens.spacing.medium} ${tokens.spacing.large};
    border-top: ${tokens.borderWidth.thin} solid
      ${hexToRgba(tokens.colors.navy, 0.15)};
    display: flex;
    justify-content: flex-end;
  `;
}

export function buttonStyle() {
  return css`
    &:not(:last-child) {
      margin-right: ${tokens.spacing.small};
    }
  `;
}
