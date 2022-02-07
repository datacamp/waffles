import { keyframes } from '@emotion/react';

type PanelFadeInOutOptions = {
  isVisible: boolean;
};

export function panelFadeInOut({ isVisible }: PanelFadeInOutOptions) {
  return keyframes`
    from {
      opacity: ${isVisible ? 0 : 1};
      transform: ${isVisible ? 'translateY(12px)' : 'translateX(0)'};
    }
    to {
      opacity: ${isVisible ? 1 : 0};
      transform: translateY(0);
    }
  `;
}
