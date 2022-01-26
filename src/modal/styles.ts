import { css } from '@emotion/react';

import { tokens } from '../tokens';
import { hexToRgba } from '../helpers';
import { overlayFadeIn, overlayFadeOut } from './keyframes';

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

export function bodyStyle() {
  return css`
    padding: ${tokens.spacing.large};
    flex-grow: 1;
  `;
}
