import { css } from '@emotion/react';

import { tokens } from '../tokens';
import { hexToRgba, mediaQuery } from '../helpers';
import { overlayFadeIn, overlayFadeOut, dialogAppear } from './keyframes';

export function dialogScrollWrapperStyle() {
  return css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: ${tokens.zIndex.modal};
    overflow-y: scroll;
  `;
}

export function dialogInnerWrapperStyle() {
  return css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${tokens.spacing.medium};
    width: 100%;
    min-height: 100%;
  `;
}

export function dialogStyle() {
  return css`
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 180px;
    min-width: 100%;
    max-width: 100px;
    background-color: ${tokens.colors.white};
    border-radius: ${tokens.borderRadius.medium};
    box-shadow: ${tokens.boxShadow.thick};
    // Animation
    opacity: 0;
    transform: scale(0.75);
    animation: ${dialogAppear} 200ms ease-out forwards;

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
