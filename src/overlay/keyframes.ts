import { keyframes } from '@emotion/react';

type OverlayFadeInOutOptions = {
  isVisible: boolean;
};

export function overlayFadeInOut({ isVisible }: OverlayFadeInOutOptions) {
  return keyframes`
    from {
      opacity: ${isVisible ? 0 : 1};
    }
    to {
      opacity: ${isVisible ? 1 : 0};
    }
  `;
}
