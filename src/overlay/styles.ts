import { css } from '@emotion/react';

import { tokens } from '../tokens';
import { hexToRgba } from '../helpers';
import { overlayEnter, overlayExit } from './keyframes';

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
    touch-action: none;
    // Animation
    opacity: 0;
    animation: ${isVisible ? overlayEnter() : overlayExit()} 200ms ease-out
      forwards;
  `;
}
