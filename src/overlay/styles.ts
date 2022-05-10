import { css } from '@emotion/react';

import { overlayEnter, overlayExit } from './keyframes';

import { tokens } from '../tokens';
import { hexToRgba } from '../helpers';

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
    background-color: ${hexToRgba(tokens.colors.navy, 0.7)};
    z-index: ${tokens.zIndex.overlay};
    touch-action: none;
    // Animation
    opacity: 0;
    animation: ${isVisible ? overlayEnter() : overlayExit()} 200ms ease-out
      forwards;
  `;
}
